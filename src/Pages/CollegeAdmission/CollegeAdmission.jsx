import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CollegeAdmission = () => {
    const data = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
   
    console.log(data);
    const {
        college_image,
        college_name,
        college_rating,
        _id,

        // admission_date,
        
        // total_research,
        // admission_process,
        // event_one_name,
        // event_one_image,
        // event_one_date,
        // event_two_name,
        // event_two_image,
        // event_two_date,
        // sports_one_name,
        // sports_one_image,
        // sports_two_name,
        // sports_two_image,
        // research_one_name,
        // research_one_image,
        // research_one_date,
        // research_two_name,
        // research_two_image,
        // research_two_date,
        
      } = data || {};

      const onSubmit = (data) => {
        console.log(data);
        const saveData = {
            candidate_name: data.candidate_name,
            subject: data.subject,
            candidate_email:data.candidate_email,
            candidate_phone:data.candidate_phone,
            candidate_image: data.candidate_image,
            candidate_address: data.candidate_address,
            collegeID:_id,
            college_image:college_image,
            college_name,
            college_rating,
        };
        fetch("https://eduaid-server.vercel.app/college", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              // alert msg
              reset();
              Swal.fire({
                title: "Admission done successfully.",
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              });
            }
          });
      };







    return (
        <div className="max-w-7xl mx-auto my-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-6 text-4xl text-[#123821] font-bold uppercase">
          Candidate Information
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Candidate Name</span>
              </label>
              <input
                name="candidate_name"
                {...register("candidate_name")}
                type="text"
                defaultValue=""
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                name="subject"
                {...register("subject")}
                type="text"
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Candidate Email</span>
              </label>
              <input
                name="candidate_email"
                {...register("candidate_email")}
                defaultValue=""
                type="email"
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Candidate Phone Number</span>
              </label>
              <input
                name="candidate_phone"
                {...register("candidate_phone")}
                type="number"
                defaultValue=""
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Candidate Image</span>
              </label>
              <input
                name="candidate_image"
                {...register("candidate_image")}
                type="photo"
                defaultValue=""
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                name="candidate_address"
                {...register("candidate_address")}
                defaultValue=""
                type="text"
                className="input input-bordered border-[#123821] border-2"
              />
            </div>
          </div>
  
          <div className="form-control mt-6 md:ml-32">
            <input
              className="btn bg-[#123821] text-white hover:bg-[#A79132] transition duration-700 ease-in-out"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
};

export default CollegeAdmission;