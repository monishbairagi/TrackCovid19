import React from 'react'
import './style.css'
import { Link } from "react-router-dom";

export const Footer = (obj) => {
    return (
        <footer className='bg-dark text-light footer'>
            <p className='text-center' style={{padding: "5px"}}>
                Copyright &copy; {obj.crname} |<Link to='/about' style={{textDecoration: 'none'}}> About</Link>
            </p>
        </footer>
    )
}
