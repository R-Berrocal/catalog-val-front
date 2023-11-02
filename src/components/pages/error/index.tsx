import { Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function Erro404() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-48">
      <div className="flex flex-col bg-white">
        <div className="flex flex-col items-center bg-white">
          <Typography
            variant="h3"
            className="text-indigo-500 font-bold text-7xl"
          >
            404
          </Typography>
          <Typography
            variant="h1"
            className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10"
          >
            This page does not exist
          </Typography>
          <Typography
            variant="h2"
            className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8"
          >
            The page you are looking for could not be found.
          </Typography>

          <Link to="/" className="mt-10">
            <Button>Go to home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Erro404;
