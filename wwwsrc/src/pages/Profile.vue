<template>
  <div class="profile container-fluid">
    <div class="row my-5 infoRow">
      <div class="col-10 col-md-3 text-center">
        <img class="avatarImg" :src="activeProfile.picture" alt="" />
      </div>
      <div class="col-10 col-md-7">
        <h5 @click="active">Name: {{ activeProfile.name }}</h5>
        <h5>Vaults: {{ vaults.length }}</h5>
        <h5>Keeps: {{ keeps.length }}</h5>
      </div>
    </div>
    <br />
    <h3>
      <u>Vaults</u>:
      <i
        v-if="profile.id == activeProfile.id"
        class="fa fa-plus-square text-success"
        aria-hidden="true"
      ></i>
    </h3>
    <div class="row card-columns justify-content-start">
      <vault-component
        v-for="vault in vaults"
        :key="vault.id"
        :vaultProp="vault"
      />
    </div>

    <h3>
      <u>Keeps</u>:
      <i
        v-if="profile.id == activeProfile.id"
        class="fa fa-plus-square text-success"
        aria-hidden="true"
      ></i>
    </h3>
    <div class="row card-columns justify-content-start">
      <keep-component v-for="keep in keeps" :key="keep.id" :keepProp="keep" />
    </div>
  </div>
</template>

<script>
import vaultComponent from "../components/VaultComponent.vue";
import keepComponent from "../components/KeepComponent.vue";
export default {
  name: "profile",
  data() {
    return {};
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    activeProfile() {
      return this.$store.state.activeProfile;
    },
    vaults() {
      return this.$store.state.profileVaults;
    },
    keeps() {
      return this.$store.state.keeps.filter(
        (k) => k.creatorId == this.activeProfile.id
      );
    },
  },
  mounted() {
    this.$store.dispatch("getActiveProfile", this.$route.params.id);
    this.$store.dispatch("getProfileVaults", this.$route.params.id);
  },
  methods: {
    active() {
      console.log(this.$store.state.activeProfile);
    },
  },
  components: {
    keepComponent,
    vaultComponent,
  },
};
</script>

<style scoped>
.avatarImg {
  max-width: 150px;
  border-radius: 50px;
}
.infoRow {
  height: 23vh;
}
</style>
