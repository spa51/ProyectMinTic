import React from "react";
import ProductHandler from '../../components/ProductHandler';
import {getFirestore,doc,getDoc} from "firebase/firestore";
import { firebaseConfig } from "../../helpers/firebase.config";
import { initializeApp } from "@firebase/app";

const firestore = initializeApp(firebaseConfig);
const db = getFirestore(firestore);

const AdminProductos = () => {

    const addOrEdit = async (productData) =>{
        if(productData.cat === "tecnología"){
           /* n
            */
        }   
        else if(productData.cat === "hogar"){

        }
        else if(productData.cat === "salud-y-belleza"){
        
        }
        else if(productData.cat === "deportes"){

        }
    }

    return (
        <div>
            <ProductHandler addOrEdit={addOrEdit} />
        </div>
    )
}

export default AdminProductos;

