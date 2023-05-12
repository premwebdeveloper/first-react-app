import React from 'react'

function ShowAlert(props) {
    return (
        props.alert &&  <div className={`alert alert-${props.alert.type}`} role="alert">
                {props.alert.message}
            </div>
    )
}

export default ShowAlert