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
    <button>{{title}}</button>
</template>
<style>
button {
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 20px;
    font-size: 16px;
    color: rgb(30, 94, 255);
    width: 99px;
    height: 48px;
    border-radius: 4px;
    background: rgb(217, 228, 255);
}

button:hover {
background: rgb(236, 242, 255);
}

button:active {
    background: rgb(217, 228, 255);
}
button:disabled {
    background: rgb(215, 219, 236);
}
button:focus {
    background: rgb(217, 228, 255);
}
</style>