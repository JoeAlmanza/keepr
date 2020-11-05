<template>
  <div class="home container-fluid">
    <div class="row justify-content-center">
      <div class="col-11 p-0">
        <div class="card-columns">
          <keepComponent
            v-for="keep in keeps"
            :key="keep.id"
            :keepProp="keep"
          />
        </div>
      </div>
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
  // watch: {
  //   profile: function(userProfile) {
  //     if (userProfile.id) {
  //       this.$store.dispatch("getProfileVaults", this.profile.id);
  //     } else {
  //       router.push({ name: "Home" });
  //     }
  //   },
  // },
  mounted() {
    this.$store.dispatch("getKeeps");
  },
  components: {
    keepComponent,
  },
};
</script>
<style scoped></style>
