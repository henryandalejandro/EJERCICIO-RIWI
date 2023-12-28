var allPersons = [];

function guardarPersona() {
    let formNombre = document.getElementById('nombres').value;
    let formApellido = document.getElementById('apellidos').value;
    let formCorreo = document.getElementById('correo').value;

    let persona = {
        nombre: formNombre,
        apellido: formApellido,
        correo: formCorreo
    };

    allPersons.push(persona);
    console.log(allPersons);

    // Llamar a la función para actualizar la tabla
    actualizarTabla();
}

function eliminarPersona(index) {
    allPersons.splice(index, 1);
    actualizarTabla();
}

function editarPersona(index) {
    let selectedPerson = allPersons[index];
    document.getElementById('nombres').value = selectedPerson.nombre;
    document.getElementById('apellidos').value = selectedPerson.apellido;
    document.getElementById('correo').value = selectedPerson.correo;

    

    // Remove the selected person from the list
    allPersons.splice(index, 1);

    // Update the table with the modified list
    actualizarTabla();
}

function actualizarTabla() {
    // Obtener el cuerpo de la tabla
    let tablaCuerpo = document.getElementById('tabla-personas');

    // Limpiar el contenido actual de la tabla
    tablaCuerpo.innerHTML = '';

    // Iterar sobre la lista de personas y agregarlas a la tabla
    allPersons.forEach((persona, index) => {
        let fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${persona.nombre}</td>
            <td>${persona.apellido}</td>
            <td>${persona.correo}</td>
            <td>
            
                <button class="btn btn-danger btn-sm" onclick="eliminarPersona(${index})">Eliminar</button>
                <button class="btn btn-warning btn-sm ms-2" onclick="editarPersona(${index})">Editar</button>
                
            </td>
            
            
        `;
    
        tablaCuerpo.appendChild(fila);
        
        
    });

}


