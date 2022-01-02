<template>
  <div
    class="
      container
      mx-auto
      border
      dark:bg-black/80
      rounded-xl
      dark:border-black
      bg-white/60
      drop-shadow-xl
      py-4
      flex flex-col
      lg:flex-row-reverse
      items-center
      lg:items-center
      justify-center
      lg:justify-evenly
      motion-safe:animate-fadeIn scroll
    "
  >
    <div class="w-3/4 lg:w-1/4 mb-20 mt-20 z-[-1] flex justify-center">
      <div
        class="
          w-64
          h-40
          bg-primary
          rounded-lg
          shadow-xl
          backdrop-blur-lg
          relative
        "
      >
        <img
          id="profile"
          src="/src/assets/profile2.jpg"
          alt=""
          class="
            w-full
            rounded-lg
            shadow-xl
            relative
            lg:absolute
            -top-8
            md:-top-8 md:-left-8
            opacity-100
            z-[-1]
          "
        />
      </div>
    </div>
    <div class="w-full lg:w-1/2 text-center sm:text-left mb-20">
      <h3 class="font-semibold text-xl mb-16 text-center dark:text-slate-100">
        About Me
      </h3>
      <p
        class="
          text-md text-zinc-700
          dark:text-zinc-300
          leading-5
          sm:leading-7
          indent-0
          sm:indent-12
          px-10
          lg:px-0
        "
      >
        {{ profile }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "Project Card",
  data() {
    return {
      profile:
        "I am Bryan McGahan, I am currently a Senior in college at the University of Nebraska-Lincoln. I am majoring in Computer Science and minoring in Mathematics. I grew up in a small town in midwestern Nebraska where I was a very active athlete during the school year. Over the summers I spent my time working, much of which was farm work. In my spare time I enjoyed learning as much possible about technology.   ",
    };
  },
};
</script>

<style>
</style>