import { Outlet, Link } from "react-router-dom";

export const UsuarioLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-[#00171f] text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-4">
        <Link className="text-3xl font-bold" to={'/'}> <p>Itsco <span className="text-red-700">Jobs</span></p> </Link>

          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/usuario/login" className={`hover:text-[#adebff] transition-colors duration-300`}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/usuario/register" className="hover:text-[#adebff] transition-colors duration-300">
                  Registro
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4 flex-grow">
        <Outlet />
      </main>
      <footer className="bg-red-700 text-white p-4 text-center">
        <p>&copy; 2024 Empresa. C.G 🐐</p>
      </footer>
    </div>
  );
}
