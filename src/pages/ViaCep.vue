<template>
  <h1>VIACEP</h1>
  <div>
    <Rotulo :nome="CEP">
      <input v-model="cep" type="text" />
    </Rotulo>
    <button class="btn btn-primary" @click="buscaCep">Buscar Endereço</button>
  </div>
  <div>
    <h1>{{ cep }}</h1>
    <h2>{{ rua }}</h2>
    <h2>{{ bairro }}</h2>
    <h2>{{ cidade }}</h2>
    <h2>{{ uf }}</h2>
  </div>
</template>

<script>
import Rotulo from "../components/rotulo.vue";
import axios from "axios";
export default {
  components: { Rotulo },
  data() {
    return {
      cep: "",
      rua: "Rua:",
      bairro: "Bairro:",
      cidade: "Cidade:",
      uf: "UF:",
    };
  },
  methods: {
    buscaCep() {
      axios
        .get(`https://viacep.com.br/ws/${this.cep}/json/`)
        .then((response) => {
          this.rua = response.data.logradouro;
          this.bairro = response.data.bairro;
          this.cidade = response.data.localidade;
          this.uf = response.data.uf;
        });
    },
  },
};
</script>

<style>
</style>