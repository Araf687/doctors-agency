import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import ExceptionalServices from '../ExceptionalServices/ExceptionalServices'
import Appointment from '../Appointment/Appointment';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ExceptionalServices></ExceptionalServices>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;