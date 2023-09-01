import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { NovedadesProvider } from "./context/NovedadesContext"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import NovedadesPage from "./pages/NovedadesPage"
import ContactoPage from "./pages/ContactoPage"
import InicioPage from "./pages/InicioPage"
import NosotrosPage from "./pages/NosotrosPage"
import { NovedadUpdatePage } from "./pages/NovedadUpdatePage"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
  return (
    <AuthProvider>
      <NovedadesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<InicioPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/nosotros" element={<NosotrosPage/>} />
            <Route path="/novedades" element={<NovedadesPage/>} />
            <Route path="/contacto" element={<ContactoPage/>} />
            <Route element={<ProtectedRoute/>}>
              <Route path="/novedades/update/:id" element={<NovedadUpdatePage/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NovedadesProvider>
    </AuthProvider>
  )
}

export default App