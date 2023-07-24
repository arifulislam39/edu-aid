import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {

    const [cards, setCards]= useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:5000/colleges")
        .then((response) => {
          // Handle the response data
          console.log(response.data);
          setCards(response.data);
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });
    }, []);


    return (
        <div className="my-24">
           {
            cards.map(clg=> <div key={clg._id} className="text-center m-6 bg-white">  <Link to={`/collegeAdmission/${clg._id}`}>
            <button  className="btn w-96">{clg.college_name}
              
            </button>
          </Link></div>
                
            )
           }
            
        </div>
    );
};

export default Admission;