<template>
    <div id="sidebar">
    
      <div class="options">
          <label for="startDate">Fecha de inicio:</label>
          <input type="date" id="startDate" name="startDate" value="2023-12-01" required>
        </div>
    
        <div class="options">
          <label for="endDate">Fecha de fin:</label>
          <input type="date" id="endDate" name="endDate" value="2023-12-10" required>
        </div>
    
        <div class="options">
          <label for="tipoGrafica">kpis</label>
          <select id="tipoGrafica" onchange="cambiarTipoGrafica()">
            <option value="ingresos">Ingresos vs Punto de Equilibrio</option>
            <option value="clientes">Clientes por Mes</option>
            <option value="servicios">Ventas por servicio</option>
          </select>
        </div>
    
        <div class="options">
          <label for="moneda">Moneda:</label>
          <select id="currencySelector" onchange="cambiarTipoMoneda(); changeCurrency()">
            <option value="peso">Peso</option>
            <option value="dolar">Dólar</option>
            <option value="euro">Euro</option>
          </select>
        </div>
  
    
        <div class="options">
          <button type="submit" onclick="updateChart()" >Aceptar</button>
        </div>
    
    </div>
  
    </template>
    
    <script>
        
    </script>
    
    <style scoped>
    
      
    #sidebar {
        height: 600vh;
        width: 250px; 
        background-color: #333;
        position: fixed;
        left: 0;
        top: 60px;
        overflow-x: hidden;
        z-index: 1;
      }
      
     
      
     
      
      #sidebar .options {
        margin-top: 10px;
        padding: 10px 15px;
        text-decoration: none;
        font-size: 14px; 
        color: #fff;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
      }
      
      #sidebar .options select {
        width: calc(70% - 15px);
        padding: 10px;
        font-size: 12px; 
        box-sizing: border-box;
        border-radius: 5px;
      }
      
      #sidebar .options input {
        width: calc(70% - 15px);
        padding: 10px;
        font-size: 12px; 
        box-sizing: border-box;
        border-radius: 5px;
      }
      
      #sidebar .options button {
        width: 100%;
        max-width: 100%;
        padding: 15px;
        font-size: 14px; 
        background-color: #4CAF50;
        color: #fff;
        font-weight: bold;
        border: none;
        cursor: pointer;
        box-sizing: border-box;
        border-radius: 5px;
      }
    </style>
    
    