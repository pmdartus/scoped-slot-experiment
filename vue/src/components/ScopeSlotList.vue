<script setup>
defineProps({
    items: Array,
    itemKey: String
});
</script>

<template>
    <ul>
        <li v-for="item in items" :key="item[itemKey]">
            <slot name="item" v-bind:item="item">{{ item.name }}</slot>
        </li>
    </ul>
</template>
