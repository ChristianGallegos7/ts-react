import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-[#00171f] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-3xl font-bold" to={'/'}> <p>Itsco <span className="text-red-700">Jobs</span></p> </Link>

        <div className="flex space-x-4">
          <Link to="/empresa/login" className="hover:underline">Empresa</Link>
          <Link to="/usuario/login" className="hover:underline">Usuario</Link>
        </div>
      </div>
    </nav>
  );
};
