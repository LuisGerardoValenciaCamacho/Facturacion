import React from 'react'

export const FormView = ({ onSubmit, product, price, quantity, onInputChange }) => {

    return (
        <form className='form row' onSubmit={ onSubmit }>
            <div className="col-lg-4 col-md-12 col-sm-12">
                <label className='form-label'>Nombre del producto:</label>
                <input type='text' name='product' id='product' placeholder='Nombre del producto' onChange={ onInputChange } className='form-control' value={ product }/>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
                <label className="form-label">Precio del producto</label>
                <input type='number' name="price" id='price' placeholder='Precio del producto' onChange={ onInputChange } className='form-control' value={ price }/>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
                <label className="form-label">Cantidad del producto</label>
                <input type='number' name="quantity" id='quantity' placeholder='Cantidad del producto' onChange={ onInputChange } className='form-control' value={ quantity }/>
            </div>
            <div className='d-flex justify-content-end mt-3'>
                <button type='submit' className='btn btn-success'>Agregar</button>
            </div>
        </form>
    )
}
