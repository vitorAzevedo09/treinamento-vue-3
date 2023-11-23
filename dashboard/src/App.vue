<template>
  <modal-factory />
  <RouterView />
</template>

<script lang="js">
import ModalFactory from "./components/ModalFactory/index.vue"
export default {
  components: { ModalFactory }
}
</script>
