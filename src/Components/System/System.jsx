import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const System = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
     offset: 100,   
      easing: 'ease-in-out', 
      delay: 100,     
    });
  }, []); 
    return (
        <div className="mt-20">
            <div className="flex justify-center">
            <div className="rounded-xl flex items-center justify-center bg-base-200 py-3 w-[400px]">
            <h2 className="text-4xl font-bold text-center" data-aos="fade-left">Our <span className="text-blue-600">System</span></h2>
            </div>
            </div>
            <div className="hero mt-10 mb-20" data-aos="fade-up">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.postimg.cc/vHxN355z/health-fitness-cartoon-24640-25707.jpg" className="lg:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">This is how our system works</h1>
      <p className="py-6 text-2xl">We are providing our clients since 2001 and we are confident about our system.You can get to know about our system by clicking Our system button below</p>
      <Link to="/system"><button className="btn btn-primary">Our System</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default System;