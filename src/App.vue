<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p>Usando vuejs - Seu nome {{ name }}</p>
          <p>Idade multuplicada por 3 = {{ minhaIdade(24) }}</p>
          <p>Teste: {{ numberRandom(2) }}</p>
          <label for="imgGoogle">Endereço de imagem: </label>
          <input
            type="text"
            placeholder="Informe o endereço da imagem"
            name="imgGoogle"
            v-model="linkMsg"
          />
          <br /><img v-bind:src="linkMsg" height="400" />
          <div>
            <input type="text" v-bind:value="name" />
          </div>
          <p>{{resultadoContador}}</p>
          <input
          type="text"
          v-model="contador">
          <input
          type="text"
          v-model="contador2">
          <button type="button" v-on:click="somar(contador, contador2)">Soma contador</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: "Henrique Sombrio",
      message: "hello word",
      linkMsg: "",
      contador: 0,
      contador2: 0,
      resultadoContador: 0
    };
  },
  methods: {
    minhaIdade: function (idade) {
      return idade * 3;
    },
    numberRandom: function () {
      return Math.random();
    },
    somar(cont1, cont2){
      this.resultadoContador = parseInt(cont1) + parseInt(cont2);
    }
  },
};
</script>

<style>
#app {
  background-color: #fff;
}
</style>