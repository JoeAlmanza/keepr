<template>
  <div class="vault-component card mt-1 bg-dark text-light">
    <i
      class="fa fa-times text-danger linkPointer ml-2 textShadow"
      v-if="profile.id == vaultProp.creatorId"
      @click="deleteVault"
      aria-hidden="true"
    ></i>
    <div class="card-body">
      <h5 @click="viewVault" class="linkPointer text-success textShadow">
        {{ vaultProp.name }}
      </h5>
      <p @click="viewVault" class="linkPointer text-info textShadow">
        {{ vaultProp.description }}
      </p>
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

.textShadow {
  text-shadow: 1px 1px rgb(0, 0, 0);
}

.card {
  background-image: url("../assets/vault01.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: inline-block;
  min-width: 163px;
  border: 1px solid black;
  border-radius: 12px;
  box-shadow: 2px 2px 4px #000000;
}
</style>
