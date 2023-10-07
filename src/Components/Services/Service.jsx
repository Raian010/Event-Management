import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    console.log(service);
    const {id,Title,Image,Description,Author,price} = service;
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img className='h-[278px]' src={Image} /></figure>
  <div className="card-body p-5 h-[280px]">
    <h2 className="card-title text-2xl font-bold">{Title} </h2>
    <p>{Description} </p>
    <p className='text-xl font-semibold'>{Author} </p>
    <p className='text-lg'>Price- {price}$ </p>
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