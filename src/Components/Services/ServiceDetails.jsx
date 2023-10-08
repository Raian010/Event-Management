import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const {id} = useParams();
    const intId = parseInt(id);
    
    const services = useLoaderData();
    // console.log(services);

    const service = services.find(service => service.id === intId);
    console.log(service);
    const {Title,Image,Description,Author,price} = service;
    return (
        <div>
            <div className="mt-10">
            <div className="relative h-full w-full">
                <img className="w-full h-[80vh]" src={Image} alt="" />
                
            </div>
            <div className="mt-10 space-y-5">
            <h2 className="text-4xl font-bold">{Title} </h2>
            <p className="w-2/3 text-lg">{Description}.This is the one change we can do with this world and also we can keep ourselfs healthy all the time.Healthy does not mean you will look fatty.Its mean that you will look fit.So you can take this course and benefitted yourself</p>
            <p className="text-2xl font-semibold"> Organizer-{Author}</p>
           <button className="btn btn-primary">Price- {price}$</button>
            </div>
        </div>
        </div>
    );
};

export default ServiceDetails;