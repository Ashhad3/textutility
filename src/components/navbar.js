import React from 'react'
import PropTypes from 'prop-types'

export default function navbar(props) {
    return (
        <>
            <nav className={`navbar sticky-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}id="nav">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="#">{props.title}</a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      
     
    </ul>
      <div className="rounded bg-primary mx-1" style={{height:"25px",width:"25px", cursor:"pointer",border: "2px solid black"}} onClick={()=>(props.changeMode('primary'))}></div>
      <div className="rounded bg-secondary mx-1" style={{height:"25px",width:"25px", cursor:"pointer",border: "2px solid black"}} onClick={()=>(props.changeMode('secondary'))}></div>
      <div className="rounded bg-danger mx-1" style={{height:"25px",width:"25px", cursor:"pointer",border: "2px solid black"}} onClick={()=>(props.changeMode('danger'))}></div>
      <div className="rounded bg-dark mx-1" style={{height:"25px",width:"25px", cursor:"pointer",border: "2px solid black"}} onClick={()=>(props.changeMode('dark'))}></div>
      <div className="rounded bg-success mx-1" style={{height:"25px",width:"25px", cursor:"pointer",border: "2px solid black"}} onClick={()=>(props.changeMode('success'))}></div>
      <div className="rounded bg-warning mx-1" style={{height:"25px",width:"25px", cursor:"pointer",border: "2px solid black"}} onClick={()=>(props.changeMode('warning'  ))}></div>


  </div>
        </nav>
      

      {/* <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={props.changeMode} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
      </div> */}
        </>
    )
}

navbar.propTypes = {
    title: PropTypes.string.isRequired
  }
  
  navbar.defaultProps = {
  title: 'Set Title'
  }; 