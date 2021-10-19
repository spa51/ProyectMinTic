const { useState } = require("react")

const initialState={
    email:'',
    password:'',
}
export const useForm=(value=initialState)=>{
    const [state,setState]=useState(value);
    const reset=()=>{
        setState(initialState);
    }
    const handleInputChange=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        });
    }

    return [state,handleInputChange,reset]    
}