<template>
  <div class="home container-fluid">
    <h1>Welcome</h1>
    <div class="row card-columns">
      <!-- <div class="card-columns col-12 mx-1"> -->
      <keepComponent v-for="keep in keeps" :key="keep.id" :keepProp="keep" />
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import keepComponent from "../components/KeepComponent.vue";
export default {
  name: "home",
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    keeps() {
      return this.$store.state.keeps;
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
  mounted() {
    this.$store.dispatch("getKeeps");
  },
  components: {
    keepComponent,
  },
};
</script>
