<template>
  <div class="modal fade" :id="id" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content" :class="color">
        <!-- <div class="modal-header bg-dark">
          <slot name="header"></slot>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div> -->
        <slot name="body"> </slot>
        <!-- <div class="modal-footer bg-dark">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KeepModal",
  props: {
    id: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "bg-white",
    },
  },
};
</script>

<style scoped></style>
