import { Outlet, Link } from "react-router-dom";

export const EmpresaLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-[#00171f] text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Empresa</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/login" className="hover:text-[#adebff] transition-colors duration-300">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-[#adebff] transition-colors duration-300">
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
      <footer className="bg-[#003459] text-white p-4 text-center">
        <p>&copy; 2024 Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};
