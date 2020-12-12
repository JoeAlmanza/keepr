<template>
  <div class="home container-fluid">
    <div class="row justify-content-center text-light h-100">
      <div class="col-11 p-0 mt-4">
        <div class="card-columns h-100">
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
<style scoped>
.container-fluid {
  height: 100vh;
}
</style>
