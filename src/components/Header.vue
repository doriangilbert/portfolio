<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>

<template>
  <header class="w-full bg-[#1A2D4F] text-white py-4 font-poppins">
    <div class="container mx-auto flex items-center justify-between px-4">
      <h1 class="text-2xl font-semibold">Dorian GILBERT</h1>
      <div class="flex gap-2">
        <button
          class="px-2 py-1 rounded hover:bg-[#203864] transition"
          :class="{ 'bg-white text-[#1A2D4F]': locale === 'fr' }"
          @click="locale = 'fr'"
        >
          FR
        </button>
        <button
          class="px-2 py-1 rounded hover:bg-[#203864] transition"
          :class="{ 'bg-white text-[#1A2D4F]': locale === 'en' }"
          @click="locale = 'en'"
        >
          EN
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
