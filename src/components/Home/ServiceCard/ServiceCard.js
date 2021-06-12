import React from 'react';

const ServiceCard = (props) => {
    const {img,title,description}=props.serviceData;
    return (
        <div className="col-md-4 text-center">
            <div>
                <div class="card-body w-75">
                    <img src={img} alt="" className="mb-4" style={{height:"60px"}}/>
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text text-secondary">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;