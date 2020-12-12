<template>
  <div id="keep-details">
    <div class="card bgBlack text-light text-center m-0 w-auto" v-if="keep.id">
      <img :src="keep.img" class="card-img-top modalImg" alt="" />
      <div class="card-body">
        <h3 class="card-title text-primary">
          <u>{{ keep.name }}</u>
        </h3>
        <h5 class="card-title">{{ keep.description }}</h5>
        <p>Views: {{ keep.views }} / Keeps: {{ keep.keeps }}</p>
        <button
          class="btn btn-danger mb-2"
          v-if="this.$auth.isAuthenticated && keep.vaultKeepId"
          @click="removeVaultKeep"
        >
          <strong>Remove from </strong> Vault
        </button>

        <button
          class="btn btn-success mb-2"
          v-else-if="this.$auth.isAuthenticated && !keep.vaultKeepId"
          @click="addToggle = !addToggle"
        >
          <strong>Add To Vault</strong>
        </button>
        <div v-if="addToggle">
          <select
            v-model="newVaultKeep.vaultId"
            @change="addVaultKeep"
            class="custom-select"
            id=""
          >
            <option
              :value="vault.id"
              v-for="vault in userVaults"
              :key="vault.id"
              >{{ vault.name }}</option
            >
          </select>
        </div>
        <p class="text-warning mb-1">Posted by: {{ keep.creator.email }}</p>
        <img class="avatarImg" :src="keep.creator.picture" alt="" />
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
  // mounted() {
  //   this.$store.dispatch("getProfileVaults", this.profile.id);
  // },
  watch: {
    profile: function(userProfile) {
      if (userProfile.id) {
        this.$store.dispatch("getProfileVaults", this.profile.id);
      } else {
        router.push({ name: "Home" });
      }
    },
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
    userVaults() {
      return this.$store.state.profileVaults.filter(
        (v) => v.creatorId == this.profile.id
        // && !v.isPrivate
      );
    },
  },
  methods: {
    addVaultKeep() {
      // this.$store.dispatch("updateKeep", this.keep);
      this.$store.dispatch("createVaultKeep", {
        vaultId: this.newVaultKeep.vaultId,
        keepId: this.keep.id,
      });
      this.$router.push({
        name: "Vault",
        params: { id: this.newVaultKeep.vaultId },
      });
      $(".modal-backdrop").hide();
      $(".modal").hide();
    },

    removeVaultKeep() {
      this.$store.dispatch("removeVaultKeep", {
        vaultKeepId: this.keep.vaultKeepId,
        vaultId: this.$route.params.id,
      });
      $(".modal-backdrop").hide();
      $(".modal").hide();
    },
  },
  components: {},
};
</script>

<style scoped>
button {
  border-radius: 10px;
  box-shadow: 1px 1px 4px #000000, -1px -1px 4px #000000;
}
.modalImg {
  width: 550px;
  padding: 10px;
}
.avatarImg {
  max-width: 100px;
}
.bgBlack {
  background-color: black;
}
</style>
