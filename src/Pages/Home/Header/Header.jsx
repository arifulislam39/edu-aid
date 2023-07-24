// import { useState } from "react";
import { useState } from "react";
import img from "../../../assets/banner.jpg";
const Header = () => {
    const [college, setCollege]=useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = () => {
      fetch(`https://eduaid-server.vercel.app/searchByCollegeName/${search}`)
        .then((res) => res.json())
        .then((data) =>setCollege(data));
        setSearch("");
    };

  return (
    <div>
      {/* <img className="w-full h-[700px]" src={img} alt="" /> */}

      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="hero bg-opacity-60"></div>
        <div className="hero-content text-center text-white ">
          <div className="max-w-auto">
            <h1 className="mb-5 text-7xl font-bold uppercase">Education Is About Academic Excellence</h1>
            <p className="mb-5 font-bold text-xl">
            Empower yourself with the knowledge and skills gained through Applying these Colleges.
            </p>
           

            {/* search */}
            <div className="join mt-10">
              <div>
                <div>
                  <input
                    className="input input-bordered join-item text-black"
                    placeholder="Search by College name"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="indicator">
                <button className="btn join-item" onClick={handleSearch}>Search</button>
              </div>
            </div>


{/* map */}
<div className="">
           {
            college.map(card=> <div className="card w-96 bg-base-100 shadow-xl " key={card.id}>
            <figure><img className="w-full h-60 hover:" src={card.college_image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{card.college_name}</h2>
              
              <p> Admission Date : {card.admission_date}</p>
              <p>Events : {card.events}</p>
              <p>Research History : {card.research_history}</p>
              <p>Sports : {card.sports_categories}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>)
           }
            
        </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
