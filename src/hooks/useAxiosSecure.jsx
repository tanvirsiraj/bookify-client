import axios from "axios";

const useAxiosSecure = () => {
  // instance
  const axiosSecure = axios.create({
    baseURL: "https://bookify-server-xi.vercel.app",
    // withCredentials: true,
  });
  return axiosSecure;
};

export default useAxiosSecure;
