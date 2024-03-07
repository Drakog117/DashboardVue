<template>
  <div class="topbar">
      <TopbarComponent/>
    </div>

  <form id="filtroFechasForm">
    
    <div>
      <SidebarComponent/>
    </div>
    
    <div class="flex-container">
      <SquareComponent class="Clientes">
        <div id="ingreso-box">
          <img src="../assets/img/clientes.png" alt="">   
          <div id="DataText">
            <h2>INGRESO</h2>
            <p id="totalIngresos">0</p>
            <p id="porcentajeIngresos"> 0% MDP</p>
          </div>
  
        </div>
      </SquareComponent>
  
      <SquareComponent class="Negocio">
        <div id="negocios-box">
        <img src="../assets/img/negocio.png" alt="">
        <div id="DataText">
          <h2>NEGOCIOS</h2>
          <p id="totalNegocios">0</p>
          <p id="porcentajeNegocios">0% TOTALES</p>
        </div>
      </div>
      </SquareComponent>
  
      <SquareComponent class="Socios">
        
        <div id="socios-box">
          <img src="../assets/img/socios.png" alt="">
          <div id="DataText">
            <h2>SOCIOS</h2>
            <p id="totalSocios">0</p>
            <p id="porcentajeSocios">0% TOTALES</p>
          </div>
          
        </div>
  
      </SquareComponent> 
  
      <SquareComponent>
        <div id="clientes-box">
          <img src="../assets/img//clientes.png" alt="">
          <div id="DataText">
            <h2>CLIENTES</h2>
            <p id="totalClientes">0</p>
            <p id="porcentajeClientes">0% TOTALES</p>
          </div>
        </div>
      </SquareComponent>
      
     
    </div>
  
    <div class="flex-container">
      <RectangleComponent id="velocimetro"/>
      <RectangleComponent id="chartContainer"/>
    </div>
  
    <div class="flex-container">
      

      <RectangleComponent id="ingresosPuntoEquilibrio"/>
      <RectangleComponent id="clientesPorMes"/>
      <RectangleComponent id="ventasPorServicio"/>
      

      <RectangleComponent id="map"/>
    </div>
  
    <div class="flex-container">
      <SquareComponent>
        <div id="clientes-box">
          <img src="../assets/img//equilibrio.png" alt="">
          <div id="DataText">
            <h2>PUNTO DE EQUILIBRIO</h2>
            <p id="totalClientes">0</p>
            <p id="porcentajeClientes">0% TOTALES</p>
          </div>
        </div>
      </SquareComponent>
  
      <SquareComponent>
        <div id="clientes-box">
          <img src="../assets/img//utilidad.png" alt="">
          <div id="DataText">
            <h2>UTILIDADES</h2>
            <p id="totalClientes">0</p>
            <p id="porcentajeClientes">0% TOTALES</p>
          </div>
        </div>
      </SquareComponent>
      
      
    </div>

  </form>
    
</template>
  
  <style>
  /* Estilos base */
  
  .topbar {
    padding-bottom: 5%;
    
  }
  
  .flex-container {
    max-width: 100%;
    height: auto;
    position: relative;
    padding-left: 20%;
    display: flex;
    
   /* Distribuye los elementos con espacio entre ellos */
  }
  
  img {
    padding-top: 5%;
    padding-left: 5%;
    display: flex;
    width: 50%; /* Ajusta el ancho de la imagen al 10% del contenedor */
    height: 60%; /* Mantiene la proporción de la imagen */
    
  }
  
  #ingreso-box,
  #negocios-box,
  #socios-box,
  #clientes-box {
    display: flex;
    padding: 10px; /* Añade un padding alrededor del contenido */
    
  }
  #DataText{
    padding-left:1%;
  }
  h2 {
    
    color: #000000; /* Cambia el color del texto */
    font-size: 1.5em; /* Aumenta el tamaño de la fuente */
    
  }
  
  p {
    
    color: #000000; /* Cambia el color del texto */
    font-size: 1em; /* Ajusta el tamaño de la fuente */
  }
  
  /* Estilos responsivos */
  @media only screen and (max-width: 768px) {
    .flex-container {
      padding-left: 5%; /* Ajusta el padding para pantallas más pequeñas */
      flex-direction: column; /* Cambia la dirección del flex container a columna */
      align-items: center; /* Alinea los elementos verticalmente en el centro */
      justify-content: flex-start; /* Reinicia la justificación para dispositivos móviles */
    }
  }
  
  /* Estilos para los componentes Square y Rectangle, si es necesario */
  </style>
  
  


  
  <script>
 
  import TopbarComponent from '/src/components/TopbarComponent.vue'
  import SidebarComponent from '/src/components/SidebarComponent.vue'
  import RectangleComponent from '/src/components/RectangleComponent.vue'
  import SquareComponent from '/src/components/SquareComponent.vue'
  
  // Importación de componentes
  



  // Importación de funciones de dashboard.js
  import { cargarGraficoIngresosPuntoEquilibrio, cargarClientesPorMes, inicializarGraficoVentasPorServicio, cambiarTipoGrafica} from '../Api/kpis.js';
  import {fetchData, updateChart, updateChartWithData, changeCurrency, convertCurrency, getCurrencySymbol } from '../Api/dashboard.js';
  import { actualizarTotales, cambiarTipoMoneda } from '../Api/cuadros.js';

  export default {
    components: {
      TopbarComponent,
      SidebarComponent,
      RectangleComponent,
      SquareComponent
    },
    
    mounted() {
      this.$nextTick(() => {
        
        fetchData();
        updateChart();
        updateChartWithData();
        changeCurrency();
        convertCurrency();
        getCurrencySymbol();

        actualizarTotales();
        cambiarTipoMoneda();

        cargarGraficoIngresosPuntoEquilibrio();
        cargarClientesPorMes();
        inicializarGraficoVentasPorServicio();
        cambiarTipoGrafica();
      });
      }
    }
  
</script>

