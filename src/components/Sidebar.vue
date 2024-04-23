<script setup>
// import BaseIcon from './BaseIcon.vue';
import IconChat from './icons/IconChat.vue';
import IconCategories from './icons/IconCategories.vue';
import IconFavorites from './icons/IconFavorites.vue';
import IconGeneralSettings from './icons/IconGeneralSettings.vue';
import IconHome from './icons/IconHome.vue';
import IconKnowledgeBase from './icons/IconKnowledgeBase.vue';
import IconNotes from './icons/IconNotes.vue';
import IconProfile from './icons/IconProfile.vue';
import IconRequests from './icons/IconRequests.vue';
import IconSearch from './icons/IconSearch.vue';
import IconStatistics from './icons/IconStatistics.vue';
import IconSupport from './icons/IconSupport.vue';
import IconUpdates from './icons/IconUpdates.vue';
import IconUsers from './icons/IconUsers.vue';
import { ref } from "vue"
const linksMain = ref([
  { name: "Main", href: "/main", icon: "search" },
  { name: "Requests", href: "/requests", icon: "search" },
  { name: "Notes", href: "/notes", icon: "search" },
  { name: "Categories", href: "/categories", icon: "search" },
  { name: "Users", href: "/users", icon: "search" },
  { name: "Statistics", href: "/statistics", icon: "search" },
  { name: "Favorites", href: "/favorites", icon: "search" },
  { name: "Support", href: "/support", icon: "search" },
]);
const linksInfo = ref([
  { name: "Knowledge Base", href: "/knowledgeBase" },
  { name: "Updates", href: "/updates" },
]);
const linksSettings = ref([
  { name: "Profile", href: "/profile" },
  { name: "General Settings", href: "/generalSettings" },
]);
</script>
<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  name: "Sidebar",
  components: {
    BaseIcon,
  },
};
</script>
<template>
  <!-- 
      **** 
    
    Планировала через v-for и BaseIcon красиво всё сделать, 
    но с компонентом что-то не докрутила - он не отображается, поэтому сделала некрасиво в лоб
    
    *** 
  -->
  <!-- 
    <div class="sidebar_isopen">
    <router-link class="sidebar__link" v-for="link in linksMain" :key="link.name" :to="link.href">
      <BaseIcon name="{{ link.icon  }}" width="16" height="16" />
      {{ link.name  }}
    </router-link>
     <br> 
    <div class="category">Информация
      <router-link class="sidebar__link" v-for="link in linksInfo" :key="link.name" :to="link.href">
        <BaseIcon name="{{ link.icon  }}" width="16" height="16" />
        {{ link.name }}
      </router-link>
    </div>
     <br> 
    <div class="category">Настройки
      <router-link class="sidebar__link" v-for="link in linksSettings" :key="link.name" :to="link.href">
        <BaseIcon name="{{ link.icon  }}" width="16" height="16" />
        {{ link.name }}
      </router-link>
    </div>
  </div> -->

  <div id="mySidenav" class="sidenav d-flex flex-column flex-shrink-0  widthSide"
    style="height: 100vh; align-items: stretch">


    <ul class="mc nav flex-column flex-nowrap mb-auto align-items-stretch h-100 pt-3 px-3">
      <li class="nav-item">
        <a href="/main" class="link " aria-current="page">
          <IconHome class="icon" /> Главная
        </a>
      </li>
      <li>
        <a href="/requests" class="link mc">
          <IconRequests class="icon" />
          Запросы
          <span class="badge text-bg-dark rounded-pill ">16</span>
          <!-- <div class="text-end style-badge"> 
          </div> -->
        </a>
      </li>
      <li>
        <a href="/notes" class="link  m">
          <IconNotes class="icon" /> Заметки
        </a>
      </li>
      <li>
        <a href="/categories" class="link ">
          <IconCategories class="icon" /> Категории
        </a>
      </li>
      <li>
        <a href="/users" class="link ">
          <IconUsers class="icon" /> Пользователи
        </a>
      </li>
      <li>
        <a href="/statistics" class="link ">
          <IconStatistics class="icon" /> Статистика
        </a>
      </li>
      <li>
        <a href="/favorites" class="link ">
          <IconFavorites class="icon" /> Избранное
        </a>
      </li>
      <li>
        <a href="/support" class="link ">
          <IconSupport class="icon" /> Поддержка
        </a>
      </li>
      <li class="nav-title pt-4 ps-3">
        Информация
      </li>
      <li>
        <a href="/knowledgeBase" class="link ">
          <IconKnowledgeBase class="icon" /> База знаний
        </a>
      </li>
      <li>
        <a href="/updates" class="link ">
          <IconUpdates class="icon" /> Обновления
        </a>
      </li>
      <li class="nav-title pt-4 ps-3">
        Настройки
      </li>
      <li>
        <a href="/profile" class="link ">
          <IconProfile class="icon" /> Профиль
        </a>
      </li>
      <li>
        <a href="/generalSettings" class="link ">
          <IconGeneralSettings class="icon" /> Общие настройки
        </a>
      </li>
    </ul>
  </div>

</template>



<style lang="scss" scoped>
/* Category */
.category {
  /* position: absolute;*/
  width: 191px;
  height: 16px;
}

.sidebar {
  top: 62px;
  height: 100%;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);

  &_isopen {
    transform: translateX(0px);
  }

  &__link {
    display: block;
    border-radius: 12px;
    border: 2px solid #fff;
    transition: 0.2s;
    font-weight: bold;
    font-size: 10px;
    margin-bottom: 10px;

    &:hover {
      color: var(--primary);
    }
  }
}

li:hover {
  color: rgb(90, 96, 127);
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
}

.sidenav {
  color: rgb(90, 96, 127);
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;

  box-shadow: inset -1px 0px 0px 0px rgb(215, 219, 236);
  background: rgb(245, 246, 250);
  height: 100%;
  width: 100%;
  z-index: 1;
  top: 68px;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  position: fixed;

}

/*.sidenav a {
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  font-size: 25px;
  display: block;
  transition: 0.3s;
}*/

.sidenav a:hover {
  color: rgb(255, 255, 255);
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  border: none;

  opacity: 1;
}

.closebtn {
  display: none;
  opacity: 0;
}

.widthSide {
  width: 17%;
}

.icon {
  width: 20px;
  height: 20px;
  padding-right: 0.25rem;
}

.style-badge {
  left: 190px;
  top: 130px;
  position: fixed;
}

.nav-title {
  color: rgb(161, 167, 196);
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
}

li.nav-title:hover {
  color: rgb(161, 167, 196);
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}

@media screen and (max-width: 720px) {
  .widthSide {
    width: 17% !important;
    min-height: 100%;

  }

  .sidenav a {
    font-size: 0.5em !important;
  }
}

@media screen and (min-width: 720px) {
  .widthSide {
    width: 17% !important;
  }

  .widthSide ul {
    justify-content: start !important;
  }
}

@media screen and (max-height: 450px) {

  .sidenav {}

  .sidenav a {
    font-size: 14px;
  }
}



.widthSide {
  width: 17%;
}

.type {
  /* Type */
  position: absolute;
  text-align: center;
  width: 218px;
  height: 44px;
  padding-left: 16px;
  padding-right: 16px;
}

.link {
  display: block;
  padding: 0.5rem 1rem;
  font-size: 14px;
  color: rgb(90, 96, 127);
  font-family: Inter;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  text-decoration: none;
  background: none;
  border: 0;
  border-radius: 4px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}

.link:hover {
  border-radius: 4px;
  background: rgb(30, 94, 255);
}
</style>
