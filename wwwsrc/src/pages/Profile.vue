<template>
  <div class="profile container-fluid">
    <h1>{{ activeProfile.name }}'s Profile</h1>
    <div class="row">
      <h1>
        Vaults<i
          v-if="profile.id == activeProfile.id"
          class="fa fa-plus-square"
          aria-hidden="true"
        ></i>
      </h1>
    </div>

    <div class="row">
      <h1>
        Keeps<i
          v-if="profile.id == activeProfile.id"
          class="fa fa-plus-square"
          aria-hidden="true"
        ></i>
      </h1>
      <div class="card-columns">
        <keep-component v-for="keep in keeps" :key="keep.id" :keepProp="keep" />
      </div>
    </div>
  </div>
</template>

<script>
import keepComponent from "../components/KeepComponent.vue";
export default {
  name: "profile",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getProfileKeeps", this.$route.params.id);
    this.$store.dispatch("getProfileVaults", this.$route.params.id);
    this.$store.dispatch("getActiveProfile", this.$route.params.id);
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
      return this.$store.state.profileKeeps;
    },
  },
  methods: {},
  components: {
    keepComponent,
  },
};
</script>

<style scoped></style>
