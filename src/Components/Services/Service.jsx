import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    console.log(service);
    const {id,Title,Image,Description,Author,price} = service;
    return (
        <div className="card bg-base-200 shadow-xl">
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