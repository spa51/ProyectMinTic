import React from 'react';
import { Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/auth.css'
const Login = () => {

    return (
        <div className="auth_form">
            <h3 className="auth__title">Login</h3>
            <form  >
                <input 
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                   
                                  
                />
                <input 
                    className="auth__input"
                    type="password"
                    placeholder="password"
                    name="password"
                    autoComplete="off"
                /> 
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Login    
                </button> 
                <hr/>
                <div className="auth__social-network">
                    <p>Login with social networks</p>
                </div>
                <div 
                    className="google-btn"
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
                <Link 
                    to="/auth/register"
                    className="link"
                    >
                        Create new account
                </Link>
                   
            </form>  
        </div> 
    );
};

export default Login;