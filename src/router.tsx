import { BrowserRouter, Routes, Route } from "react-router-dom"
import { EmpresaLayout } from "./layouts/EmpresaLayout"
import { Login } from "./pages/empresa/Login"
import { Registro } from "./pages/empresa/Registro"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EmpresaLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Registro />} />
                    {/* Otras rutas */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
