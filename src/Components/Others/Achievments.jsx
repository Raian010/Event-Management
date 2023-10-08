import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Achievments = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
     offset: 100,   
      easing: 'ease-in-out', 
      delay: 100,     
    });
  }, []);
  return (
    <div className="mt-20" data-aos="slide-up">
      <h2 className="text-4xl mb-10 font-bold text-center" data-aos="fade-right">Our <span className="text-blue-600">Achievments</span></h2>
      <div className="mt-5 lg:flex lg:justify-center" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
          <div className="card lg:w-80 bg-base-200 mb-2 shadow-xl">
            <figure className="px-5 pt-10">
              <img
                src="https://i.postimg.cc/Tw9LRfQ9/images-1.jpg"
                alt="Shoes"
                className="rounded-xl bg-blue-400"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl font-semibold">Total Books</h2>
              <p className="text-5xl mt-2 font-bold">20+</p>
            </div>
          </div>
          <div className="card lg:w-80 bg-base-200 mb-2 shadow-xl">
            <figure className="px-5 pt-10">
              <img
                src="https://i.postimg.cc/WpScLpkF/360-F-65772719-A1-UV5k-Li5n-CEWI0-BNLLi-Fa-BPEk-Ubv5-Fv.jpg"
                alt="Shoes"
                className="rounded-xl w-[163px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl font-semibold">Total Clients</h2>
              <p className="text-5xl mt-2 font-bold">50K+</p>
            </div>
          </div>
          <div className="card lg:w-80 bg-base-200 mb-2 shadow-xl">
            <figure className="px-5 pt-10">
              <img
                src="https://i.postimg.cc/Kvdzh1xb/images-3.jpg"
                alt="Shoes"
                className="rounded-xl w-[163px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl font-semibold">Global Position</h2>
              <p className="text-5xl mt-2 font-bold">180th</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievments;
