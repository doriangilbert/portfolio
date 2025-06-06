<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>

<template>
  <header class="font-poppins w-full bg-[#1A2D4F] py-4 text-white">
    <div class="container mx-auto flex items-center justify-between px-4">
      <h1 class="text-2xl font-semibold">Dorian GILBERT</h1>
      <div class="flex gap-2">
        <button
          class="rounded px-2 py-1 transition hover:bg-[#203864]"
          :class="{ 'bg-white text-[#1A2D4F]': locale === 'fr' }"
          @click="locale = 'fr'"
        >
          FR
        </button>
        <button
          class="rounded px-2 py-1 transition hover:bg-[#203864]"
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
