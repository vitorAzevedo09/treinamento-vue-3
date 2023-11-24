<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged />
  </div>
  <div class="flex flex-col items-center justify-center h-64 bg-brand-gray">
    <h1 class="text-4xl font-black text-center text-gray-800">
      Crendenciais
    </h1>
    <p class="text-xl text-center text-gray-800 font-regular">
      Guia de instalação e geração de suas credenciais
    </p>
  </div>
</template>

<script>
import HeaderLogged from "../../components/HeaderLogged/index.vue"
export default {
  components: {
    HeaderLogged
  },
  setup() {
    return {}
  }
}
</script>
