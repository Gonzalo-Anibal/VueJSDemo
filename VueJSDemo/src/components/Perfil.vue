<!-- Perfil.vue -->

<template>
    <div class="perfil">
      <img :src="imagen" alt="Imagen de perfil">
      <h2>{{ nombre }}</h2>
      <p>{{ descripcion }}</p>
      <p>Edad: {{ edad }}</p>
      <p>Correo electrónico: {{ correo }}</p>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      nombre: String,
      descripcion: String,
      edad: Number,
      correo: String,
      // Puedes añadir más propiedades según sea necesario
      imagen: {
        type: String,
        default: "url-por-defecto.jpg" // Ruta a una imagen por defecto
      }
    }
  };
  </script>
  
  <style scoped>
  .perfil {
    text-align: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  img {
    max-width: 30%;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  
  h2 {
    color: #333;
  }
  
  p {
    margin: 8px 0;
  }
  </style>
  