<template>
  <h1>Calculo IMC</h1>
  <div>
    <form action="">
      <div>
        <label for="">Altura</label>
        <input type="text" v-model="altura"/>
        <p>{{altura}}</p>
        <label for="">Peso</label>
        <input type="tel" v-model="peso"/>
        <p>{{peso}}</p>
        <button type="button" v-on:click="calculaImc(altura, peso)">Calcular</button>
      </div>
    </form>
  </div>
  <div>
    <h2>Resultado: {{resultado}}</h2>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      resultado: 0,
      altura: 0,
      peso: 0,
      message: ''
    };
  },
  methods: {
    calculaImc(altura, peso) {
      let result = this.resultado
      result = (peso/(altura*altura));
      if(result < 18.5){
        this.message = 'Você está abaixo do peso!'
      } else if (result >= 18.5 && result <= 24.8) {
        this.message = 'Você está no peso ideal!'
      }else if (result > 24.8) {
        this.message = 'Você está acima do peso!'
      }
      return this.resultado = result.toFixed(1);
    }
  }
};
</script>

<style>
</style>