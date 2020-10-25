<template>
  <div id="keep-details">
    <div class="card" v-if="keep.id">
      <img :src="keep.img" class="card-img-top" alt="" />
      <div class="card-body">
        <h3 class="card-title">{{ keep.name }}</h3>
        <h5 class="card-title">{{ keep.description }}</h5>
        <p>{{ keep.creator.email }}</p>
        <button
          class="btn btn-success"
          v-if="this.$auth.isAuthenticated"
          @click="addToggle = !addToggle"
        >
          Add To Vault
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KeepDetails",
  data() {
    return {};
  },
  computed: {
    keep() {
      return this.$store.state.activeKeep;
    },
    methods: {},
    components: {},
  },
};
</script>

<style scoped></style>
