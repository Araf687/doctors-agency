import React from 'react';
import chair from '../../../images/chair.png';


const HeaderMain = () => {
    return (
        <main className="container">
            <div className="row d-flex align-items-center justify-content-center" style={{height:'500px'}}>
                <div className="col-md-6 py-5 px-5 offset-md-1">
                    <h1 style={{color:"background-color: #3A4256;"}}>Your Smile <br /> Starts Here</h1>
                    <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatibus doloremque in deserunt! Facere, natus.</p>
                    <button className="btn text-white mt-4" style={{backgroundColor:'#0fba9e'}}>GET APPOINTMENT</button>
                </div>
                <div className="col-md-5">
                    <img src={chair} className="img-fluid" alt="" />
                </div>
            </div>
            
        </main>
        
    );
};

export default HeaderMain;