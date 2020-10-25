<template>
  <div class="keep-component card col-5 col-lg-2 mx-3 my-2 bg-dark text-light">
    <i
      class="fa fa-times text-danger"
      v-if="profile.id == keepProp.creatorId"
      @click="deleteKeep"
      aria-hidden="true"
    ></i>
    <img class="card-img-top mt-3" :src="keepProp.img" alt="" />
    <div class="card-body p-2">
      <h5 class="my-0" @click="viewProfile">{{ keepProp.name }}</h5>
    </div>
    <div class="card-body p-2">
      <img class="avatarImg" :src="keepProp.creator.picture" alt="" />
      <p class="my-0" @click="viewProfile">
        <small>{{ keepProp.creator.email }}</small>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "keep-component",
  props: ["keepProp"],
  data() {
    return {};
  },
  computed: {
    profile() {
      // console.log(this.$store.state.profile);
      return this.$store.state.profile;
    },
  },
  methods: {
    deleteKeep() {
      this.$store.dispatch("deleteKeep", this.keepProp.id);
    },
    viewProfile() {
      this.$router.push({
        name: "Profile",
        params: { id: this.keepProp.creator.id },
      });
    },
  },
};
</script>
<style scoped>
.avatarImg {
  max-width: 40px;
}
</style>
