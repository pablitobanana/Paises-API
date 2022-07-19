<template>
  <div class="container">
    <h1 class="text-center">Paises API</h1>
    <h2 class="text-center">Top Paises con mas población</h2>
    <Continentes />
    <Buscador />
    <CardList />
  </div>
</template>

<script>
import CardList from "@/components/CardList.vue";
import Continentes from "@/components/Continentes.vue";
import Buscador from "@/components/Buscador.vue";
export default {
  name: "App",
  components: { CardList, Continentes, Buscador },
};
</script>

<style></style>
