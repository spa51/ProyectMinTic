import React, {useState} from "react";

export default function ProductHandler(props) {

    const [values, setValues] = useState({
        cat:'',
        id:'',
        url:'',
        name:'',
        description:'',
        price:''
    });

    const handleInpuntChange = e =>{
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values);
    }

    return (
        <form className='card card-body mx-5 px-5' onSubmit={handleSubmit}>

            <div className='form-group input-group'>
                <div className="input-group-text bg-light">
                    <i className="material-icons">assignment</i>
                </div>
                <select className="form-select" name="cat" required aria-label="Default select example" onChange={handleInpuntChange}>
                    <option selected value="">Elija la categoría </option>
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
                <input type="text" className="form-control" placeholder="ID del producto" name="id" onChange={handleInpuntChange} />
            </div>

            <div className='form-group input-group'>
                <div className="input-group-text bg-light">
                    <i className="material-icons">image</i>
                </div>
                <input type="text" className="form-control" placeholder="URL de la imagen" name="url" onChange={handleInpuntChange} />
            </div>

            <div className='form-group input-group'>
                <div className="input-group-text bg-light">
                    <i className="material-icons">edit</i>
                </div>
                <input type="text" className="form-control" placeholder="Nombre del producto" name="name" onChange={handleInpuntChange} />
            </div>

            <div className='form-group input-group'>
                <div className="input-group-text bg-light">
                    <i className="material-icons">attach_money</i>
                </div>
                <input type="text" className="form-control" placeholder="Precio del producto" name="price" onChange={handleInpuntChange} />
            </div>

            <div className='form-group input-group'>
                <textarea rows="3" className="form-control" placeholder="Breve descripción" name="description" onChange={handleInpuntChange} />
            </div>

            <button className="btn btn-success m-5 btn-sm">
                Cargar producto
            </button>

        </form>
    )
}
