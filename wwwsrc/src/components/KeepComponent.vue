<template>
  <div class="keep-component card">
    <i
      class="fa fa-times text-danger"
      v-if="profile.id == keepProp.creatorId"
      @click="deleteKeep"
      aria-hidden="true"
    ></i>
    <img :src="keepProp.img" class="card-img-top" alt="" />
    <div class="card-body">
      <h3>{{ keepProp.name }}</h3>
      <p>{{ keepProp.description }}</p>
      <p @click="viewProfile">{{ keepProp.creator.email }}</p>
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
>
