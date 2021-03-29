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
    };
  },
  methods: {
    minhaIdade: function (idade) {
      return idade * 3;
    },
    numberRandom: function () {
      return Math.random();
    },
  },
};
</script>

<style>
#app {
  background-color: #fff;
}
</style>