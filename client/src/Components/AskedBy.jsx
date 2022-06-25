import React from 'react'

function AskedBy(props) {
    return (
        <div className='d-flex justify-content-end'>
            <div className='rounded text-white bg-secondary w-25 p-1'>
                <p className='m-1'>{`${props.at.split('T')[0]} at   ${props.at.split('T')[1].split('.')[0]}`}</p>
                <p className='m-1'>{props.author}</p>
            </div>
        </div>
    )
}

export default AskedBy