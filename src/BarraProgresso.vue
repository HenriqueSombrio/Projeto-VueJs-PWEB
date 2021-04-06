<template>
  <div style="height: 30px; width: 500px; border: 1px solid black">
    <div :style="meuEstilo" />
    <div>
      <h1>{{contador}}</h1>
      <button type="button" v-on:click=inicia>Iniciar</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      contador: 0,
      cor: 'red',
      altura: 100,
      largura: 10
    };
  },
  watch: {
    contador() {
      setTimeout(() => {
        if(this.contador < 100){
          this.contador++;
        }
      }, 1000);
    },
  },
  methods:{
    inicia(){
      this.contador ++;
    }
  },
  computed: {
    meuEstilo(){
      return{
        backgroundColor: this.cor,
        width: this.contador + '%',
        height: this.altura + '%'
      }
    }
  }
};
</script>

<style>
</style>