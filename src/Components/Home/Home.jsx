import { useLoaderData } from "react-router-dom";
import Achievments from "../Others/Achievments";
import Banner from "./Banner";
import Service from "../Services/Service";
import Footer from "../Footer/Footer";
import System from "../System/System";


const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <Banner></Banner>
            <System></System>
            <div className="mt-10">
               <h2 className="text-4xl font-bold text-center">Our <span className="text-blue-600">Services</span></h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
            </div>
            </div>
            
            <Achievments></Achievments>
            <Footer></Footer>
        </div>
    );
};

export default Home;