<template>

    <div class="painel">

        <h2 class="painel-titulo">{{ titulo }}</h2>
        <slot class="painel-conteudo">
        </slot>

    </div>
  
</template>

<script>
  export default{

      props: ['titulo'],
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
</style>
