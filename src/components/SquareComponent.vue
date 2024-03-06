<template>
    <div id="box" class="rectangle"> 
        <slot></slot>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  .rectangle {
    margin: 5px;
    border-radius: 10px;
    background-color: #fff;
    color: #cc1313;
  }
  
  .rectangle {
    margin:5px;
    border-radius:10px;
    background-color:#ffff;
    color:#000000;
    width: calc(25% - 10px);
    height: 125px;
    display:flex;
    flex-wrap:wrap;
  }
  </style>
  