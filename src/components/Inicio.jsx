export default function Inicio({ onNavegar }) {
  return (
    <section className="hero">
      <h2>Bienvenido al Hotel Aurora</h2>
      <p>Descansá en el corazón de la ciudad, con confort, tranquilidad y la mejor atención.</p>
      <button className="btn-principal" onClick={() => onNavegar('reservas')}>
        Reservá ahora
      </button>
    </section>
  )
}
