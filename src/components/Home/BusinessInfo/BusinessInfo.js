import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import {AiOutlineClockCircle} from "react-icons/ai";
import {FiPhoneCall } from "react-icons/fi";
import {GoLocation } from "react-icons/go";

const infoData=[
    {
        title:'Opening Hours',
        description:'We are open in 7 days',
        icon:<AiOutlineClockCircle/>,
        background:'#0fba9e',
    },
    {
        title:'Visit Our Location',
        description:'Bahaddarhat, in front of Pukur Ghat',
        icon:<FiPhoneCall/>,
        background:'#3A4256',
    },
    {
        title:'Call us now',
        description:'+880 1614756856',
        icon:<GoLocation/>,
        background:'#0fba9e',
    }
]

const BusinessInfo = () => {
    return (
        <section className="container">
            <div className="row offset-md-1">
                {infoData.map(data=><InfoCard info={data}></InfoCard>)}
            </div>
        </section>
    );
};

export default BusinessInfo;