<script setup>
defineProps({
    item: Object
});
</script>

<template>
    <input type="checkbox" :checked="item.done" :id="'item-' + item.id" />
    <label :for="'item-' + item.id">{{ item.name }}</label>
</template>