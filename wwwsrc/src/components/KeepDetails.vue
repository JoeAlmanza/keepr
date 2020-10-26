<template>
  <div id="keep-details">
    <div class="card bg-dark text-light text-center m-0" v-if="keep.id">
      <img :src="keep.img" class="card-img-top modalImg" alt="" />
      <div class="card-body">
        <h3 class="card-title">{{ keep.name }}</h3>
        <h5 class="card-title">{{ keep.description }}</h5>
        <p>{{ keep.creator.email }}</p>
        <p>Views: {{ keep.views }}, Keeps: {{ keep.keeps }}</p>
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
  name: "keep-details",
  data() {
    return {};
  },
  computed: {
    keep() {
      return this.$store.state.activeKeep;
    },
  },
  methods: {},
  components: {},
};
</script>

<style scoped>
.modalImg {
  max-width: 300px;
}
</style>
