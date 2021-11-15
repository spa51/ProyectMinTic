import React, {useEffect, useState} from "react";
import SalesHandler from '../../../components/SalesHandler';
import {getFirestore,doc,getDoc, setDoc, orderBy, deleteDoc, collection,getDocs,updateDoc} from "firebase/firestore";
import { firebaseConfig } from "../../../helpers/firebase.config";
import { initializeApp } from "@firebase/app";
import { Col, Row, Toast } from 'react-bootstrap';
import SalesCardAdmin from '../../../components/SalesCardAdmin';
import {toast} from 'react-toastify';



const firestore = initializeApp(firebaseConfig);
const db = getFirestore(firestore);

const AdminVentas = () => {
    var docs = [];
    
    const [portionProducts,setPortionProducts]=useState([]);
    const [currentId,setCurrentId] = useState([]);
    

    async function addDocument(productData){

        const dRef = doc(db, `${productData.cat}/${productData.idVenta}`);
        const consulta = await getDoc(dRef, orderBy("id", "desc"));

        if(currentId.length === 0){
            if (consulta.exists()){
                toast("el ID para esta venta ya ha sido creado", {
                    type:'error',
                    position: 'top-center',
                    theme:'dark',
                    autoClose:3000
                }); 
                 
            }else{ 
                await setDoc(dRef,productData);
                toast(`El registro de venta para ${productData.name} se ha creado con exito`, {
                    type:'success',
                    position: 'top-center',
                    theme:'dark',
                    autoClose:3000
                });      
            }  
            
            actLinks(productData.cat);  
        }else{
            await updateDoc(doc(db, `${currentId.cat}/${currentId.idVenta}`),{
                name:productData.name,
                cc: productData.cc,
                description:productData.description
            });
            
            toast(`La venta con ID: ${currentId.idVenta}  se ha editado correctamente`, {
                type:'success',
                position: 'top-center',
                theme:'dark',
                autoClose:3000
            });   
            
            setCurrentId([]); 
            console.log(currentId);
        }
    }

    const eliminar = async (item) =>{
        if (window.confirm("¿Seguro que quieres eliminarlo?")){
            
            await deleteDoc(doc(db, `${item.cat}/${item.idVenta}`));
            toast("Se ha eliminado correctamente", {
                type:'success',
                position: 'top-center',
                theme:'dark',
                autoClose:3000
            });  
            
            const querySnapshot = await getDocs(collection(db, `${item.cat}`));
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data()});
                console.log(doc.idVenta, " => ", doc.data());
            });
            setPortionProducts(docs)
        }
    }

    async function actLinks(catValue){
        const querySnapshot = await getDocs(collection(db, `${catValue}`));
        console.log(querySnapshot);
        if(catValue!==undefined){
            if (querySnapshot.size > 0){
                querySnapshot.forEach((doc) => {
                    docs.push({...doc.data()});
                    console.log(doc.idVenta, " => ", doc.data());
                });
                setPortionProducts(docs)
            }else{ 
                docs = []; 
                setPortionProducts(docs);
                toast(`La categoria ${catValue} no tiene articulos`, {
                    type:'info',
                    position: 'top-center',
                    theme:'dark',
                    autoClose:3000
                }); 
                     
            }
        }   
    }

    useEffect(()=>{
        actLinks();
    },[]);

    

    return (
        <div>
            <SalesHandler {...{addDocument,actLinks, portionProducts, currentId}} />

            <div>
                <Row xs={2} m={5} className="g-4">
                {portionProducts.map(item => (
                    <Col  key={item.idVenta} className ="card mb-1">
                        <SalesCardAdmin key={item.idVenta} item={item}/>
                        <div className="btn-group mb-2" role="group" aria-label="Basic example">
                            <button type= "button" className="btn btn-danger" onClick={() => eliminar(item)} >Eliminar</button>
                            <button type= "button" className="btn btn-warning" onClick={()=>setCurrentId(item)} >Editar</button>
                        </div>
                    </Col>
                ))}
                </Row>
               
            </div>  
      
        </div>

    )
}

export default AdminVentas;

