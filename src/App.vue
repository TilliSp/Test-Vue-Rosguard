<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ButtonBlueVue from './components/ButtonBlue.vue'
import ButtonWhiteVue from './components/ButtonWhite.vue'
import ButtonLightBlueVue from './components/ButtonLightBlue.vue'
import HeaderLayout from "./components/Header.vue"
import SidebarLayout from './components/Sidebar.vue'
import IconLeft from './components/icons/IconLeft.vue'
</script>

<template>
  <!-- <div class="container">
    <header-layout/>
    <SidebarLayout />
    <div class="content">
      <RouterView />
    </div>
  </div> -->
  <div class="page-wrapper">
    <div class="page-header"><header-layout /></div>
    <div class="page-content">
      <aside class="left-column">
        <SidebarLayout />
      </aside>
      <main class="right-column ">
        <div class="d-flex flex-row flex-nowrap">
          <div>
            <IconLeft />
          </div>
          <div class="return ps-2 pb-2">
            <a href="/main" class="link " aria-current="page">
              Назад
            </a>
            
          </div>
        </div>
        <RouterView />
      </main>
    </div>
  </div>

</template>

<style scoped>
.line {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.return {
  cursor: pointer;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.link {
  font-size: 14px;
  color: rgb(90, 96, 127);
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  text-decoration: none;
  background: none;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
