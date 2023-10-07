
const Banner = () => {
    return (
        <div className="hero min-h-[80vh]" style={{backgroundImage: 'url(https://i.postimg.cc/SRh0CHGg/images.jpg)'}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl md:text-5xl font-bold">Health is Wealth</h1>
      <p className="mb-5 font-semibold">There is no alternatives of health.We have to take care of health.In this website,we have shown you different types of health changing tips.If we have to live longer,we must have to take care of our health.So,this website will help you.</p>
      <button className="btn mt-5 btn-primary">Get Started </button>
    </div>
  </div>
</div>
    );
};

export default Banner;