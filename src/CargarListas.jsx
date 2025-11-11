import { useState, useEffect } from "react";
import './CargarListas.css'

function CargarListas() {
    const [contactos, setContactos] = useState([]);

    useEffect(() => {
        fetch("http://www.raydelto.org/agenda.php")
            .then(res => res.json())
            .then(datos => setContactos(datos))
            .catch(error => console.error("Error al cargar los contactos:", error));
    }, []);

    return (
        <ul className="Lista">
            {contactos.map((contacto, index) => (
                <li key={index}>
                    {contacto.nombre} {contacto.apellido} - {contacto.telefono}
                </li>
            ))}
        </ul>
    );
}
export default CargarListas
