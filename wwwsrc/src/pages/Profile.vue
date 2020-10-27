<template>
  <div class="profile container-fluid">
    <h2 class="text-center">
      <u>{{ activeProfile.name }}'s Profile</u>
    </h2>
    <div class="row my-2 infoRow align-items-center">
      <div class="col-10 col-md-3 text-center">
        <img class="avatarImg" :src="activeProfile.picture" alt="" />
      </div>
      <div class="col-10 col-md-7">
        <h5>Name: {{ activeProfile.name }}</h5>
        <h5>Vaults: {{ vaults.length }}</h5>
        <h5>Keeps: {{ keeps.length }}</h5>
      </div>
    </div>
    <br />
    <h3>
      <u>Vaults</u>:
      <i
        v-if="profile.id == activeProfile.id"
        class="fa fa-plus-square text-success linkPointer"
        aria-hidden="true"
        data-toggle="modal"
        :data-target="'#' + 'modal' + 'createVault'"
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
        class="fa fa-plus-square text-success linkPointer"
        aria-hidden="true"
        data-toggle="modal"
        :data-target="'#' + 'modal' + 'createKeep'"
      ></i>
    </h3>
    <div class="row card-columns justify-content-start">
      <keep-component v-for="keep in keeps" :key="keep.id" :keepProp="keep" />
    </div>
    <create-modal :id="'modal' + 'createKeep'">
      <template v-slot:body>
        <create-keep />
      </template>
    </create-modal>
    <create-modal :id="'modal' + 'createVault'">
      <template v-slot:body>
        <create-vault />
      </template>
    </create-modal>
  </div>
</template>

<script>
import CreateModal from "../components/CreateModal.vue";
import CreateVault from "../components/CreateVault.vue";
import CreateKeep from "../components/CreateKeep.vue";
import vaultComponent from "../components/VaultComponent.vue";
import keepComponent from "../components/KeepComponent.vue";
export default {
  name: "profile",
  data() {
    return {
      newKeep: {},
    };
  },
  mounted() {
    this.$store.dispatch("getActiveProfile", this.$route.params.id);
    this.$store.dispatch("getProfileVaults", this.$route.params.id);
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    activeProfile() {
      return this.$store.state.activeProfile;
    },
    vaults() {
      return this.$store.state.profileVaults.filter(
        (v) => v.creatorId == this.activeProfile.id
        // && !v.isPrivate
      );
    },
    keeps() {
      return this.$store.state.keeps.filter(
        (k) => k.creatorId == this.activeProfile.id
      );
    },
    // modalId() {
    //   return "modal" + "createKeep";
    // },
  },
  methods: {},
  components: {
    keepComponent,
    vaultComponent,
    CreateModal,
    CreateKeep,
    CreateVault,
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
.linkPointer {
  cursor: pointer;
}
</style>
