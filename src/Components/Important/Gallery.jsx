const Gallery = () => {
  return (
    <div>
      <h2 className="text-2xl w-2/3 font-semibold mb-10 text-center mx-auto">
        For different seminers we go to different countries.If you want to go and want
        to learn a lots of thing,you can confirm now.
        This year we will go to four country.You can choose as you want and learn a lot of things.
      </h2>
      <div className="grid col-span-3 grid-cols-1 md:grid-cols-2 gap-10">
        <div className="card card-compact bg-base-200 shadow-xl">
          <figure>
            <img className="h-[408px]"
              src="https://i.postimg.cc/mDYgMs01/male-healthcare-worker-giving-presentation-to-group-of-people-in-board-room.jpg
              " />
          </figure>
          <div className="card-body space-y-1">
            <h2 className="card-title text-2xl font-bold">USA Conference</h2>
            <p className="text-lg font-semibold">We are going USA in October,16.We will hire the best doctors out there and also ensure that they advice us the best tips for different deseases.There are lots of us who dies because of lack treatment and also sometimes we did not understand the fact that we have desease as a result we did not treat ourself well and as a result the condition became worst.So,here we will talk about different deseases and what to do primarily after that and also the food habits for recovering well.</p>
            <p className="text-xl font-bold">Price: 1100$</p>
            <div className="card-actions">
              <button className="btn btn-primary">Confirm</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-200 shadow-xl">
          <figure>
            <img
              src="https://i.postimg.cc/3rZwx3XP/hospital-management-meets-with-healthcare-professionals.jpg" />
          </figure>
          <div className="card-body space-y-1">
            <h2 className="card-title text-2xl font-bold">JAPAN Conference</h2>
            <p className="text-lg font-semibold">We are going Japan in October,26.We will hire the best doctors out there and also ensure that they advice us the best tips for different deseases.There are lots of us who dies because of lack treatment and also sometimes we did not understand the fact that we have desease as a result we did not treat ourself well and as a result the condition became worst.So,here we will talk about different deseases and what to do primarily after that and also the food habits for recovering well.</p>
            <p className="text-xl font-bold">Price: 800$</p>
            <div className="card-actions">
              <button className="btn btn-primary">Confirm</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-200 shadow-xl">
          <figure>
            <img
              src="https://i.postimg.cc/cJ7pBLLW/brainstorming-for-the-best-possible-diagnosis.jpg" />
          </figure>
          <div className="card-body space-y-1">
            <h2 className="card-title text-2xl font-bold">INDIA Conference</h2>
            <p className="text-lg font-semibold">We are going India in November,16.We will hire the best doctors out there and also ensure that they advice us the best tips for different deseases.There are lots of us who dies because of lack treatment and also sometimes we did not understand the fact that we have desease as a result we did not treat ourself well and as a result the condition became worst.So,here we will talk about different deseases and what to do primarily after that and also the food habits for recovering well.</p>
            <p className="text-xl font-bold">Price: 500$</p>
            <div className="card-actions">
              <button className="btn btn-primary">Confirm</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-200 shadow-xl">
          <figure>
            <img className="h-[340px] w-full"
              src="https://i.postimg.cc/DZBRRpGY/hospital-administrator-conducts-staff-meeting.jpg" />
          </figure>
          <div className="card-body space-y-1">
            <h2 className="card-title text-2xl font-bold">CHINA Conference</h2>
            <p className="text-lg font-semibold">We are going China in November,30.We will hire the best doctors out there and also ensure that they advice us the best tips for different deseases.There are lots of us who dies because of lack treatment and also sometimes we did not understand the fact that we have desease as a result we did not treat ourself well and as a result the condition became worst.So,here we will talk about different deseases and what to do primarily after that and also the food habits for recovering well.</p>
            <p className="text-xl font-bold">Price: 1100$</p>
            <div className="card-actions">
              <button className="btn btn-primary">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
