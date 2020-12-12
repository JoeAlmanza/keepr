<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <div class="d-flex text-primary textShadow">
        <img class="vaultImg ml-3 mr-1" src="../assets/vault.png" alt="" />
        <h1><strong>Keepr</strong></h1>
      </div>
      <div class="ml-3">
        <h5>Save and share!</h5>
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
      <span class="navbar-text d-flex p-2 mr-2">
        <button
          class="btn btn-warning mr-2 text-dark"
          @click="$router.push({ name: 'Profile', params: { id: profile.id } })"
        >
          <i class="fa fa-user" aria-hidden="true"></i>
          <strong>Profile</strong>
        </button>

        <!-- Consider changing this to a profile picture -->
        <button
          class="btn btn-success"
          @click="login"
          v-if="!$auth.isAuthenticated"
        >
          <strong>Login </strong>
        </button>
        <button class="btn btn-danger" @click="logout" v-else>
          <strong>Logout </strong>
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
  box-shadow: 2px 2px 4px black;
  border-radius: 50%;
  border: 1px solid black;
  max-height: 48px;
}
.textShadow {
  text-shadow: 2px 2px 3px rgb(0, 0, 0);
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
