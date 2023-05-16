<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div
      class="max-w-screen-xl m-0 sm:m-20 bg-white shadow rounded-lg flex justify-center flex-1"
    >
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div>
          <img src="../assets/logo.svg" class="w-32 mx-auto" />
        </div>
        <div class="flex flex-col items-center">
          <h1 class="text-2xl xl:text-3xl font-extrabold">Bienvenido</h1>
          <!-- validation questioanrie -->
          <div class="w-full flex-1 mt-8">
            <div class="my-12 border-b text-center">
              <div
                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
              >
                Ingresa tus datos
              </div>
            </div>

            <form @submit="onSubmit" class="mx-auto max-w-xs">
              <Field
                name="email"
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                placeholder="Correo electronico"
              ></Field>
              <ErrorMessage name="email"></ErrorMessage>

              <Field
                name="password"
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password"
                placeholder="Contraseña"
              ></Field>
              <ErrorMessage name="password"></ErrorMessage>

              <button
                type="submit"
                class="mt-5 tracking-wide font-semibold bg-[#42b883] text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <svg
                  class="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span class="ml-3"> Iniciar Sesion </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        class="flex-1 hidden bg-[#35495e] text-center rounded-r-lg lg:flex justify-center items-center"
      >
        <img width="450" src="../assets/undraw_web_shopping_re_owap.svg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as yup from "yup";
import { Field, ErrorMessage, Form, useForm } from "vee-validate";
import { make_login } from "../services/auth.service";

const validationSchema = yup.object().shape({
  email: yup.string().required("Email requerido").email("Carreo invalido"),
  password: yup.string().required("Password requerida"),
})
const {handleSubmit} = useForm({
  initialValues: {
    email: '',
    password: ''
  },
  validationSchema
})
const onSubmit = handleSubmit(async(values) => {
  console.log("hola");
  const {token} = await make_login(values)

  console.log(token);
});
</script>

<style lang="scss"></style>
