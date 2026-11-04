import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const habitaciones = [
  { id: 1, nombre: 'Habitación Simple', precio: 35000, capacidad: 1, emoji: '🛏️' },
  { id: 2, nombre: 'Habitación Doble', precio: 55000, capacidad: 2, emoji: '🛌' },
  { id: 3, nombre: 'Habitación Familiar', precio: 80000, capacidad: 4, emoji: '👨‍👩‍👧‍👦' },
  { id: 4, nombre: 'Suite Premium', precio: 120000, capacidad: 2, emoji: '👑' },
]

export default function Reservas() {
  const [habitacion, setHabitacion] = useState(null)
  const [rango, setRango] = useState([null, null])
  const [inicio, fin] = rango

  const noches = inicio && fin ? Math.round((fin - inicio) / 86400000) : 0
  const total = habitacion ? noches * habitacion.precio : 0

  const reservar = () => {
    if (!habitacion) return alert('Primero elegí una habitación.')
    if (!inicio || !fin) return alert('Seleccioná un rango de fechas (ingreso y salida).')

    alert(
      `Reserva confirmada\n\n` +
        `${habitacion.nombre}\n` +
        `Ingreso: ${inicio.toLocaleDateString('es-AR')}\n` +
        `Salida: ${fin.toLocaleDateString('es-AR')}\n` +
        `Noches: ${noches}\n` +
        `Total: $${total.toLocaleString('es-AR')}`
    )
    setHabitacion(null)
    setRango([null, null])
  }

  return (
    <section className="contenedor">
      <h2>Reservas</h2>

      <h3>1. Elegí tu habitación</h3>
      <div className="grid">
        {habitaciones.map((h) => (
          <div
            key={h.id}
            className={habitacion?.id === h.id ? 'card seleccionada' : 'card'}
            onClick={() => setHabitacion(h)}
          >
            <div className="emoji">{h.emoji}</div>
            <h4>{h.nombre}</h4>
            <p>Capacidad: {h.capacidad} persona(s)</p>
            <p className="precio">${h.precio.toLocaleString('es-AR')} / noche</p>
          </div>
        ))}
      </div>

      <h3>2. Seleccioná las fechas</h3>
      <div className="calendario">
        <DatePicker
          selectsRange
          inline
          startDate={inicio}
          endDate={fin}
          onChange={(fechas) => setRango(fechas)}
          minDate={new Date()}
          monthsShown={2}
        />
      </div>

      {habitacion && noches > 0 && (
        <p className="resumen">
          {habitacion.nombre} · {noches} noche(s) · Total: ${total.toLocaleString('es-AR')}
        </p>
      )}

      <button className="btn-principal" onClick={reservar}>
        Confirmar reserva
      </button>
    </section>
  )
}
