<template>
  <div class="flex justify-between">
    <h1 class="text-4xl font-black text-gray-800">Entre na sua conta</h1>
    <button @click="close" class="text-4xl text-gray-600 focus:outline-none">&times;</button>
  </div>
  <div class="flex">
    <form @submit.prevent="handleSubmit">
      <label for="email" class="block">
        <span class="text-lg font-medium text-gray-800 ">Email</span>
        <input id="email" :="state.email.value" type="email"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          :class="{ 'border-brand-danger': !!state.email.errorMessage }">

        <span v-if="!!state.email.errorMessage" class="block font-medium text-brand-danger">
          {{ state.email.errorMessage }}
        </span>
      </label>

      <label for="senha" class="block">
        <span class="text-lg font-medium text-gray-800 ">Email</span>
        <input id="senha" :="state.password.value" type="password"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          :class="{ 'border-brand-danger': !!state.email.errorMessage }">

        <span v-if="!!state.password.errorMessage" class="block font-medium text-brand-danger">
          {{ state.password.errorMessage }}
        </span>
      </label>

      <button :disabled="state.isLoading" type="submit" :class="{ 'opacity-50': state.isLoading }"
        class="px-8 py-3 mt-10 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150">
        Entrar
      </button>
    </form>
  </div>
</template>

<script lang="js">
import { reactive } from 'vue';
import useModal from '../../hooks/useModal';

export default {
  setup() {
    const modal = useModal();
    const state = reactive({
      hasErrors: false,
      isLoading: false,
      email: {
        value: '',
        errorMessage: ''
      },
      password: {
        value: '',
        errorMessage: ''
      }
    })
    return {
      state,
      close: modal.close
    }
  }
}

</script>
