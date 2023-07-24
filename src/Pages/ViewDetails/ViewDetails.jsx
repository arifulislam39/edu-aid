import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    college_image,
    college_name,
    admission_date,
    college_rating,
    total_research,
    admission_process,
    event_one_name,
    event_one_image,
    event_one_date,
    event_two_name,
    event_two_image,
    event_two_date,
    sports_one_name,
    sports_one_image,
    sports_two_name,
    sports_two_image,
    research_one_name,
    research_one_image,
    research_one_date,
    research_two_name,
    research_two_image,
    research_two_date,
  } = data || {};
  return (
    <div>
      <img className="w-full h-[500px]" src={college_image} alt="" />
      <div className="text-center my-10">
        <h2 className="text-5xl font-bold">{college_name}</h2>
      </div>
      <div className="bg-red-100 text-center grid grid-cols-2">
        <div>
          <p>Admission Date : {admission_date}</p>
          <p>Admission Process : {admission_process}</p>
        </div>
        <div>
          <p> Rating : {college_rating}</p>
          <p> Total Research : {total_research}</p>
        </div>
      </div>

      {/* evets */}
      <div>
        <h2>Events</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 m-20 gap-20">
          <div className="flex rounded-xl items-center gap-10 bg-slate-400">
            <img className="w-48 h-48" src={event_one_image} alt="" />
            <div>
              <h2 className="text-4xl">{event_one_name}</h2>
              <p>{event_one_date}</p>
            </div>
          </div>
          <div className="flex rounded-xl items-center gap-10 bg-slate-400">
            <img className="w-48 h-48" src={event_two_image} alt="" />
            <div>
              <h2 className="text-4xl">{event_two_name}</h2>
              <p>{event_two_date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* sports */}

      <div className="grid grid-cols-1 lg:grid-cols-2 m-20 gap-20">
        <div className="rounded-xl   bg-slate-400">
          <img className="w-full h-96" src={sports_one_image} alt="" />
          <div className="p-10">
            <h2 className="text-4xl">{sports_one_name}</h2>
            
          </div>
        </div>
        <div className="rounded-xl  bg-slate-400">
          <img className="w-full h-96" src={sports_two_image} alt="" />
          <div className="p-10">
            <h2 className="text-4xl">{sports_two_name}</h2>
         
          </div>
        </div>
      </div>

      {/* research */}
      <div>
        <h2>research</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 m-20 gap-20">
          <div className="flex rounded-xl items-center gap-10 bg-slate-400">
            <img className="w-48 h-48" src={research_one_image} alt="" />
            <div>
              <h2 className="text-4xl">{research_one_name}</h2>
              <p>{research_one_date}</p>
            </div>
          </div>
          <div className="flex rounded-xl items-center gap-10 bg-slate-400">
            <img className="w-48 h-48" src={research_two_image} alt="" />
            <div>
              <h2 className="text-4xl">{research_two_name}</h2>
              <p>{research_two_date}</p>
            </div>
          </div>
        </div>
      </div>





    </div>
  );
};

export default ViewDetails;
