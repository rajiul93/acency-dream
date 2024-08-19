import axios from "axios";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ScrollToTop from "../../share/ScrollToTop/ScrollToTop";
import { errorMessage } from "../../utils/errorMessage";
import { successMessage } from "../../utils/successMessage";

const LoginPage = () => {
  const navigate = useNavigate();

  const { loading, setLoading, setUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (userData) => {
    setLoading(false);
    try {
      await axios.post(`${import.meta.env.VITE_API}/jwt`, userData, {
        withCredentials: true,
      });
      const response = await axios.post(
        `${import.meta.env.VITE_API}/user`,
        userData
      );

      const message = response.data.message;
      if (message === "success") {
        successMessage("Login successfully");
        setUser({ ...userData, message });
        setLoading(true);
        navigate("/dashboard");
      }
    } catch (error) {
      errorMessage("Wrong Password");
      setLoading(true);
    }
  };

  return (
    <div className="my-24 md:min-h-screen  justify-center items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dream | Login</title>
      </Helmet>
      <ScrollToTop />

      <div
        className="relative  mx-auto w-full  max-w-md bg-white px-6 pt-10
     pb-8 shadow-2xl ring-1 ring-gray-900/5 rounded-xl sm:px-10"
      >
        <div className="w-full ">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p className="mt-2 text-gray-500">
              Sign in below to access your account
            </p>
          </div>
          <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative mt-6">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="NA"
                  {...register("userName", { required: true })}
                />
                {errors.userName && (
                  <span className="text-error">This field is required</span>
                )}
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Email Address
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                  className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="password"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Password
                </label>
                {errors.password && (
                  <span className="text-error">This field is required</span>
                )}
              </div>
              <div className="my-6">
                {loading ? (
                  <button
                    type="submit"
                    className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                  >
                    Sign in
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                  >
                    <span className="loading loading-bars loading-md"></span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
