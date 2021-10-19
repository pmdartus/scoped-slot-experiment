<script setup>
import { ref } from 'vue';

import ScopedSlotList from './components/ScopeSlotList.vue';
import ComponentList from './components/ComponentList.vue';
import ListItem from './components/ListItem.vue';

let todos = ref([
  { id: 1, name: 'Buy milk', done: true },
  { id: 2, name: 'File taxes', done: false },
  { id: 3, name: 'Fix bug in production', done: true },
]);

function addItem() {
  todos.value.push({
    id: todos.value.length + 1, name: 'Do something else', done: true
  });
}

</script>

<template>
  <button @click="addItem">Add item</button>

  <h2>Scoped slot</h2>

  <ScopedSlotList :items="todos" :item-key="'id'">
    <template v-slot:item="{ item }">
      <input type="checkbox" :checked="item.done" :id="'item-' + item.id" />
      <label :for="'item-' + item.id">{{ item.name }}</label>
    </template>
  </ScopedSlotList>

  <hr>

  <h2>Passing component</h2>

  <ComponentList :items="todos" :data-key="'id'" :data-component="ListItem" />
</template>