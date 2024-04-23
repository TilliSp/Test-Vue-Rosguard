<script>
// const props = defineProps{(
//     title: {
//         // type: String,
//         default: "Button"
//     }
// )}
export default {
    props: {
        title: {
            type: String,
            default: "Button"
        }
    }
}
</script>
<template>
    <button class="butBlue">{{title}}</button>
</template>
<style>
.butBlue {
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 20px;
    font-size: 16px;
    color: rgb(255, 255, 255);
    width: 99px;
    height: 48px;
    border-radius: 4px;
    background: rgb(30, 94, 255);
}
.butBlue:hover {
    background: rgb(79, 129, 255);
}
.butBlue:active {
    background: rgb(51, 109, 255);
}
.butBlue:disabled {
    background: rgb(215, 219, 236);
}
.butBlue:focus {
    background: rgb(30, 94, 255);
}
</style>