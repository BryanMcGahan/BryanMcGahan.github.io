import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')

watch: {
    const callback = function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.isIntersecting);
          entry.target.classList.add("motion-safe:animate-fadeIn");
        } else {
          entry.target.classList.remove("motion-safe:animate-fadeIn");
        }
      });
    };
  
    const observer = new IntersectionObserver(callback);
    const targets = document.querySelectorAll(".scroll");
    console.log(targets);
  
    targets.forEach(function (target) {
      target.classList.add("opactiy-0");
      observer.observe(target);
    });
  }
