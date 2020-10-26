<template>
  <div class="keep-component card col-5 col-lg-2 mx-3 my-2 bg-dark text-light">
    <i
      class="fa fa-times text-danger linkPointer"
      v-if="profile.id == keepProp.creatorId"
      @click="deleteKeep"
      aria-hidden="true"
    ></i>
    <img
      class="card-img-top mt-3 linkPointer"
      @click="setActive"
      :src="keepProp.img"
      data-toggle="modal"
      :data-target="'#' + modalId"
      alt=""
    />
    <div class="card-body p-2 linkPointer">
      <h5
        class="my-0"
        @click="setActive"
        data-toggle="modal"
        :data-target="'#' + modalId"
      >
        {{ keepProp.name }}
      </h5>
    </div>
    <div class="card-body p-2">
      <img
        class="avatarImg linkPointer"
        :src="keepProp.creator.picture"
        @click="viewProfile"
        alt=""
      />
      <p class="my-0 linkPointer" @click="viewProfile">
        <small>{{ keepProp.creator.email }}</small>
      </p>
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
      // console.log(this.$store.state.profile);
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
      this.$store.dispatch("setActiveKeep", this.keepProp);
      console.log();
    },
  },
  components: {
    KeepModal,
    KeepDetails,
  },
};
</script>
<style scoped>
.avatarImg {
  max-width: 40px;
}
.linkPointer {
  cursor: pointer;
}
</style>
