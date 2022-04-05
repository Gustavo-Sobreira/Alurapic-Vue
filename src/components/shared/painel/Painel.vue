<template>

    <div class="painel">

        <h2 class="painel-titulo" @dblclick="visivel = ! visivel" >{{ titulo }}</h2>

        <transition name="painel-fade">

          <div class="painel-conteudo" v-show="visivel">
            <slot></slot> <!-- slot é um componente que não permite o uso de v-show então para manter sua propriedade mas esconder o conteudo passamos na div  -->
          </div>

        </transition>

    </div>
  
</template>

<script>
  export default{

      props: ['titulo'],

      data(){

        return{

          visivel: true

        }
      }
  }

</script>

<style scoped> /*Scoped, usado para mostrar que o css funcionará apenas neste componente*/


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

.painel-fade-enter, .painel-fade-leave-active{
  
  opacity: 0;
}

.painel-fade-enter-active, .painel-fade-leave-active{
  

  transition: opacity 0.5s;
}
</style>

painel-fade-enter // Antes de entrar no painel
painel-fade-enter-active // Painel entrou
painel-fade-leave // Antes de sair do painel