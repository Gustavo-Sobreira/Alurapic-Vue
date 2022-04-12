<template>
<!-- Colocar todo conteúdo de um TEMPLETE dentro de uma DIV, pois ele aceita apenas um elemento -->

  <div> 
    <!-- Colocar os : ou v-bind antes dos atributos-->
    <!-- Por exemplo :src="img" -->

    <h1 class="cabecalho" v-text="titulo"></h1>

    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Filtre os títulos">

    <ul class="lista-fotos">
      <!-- v-for vai percorrer o array e criar um li por cada item -->
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto">
        
        <meu-painel :titulo="foto.titulo">
         
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo"></imagem-responsiva>
         
        </meu-painel>
        
      </li>
    </ul>
  
  </div>

  
</template>

<script>

import Painel from './shared/painel/Painel.vue'

import ImagemResponsiva from './shared/imagem-responsiva/Imagem-Responsiva.vue'

export default {

  components: {

    'meu-painel': Painel,
    "imagem-responsiva": ImagemResponsiva
  },

  data () {
    return {
      titulo: 'Alurapic', 

      fotos: [],

      filtro: ''
    }
  },

  computed: {

    fotosComFiltro() {

      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }

    }
  },

  created() {

    this.$http
      .get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
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

.filtro{

  display: block;

  margin-top: 2%;
  margin-left: 86%;
  border-color: rgba(52, 52, 161, 0.534);
}
</style>
