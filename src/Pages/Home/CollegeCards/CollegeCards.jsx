import axios from "axios";
import { useEffect, useState } from "react";

const CollegeCards = () => {
    const [cards, setCards]= useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/college")
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
        <div className="p-10 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
           {
            cards.map(card=> <div className="card w-96 bg-base-100 shadow-xl " key={card.id}>
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
    );
};

export default CollegeCards;