import { useState } from 'react'
import Header from './components/Header.jsx'
import Inicio from './components/Inicio.jsx'
import AcercaDeNosotros from './components/AcercaDeNosotros.jsx'
import Reservas from './components/Reservas.jsx'

export default function App() {
  const [pagina, setPagina] = useState('inicio')

  return (
    <>
      <Header pagina={pagina} onNavegar={setPagina} />
      <main>
        {pagina === 'inicio' && <Inicio onNavegar={setPagina} />}
        {pagina === 'acerca' && <AcercaDeNosotros />}
        {pagina === 'reservas' && <Reservas />}
      </main>
      <footer className="footer">© 2026 Hotel Aurora · Todos los derechos reservados</footer>
    </>
  )
}
