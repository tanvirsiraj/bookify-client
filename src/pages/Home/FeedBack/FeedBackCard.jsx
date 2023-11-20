const FeedBackCard = ({ people }) => {
  const { img, StudentName, description } = people;
  return (
    <div className="md:mx-2  border-2  text-center rounded-md text-black dark:text-white">
      <div className="card-body text-center">
        <h2 className="text-lg">{StudentName}</h2>
        <span className="font-semibold ">Student</span>
        <p>{description}</p>
      </div>
      <div className="avatar mb-6">
        <div className="w-24 rounded-full">
          <img src={img} />
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
