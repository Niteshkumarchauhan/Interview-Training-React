import React from 'react'

export default function Comp(props) {
    return (
        <div className='container text-center'>
            <button onClick={props.changeData}>Fetch Data</button>
            <br />
            {props.loading && <div className="spinner-border text-primary mt-5 mb-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
        </div>
    )
}
