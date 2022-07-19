<template>
  <div id="buscador">
    <input
      type="text"
      class="form-control my-3"
      placeholder="Ingrese un pais"
      v-model="texto"
      @keyup="buscarPais"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore }from 'vuex';
export default {
  setup() {
    const texto = ref('')
    const store = useStore()
    const buscarPais = () =>{
      return store.dispatch('filtroNombre',texto.value)
    }
    return {texto, buscarPais};
  },
};
</script>

<style scoped></style>
