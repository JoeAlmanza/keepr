<template>
  <div class="vault container-fluid">
    <h2><u>Vault Keeps</u>:</h2>
    <div class="row card-columns justify-content-center">
      <keep-component v-for="keep in keeps" :key="keep.id" :keepProp="keep" />
    </div>
  </div>
</template>

<script>
import keepComponent from "../components/KeepComponent.vue";
export default {
  name: "vault",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getVaultKeeps", this.$route.params.id);
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    keeps() {
      console.log(this.$store.state.vaultKeeps);
      return this.$store.state.vaultKeeps;
    },
  },
  methods: {},
  components: {
    keepComponent,
  },
};
</script>

<style scoped></style>
