import React from 'react';
import './Appointment.css';
import appointment1 from '../../../images/appointment1.png'


const Appointment = () => {
    return (
        <section className="appointment-container mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={appointment1} alt="" className="img"/>
                    </div>
                    <div className="col-md-7 text-white py-5 container-description">
                            <h5>Appointment</h5><br />
                            <h2>Make An Appointment <br /> Today</h2><br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cum amet commodi optio, suscipit perferendis!</p><br />
                            <button className="btn">
                                GET APPOINTMENT
                            </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;