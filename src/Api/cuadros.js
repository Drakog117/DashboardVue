export function actualizarTotales(datos, tipoMoneda) {
  function sumarTotales(datos, tipoRegistro) {
    return datos[tipoRegistro].reduce(function (total, registro) {
      return total + convertirMoneda(parseFloat(registro.total), tipoMoneda);
    }, 0);
  }

  function contarRegistros(datos, tipoRegistro) {
    return datos[tipoRegistro].length;
  }

  function convertirMoneda(monto, tipoMoneda) {
    switch (tipoMoneda) {
      case 'euro':
        return monto / 17;
      case 'dolar':
        return monto / 16;
      default:
        return monto;
    }
  }

function obtenerSimboloMoneda(tipoMoneda) {
    switch (tipoMoneda) {
      case 'euro':
        return '€';
      case 'dolar':
        return 'US$';
      default:
        return 'MXN$';
    }
  }

  function mostrarPorcentaje(total) {
    var porcentaje = (total / total) * 100;
    return porcentaje.toFixed(2);
  }

  function mostrarPorcentaje2(total) {
    var porcentaje = (total / sumarTotales(datos, 'ingresos')) * 100;
    return porcentaje.toFixed(2);
  }

  var simboloMoneda = obtenerSimboloMoneda(tipoMoneda);
  const utilidadesValor = sumarTotales(datos, 'ingresos') - sumarTotales(datos, 'punto_equilibrio');

  document.getElementById('totalNegocios').textContent = contarRegistros(datos, 'negocios');
  document.getElementById('porcentajeNegocios').textContent = mostrarPorcentaje(contarRegistros(datos, 'negocios'),  tipoMoneda ) + '% TOTALES';

  document.getElementById('totalClientes').textContent = contarRegistros(datos, 'clientes');
  document.getElementById('porcentajeClientes').textContent = mostrarPorcentaje(contarRegistros(datos, 'clientes'), tipoMoneda) + '% TOTALES';

  document.getElementById('totalSocios').textContent = contarRegistros(datos, 'socios');
  document.getElementById('porcentajeSocios').textContent = mostrarPorcentaje(sumarTotales(datos, 'socios'), tipoMoneda) + '% TOTALES';

  document.getElementById('totalIngresos').textContent = simboloMoneda + sumarTotales(datos, 'ingresos').toFixed(2);
  document.getElementById('porcentajeIngresos').textContent = mostrarPorcentaje2(sumarTotales(datos, 'ingresos'), tipoMoneda) + '% MDP';

  document.getElementById('totalUtilidades').textContent = simboloMoneda + utilidadesValor.toFixed(2);
  document.getElementById('porcentajeUtilidades').textContent = mostrarPorcentaje2(utilidadesValor.toFixed(2), tipoMoneda) + '% MDP';

  document.getElementById('totalPuntosEquilibrio').textContent = simboloMoneda + sumarTotales(datos, 'punto_equilibrio').toFixed(2);
  document.getElementById('porcentajePuntosEquilibrio').textContent = mostrarPorcentaje2(sumarTotales(datos, 'utilidades'), tipoMoneda) + '% MDP';
}


export function cambiarTipoMoneda() {
    // Recargar los datos con el nuevo tipo de moneda seleccionado
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var datos = JSON.parse(xhr.responseText);
        actualizarTotales(datos);
      }
    };
    var fechaInicio = document.getElementById('startDate').value;
    var fechaFin = document.getElementById('endDate').value;
    xhr.open("GET", "http://localhost/phpDash/cuadros.php?fechaInicio=" + fechaInicio + "&fechaFin=" + fechaFin, true);
    xhr.send();
  }

  // Realiza una solicitud AJAX para obtener los datos sin filtro de fechas
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
     var datos = JSON.parse(xhr.responseText);
      actualizarTotales(datos);
    }
  };
  xhr.open("GET", "http://localhost/phpDash/cuadros.php", true);
  xhr.send();

  document.getElementById('filtroFechasForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var fechaInicio = document.getElementById('startDate').value;
    var fechaFin = document.getElementById('endDate').value;

    // Realiza una solicitud AJAX con las fechas seleccionadas
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var datos = JSON.parse(xhr.responseText);
        actualizarTotales(datos);
      }
    };
    xhr.open("GET", "http://localhost/phpDash/cuadros.php?fechaInicio=" + fechaInicio + "&fechaFin=" + fechaFin, true);
    xhr.send();
});