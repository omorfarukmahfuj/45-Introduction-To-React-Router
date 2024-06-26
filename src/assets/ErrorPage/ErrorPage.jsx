import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <p className="text-9xl font-extrabold mb-5 text-red-600">{error.status}</p>
      <p className="text-red-600 text-mono text-3xl mb-5 font-mono">{error.statusText || error.message}</p>
      <Link to="/"><button className="btn btn-error font-mono text-white">Please Go Back To Home</button></Link>

    </div>
  );
};

export default ErrorPage;