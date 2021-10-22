import React, { useState } from 'react';
import { getAuth,createUserWithEmailAndPassword } from '@firebase/auth';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import Spinner from 'react-bootstrap/Spinner'
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../helpers/firebase.config';
import Swal from 'sweetalert2'
import '../styles/spinner.css'
import '../styles/auth.css'
const inistialState={
    error:null,
    loading:false,
}

const Register = () => {

    const [registerStatus,setRegisterStatus]=useState(inistialState);
    const [formValue,handleInputChange,reset]=useForm();
   

    const registerUser= async (e)=>{
        e.preventDefault();
        if(formValue.password!==formValue.password2||formValue.email===""||formValue.name==="") return
        const auth=getAuth();
        setRegisterStatus({
            ...registerStatus,
            loading:true
        })
        await createUserWithEmailAndPassword(auth,formValue.email,formValue.password)
        .then(userCredential=>{
            setRegisterStatus({
                ...registerStatus,
                loading:false,
                error:null
            });
            Swal.fire({
                position: 'center',
                icon: 'Éxito',
                title: 'Se ha registrado correctamente',
                showConfirmButton: false,
                timer: 1500
              });
            reset();
        })
        .catch(error => {

            setRegisterStatus({
                ...registerStatus,
                error:error.message,
                loading:false,
            });

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salió mal!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
         });
    }

    if (registerStatus.loading){
        return(
            <div className="spinner_container">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }
    
    return (
        <div className="auth_form">
        <h3 className="auth__title">Register</h3>
        <div>

            { registerStatus.error && 
                <div className="auth__alert-error">
                    {registerStatus.error}
                </div> 
            }
            
            <input 
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={handleInputChange}
                    value={formValue.name||""}
                />
                <input 
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleInputChange}
                    value={formValue.email||""}
                />
                <input 
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={formValue.password||""}
                /> 
                <input 
                    className="auth__input"
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={formValue.password2||""}
                /> 
                
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                    onClick={registerUser}
                >
                    Register    
                </button> 
                
                <Link 
                    to="/user/login"
                    className="link"
                    >
                        Already Registered?
                </Link>
               
        </div>  
    </div> 
    );
};

export default Register;