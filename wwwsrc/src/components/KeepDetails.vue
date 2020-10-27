<template>
  <div id="keep-details">
    <div class="card bg-dark text-light text-center m-0" v-if="keep.id">
      <img :src="keep.img" class="card-img-top modalImg" alt="" />
      <div class="card-body">
        <h3 class="card-title">{{ keep.name }}</h3>
        <h5 class="card-title">{{ keep.description }}</h5>
        <p>{{ keep.creator.email }}</p>
        <img :src="keep.creator.picture" alt="" />
        <p>Views: {{ keep.views }}, Keeps: {{ keep.keeps }}</p>
        <button
          class="btn btn-success"
          v-if="this.$auth.isAuthenticated && !keep.vaultKeepId"
          @click="addToggle = !addToggle"
        >
          Add To Vault
        </button>
        <button
          class="btn btn-danger"
          v-if="this.$auth.isAuthenticated && keep.vaultKeepId"
          @click="removeVaultKeep"
        >
          Remove from Vault
        </button>
      </div>
      <div v-if="addToggle">
        <select
          v-model="newVaultKeep.vaultId"
          @change="addVaultKeep"
          class="custom-select"
          id=""
        >
          <option :value="vault.id" v-for="vault in vaults" :key="vault.id">{{
            vault.name
          }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "keep-details",
  data() {
    return {
      addToggle: false,
      newVaultKeep: {},
    };
  },
  mounted() {
    this.$store.dispatch("getProfileVaults", this.profile.id);
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    keep() {
      return this.$store.state.activeKeep;
    },
    vaults() {
      return this.$store.state.profileVaults;
    },
  },
  watch: {
    profile: function(userProfile) {
      if (userProfile.id) {
        this.$store.dispatch("getProfileVaults", this.profile.id);
      } else {
        router.push({ name: "Home" });
      }
    },
  },
  methods: {
    addVaultKeep() {
      this.$store.dispatch("createVaultKeep", {
        vaultId: this.newVaultKeep.vaultId,
        keepId: this.keep.id,
      });
      this.$router.push({
        name: "Vault",
        params: { id: this.newVaultKeep.vaultId },
      });
      this.keep.keeps += 1;
      this.$store.dispatch("updateKeep", this.keep);
      $(".modal-backdrop").hide();
      $(".modal").hide();
    },

    removeVaultKeep() {
      this.$store.dispatch("removeVaultKeep", {
        vaultKeepId: this.keep.vaultKeepId,
        vaultId: this.$route.params.id,
      });
    },
  },
  components: {},
};
</script>

<style scoped>
.modalImg {
  max-width: 300px;
}
</style>
