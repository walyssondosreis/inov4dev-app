<script lang="ts">
import Logotype from './components/Logotype.vue';
import Navbar from './components/Navbar.vue';
import AboutMe from './components/AboutMe.vue';
import SkillsArea from './components/SkillsArea.vue';
import ContactMeArea from './components/ContactMeArea.vue';
import FollowMeArea from './components/FollowMeArea.vue';
import FooterBar from './components/FooterBar.vue';
import './assets/fonts.css'

export default {
  components: { Navbar, Logotype, AboutMe, SkillsArea, ContactMeArea, FollowMeArea, FooterBar }
}

window.addEventListener("load", function () {


  // Rolagem suave de elementos do menu
  const menuItens = document.querySelectorAll('#menuNav a[href^="#"]');

  menuItens.forEach(item => {
    (item as HTMLAnchorElement).addEventListener('click', scrollToIdOnClick);
  });

  function scrollToIdOnClick(event: MouseEvent) {
    event.preventDefault();
    const element = event.currentTarget as HTMLAnchorElement; // garante que é um link
    const id = element.getAttribute('href');
    if (!id) return;

    const section = document.querySelector(id) as HTMLElement;
    if (!section) return;

    const to = section.offsetTop;

    window.scroll({
      top: to - 100,
      behavior: "smooth"
    });
  }

});



</script>

<template>
  <Navbar />
  <Logotype />
  <AboutMe />
  <SkillsArea />
  <ContactMeArea />
  <FollowMeArea />
  <FooterBar />
</template>

<style>
@import "tailwindcss";
</style>
