<template>
  <div class="flex justify-between">
    <span class="text-3xl font-black text-gray-800">
      Entre na sua conta
    </span>
    <button @click="close" class="text-3xl text-gray-600 focus:outline-none">&times;</button>
  </div>
  <div class="flex mt-12">
    <form @submit.prevent="handleSubmit" class="w-full">
      <label for="email" class="block">
        <span class="text-lg font-medium text-gray-800 ">Email</span>
        <input id="email" v-model="state.email.value" type="email"
          class="block w-full px-4 py-3 text-lg bg-gray-100 border-2 border-transparent rounded"
          :class="{ 'border-brand-danger': !!state.email.errorMessage }">

        <span v-if="!!state.email.errorMessage" class="block font-medium text-brand-danger">
          {{ state.email.errorMessage }}
        </span>
      </label>

      <label for="senha" class="block pt-5">
        <span class="text-lg font-medium text-gray-800 ">Senha</span>
        <input id="senha" v-model="state.password.value" type="password"
          class="block w-full px-4 py-3 text-lg bg-gray-100 border-2 border-transparent rounded"
          :class="{ 'border-brand-danger': !!state.email.errorMessage }">

        <span v-if="!!state.password.errorMessage" class="block font-medium text-brand-danger pt-3">
          {{ state.password.errorMessage }}
        </span>
      </label>

      <button :disabled="state.isLoading" type="submit" :class="{ 'opacity-50': state.isLoading }"
        class="px-8 py-3 mt-5 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150">
        Entrar
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useField } from 'vee-validate';
import services from "../../services"
import useModal from '../../hooks/useModal';
import {
  validateEmptyAndLength3,
  validateEmptyAndEmail
} from '@/utils/validators.js';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

export default {
  setup() {
    const modal = useModal();
    const router = useRouter();
    const toast = useToast()

    const {
      value: emailValue,
      errorMessage: emailErrorMessage
    } = useField('email', validateEmptyAndEmail)

    const {
      value: passwordValue,
      errorMessage: passwordErrorMessage
    } = useField('password', validateEmptyAndLength3)


    const state = reactive({
      hasErrors: false,
      isLoading: false,
      email: {
        value: emailValue,
        errorMessage: emailErrorMessage
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage
      }
    })

    async function handleSubmit() {
      try {
        toast.clear()
        state.isLoading = true

        const { data, errors } = await services.auth.login({
          email: state.email.value,
          password: state.password.value
        })

        if (!errors) {
          window.localStorage.setItem('token', data.token)
          router.push({
            name: "Feedbacks"
          })
          state.isLoading = false
          modal.close()
          toast.success('Bem vindo')
          return
        }
        if (errors.status === 404) {
          toast.error('E-mail não encontrado')
        }

        if (errors.status === 401) {
          toast.error('Ocorreu um erro ao fazer o login')
        }

        state.isLoading = false
      } catch (error) {
        state.isLoading = false
        state.hasErrors = !!error
        toast.error('Ocorreu um erro ao fazer o login')
      }
    }

    function close() {
      state.email.value = ''
      state.password.value = ''
      modal.close()
    }

    return {
      state,
      close,
      handleSubmit
    }
  }
}

</script>
