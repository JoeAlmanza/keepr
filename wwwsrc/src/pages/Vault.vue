<template>
  <div class="vault container-fluid">
    <h2 class="text-light"><u>Vault Keeps</u>:</h2>
    <div class="row justify-content-center">
      <div class="col-11 p-0">
        <div class="card-columns">
          <keep-component
            v-for="keep in keeps"
            :key="keep.id"
            :keepProp="keep"
          />
        </div>
      </div>
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
    this.$store.dispatch("getVaultKeeps", this.$route.params.id, this.profile);
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    keeps() {
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
