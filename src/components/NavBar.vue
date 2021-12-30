<template>
  <header
    class="
      bg-white/60
      backdrop-blur-2xl
      border-[.5]
      dark:border-black
      dark:bg-black/60
      rounded-b-sm
      shadow-md
      pt-4
      px-8
      pb-2
      sm:px-10
      w-screen
      z-10
      fixed
    "
  >
    <div class="container mx-auto flex justify-between items-center">
      <span class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          viewBox="0 0 24 24"
          width="36px"
          fill="#e54545"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
          />
        </svg>
        <p class="text-xl font-bold dark:text-zinc-100">Bryan</p>
      </span>
      <div class="hidden sm:flex space-x-8">
        <div>
          <a
            class="text-sm font-semibold hover:text-primary dark:text-zinc-100"
            href="#home"
            >Home</a
          >
        </div>
        <div>
          <a
            class="text-sm font-semibold hover:text-primary dark:text-zinc-100"
            href="#about"
            >About</a
          >
        </div>
        <div>
          <a
            class="text-sm font-semibold hover:text-primary dark:text-zinc-100"
            href="#projects"
            >Projects</a
          >
        </div>
        <div>
          <a
            class="text-sm font-semibold hover:text-primary dark:text-zinc-100"
            href="#"
            >Resume</a
          >
        </div>
      </div>
      <div class="flex sm:hidden p-1 z-20">
        <button class="rounded-md" @click="showMobile = !showMobile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25px"
            viewBox="0 0 25 25"
            width="24px"
            fill="#000000"
            class="dark:fill-white"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="h-screen mt-20"
      id="mobile-menu"
      :class="showMobile ? 'flex' : 'hidden'"
    >
      <div class="flex flex-col justify-start w-full">
        <div>
          <a class="" href="#home">
            <button
              class="
                rounded-lg
                px-4
                py-6
                w-full
                hover:bg-zinc-50
                text-zinc-800 text-lg
                dark:text-zinc-100
                font-semibold
                duration-300
                ease-in
                hover:shadow-lg hover:-translate-y-2
              "
              @click="showMobile = !showMobile"
            >
              Home
            </button>
          </a>
        </div>
        <div>
          <a
            class="text-sm font-semibold hover:text-black dark:text-zinc-100"
            href="#about"
          >
            <button
              class="
                rounded-lg
                px-4
                py-6
                w-full
                hover:bg-zinc-50
                text-zinc-800 text-lg
                dark:text-zinc-100
                font-semibold
                duration-300
                ease-in
                hover:shadow-lg hover:-translate-y-2
              "
              @click="showMobile = !showMobile"
            >
              About
            </button>
          </a>
        </div>
        <div>
          <a
            class="text-sm font-semibold hover:text-black dark:text-zinc-100"
            href="#projects"
          >
            <button
              class="
                rounded-lg
                px-4
                py-6
                w-full
                hover:bg-zinc-50
                text-zinc-800 text-lg
                dark:text-zinc-100
                font-semibold
                duration-300
                ease-in
                hover:shadow-lg hover:-translate-y-2
              "
              @click="showMobile = !showMobile"
            >
              Projects
            </button>
          </a>
        </div>
        <div>
          <a
            class="text-sm font-semibold hover:text-black dark:text-zinc-100"
            href="#"
          >
            <button
              class="
                rounded-lg
                px-4
                py-6
                w-full
                hover:bg-zinc-50
                text-zinc-800 text-lg
                dark:text-zinc-100
                font-semibold
                duration-300
                ease-in
                hover:shadow-lg
                hover:-translate-y-2
              "
              @click="showMobile = !showMobile"
            >
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "navbar",

  data() {
    return {
      showMobile: false,
    };
  },

  methods:{
  }
};
</script>

<style>
</style>