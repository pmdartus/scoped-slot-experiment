<script setup>
defineProps({
  items: Array,
  dataComponent: Object,
  dataKey: String
});
</script>

<template>
    <ul>
        <li v-for="item in items" :key="item[dataKey]">
            <component :is="dataComponent" :item="item"/>
        </li>
    </ul>
</template>