<template>
<!-- Colocar todo conteúdo de um TEMPLETE dentro de uma DIV, pois ele aceita apenas um elemento -->

  <div> 
    <!-- Colocar os : ou v-bind antes dos atributos-->
    <!-- Por exemplo :src="img" -->

    <h1 class="cabecalho" v-text="titulo"></h1>

    <ul class="lista-fotos">
      <!-- v-for vai percorrer o array e criar um li por cada item -->
      <li class="lista-fotos-item" v-for="foto in fotos" :key="foto">
        
        <div class="painel">

          <p class="nomefotos">{{foto.titulo}}</p>

          <!-- :src vai pegar o valor do atributo src e colocar na tag img -->
          <img class="imagem" :src="foto.url" :alt="foto.titulo" > 

        </div>
        
      </li>
    </ul>
  
  </div>

  
</template>

<script>
  export default{

    //A função Data é usada para criar atributos
    data(){

      return{

        titulo: 'Alura Pic',

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

.cabecalho{
  
  font-size: 5rem;
  text-align: center;

  box-shadow:  1px 1px 1px 1px rgb(192, 186, 186);
  background-color:  rgba(245, 239, 239, 0.753) ;
  border-radius: 10px;

  padding: 0;
  margin: 0;

}

.lista-fotos{

  list-style: none;

}

.lista-fotos .lista-fotos-item{
  
  display: inline-block;
  
  margin-top: 5%;
  margin-left: 13%; 
  padding: 0px;

  height: 30vh;


}

.painel{

  display: inline-block;

  width: 13vw;
  height: 100%;

  margin: 0;
  padding: 0;
  
  background-color: rgba(245, 239, 239, 0.753);
  box-shadow: 5px 5px 5px 5px rgb(191, 212, 212);
  border-radius: 10px;

  vertical-align: top;

}
.nomefotos{

  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;

  margin: 0,5vh;
  padding: 0;

  box-shadow: 1px 1px 1px 0px rgba(192, 186, 186, 0.171);

}
  
.imagem{

  max-width: 100%;

}
</style>
