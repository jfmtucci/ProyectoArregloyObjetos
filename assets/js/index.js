import propiedadesAlquiler from "./listadoPropiedadesAlquiler.js";
import propiedadVenta from "./listadoPropiedadesVenta.js";

const mostrarPropiedades = (propiedades, idCont) => {
  const contenedor = document.getElementById(idCont);

  const arregloPropiedades = [];
  let i = 0;
  while (i < propiedades.length && i < 3) {
    arregloPropiedades.push(propiedades[i]);
    i++;
  }

  arregloPropiedades.forEach((propiedad) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = ` <div class="card">
                <img
                  src="${propiedad.src}"
                  class="card-img-top"
                  alt="Imagen del departamento"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    ${propiedad.nombre}
                  </h5>
                  <p class="card-text">
                    ${propiedad.descripcion}
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                  </p>
                  <p>
                    <i class="fas fa-bed"></i> ${
                      propiedad.habitaciones
                    } Habitaciones
                    <i class="fas fa-bath"></i> ${propiedad.baños} Baños
                  </p>
                  <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
                  <p class=${
                    propiedad.smoke === true ? "text-success" : "text-danger"
                  } >
                    <i class="${
                      propiedad.smoke === true
                        ? "fas fa-smoking"
                        : "fas fa-smoking-ban"
                    }"></i> ${
      propiedad.smoke === true ? " Permitido fumar" : " No se permite fumar"
    }
                  </p>
                  <p class=${
                    propiedad.pets === true ? "text-success" : "text-danger"
                  }>
                    <i class="${
                      propiedad.pets === true ? "fas fa-paw" : "fa-solid fa-ban"
                    }"></i> ${
      propiedad.pets === true
        ? " Mascotas permitidas"
        : " No se permiten mascotas"
    }
                  </p>
                </div>
              </div>`;
    contenedor.appendChild(card);
  });
};

mostrarPropiedades(propiedadesAlquiler, "alquiler");
mostrarPropiedades(propiedadVenta, "venta");
