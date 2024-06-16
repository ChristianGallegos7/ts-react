import { BrowserRouter, Routes, Route } from "react-router-dom"
import { EmpresaLayout } from "./layouts/EmpresaLayout"
import { AppLayout } from "./layouts/AppLayout"
import { UsuarioLayout } from "./layouts/UsuarioLayout"
import { LoginEmpresa } from "./pages/empresa/Login"
import { RegistroEmpresa } from "./pages/empresa/Registro"
import { LoginUsuario } from "./pages/usuario/LoginUsuario"
import { RegistroUsuario } from './pages/usuario/RegistroUsuario'


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />} />

                <Route element={<EmpresaLayout />}>
                    <Route path="/empresa/login" element={<LoginEmpresa />} index />
                    <Route path="/empresa/register" element={<RegistroEmpresa />} />
                </Route>

                <Route path="/usuario" element={<UsuarioLayout />}>
                    <Route path="/usuario/login" element={<LoginUsuario />} index />
                    <Route path="/usuario/register" element={<RegistroUsuario />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
