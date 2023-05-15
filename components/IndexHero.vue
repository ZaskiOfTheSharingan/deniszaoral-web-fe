<template>
  <div class="flex flex-col align-middle justify-center gap-5 h-full">
    <div>
      <h2 class="font-bold text-3xl">Ahoj!</h2>
      <p>
        Jsem absolventem elektrotechnické školy v oboru IT s bohatými
        zkušenostmi v vývoji webových aplikací. Specializuji se na práci s
        frameworkem Nuxt pro tvorbu moderních a výkonných webů. Dále mám
        zkušenosti s testováním softwaru. Kromě toho se také věnuji vývoji
        mobilních aplikací pomocí React Native a desktopových aplikací pomocí
        Electronu a WPF. Mým cílem je vytvářet uživatelsky přívětivé a
        spolehlivé aplikace, které splňují nejvyšší standardy.
      </p>
    </div>
    <div>
      <h2 class="font-bold text-3xl">Moje služby</h2>
    </div>
    <div class="flex flex-col items-center gap-5 h-full md:grid md:grid-cols-3">
      <div
        class="card-shadow w-full p-5 bg-sky-50 rounded-lg max-w-lg dark:bg-slate-50"
      >
        <div class="min-w-[128px] min-h-[112px]">
          <img src="../assets/img/438820-200.png" class="w-full" />
        </div>
        <div>
          <h3 class="font-bold text-2xl text-center">Tvorba Webových Řešení</h3>
        </div>
      </div>
      <div
        class="card-shadow w-full p-5 bg-sky-50 rounded-lg max-w-lg dark:bg-slate-50"
      >
        <div class="min-w-[128px] min-h-[112px]">
          <img
            src="../assets/img/free-mobile-application-icon-2645-thumb.png"
            class="w-full"
          />
        </div>
        <div>
          <h3 class="font-bold text-2xl text-center">
            Vývoj Mobilních Aplikací
          </h3>
        </div>
      </div>
      <div
        class="card-shadow w-full p-5 bg-sky-50 rounded-lg max-w-lg dark:bg-slate-50"
      >
        <div class="min-w-[128px] min-h-[112px]">
          <img src="../assets/img/281400-200.png" class="w-full" />
        </div>
        <div>
          <h3 class="font-bold text-2xl text-center">
            Desktopové Aplikace na míru
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.card-shadow {
  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.75);
}
</style>
