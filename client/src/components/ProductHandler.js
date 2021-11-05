import React, {useState, useEffect} from "react";
import {toast} from 'react-toastify';
import {getFirestore,doc,getDoc,setDoc, addDoc, deleteDoc, collection,getDocs,onSnapshot} from "firebase/firestore";
import { firebaseConfig } from "../helpers/firebase.config";
import { initializeApp } from "@firebase/app";

var catActual = "none";
const firestore = initializeApp(firebaseConfig);
const db = getFirestore(firestore);
export default function ProductHandler(props) {

    const valoresIniciales ={
        cat:'none',
        id:'',
        url:'',
        name:'',
        price:'',
        description:''
    }
    
    const [values, setValues] = useState(valoresIniciales);

    
    const handleInpuntChange = e =>{
        
        const {name, value} = e.target;
        setValues({...values, [name]: value})
        var catCambio = document.getElementById('categoria').value;
        console.log(catActual,catCambio);
        if(catCambio  !== "none" && catCambio  !== "undefined" && catCambio  !== catActual){
            catActual = catCambio;
            catCambio = "none";
            props.actLinks(catActual);

            
        }else{
            catActual ="none";
            
        }

    }

    const handleSubmit = e => {
        e.preventDefault();
        
        if(catActual ==="none" || catActual  === undefined){
            toast("Elija una categoria", {
                type:'info',
                position: 'top-center',
                theme:'dark',
                autoClose:3000
            }); 
        }else{
            props.addDocument(values);
            setValues({...valoresIniciales})
            document.getElementById('categoria').selectedIndex=0;
            catActual ="none";
        }
    }

    const obternerProductoById = async (id, cat) =>{
        console.log(id,cat);
        const pId = await getDoc(doc(db, `${cat}/${id}`));
        setValues({... pId.data()});
    }

    useEffect(()=>{
        console.log(props.currentId);
        if(props.currentId.length === 0){
            setValues({... valoresIniciales});
        }else{
           obternerProductoById(props.currentId.id, props.currentId.cat); 
        }
    },[props.currentId]); 
 
    return (
        <form className='card card-body mx-5 px-5' onSubmit={handleSubmit}>

            <div className='form-group input-group'>
                <div className="input-group-text bg-light">
                    <i className="material-icons">assignment</i>
                </div>
                <select className="form-select" 
                name="cat" 
                id ="categoria" 
                required
                aria-label="Default select example"  
                onChange={handleInpuntChange}>
                    <option value="none">Elija la categoría </option>
                    <option value="tecnología">Tecnología</option>
                    <option value="hogar">Hogar</option>
                    <option value="salud-y-belleza">Salud y belleza</option>
                    <option value="deportes">Deportes</option>
                </select>

            </div>


            <div className='form-group input-group'>
                <div className="input-group-text bg-light">
                    <i className="material-icons">vpn_key</i>
                </div>
                <input 
                    type="text"
                    className="form-control" 
                    placeholder="ID del producto" 
                    name="id" 
                    onChange={handleInpuntChange} 
                    value={values.id}
                />
            </div>

            <div className='form-group input-group'>
                <div className="input-group-text bg-light">
                    <i className="material-icons">image</i>
                </div>
                <input
                    type="text" 
                    className="form-control" 
                    placeholder="URL de la imagen" 
                    name="url" 
                    onChange={handleInpuntChange} 
                    value={values.url}
                />
            </div>

            <div className='form-group input-group'>
                <div className="input-group-text bg-light">
                    <i className="material-icons">edit</i>
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nombre del producto" 
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
                    placeholder="Precio del producto" 
                    name="price" 
                    onChange={handleInpuntChange}
                    value={values.price}
                />
            </div>

            <div className='form-group input-group'>
                <textarea 
                    rows="1"
                    className="form-control" 
                    placeholder="Breve descripción" 
                    name="description" 
                    onChange={handleInpuntChange} 
                    value={values.description}
                />
            </div>

            <button 
            className="btn btn-success m-5 btn-sm" 
            disabled = {
                values.cat === "",      
                values.id === "",
                values.url === "",
                values.name === "",
                values.price === "",
                values.description === ""
                } 
            >
                {props.currentId.length === 0 ? "Cargar producto":"Guardar cambios"}
                
            </button>

        </form>
    )
}
