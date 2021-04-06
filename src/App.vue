<template>
  <div id="app">
    <h1>Registrar Reclamação</h1>
    <div class="conteudo">
      <form class="painel">
        <div class="cabecalho">Formulário</div>

        <rotulo nome="E-mail">
          <input type="text" />
        </rotulo>

        <rotulo nome="Senha">
          <input type="password" />
        </rotulo>

        <rotulo nome="Idade">
          <input type="number" />
        </rotulo>

        <rotulo nome="Mensagem">
          <textarea name="" cols="30" rows="5"></textarea>
        </rotulo>

        <rotulo nome="Características do Problema">
          <span class="mr-4"
            ><input type="checkbox" value="reproduzivel" /> Reproduzível</span
          >
          <span
            ><input type="checkbox" value="intermitente" /> Intermitente</span
          >
        </rotulo>

        <rotulo nome="Qual produto?">
          <span class="mr-4"><input type="radio" /> Web</span>
          <span class="mr-4"><input type="radio" /> Mobile</span>
          <span><input type="radio" /> Outro</span>
        </rotulo>

        <rotulo nome="Prioridade">
          <select name="" id="">
            <option></option>
          </select>
        </rotulo>

        <rotulo nome="Primeira Reclamação?">
          <escolha />
        </rotulo>
        <hr />
        <button>Enviar</button>
      </form>

      <div class="painel">
        <div class="cabecalho">Resultado</div>

        <rotulo nome="E-mail">
          <span></span>
        </rotulo>

        <rotulo nome="Senha">
          <span></span>
        </rotulo>

        <rotulo nome="Idade">
          <span></span>
        </rotulo>

        <rotulo nome="Mensagem">
          <span>???</span>
        </rotulo>

        <rotulo nome="Marque as Opções">
          <span>???</span>
        </rotulo>

        <rotulo nome="Qual produto?">
          <span>???</span>
        </rotulo>

        <rotulo nome="Prioridade">
          <span>???</span>
        </rotulo>

        <rotulo nome="Primeira Reclamação?">
          <span>???</span>
        </rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import escolha from "./components/escolha.vue";
import rotulo from "./components/rotulo.vue";
export default {
  components: { rotulo, escolha },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>