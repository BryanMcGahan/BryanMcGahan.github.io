
<template>
  <NavBar></NavBar>
  <section class="sm:pt-20 px-4 sm:px-10 pb-64 relative" id="home">
    <div class="container mx-auto flex flex-col md:flex-row items-center">
      <div
        class="
          pt-20
          lg:pt-36 lg:pt-46
          xl:pt-64
          w-full
          md:w-2/3
          py-8
          px-8
          md:py-0 md:px-0
          bg-white/60
          backdrop-blur-2xl
          border-white
          rounded-xl
          dark:bg-black/70 dark:border-black
          drop-shadow-xl
          md:shadow-none md:bg-transparent md:backdrop-blur-none
          mt-20
          lg:mt-0
          text-center
          md:text-left
        "
      >
        <p class="text-md font-medium text-gray-800 dark:text-zinc-300 pb-3">
          Hello, My Name is
        </p>
        <h1 class="font-bold text-5xl sm:text-6xl pb-3 dark:text-white">
          Bryan McGahan
        </h1>
        <h3 class="text-3xl font-bold pb-5 text-gray-900 dark:text-zinc-200">
          Learning to Develope <br />
          the <span class="text-primary">Future</span>
        </h3>
        <p
          class="
            text-sm
            md:text-md
            font-medium
            text-gray-800
            dark:text-zinc-400
            w-full
            md:w-3/4
          "
        >
          I'm a college student studying Computer Science as well as teaching
          myself to design and develope websites. I am very interested in the
          future of web development and technology.
        </p>
      </div>
      <div class="static flex justify-center">
        <img
          class="
            w-full
            md:w-3/4
            top-48
            sm:top-36
            fixed
            md:-right-32 md:-top-80
            lg:-top-[34rem]
            xl:-top-[42rem]
            z-[-1]
            dark:hidden
          "
          src="./assets/whiteme.jpg"
          alt="Empire State Building"
        />
        <img
          class="
            hidden
            dark:flex
            w-3/4
            md:w-1/2
            top-72
            fixed
            md:right-5 md:-top-20
            lg:-top-64
            z-[-1]
          "
          src="./assets/blackme.jpg"
          alt="Skull"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="36px"
        viewBox="0 0 24 24"
        width="36px"
        fill="#00000"
        class="
          md:-bottom-48
          lg:-bottom-40
          xl:-bottom-16
          right-1/2
          absolute
          animate-bounce
          hidden
          md:block
          dark:fill-slate-100
        "
      >
        <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
      </svg>
    </div>
  </section>
  <section id="about" class="px-4 pb-64 sm:px-10 pt-48 relative">
    <AboutCard></AboutCard>
  </section>
  <section class="px-4 pb-64 sm:px-10 pt-20 relative" id="projects">
    <div
      class="
        container
        mx-auto
        py-20
        px-8
        bg-white/60
        backdrop-blur-2xl
        border-2
        border-white
        rounded-xl
        dark:bg-black/80 dark:border-black
        drop-shadow-xl
      "
    >
      <div class="flex flex-col lg:flex-row justify-center items-center pb-5">
        <h1 class="font-semibold text-lg sm:text-xl dark:text-slate-100 mb-10">
          Some Projects of Mine
        </h1>
      </div>
      <div>
        <div
          class="
            flex
            justify-center
            items-center
            flex-col
            space-y-4
            lg:flex-row lg:space-x-8 lg:space-y-0
          "
        >
          <ProjectCard></ProjectCard>
        </div>
      </div>
    </div>
  </section>
  <footer
    class="
      text-center
      p-10
      mt-32
      bg-white/60
      backdrop-blur-2xl
      border-white
      rounded-xl
      dark:bg-black/80 dark:border-black
      drop-shadow-xl
    "
  >
    <h1 class="dark:text-zinc-500 font-semibold">Create by Bryan McGahan</h1>
  </footer>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ProjectCard from "./components/ProjectCard.vue";
import AboutCard from "./components/AboutCard.vue"
export default {
  components: {
    NavBar,
    ProjectCard,
    AboutCard,
  },
  methods: {},
};
</script>

<style>
</style>
