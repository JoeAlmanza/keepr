<template>
  <div class="vault-component card mt-1 bg-dark text-light">
    <i
      class="fa fa-times text-danger linkPointer"
      v-if="profile.id == vaultProp.creatorId"
      @click="deleteVault"
      aria-hidden="true"
    ></i>
    <div class="card-body">
      <h5 @click="viewVault" class="linkPointer">{{ vaultProp.name }}</h5>
      <p @click="viewVault" class="linkPointer">{{ vaultProp.description }}</p>
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
    viewVault() {
      if (
        !this.vaultProp.isPrivate ||
        this.vaultProp.creatorId == this.profile.id
      ) {
        this.$router.push({
          name: "Vault",
          params: { id: this.vaultProp.id },
        });
      }
      return "This vault is private!";
    },
  },
  components: {},
};
</script>

<style scoped>
.linkPointer {
  cursor: pointer;
}

.card {
  display: inline-block;
  min-width: 163px;
}
</style>
