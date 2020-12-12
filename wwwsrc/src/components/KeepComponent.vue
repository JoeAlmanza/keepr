<template>
  <div class="keep-component card mt-1 text-light bgBlack">
    <img class="card-img-top" v-bind:src="keepProp.img" alt="Card image cap" />
    <div class="card-body p-1 linkPointer">
      <h5
        class="my-0 textShadow text-info"
        @click="setActive"
        data-toggle="modal"
        :data-target="'#' + modalId"
      >
        {{ keepProp.name }}
      </h5>
    </div>
    <div class="card-body p-1 d-flex justify-content-between">
      <i
        class="fa fa-user-circle-o linkPointer textShadow text-warning"
        @click="viewProfile"
        aria-hidden="true"
      >
      </i>
      <i
        class="fa fa-trash text-danger textShadow p-1 linkPointer"
        v-if="profile.id == keepProp.creatorId"
        @click="deleteKeep"
        aria-hidden="true"
      ></i>
    </div>

    <keep-modal :id="modalId">
      <template v-slot:body>
        <keep-details />
      </template>
    </keep-modal>
  </div>
</template>

<script>
import KeepModal from "./KeepModal.vue";
import KeepDetails from "./KeepDetails.vue";
export default {
  name: "keep-component",
  props: ["keepProp"],
  data() {
    return {};
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    modalId() {
      return "modal" + this.keepProp.id;
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
    setActive() {
      // this.$store.dispatch("updateKeep", this.keepProp);
      this.$store.dispatch("setActiveKeep", this.keepProp);
    },
  },
  components: {
    KeepModal,
    KeepDetails,
  },
};
</script>
<style scoped>
.linkPointer {
  cursor: pointer;
}

.card-img-top {
  border-radius: 12px 12px 0px 0px;
}

.card {
  display: inline-block;
  min-width: 163px;
  border: 2px solid black;
  border-radius: 12px;
  box-shadow: 2px 2px 4px #000000, -2px -2px 4px #000000;
}
.textShadow {
  text-shadow: 1px 1px rgb(0, 0, 0);
}
.bgBlack {
  background-color: black;
}
</style>
