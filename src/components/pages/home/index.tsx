import { Typography } from '@material-tailwind/react';
import { NavbarSimple } from '../../app/layout/components/Navbar';

function Home() {
  return (
    <>
      <NavbarSimple />;
      <div className="flex flex-col justify-center items-center">
        <Typography
          variant="h1"
          className="text-base md:text-2xl lg:text-3xl xl:text-4xl m-4"
        >
          Acá quiero colocar el inicio de tu pagina, no se tenemos que inventar
          una buena landing page de inicio que quieres que la gente vea cuando
          entre a tu pagina
        </Typography>
      </div>
    </>
  );
}

export default Home;
