<template>
  <div class="create-vault form bgBlack text-light">
    <h4 class="ml-2"><u>Create Vault</u>:</h4>
    <div class="form-group p-2 text-info">
      <h5>Title:</h5>
      <input
        type="text"
        v-model="newVault.name"
        class="form-control"
        placeholder="Name..."
      />
    </div>
    <div class="form-group p-2 text-info">
      <h5>Description:</h5>
      <input
        type="text"
        v-model="newVault.description"
        class="form-control"
        placeholder="Description..."
      />
    </div>
    <div class="form-group p-2 text-info">
      <h5>Private?</h5>
      <input type="checkbox" v-model="newVault.isPrivate" />
    </div>
    <button
      class="btn btn-success ml-2 mb-3"
      @click="createVault"
      data-dismiss="modal"
    >
      <strong>Create Vault</strong>
    </button>
  </div>
</template>

<script>
export default {
  name: "create-vault",
  data() {
    return {
      newVault: {},
    };
  },
  computed: {},
  methods: {
    createVault() {
      this.$store.dispatch("createVault", this.newVault);
      this.newVault = {};
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
