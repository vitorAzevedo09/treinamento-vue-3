<template>
  <modal-factory />
  <RouterView />
</template>

<script lang="js">
import ModalFactory from "@/components/ModalFactory/"
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import services from "./services";
import { setCurrentUser } from './store/user.js'
export default {
  components: { ModalFactory },
  setup() {
    const route = useRoute()
    const router = useRouter()

    watch(() => route.path, async () => {
      if (route.meta.hasAuth) {
        const token = window.localStorage.getItem('token')
        if (!token) {
          router.push({ name: 'Home' })
          return
        }

        const { data } = await services.user.getMe()
        setCurrentUser(data)
      }
    })
  }
}
</script>
