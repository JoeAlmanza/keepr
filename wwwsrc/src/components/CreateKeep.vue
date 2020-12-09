<template>
  <div class="create-keep form">
    <h4>Create Keep:</h4>
    <div class="form-group p-2">
      <h5>Title:</h5>
      <input
        type="text"
        v-model="newKeep.name"
        class="form-control"
        placeholder="Name..."
      />
    </div>
    <div class="form-group p-2">
      <h5>Description:</h5>
      <input
        type="text"
        v-model="newKeep.description"
        class="form-control"
        placeholder="Description..."
      />
    </div>
    <div class="form-group p-2">
      <h5>Image URL:</h5>
      <input type="text" v-model="newKeep.img" placeholder="IMG Url..." />
    </div>
    <button
      class="btn btn-success m-2"
      @click="createKeep"
      data-dismiss="modal"
    >
      Create Keep
    </button>
  </div>
</template>

<script>
export default {
  name: "create-keep",
  data() {
    return {
      newKeep: {},
    };
  },
  computed: {},
  methods: {
    createKeep() {
      this.$store.dispatch("createKeep", this.newKeep);
      this.newKeep = {};
    },
  },
  components: {},
};
</script>

<style scoped>
button {
  border-radius: 10px;
  box-shadow: 1px 1px 4px #000000, -1px -1px 4px #000000;
}
</style>
