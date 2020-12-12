<template>
  <div class="profile container-fluid text-dark">
    <div class="row my-2 infoRow justify-content-center mb-5">
      <div class="col-12 col-md-7 textShadow text-info text-center">
        <img class="avatarImg" :src="activeProfile.picture" alt="" />
        <h3 class="text-center text-primary textShadow mt-4">
          {{ activeProfile.name }}
        </h3>
        <div class="d-flex justify-content-center">
          <h4 class="text-dark mr-2"><strong>Vaults:</strong></h4>
          <h4>{{ vaults.length }}</h4>
        </div>
        <div class="d-flex justify-content-center">
          <h4 class="text-dark mr-2"><strong>Keeps:</strong></h4>
          <h4>{{ keeps.length }}</h4>
        </div>
      </div>
    </div>
    <br />
    <h3 class="mt-3 text-dark textShadow">
      <u>Vaults</u>:
      <i
        v-if="profile.id == activeProfile.id"
        class="fa fa-plus-square text-info linkPointer textShadow"
        aria-hidden="true"
        data-toggle="modal"
        :data-target="'#' + 'modal' + 'createVault'"
      ></i>
    </h3>
    <div class="row justify-content-center">
      <div class="col-11 p-0">
        <div class="card-columns">
          <vault-component
            v-for="vault in vaults"
            :key="vault.id"
            :vaultProp="vault"
          />
        </div>
      </div>
    </div>

    <h3 class="text-dark textShadow">
      <u>Keeps</u>:
      <i
        v-if="profile.id == activeProfile.id"
        class="fa fa-plus-square text-info linkPointer textShadow"
        aria-hidden="true"
        data-toggle="modal"
        :data-target="'#' + 'modal' + 'createKeep'"
      ></i>
    </h3>
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
  },

  mounted() {
    this.$store.dispatch("getActiveProfile", this.$route.params.id);
    this.$store.dispatch("getProfileVaults", this.$route.params.id);
    this.$store.dispatch("getKeeps");
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
  box-shadow: 2px 2px 4px #000000;
}
.infoRow {
  height: 23vh;
}
.linkPointer {
  cursor: pointer;
}
.textShadow {
  text-shadow: 1px 1px 2px rgb(0, 0, 0);
}
</style>
