<template>
  <div id="card" class="card mb-2 p-2 border border-dark">
    <img
      :src="pais.flags[1]"
      height="260"
      class="card-img-top border border-2 border-dark"
      :alt="`bandera ${pais.name.common}`"
    />
    <div class="card-body">
      <h5 class="card-title text-center">{{ pais.name.common }}</h5>
      <div class="card-text text-center">
        <span class="text-center d-block mb-1 text-muted">{{
          pais.name.official
        }}</span>
        <div class="d-block text-center">
          <span
            class="badge bg-primary mb-1 d-inline-block w-50 mx-1"
            v-for="capital in pais.capital"
            :key="capital"
            ><p class="mb-1 text-warning">Capital</p>
            <span class="fs-4">{{ capital }}</span></span
          >
          <span class="badge bg-primary mb-1 d-inline-block w-50 mx-1"
            ><p class="mb-1 text-warning">Region</p>
            <span class="fs-4">{{ pais.region }}</span></span
          >
        </div>
        <div class="d-block text-center">
          <span class="badge bg-info p-3 mb-1 text-center"
            ><p class="mb-1">Población</p>
            <span class="fs-4">{{ numForm(pais.population) }}</span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["pais"],
  setup() {
    const numForm = (num) => {
      return new Intl.NumberFormat("de-DE").format(num);
    };
    return { numForm };
  },
};
</script>

<style scoped></style>
