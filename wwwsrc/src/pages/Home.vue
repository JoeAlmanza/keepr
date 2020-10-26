<template>
  <div class="home container-fluid">
    <h1>Welcome</h1>
    <div class="row card-columns">
      <!-- <div class="card-columns col-12 mx-1"> -->
      <keepComponent v-for="keep in keeps" :key="keep.id" :keepProp="keep" />
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import keepComponent from "../components/KeepComponent.vue";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getKeeps");
  },
  computed: {
    keeps() {
      return this.$store.state.keeps;
    },
  },
  components: {
    keepComponent,
  },
};
</script>
