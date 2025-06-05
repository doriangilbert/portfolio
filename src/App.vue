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
    class="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#203864] text-white font-poppins px-4 md:px-0"
  >
    <div class="hidden md:block mb-8 md:mb-0 md:mr-10">
      <img
        :src="`${base}portrait.jpg`"
        alt="Portrait"
        class="w-64 h-64 rounded-full shadow-lg mx-auto"
      />
    </div>
    <div class="w-full md:w-auto flex flex-col items-center md:items-start">
      <h1 class="text-3xl font-semibold mb-2">Dorian GILBERT</h1>
      <p
        v-html="t('about.description')"
        class="text-lg mb-6 max-w-md text-center md:text-left"
      ></p>
      <a
        :href="`${base}GILBERT_Dorian_CV.pdf`"
        target="_blank"
        class="w-full text-xl bg-white text-[#203864] px-6 py-3 rounded font-bold hover:bg-gray-200 transition flex items-center justify-center shadow-lg mb-4"
      >
        <img src="./assets/download-solid.svg" alt="CV" class="w-5 h-5 mr-3" />
        CV
      </a>
      <div class="flex flex-col md:flex-row gap-y-3 md:gap-4 w-full">
        <a
          href="mailto:doriangilbert.pro@gmail.com"
          class="flex-1 bg-white text-[#203864] px-4 py-2 rounded font-semibold hover:bg-gray-200 transition flex items-center justify-center"
        >
          <img
            src="./assets/envelope-solid.svg"
            alt="Email"
            class="w-4 h-4 mr-2"
          />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/dorian-gilbert/"
          target="_blank"
          class="flex-1 bg-white text-[#203864] px-4 py-2 rounded font-semibold hover:bg-gray-200 transition flex items-center justify-center"
        >
          <img
            src="./assets/linkedin-brands.svg"
            alt="LinkedIn"
            class="w-4 h-4 mr-2"
          />
          LinkedIn
        </a>
        <a
          href="https://github.com/doriangilbert"
          target="_blank"
          class="flex-1 bg-white text-[#203864] px-4 py-2 rounded font-semibold hover:bg-gray-200 transition flex items-center justify-center"
        >
          <img
            src="./assets/github-brands.svg"
            alt="GitHub"
            class="w-4 h-4 mr-2"
          />
          GitHub
        </a>
      </div>
    </div>
  </div>
  <Footer />
</template>
