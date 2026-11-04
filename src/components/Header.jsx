export default function Header({ pagina, onNavegar }) {
  const links = [
    { id: 'inicio', texto: 'Inicio' },
    { id: 'acerca', texto: 'Acerca de nosotros' },
    { id: 'reservas', texto: 'Reservas' },
  ]

  return (
    <header className="header">
      <h1 className="logo">Hotel Aurora</h1>
      <nav>
        {links.map((link_map) => (
          <button
            key={link_map.id}
            className={pagina === link_map.id ? 'nav-btn activo' : 'nav-btn'}
            onClick={() => onNavegar(link_map.id)}
          >
            {link_map.texto}
          </button>
        ))}
      </nav>
    </header>
  )
}
