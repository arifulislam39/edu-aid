import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import GoogleLogin from "./GoogleLogin";

const Registration = () => {
  const { createUser, userProfile, userProfileUpdate } =
    useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        const createdUser = result.user;

        userProfile(data.name, data.photo).then(() => {
          userProfileUpdate(data.name, data.photo);

          const saveUser = {
            name: data.name,
            email: data.email,
            university: data.university,
            address:data.address
            
          };

          fetch("https://language-center-server-nu.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();

                Swal.fire({
                  title: "User created successfully.",
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
              }
            });
        });

        console.log(createdUser);
        // Navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen my-20  rounded-xl">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src="" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl mb-10 font-bold text-center">
              Registration{" "}
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Name"
                  className="input input-bordered border-[#123821] border-2"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email")}
                  placeholder="email"
                  className="input input-bordered border-[#123821] border-2"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type="password"
                  {...register("password")}
                  placeholder="password"
                  className="input input-bordered border-[#123821] border-2"
                  name="password"
                />
                {/* <div className="absolute top-7 right-5 ">
                   {
                    (showPass===false)?<AiFillEye onClick={toggle}/>: <AiFillEyeInvisible onClick={toggle}/>
                   }
                   
                  
                  </div> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">University</span>
                </label>
                <input
                  type="text"
                  {...register("university")}
                  placeholder="university"
                  className="input input-bordered border-[#123821] border-2"
                  name="university"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  type="text"
                  {...register("address")}
                  placeholder="Address"
                  className="input input-bordered border-[#123821] border-2"
                  name="address"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#123821] text-white hover:bg-[#A79132] transition duration-700 ease-in-out"
                  type="submit"
                  value="login"
                />
              </div>
            </form>
            <p className="text-center mt-10">
              Already Have an Account?
              <Link className="text-blue-900 font-bold" to="/login">
                Login
              </Link>
            </p>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
