<template>
  <nav class="row navbar navbar-expand-lg navbar-light">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex text-info textShadow">
        <img class="vaultImg" src="../assets/safe.png" alt="" />
        <h1>Keepr</h1>
      </div>
    </router-link>

    <button
      class="navbar-toggler text-right"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse d-flex justify-content-end"
      id="navbarText"
    >
      <span class="navbar-text d-flex p-2">
        <button
          class="btn btn-warning mr-2 text-dark"
          @click="$router.push({ name: 'Profile', params: { id: profile.id } })"
        >
          <i class="fa fa-user" aria-hidden="true"></i>
          Profile
        </button>

        <!-- Consider changing this to a profile picture -->
        <button
          class="btn btn-success"
          @click="login"
          v-if="!$auth.isAuthenticated"
        >
          Login
        </button>
        <button class="btn btn-danger" @click="logout" v-else>
          Logout
        </button>
      </span>
    </div>
  </nav>
</template>

<script>
import { getUserData } from "@bcwdev/auth0-vue";
import { setBearer, resetBearer } from "../services/AxiosService";
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      if (this.$auth.isAuthenticated) {
        setBearer(this.$auth.bearer);
        this.$store.dispatch("getProfile");
      }
    },
    async logout() {
      resetBearer();
      await this.$auth.logout({ returnTo: window.location.origin });
    },
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
};
</script>

<style>
.vaultImg {
  max-height: 48px;
}
.textShadow {
  text-shadow: 1px 1px rgb(0, 0, 0);
}
.navbar {
  background-color: #d6f5ff;
}
.btn {
  box-shadow: 2px 2px 4px #000000;
}
button::active {
  transform: translateY(2px);
}
</style>
