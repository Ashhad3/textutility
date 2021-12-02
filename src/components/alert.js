import React from 'react'

export default function alert(props) {
    return (
        <div
        className="alert alert-light alert-dismissible fade show"
        role="alert"
        id="alert"
        style={{ visibility: "hidden" }}
      >
        <strong>Success!</strong> {props.feature} successfully.
    
      </div>
    )
}
