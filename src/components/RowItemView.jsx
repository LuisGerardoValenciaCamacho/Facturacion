import PropTypes from 'prop-types'
import React from 'react'

export const RowItemView = ({ id, product, price, quantity, deleteItem }) => {
  return (
    <tr>
        <td>{ product }</td>
        <td>{ price }</td>
        <td>{ quantity }</td>
        <td><button className='btn btn-danger' onClick={ () => deleteItem(id) }>Eliminar</button></td>
    </tr>
  )
}

RowItemView.propTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
}