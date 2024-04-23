<script setup>
import IconBell from './icons/IconBell.vue';
import IconChat from './icons/IconChat.vue';
import IconSearchVue from "./icons/IconSearch.vue";
// export default {
// //   name: "Header",
// //   components: {
// //     BaseIcon,
// //   },
// };
</script>
<template>
    <header class="header">
        <!-- <h1> Hello film</h1> -->

        <div class="logo ">
            <img alt="GUSEVFILM logo" class="" src="../assets/logo.svg" />
            <div class="ps-3 h3 pt-2">GUSEVFILM</div>
        </div>
        <div class="search">
            <form class="d-flex" role="search">
                <div class="border-0">
                    <span class="border-0">
                        <IconSearchVue />
                    </span>
                    <input class="form-control border-0 " type="search" id="example-search-input" placeholder="Поиск..."
                        aria-label="Поиск">

                </div>

            </form>
            <!-- <BaseIcon name="search" /> -->
        </div>
        <div class="d-flex flex-row flex-nowrap justify-content-between">
            <div class="chat">
                <IconChat />
            </div>
            <div class="notifications">
                <IconBell />
            </div>
            <div class="user"></div>
        </div>
    </header>
</template>


<style lang="scss" scoped>
.header {
    background: rgba(255, 255, 255);
    position: absolute;
    width: auto;
    height: 68px;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    box-shadow: 0px 1px 4px 0px rgba(21, 34, 50, 0.08);
    /* background: rgb(255, 255, 255); */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

}

.logo {
    color: rgb(0, 0, 0);
    font-family: Impact, Haettenschweiler, 'Inter', sans-serif;
    font-size: 21.7px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0px;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
}

.icons {
    stroke: currentColor;
    fill: currentColor;
    width: 16px;
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
</style>