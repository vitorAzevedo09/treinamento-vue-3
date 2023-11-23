<template>
  <teleport to="body">
    <div v-if="state.isActive" @click="handleModalToogle({ status: false })"
      class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div :class="state.width"
        class="flex flex-col overflow-hidden bg-white rounded-lg animate__animated animate__fadeInDown animate__faster">
        <div class="flex flex-col px-12 py-10 bg-white">
          <component :is="state.component"></component>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script lang="js">
import { defineAsyncComponent, onBeforeUnmount, onMounted, reactive } from 'vue'
import useModal from '../../hooks/useModal'

const ModalLogin = defineAsyncComponent(() => import('../ModalLogin/index.vue'))

const DEFAULT_WIDTH = 'w-3/4 lg:w-1/3'

export default {
  components: {
    ModalLogin
  },
  setup() {
    const modal = useModal()
    const state = reactive({
      isActive: false,
      component: {},
      props: {},
      width: DEFAULT_WIDTH,
    })

    onMounted(() => {
      modal.listen(handleModalToogle)
    })

    onBeforeUnmount(() => {
      modal.off(handleModalToogle)
    })

    function handleModalToogle(payload) {
      if (payload.status) {
        state.component = payload.component
        state.props = payload.props
        state.width = payload.width ?? DEFAULT_WIDTH
      } else {
        state.component = {}
        state.props = {}
        state.width = DEFAULT_WIDTH
      }
      state.isActive = payload.status
    }
    return {
      handleModalToogle,
      state
    }
  }
}
</script>
