import PropTypes from 'prop-types'
import React from 'react'

export const TotalView = ({ total }) => {
  return (
    <div className='text-end'>
        <span className="badge bg-info">$ { total } MXN</span>
    </div>
  )
}

TotalView.propTypes = {
    total: PropTypes.number.isRequired
}
