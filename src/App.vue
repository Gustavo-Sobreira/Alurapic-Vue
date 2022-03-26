<template>
<!-- Colocar todo conteúdo de um TEMPLETE dentro de uma DIV, pois ele aceita apenas um elemento -->

  <div> 
    <!-- Colocar os : ou v-bind antes dos atributos-->
    <!-- Por exemplo :src="img" -->

    <h1 v-text="titulo"></h1>

    <ul>
      <!-- v-for vai percorrer o array e criar um li por cada item -->
      <li v-for="foto in fotos" :key="foto">

        <!-- :src vai pegar o valor do atributo src e colocar na tag img -->
        <img  :src="foto.url" :alt="foto.titulo" > 

      </li>
    </ul>
  
  </div>

  
</template>

<script>
  export default{

    //A função Data é usada para criar atributos
    data(){

      return{

        titulo: 'FLU',

        fotos: []
      }
    },
//Aqui temos 2 atributos Titulo e Fotos, no caso fotos é uma lista(array)

    created(){
      
      var promise = this.$http.get("http://localhost:3000/v1/fotos");
      //
      promise
        .then(res => res.json())
        .then(fotos => this.fotos = fotos);
    }
  }

</script>

<style>

</style>
