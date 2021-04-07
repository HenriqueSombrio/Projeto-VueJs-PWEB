<template>
  <div id="app">
    <h1>Registrar Reclamação</h1>
    <div class="conteudo" v-if="enviou === false">
      <form class="painel" >
        <div class="cabecalho">Formulário</div>

        <rotulo nome="E-mail">
          <input type="text" v-model.lazy="usuario.email" />
        </rotulo>

        <rotulo nome="Senha">
          <input type="password" v-model="usuario.senha" />
        </rotulo>

        <rotulo nome="Idade">
          <input type="number" v-model.number="usuario.idade" />
        </rotulo>

        <rotulo nome="Mensagem">
          <textarea name="" v-model="mensagem" cols="30" rows="5"></textarea>
        </rotulo>

        <rotulo nome="Características do Problema">
          <span class="mr-4"
            ><input
              type="checkbox"
              v-model="caracteristica"
              value="reproduzivel"
            />
            Reproduzível</span
          >
          <span
            ><input
              type="checkbox"
              v-model="caracteristica"
              value="intermitente"
            />
            Intermitente</span
          >
        </rotulo>

        <rotulo nome="Qual produto?">
          <span class="mr-4"
            ><input type="radio" value="Web" v-model="produto" /> Web</span
          >
          <span class="mr-4"
            ><input type="radio" value="Mobile" v-model="produto" />
            Mobile</span
          >
          <span
            ><input type="radio" v-model="produto" value="Outro" /> Outro</span
          >
        </rotulo>

        <rotulo nome="Prioridade">
          <select name="" id="" v-model="prioridade">
            <option v-for="p in prioridades" :key="p.id" :value="p.id">
              {{ p.nome }}
            </option>
          </select>
        </rotulo>

        <rotulo nome="Primeira Reclamação?">
          <escolha v-model="primeira"/>
        </rotulo>
        <hr />
        <button type="button" @click.prevent="enviar">Enviar</button>
      </form>
    </div>
    <div class="painel" v-if="enviou === true">
      <div class="cabecalho">Resultado</div>

      <rotulo nome="E-mail">
        <span>{{ usuario.email }}</span>
      </rotulo>

      <rotulo nome="Senha">
        <span>{{ usuario.senha }}</span>
      </rotulo>

      <rotulo nome="Idade">
        <span>{{ usuario.idade }}</span>
      </rotulo>

      <rotulo nome="Mensagem">
        <span style="white-space: pre">{{ mensagem }}</span>
      </rotulo>

      <rotulo nome="Marque as Opções">
        <ul>
          <li v-for="c in caracteristica" :key="c">
            {{ c }}
          </li>
        </ul>
      </rotulo>

      <rotulo nome="Qual produto?">
        <span>{{ produto }}</span>
      </rotulo>

      <rotulo nome="Prioridade">
        <span>???</span>
      </rotulo>

      <rotulo nome="Primeira Reclamação?">
        <span>???</span>
      </rotulo>
    </div>
  </div>
</template>

<script>
import escolha from "./components/escolha";
import rotulo from "./components/rotulo";
export default {
  components: { rotulo, escolha },

  data() {
    return {
      mensagem: "",
      caracteristica: [],
      produto: "Web",
      usuario: {
        email: "",
        senha: "",
        idade: 25,
      },
      prioridade: 1,
      prioridades: [
        {
          id: 1,
          nome: "Alta",
        },
        {
          id: 2,
          nome: "Média",
        },
        {
          id: 3,
          nome: "Baixa",
        },
      ],
      primeira: true,
      enviou: false,
    };
  },
  methods: {
    enviar() {
      this.enviou = true;
    },
  },
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