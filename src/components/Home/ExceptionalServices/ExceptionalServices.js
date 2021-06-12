import React from 'react';
import exceptionalService from '../../../images/exceptionalService.png'

const ExceptionalServices = () => {
    return (
        <section className="mb-5">
            <div className='container my-5'>
                <div className='row p-2'>
                    <div className="col-md-5">
                        <img src={exceptionalService} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                        <div>
                            <div class="card-body pt-5">
                                <h1 class="card-title mb-5">Exceptional Dental <br /> Care,on Your Terms</h1>
                                <p class="card-text text-secondary mb-5" style={{lineHeight:"32px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo cumque natus harum delectus hic? Quod possimus veniam est molestias porro consequatur ipsum laudantium, dolorum libero reiciendis delectus quia pariatur mollitia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident minima quod harum sint! Voluptatem deserunt repudiandae vitae eligendi animi, aliquid ea reiciendis exercitationem dolorem voluptatibus, officia expedita eveniet, adipisci consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem sunt recusandae odit. Nemo ut similique quos harum minus cumque fuga accusamus quisquam sit vero. Quia quidem tempora quaerat quos suscipit.</p>
                                <a href="#" class="btn" style={{backgroundColor:'rgb(15, 186, 158)',color:'white'}}>Go somewhere</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div><br />
        </section>
    );
};

export default ExceptionalServices;