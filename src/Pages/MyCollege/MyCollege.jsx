import axios from "axios";
import { useEffect, useState } from "react";

const MyCollege = () => {
    const [college, setCollege]=useState([]);
    console.log(college);

    useEffect(() => {
        axios
          .get("http://localhost:5000/myCollege")
          .then((response) => {
            // Handle the response data
            console.log(response.data);
            setCollege(response.data);
          })
          .catch((error) => {
            // Handle any errors
            console.error(error);
          });
      }, []);
    return (
        <div className="my-20">
            {college.map(clg => <div key={clg._id}>
                <h2>{clg.college_name}</h2>
            </div>)}
        </div>
    );
};

export default MyCollege;