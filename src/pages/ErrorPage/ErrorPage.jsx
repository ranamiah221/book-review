import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center h-screen text-center">
      <div>
        <h1 className="text-5xl font-bold text-red-600 mb-4">Oops</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-red-600 mt-4 text-2xl font-semibold">
          <i>{error.statusText || error.message}</i>
        </p>
       <Link to='/'> <button className="bg-green-500 text-white border px-5 py-2 rounded-lg mt-5">Home</button>
       </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
