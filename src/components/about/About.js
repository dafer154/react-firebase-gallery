import React from "react";
import profile from '../../assets/images/DavidZ.jpg';
import './styles/About.css';

const About = () => {
    return (
        <div className="about__container">
            <h2 className="title">About</h2>

            <div className="about__img">
                <img className="about__container__img" src={profile} alt="" />
            </div>

            <div className="about__content">
                <h2>HI I'M DAVID FERNANDO ZULUAGA</h2>
                <p className="about__text">My name is David Fernando Zuluaga. I am 28 years old. Software Engineer with 2+ years in software development with knowledge in Front-End Technologies such as Angular, React, HTML5, CSS3, JQuery, JavaScript and Typescript, and in Backend technologies such as Python, Django rest framework and PostgreSQL, I also have experience in Database design and Service Oriented Architectures.</p>
            </div>
        </div>
    );
};

export default About;