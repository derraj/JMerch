import React from 'react'

function Rating({ value, text, color }) {
  return (
    <div className='rating'>
      {Array(5).fill(1).map((x, idx) => 
        <span key={idx}>
          <i style={{ color }} className={
            value >= idx+1
              ? 'fas fa-star'
              : value >= idx+0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }>

          </i>
        </span>

      )}
      <span>{text && text}</span>

    </div>
  )
}

export default Rating