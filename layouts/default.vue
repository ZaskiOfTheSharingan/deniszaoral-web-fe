<template>
  <div :class="{ dark: darkMode }" class="flex flex-row">
    <div class="w-full h-full">
      <header class="shadow-[1px_5px_15px_0px_rgba(0,0,0,0.75)]">
        <div
          class="z-50 flex flex-row justify-between h-[50px] ease-it duration-300 bg-sky-300 dark:bg-slate-900 px-5"
        >
          <div class="self-center">
            <NuxtLink class="text-2xl dark:text-gray-200" to="/"
              >Denis Zaoral</NuxtLink
            >
          </div>
          <div class="self-center dark:text-gray-200" v-if="isDesktop">
            <NuxtLink to="/">Domov</NuxtLink>
            <NuxtLink to="/blog">Blog</NuxtLink>
            <NuxtLink to="/contactMe">Kontakt</NuxtLink>
            <NuxtLink to="/aboutMe">O mně</NuxtLink>
          </div>
          <div class="self-center h-8" v-if="!isDesktop">
            <button type="button" @click="burgerMenuIsOpen = !burgerMenuIsOpen">
              <BurgerIcon />
            </button>
          </div>
          <div v-if="isDesktop" class="self-center dark:text-gray-200">
            <button class="btn" @click="toggleDarkMode">
              {{ darkMode ? 'Tmavý' : 'Světlý' }}
            </button>
          </div>
        </div>
        <div
          v-show="burgerMenuIsOpen"
          class="w-full bg-sky-200 ease-it duration-200 dark:bg-slate-600"
        >
          <div class="flex flex-col text-center py-8 justify-between">
            <div class="flex flex-col gap-4 dark:text-gray-200">
              <NuxtLink to="/">Domov</NuxtLink>
              <NuxtLink to="/blog">Blog</NuxtLink>
              <NuxtLink to="/contactMe">Kontakt</NuxtLink>
              <NuxtLink to="/aboutMe">O mně</NuxtLink>
              <div>
                <button
                  class="outline outline-1 outline-sky-700 ease-it duration-200 dark:outline-slate-700 w-16 rounded-lg"
                  @click="toggleDarkMode"
                >
                  {{ darkMode ? 'Tmavý' : 'Světlý' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main
        :class="{ dark: darkMode }"
        class="px-8 h-auto bg-sky-100 ease-it duration-200 dark:bg-slate-100"
      >
        <Nuxt />
      </main>
      <footer
        class="bg-sky-800 text-gray-300 ease-it duration-200 dark:bg-slate-800"
      >
        <p>Vytvořil Denis Zaoral</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
      burgerMenuIsOpen: false,
      windowWidth: 0,
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
      console.log(this.isDesktop)
    })
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
  },
  computed: {
    isDesktop() {
      return this.windowWidth >= 1024
    },
  },
}
</script>
