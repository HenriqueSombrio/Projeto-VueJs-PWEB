<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 v-on:mousemove="atualizaXY">Posição X: {{x}} <br>Posição Y: {{y}}</h1>
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
          <input type="text" v-on:keyup="tecla($event)">
          <input type="text" v-on:keyup.enter="enter">
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div>
            <button type="button" v-on:click="alertaExercicio">Exibir alerta</button>
          </div>
          <div>
            <input type="text" v-on:keydown="chamaPropData($event)">
            <input type="text" v-on:keydown.enter="chamaPropData($event)">
            <p>{{valor}}</p>
            <p>Valor enter: {{valor}}</p>
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
      contador: 0,
      contador2: 0,
      resultadoContador: 0,
      x: 0,
      y: 0,
      valor: ''
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
    },
    atualizaXY(e){
      this.x = e.clientX;
      this.y = e.clientY;
    },
    tecla(e) {
      alert(`Pressionou a tecla ${e.key}`)
    },
    enter(){
      alert('Pressionou enter')
    },
    alertaExercicio(){
      alert('Exibindo alerta!')
    },
    chamaPropData(e){
      this.valor = e.target.value;
    },
    atualizaValorEnter(e){
      this.valor = e.target.value;
    }
  },
};
</script>

<style>
#app {
  background-color: #fff;
}
</style>