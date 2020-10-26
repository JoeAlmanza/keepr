<template>
  <div class="create-vault form">
    <h4>Create Vault:</h4>
    <div class="form-group p-2">
      <h5>Title:</h5>
      <input
        type="text"
        v-model="newVault.name"
        class="form-control"
        placeholder="Name..."
      />
    </div>
    <div class="form-group p-2">
      <h5>Description:</h5>
      <input
        type="text"
        v-model="newVault.description"
        class="form-control"
        placeholder="Description..."
      />
    </div>
    <div class="form-group p-2">
      <h5>Private?</h5>
      <input type="checkbox" v-model="newVault.isPrivate" />
    </div>
    <button
      class="btn btn-success m-2"
      @click="createVault"
      data-dismiss="modal"
    >
      Create Vault
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

<style scoped></style>
