import './AgregarContacto.css'
import { useState } from "react";

function AgregarContactos() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");

    const handleSubmit = () => {
        const contacto = { nombre, apellido, telefono };

        fetch("http://www.raydelto.org/agenda.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contacto),
        })
            .then((res) => res.json())
            .then((nuevo) => {
                onGuardado();
                setNombre("");
                setApellido("");
                setTelefono("");
            })
            .catch((error => console.error("Error al introducir contacto nuevo:", error))
            );
    };

    return (
        <div>
            <h3>Nombre</h3>
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <h3>Apellido</h3>
            <input value={apellido} onChange={(e) => setApellido(e.target.value)} />
            <h3>Teléfono</h3>
            <input value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            <button onClick={handleSubmit}>Guardar</button>
        </div>
    );
}

export default AgregarContactos