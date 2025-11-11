import { useState, useEffect } from "react";
import './CargarListas.css'

function CargarListas() {
    const [contactos, setContactos] = useState([]);
    const cargar = () => {
        fetch("http://www.raydelto.org/agenda.php")
            .then(res => res.json())
            .then(datos => setContactos(datos))
            .catch(error => console.error("Error al cargar los contactos:", error));
    };

    useEffect(() => {
        cargar();
        window.addEventListener("actualizarLista", cargar);
        return () => {
            window.removeEventListener("actualizarLista", cargar);
        };
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

export default CargarListas;
