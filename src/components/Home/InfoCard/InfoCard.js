import React from 'react';

const InfoCard = (props) => {
    const {title,icon,description,background}=props.info
    return (
        <div className="col-md-4">
            <div className="card text-white mb-2 py-2 px-1" style={{backgroundColor:background,border:'none'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-3" style={{fontSize:'40px'}}>
                            {icon}
                        </div>
                        <div class="card-body col-md-9">
                            <h6 class="card-title">{title}</h6>
                            <small class="card-text">{description}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default InfoCard;