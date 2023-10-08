import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Service = ({service}) => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
     offset: 100,   
      easing: 'ease-in-out', 
      delay: 100,     
    });
  }, []); 
    // console.log(service);
    const {id,Title,Image,Description,Author,price} = service;
    return (
        <div className="card bg-base-200 shadow-xl" data-aos="fade-up">
  <figure><img className='h-[278px]' src={Image} /></figure>
  <div className="card-body space-y-1">
    <h2 className="card-title text-2xl font-bold">{Title} </h2>
    <p>{Description.slice(0,225)} </p>
    <p className='text-xl font-semibold'>Organizer- {Author} </p>
    <p className='text-lg font-semibold'>Price- {price}$ </p>
    <div className="card-actions justify-end">
      <Link to={`/service/${id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

Service.propTypes= {
    service: PropTypes.object.isRequired
}

export default Service;