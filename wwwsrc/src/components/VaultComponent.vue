<template>
  <div class="vault-component card col-5 col-lg-3 ml-3 my-2 bg-dark text-light">
    <i
      class="fa fa-times text-danger"
      v-if="profile.id == vaultProp.creatorId"
      @click="deleteVault"
      aria-hidden="true"
    ></i>
    <div class="card-body">
      <h5>{{ vaultProp.name }}</h5>
      <p>{{ vaultProp.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "vault-component",
  props: ["vaultProp"],
  data() {
    return {};
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    deleteVault() {
      this.$store.dispatch("deleteVault", this.vaultProp);
    },
  },
  components: {},
};
</script>

<style scoped></style>
