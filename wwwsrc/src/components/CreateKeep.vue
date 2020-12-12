<template>
  <div class="create-keep form bgBlack text-light">
    <h4 class="m-2"><u>New Keep</u>:</h4>
    <div class="form-group p-2 text-info">
      <h5>Title:</h5>
      <input
        type="text"
        v-model="newKeep.name"
        class="form-control"
        placeholder="Name..."
      />
    </div>
    <div class="form-group p-2 text-info">
      <h5>Description:</h5>
      <input
        type="text"
        v-model="newKeep.description"
        class="form-control"
        placeholder="Description..."
      />
    </div>
    <div class="form-group p-2 text-info">
      <h5>Image URL:</h5>
      <input
        type="text"
        v-model="newKeep.img"
        class="form-control"
        placeholder="IMG Url..."
      />
    </div>
    <button
      class="btn btn-success mx-2 mb-3"
      @click="createKeep"
      data-dismiss="modal"
    >
      <strong>Create Keep</strong>
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
.bgBlack {
  background-color: black;
}
</style>
