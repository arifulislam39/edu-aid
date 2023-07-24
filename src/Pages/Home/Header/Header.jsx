// import { useState } from "react";
import { useState } from "react";
import img from "../../../assets/banner.jpg";
const Header = () => {
    const [college, setCollege]=useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = () => {
      fetch(`http://localhost:5000/searchByCollegeName/${search}`)
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
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>

            {/* search */}
            <div className="join">
              <div>
                <div>
                  <input
                    className="input input-bordered join-item text-black"
                    placeholder="Search"
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
