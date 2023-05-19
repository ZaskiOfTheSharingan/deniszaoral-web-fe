<template>
  <div class="py-12 h-full">
    <IndexHero />
    <div class="mt-8">
      <h2 class="font-bold text-3xl">
        Kontaktujte mě a získejte odpovědi na vaše dotazy - Jsem tu pro vás!
      </h2>
      <p class="text-xl my-5">
        Rádi bychom vás pozvali k navštívení naší stránky, kde najdete všechny
        důležité informace, včetně možnosti kontaktovat nás. Jsme tu, abychom
        vám pomohli a zodpověděli veškeré dotazy, které byste mohli mít.
        <NuxtLink to="/contactMe" class="font-bold underline text-blue-500"
          >Zde</NuxtLink
        >
        najdete náš kontaktní formulář, kde můžete poslat přímou zprávu. Také
        můžete získat naše telefonní číslo a e-mailovou adresu, abyste nás mohli
        kontaktovat přímo. Budeme se těšit na vaši zpětnou vazbu a příležitost
        vám pomoci!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
