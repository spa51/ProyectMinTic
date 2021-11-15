import React, {useState, useEffect} from "react";
import {getFirestore,doc,getDoc} from "firebase/firestore";
import { firebaseConfig } from "../helpers/firebase.config";
import { initializeApp } from "@firebase/app";


const firestore = initializeApp(firebaseConfig);
const db = getFirestore(firestore);

export default function SalesHandler(props) {
    
    

    const valoresIniciales ={
        cat:'Sistema Ventas',
        idVenta:'',
        name:'',
        cc:'',
        description:''
    }
    
    const [values, setValues] = useState(valoresIniciales);

    
    const handleInpuntChange = e =>{
        const {name, value} = e.target;
        setValues({...values, [name]: value})  
        
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addDocument(values);
        setValues({...valoresIniciales})   
          
    }

    const obternerProductoById = async (idVenta, cat) =>{
        console.log(idVenta,cat);
        const pId = await getDoc(doc(db, `${cat}/${idVenta}`));
        setValues({... pId.data()});
        props.actLinks(values.cat);  
    }
    
    useEffect(()=>{
        console.log(props.currentId);
        if(props.currentId.length === 0){
            setValues({... valoresIniciales});
        }else{
           obternerProductoById(props.currentId.idVenta, props.currentId.cat); 
        }
        props.actLinks(values.cat);  
    },[props.currentId]); 
 
    return (
        <form className='card card-body mx-5 px-5' onSubmit={handleSubmit}>

            <div className='form-group input-group'>
                <div className="input-group-text bg-light">
                    <i className="material-icons">vpn_key</i>
                </div>
                <input 
                    type="text"
                    className="form-control" 
                    placeholder="ID de la venta" 
                    name="idVenta" 
                    onChange={handleInpuntChange} 
                    value={values.idVenta}
                />
            </div>

            <div className='form-group input-group'>
                <div className="input-group-text bg-light">
                    <i className="material-icons">edit</i>
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nombre del cliente" 
                    name="name" 
                    onChange={handleInpuntChange}
                    value={values.name}
                    />
            </div>

            <div className='form-group input-group'>
                <div className="input-group-text bg-light">
                    <i className="material-icons">attach_money</i>
                </div>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Cédula del cliente" 
                    name="cc" 
                    onChange={handleInpuntChange}
                    value={values.cc}
                />
            </div>

            <div className='form-group input-group'>
                <textarea 
                    rows="1"
                    className="form-control" 
                    placeholder="Breve descripción de la venta" 
                    name="description" 
                    onChange={handleInpuntChange} 
                    value={values.description}
                />
            </div>

            <button 
            className="btn btn-success m-5 btn-sm" 
            disabled = {
                values.cat === "",      
                values.idVenta === "",
                values.name === "",
                values.cc === "",
                values.description === ""
                } 
            >
                {props.currentId.length === 0 ? "Cargar producto":"Guardar cambios"}
                
            </button>

        </form>
    )
}
