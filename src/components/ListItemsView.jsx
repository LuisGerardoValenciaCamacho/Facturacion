import React from 'react'
import { RowItemView } from './RowItemView'
import PropTypes from 'prop-types'

export const ListItemsView = ({ title, items, deleteItem }) => {
  return (
    <>
        <h4>{ title }</h4>
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(({ id, product, price, quantity }) => (
                        <RowItemView key = { id } id={ id } product={ product } price={ price } quantity={ quantity } deleteItem={ id => deleteItem(id) }/>
                    ))
                }
            </tbody>
        </table>
    </>
  )
}

ListItemsView.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}
