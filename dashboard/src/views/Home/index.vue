<template>
  <custom-header @create-account="handleAccountCreate" @login="handleLogin"></custom-header>
  <contact></contact>
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedbacker © 2023</p>
  </div>
</template>

<script lang="js">
import useModal from '../../hooks/useModal'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CustomHeader from './CustomHeader.vue'
import Contact from './Contact.vue'
export default {
  components: { CustomHeader, Contact },
  setup() {
    const router = useRouter();
    const modal = useModal();
    onMounted(() => {
      const token = window.localStorage.getItem("token")
      if (token) {
        router.push({ name: 'Feedbacks' })
      }
    })

    function handleLogin() {
      modal.open({
        component: 'ModalLogin'
      })
    }

    function handleAccountCreate() {
      modal.open({
        component: 'ModalCreateAccount'
      })
    }

    return {
      handleLogin,
      handleAccountCreate
    }
  }
}
</script>
