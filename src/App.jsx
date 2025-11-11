import './App.css'
import './CargarListas'
import './AgregarContacto'
import CargarListas from './CargarListas'
import AgregarContactos from './AgregarContacto'

function App() {
  return (
    <div className='Form'>
      <h1>Agregar Contacto</h1>
      <AgregarContactos></AgregarContactos>
      <CargarListas></CargarListas>
    </div>
  )
}

export default App
