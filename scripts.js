const buttonAG = document.getElementById("buttonAG");

buttonAG.addEventListener("click", function () {
  const URL = document.getElementById("URL").value;
  const TIT = document.getElementById("TIT").value;
  const DESC = document.getElementById("DESC").value;

  if (URL && TIT && DESC) {
    Agim(URL, TIT, DESC);
    limpiarform();
  } else {
    alert("Porfavor aseguerese de llenar todos los campos.");
    return;
  }
});

function Agim(URL, TIT, DESC) {
  const galeria = document.getElementById("galeria");

  const nuevoDiv = document.createElement("div");
  nuevoDiv.classList.add("galeria-item");
  const img = document.createElement("img");
  img.src = URL;
  img.alt = TIT;

  img.addEventListener('click', function() {
    mostrarModal(URL, TIT, DESC);
});

  nuevoDiv.appendChild(img);

  const tituloimg = document.createElement("div");
  tituloimg.classList.add("titulo-img");
  tituloimg.textContent = TIT;

  nuevoDiv.appendChild(tituloimg);

  const botones = document.createElement('div');
  botones.classList.add('botones');

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener("click", function () {
    galeria.removeChild(nuevoDiv);
  });

  const botonVerDetalles = document.createElement("button");
  botonVerDetalles.classList.add("ver-detalles");
  botonVerDetalles.textContent = "Ver Detalles";

  botonVerDetalles.addEventListener("click", function () {
    mostrarModal(URL, TIT, DESC);
  });

  botones.appendChild(botonEliminar);

  botones.appendChild(botonVerDetalles);

  nuevoDiv.appendChild(botones);

  galeria.appendChild(nuevoDiv);
}

function limpiarform() {
    document.getElementById('URL').value = '';
    document.getElementById('TIT').value = '';
    document.getElementById('DESC').value = '';
}

function mostrarModal(URL, TIT, DESC) 
{
    const modal = document.getElementById('modal');
    const modalImagen = document.getElementById('modalImagen');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalDescripcion = document.getElementById('modalDescripcion');

    modalImagen.src = URL;
    modalTitulo.textContent = TIT;
    modalDescripcion.textContent = DESC;
    modal.classList.add('show');
}

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('show');
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.classList.remove('show');
    }
});