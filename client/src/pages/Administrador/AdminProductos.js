import React, {useContext,useEffect, useState} from "react";
import ProductHandler from '../../components/ProductHandler';
import {getFirestore,doc,getDoc, setDoc, orderBy, deleteDoc, collection,getDocs,updateDoc} from "firebase/firestore";
import { firebaseConfig } from "../../helpers/firebase.config";
import { initializeApp } from "@firebase/app";
import { Col, Row, Toast } from 'react-bootstrap';
import ProductCardAdmin from '../../components/ProductCardAdmin';
import {toast} from 'react-toastify';



const firestore = initializeApp(firebaseConfig);
const db = getFirestore(firestore);

const AdminProductos = () => {
    var docs = [];
    
    const [portionProducts,setPortionProducts]=useState([]);
    const [currentId,setCurrentId] = useState([]);
    

    async function addDocument(productData){

        const dRef = doc(db, `${productData.cat}/${productData.id}`);
        const consulta = await getDoc(dRef, orderBy("id", "desc"));

        if(currentId.length === 0){
            if (consulta.exists()){
                toast("el id de este producto ya ha sido creado", {
                    type:'error',
                    position: 'top-center',
                    theme:'dark',
                    autoClose:3000
                }); 
                 
            }else{ 
                await setDoc(dRef,productData);
                toast(`El articulo ${productData.name} se ha creado con exito`, {
                    type:'success',
                    position: 'top-center',
                    theme:'dark',
                    autoClose:3000
                });      
            }  
            docs = [];   
            setPortionProducts(docs);
        }else{
            await updateDoc(doc(db, `${currentId.cat}/${currentId.id}`),{
                url:productData.url,
                name:productData.name,
                price: productData.price,
                description:productData.description
            });
            
            toast(`El articulo ${productData.name} con ID: ${currentId.id}  se ha editado correctamente`, {
                type:'success',
                position: 'top-center',
                theme:'dark',
                autoClose:3000
            });   
            currentId=[];
            // setCurrentId([]); 
            console.log(currentId);
        }
    }

    const eliminar = async (item) =>{
        if (window.confirm("¿Seguro que quieres eliminarlo?")){
            
            await deleteDoc(doc(db, `${item.cat}/${item.id}`));
            toast("Se ha eliminado correctamente", {
                type:'success',
                position: 'top-center',
                theme:'dark',
                autoClose:3000
            });  
            
            const querySnapshot = await getDocs(collection(db, `${item.cat}`));
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data()});
                console.log(doc.id, " => ", doc.data());
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
                    console.log(doc.id, " => ", doc.data());
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
            <ProductHandler {...{addDocument,actLinks, portionProducts, currentId}} />

            <div>
                <Row xs={5} md={5} className="g-4">
                {portionProducts.map(item => (
                    <Col  key={item.id} className ="card mb-1">
                        <ProductCardAdmin key={item.id} item={item}/>
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

export default AdminProductos;

