import React from 'react'
import dp from '../assets/dp.jpg'
import { Link } from "react-router-dom";

export const About = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark header">
                <form className="container-fluid justify-content-start">
                    <Link to="/" className="btn btn-success" type="button">Back</Link>
                    <h1 style={{color: 'white', marginTop: '10px', marginLeft: '20px'}}> ____ About ___________ </h1>
                </form>
            </nav>
            <div className="card main">
                <img src={dp} className="card-img-top image" />
                <div className="card-body">
                    <h1 className="text-center card-title">Monish Kr. Bairagi</h1>
                    <p className="card-text">
                        Hello,<br />
                        I am pursuing B.Tech in Computer Science Engineering from
                        Hooghly Engineering and Technology College. I am seeking for a
                        Software Developer position as an Intern. I am a quick learner 
                        and love challenges. I am looking for a chance to showcase my skills. <br/>
                        This is an API based ReactJS website. I have used the API of 
                        <a href="https://data.covid19india.org/" style={{textDecoration: 'none'}}> https://data.covid19india.org/</a> website 
                        to fetch recent possible data of Covid-19 India.
                    </p>
                    <div className="card-group">
                        <div className="card my-1">
                            <a href="https://www.linkedin.com/in/monish-kumar-bairagi-023b8518b/" className="btn btn-primary btn-sm mx-2">LinkedIn</a>
                        </div>
                        <div className="card my-1">
                            <a href="https://github.com/monishbairagi/" className="btn btn-primary btn-sm mx-2">GitHub</a>
                        </div>
                        <div className="card my-1">
                            <a href="mailto:monishbairagi@gmail.com" className="btn btn-primary btn-sm mx-2">Gmail</a>
                        </div>
                        <div className="card">
                            <a href="https://www.instagram.com/monish.bairagi/" className="btn btn-primary btn-sm mx-2">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
