const buttonAG = document.getElementById("buttonAG");

buttonAG.addEventListener("click", function () {
    const URL = document.getElementById("URL").value;
    const TIT = document.getElementById("TIT").value;
    const DESC = document.getElementById("DESC").value;

    if (URL && TIT && DESC) {
        Agim(URL, TIT, DESC);
        limpiarform();
    } else {
        alert("Por favor asegúrese de llenar todos los campos.");
    }
});

function Agim(URL, TIT, DESC) {
    const galeria = document.getElementById("galeria");

    const nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("galeria-item");

    const img = crearImagen(URL, TIT);
    const tituloimg = crearTituloImagen(TIT);
    const botones = crearBotones(nuevoDiv, URL, TIT, DESC);

    nuevoDiv.appendChild(img);
    nuevoDiv.appendChild(tituloimg);
    nuevoDiv.appendChild(botones);

    galeria.appendChild(nuevoDiv);
}

function crearImagen(URL, TIT) {
    const img = document.createElement("img");
    img.src = URL;
    img.alt = TIT;

    return img;
}

function crearTituloImagen(TIT) {
    const tituloimg = document.createElement("div");
    tituloimg.classList.add("titulo-img");
    tituloimg.textContent = TIT;

    return tituloimg;
}

function crearBotones(nuevoDiv, URL, TIT, DESC) {
    const botones = document.createElement('div');
    botones.classList.add('botones');

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function () {
        nuevoDiv.remove();
    });

    const botonVerDetalles = document.createElement("button");
    botonVerDetalles.classList.add("ver-detalles");
    botonVerDetalles.textContent = "Ver Detalles";
    botonVerDetalles.addEventListener("click", function () {
        mostrarModal(URL, TIT, DESC);
    });

    botones.appendChild(botonEliminar);
    botones.appendChild(botonVerDetalles);

    return botones;
}

function limpiarform() {
    document.getElementById('URL').value = '';
    document.getElementById('TIT').value = '';
    document.getElementById('DESC').value = '';
}



document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('show');
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});