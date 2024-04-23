<script setup>
import HeaderLayout from "../components/Header.vue"
import SidebarLayout from '../components/Sidebar.vue'
import IconSearchVue from "../components/icons/IconSearch.vue";
import { ref } from "vue"
const linksSettings = ref([
    { name: "Первичная настройка", href: "/profile" },
    { name: "Профиль пользователя", href: "/generalSettings" },
    { name: "Изменение общих настроек", href: "/profile" },
    { name: "Дополнительные возможности", href: "/generalSettings" },
    { name: "Отправка запросов", href: "/profile" },
    { name: "Работа со стастистикой", href: "/generalSettings" },
]);
</script>
<template>
    <!-- <div class="about">
        <h1>Страница находится в разработке!</h1>
    </div> -->
    <div class="page-wrapper">
        <div class="page-content">
            <aside class="left-column">
                <div class="sidebar_isopen">
                    <div class="category"> 
                        <div class="title pb-3"> Настройки профиля</div>
                        <router-link class="sidebar__link" v-for="link in linksSettings" :key="link.name"
                            :to="link.href">
                            <!-- <BaseIcon name="{{ link.icon  }}" width="16" height="16" /> -->
                            {{ link.name }}
                        </router-link>
                    </div>
                </div>
            </aside>
            <main class="right-column">
                <form class="d-flex" role="search">
                    <div class="input-group">
                        <span class="input-group-append">
                            <IconSearchVue />
                        </span>
                        <input class="form-control  border" type="search" id="example-search-input"
                            placeholder="Поиск..." aria-label="Поиск">

                    </div>

                </form>
            </main>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}

.category {
    /* position: absolute;*/
    width: 191px;
    height: 16px;
}

span {
    position: absolute;
    margin-left: 5px;
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    z-index: 1;
}

input {
    padding-left: 25px;
    height: 20px;
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
        border-radius: 4px;
        transition: 0.2s;
        font-size: 10px;
        margin-bottom: 10px;
        color: rgb(90, 96, 127);
        font-weight: 300;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
        text-decoration: none;
        background: none;
        border: 0;

        &:hover {
            color: #fff;
            background: rgb(30, 94, 255);
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
.title{
    font-size: 18px;
    color: rgb(19, 21, 35);
}
</style>