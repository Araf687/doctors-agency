import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import tooth1 from '../../../images/tooth1.png';
import tooth2 from '../../../images/tooth2.png';
import tooth3 from '../../../images/tooth3.png';

const serviceData=[
    {
        img:tooth1,
        title:"Fluoride Treatment",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officia dolores similique cum.",
    },
    {
        img:tooth2,
        title:"Cavity Filling",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officia dolores similique cum.",
    },
    {
        img:tooth3,
        title:"Teeth Whitening",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officia dolores similique cum.",
        
    }
]
const Services = () => {
    return (
        <section className="my-1">
            <div className="text-center">
                <h6 style={{color:'#0fba9e'}}>OUR SERVICES</h6><br />
                <h2>Services We Provide</h2>
            </div>
            <div className="container">
                <div className="row py-5 offset-md-1">
                    {serviceData.map(data=><ServiceCard serviceData={data}></ServiceCard>)}
                    <div className="col-md-6">

                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;