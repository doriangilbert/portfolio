<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useI18n } from "vue-i18n";

const base = import.meta.env.BASE_URL;
const { t } = useI18n();
</script>

<template>
  <Header />
  <div
    class="font-poppins flex min-h-screen flex-col items-center justify-center bg-[#203864] px-4 text-white lg:flex-row lg:px-0"
  >
    <div class="my-5 flex justify-center md:m-10">
      <img
        :src="`${base}portrait.jpg`"
        alt="Portrait"
        class="mx-auto aspect-square h-40 w-40 rounded-full object-cover shadow-lg md:h-60 md:w-60 lg:h-80 lg:w-80"
      />
    </div>
    <div
      class="m-5 flex w-full flex-col items-center md:m-10 md:w-auto md:items-start"
    >
      <h1 class="mb-2 text-center text-5xl font-semibold md:text-left">
        Dorian GILBERT
      </h1>
      <p
        v-html="t('about.description')"
        class="mb-6 w-full max-w-xl text-center text-lg md:text-left"
      ></p>
      <a
        :href="`${base}GILBERT_Dorian_CV.pdf`"
        target="_blank"
        rel="noopener"
        class="mb-4 flex w-full items-center justify-center rounded bg-white px-6 py-3 text-xl font-bold text-[#203864] shadow-lg transition hover:bg-gray-200"
      >
        <img src="./assets/download-solid.svg" alt="CV" class="mr-3 h-5 w-5" />
        CV
      </a>
      <div class="flex w-full flex-col gap-y-3 md:flex-row md:gap-4">
        <a
          href="mailto:doriangilbert.pro@gmail.com"
          class="flex flex-1 items-center justify-center rounded bg-white px-4 py-2 font-semibold text-[#203864] transition hover:bg-gray-200"
        >
          <img
            src="./assets/envelope-solid.svg"
            alt="Email"
            class="mr-2 h-4 w-4"
          />
          doriangilbert.pro@gmail.com
        </a>
        <a
          href="tel:+33651008884"
          class="flex flex-1 items-center justify-center rounded bg-white px-4 py-2 font-semibold text-[#203864] transition hover:bg-gray-200 md:hidden"
        >
          <img
            src="./assets/phone-solid.svg"
            alt="Telephone"
            class="mr-2 h-4 w-4"
          />
          +33 6 51 00 88 84
        </a>
        <a
          href="https://www.linkedin.com/in/dorian-gilbert/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          class="flex flex-1 items-center justify-center rounded bg-white px-4 py-2 font-semibold text-[#203864] transition hover:bg-gray-200"
        >
          <img
            src="./assets/linkedin-brands.svg"
            alt="LinkedIn"
            class="mr-2 h-4 w-4"
          />
          LinkedIn
        </a>
        <a
          href="https://github.com/doriangilbert"
          target="_blank"
          rel="noopener noreferrer nofollow"
          class="flex flex-1 items-center justify-center rounded bg-white px-4 py-2 font-semibold text-[#203864] transition hover:bg-gray-200"
        >
          <img
            src="./assets/github-brands.svg"
            alt="GitHub"
            class="mr-2 h-4 w-4"
          />
          GitHub
        </a>
      </div>
    </div>
  </div>
  <Footer />
</template>
