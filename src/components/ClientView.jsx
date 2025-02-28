import PropTypes from 'prop-types';
import React from 'react'

export const ClientView = ({ title, client }) => {
    const { name: nameClient, lastname, address: { country, state, city, street, number } } = client;
    return (
        <>
            <h3>{ title }</h3>
            <ul className='list-group'>
                <li className='list-group-item active'>{ nameClient } { lastname }</li>
                <li className='list-group-item'>{ country } / { state }</li>
                <li className='list-group-item'>{ city }, { street }, { number }</li>
            </ul>
        </>
    )
}

ClientView.propTypes = {
    title: PropTypes.string.isRequired,
    client: PropTypes.object.isRequired
}
