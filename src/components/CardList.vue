<template>
  <div id="card-list">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-8" v-for="(pais, i) in paises" :key="i">
        <Card :pais="pais" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Card,
  },
  setup() {
    const store = useStore();

    const paises = computed(() => {
      return store.getters.topPaisesPoblacion;
    });
    onMounted( async () => {
      await store.dispatch("getPaises");
      await store.dispatch("filtrarRegion",'')
    });

    return { paises };
  },
};
</script>

<style scoped></style>
