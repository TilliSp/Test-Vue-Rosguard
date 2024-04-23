<script>
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
    <button class="butWhite">{{title}}</button>
</template>
<style lang="scss">
.butWhite {
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 20px;
    font-size: 16px;
    color: rgb(30, 94, 255);
    width: 99px;
    height: 48px;
    border-radius: 4px;
    background: rgb(255, 255, 255);
    &:hover{
        background: rgb(245, 246, 250);
    }
    &:active {
    background: rgb(255, 255, 255);
}
    &disabled {
    background: rgb(215, 219, 236);
}
    &:focus {
    background: rgb(255, 255, 255);
}
}

/*
button:hover {
    border-radius: 4px;
    background: rgb(245, 246, 250);
}

button:active {
    background: rgb(255, 255, 255);
}

button:disabled {
    background: rgb(215, 219, 236);
}

button:focus {
    background: rgb(255, 255, 255);
}
*/
</style>