<template>
  <component :is="iconComponent" />
</template>

<script setup>

</script>
<script>
const icons = {
  search: () => import('./icons/IconSearch.vue'),
  // success: require("./IconTooling.vue").default,
  // info: require("./Icons/InfoIcon.vue").default,
};
export default {
  name: "BaseIcon",
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(search, icons);
      },
    },
  },
  computed: {
    iconComponent() {
      return icons[this.name];
    },
  },
};
</script>