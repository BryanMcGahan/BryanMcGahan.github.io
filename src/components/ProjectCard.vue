<template>
  <div v-for="project in this.projects" :key="project"
    class="
      relative
      w-full
      sm:w-5/6
      md:w-4/6
      lg:w-2/6
      h-64
      rounded-xl
      drop-shadow-lg
      hover:-translate-y-1 hover:shadow-xl
      duration-500
      ease-in
      group
    "
  >
    <div
      class="
        absolute
        top-0
        left-0
        right-0
        bottom-0
        backdrop-blur-sm
        bg-zinc-300/60
        dark:bg-black/80
        rounded-xl
        p-4
      "
    >
      <div class="flex flex-col start">
        <div class="">
          <h1
            class="
              text-md
              sm:text-lg
              font-bold
              pb-4
              text-zinc-900
              dark:text-zinc-100
            "
          >
            {{ project.title }}
          </h1>
        </div>
        <div>
          <p
            class="
              text-xs
              sm:text-sm
              pb-4
              font-medium
              text-zinc-800
              dark:text-zinc-400
            "
          >
            {{ project.about }}
          </p>
        </div>
        <div class="flex space-x-4">
          <div
            class="text-xxs sm:text-xs dark:text-zinc-100"
            v-for="tech in project.technologies"
            :key="tech"
          >
            {{ tech }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        bg-white/60
        backdrop-blur-sm
        absolute
        bottom-0
        left-0
        right-0
        opacity-100
        sm:opacity-0
        h-16
        rounded-xl
        group-hover:opacity-100
        ease-in-out
        duration-500
      "
    >
      <div class="px-8 py-1">
        <a
          :href="project.github"
          class="flex flex-col justify-center items-center"
        >
          <div>
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36px"
              height="36px"
            >
              <path
                d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"
              />
            </svg>
          </div>
          <div>
            <p>Github</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project card",
    data() {
    return {
      projects: [
        {
          title: "Pokemon API",
          about: "This is a simple single page website that uses, PokeAPI to generate a list of pokemon with each element of the list being clickable. On a click a card is shown with the pokemons image and some stats. ",
          technologies: ["VueJS", "Bootstrap", "Bootstrap Vue"],
          github: "https://github.com/BryanMcGahan/pokemon-stats",
        },
      ],
    };
  },
};
</script>

<style>
</style>