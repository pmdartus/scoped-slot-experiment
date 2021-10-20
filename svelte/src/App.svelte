<script>
  import List from "./lib/List.svelte";

  let todos = [
    { id: 1, name: "Buy milk", done: true },
    { id: 2, name: "File taxes", done: false },
    { id: 3, name: "Fix bug in production", done: true },
  ];

  function addTodo() {
    todos = [
      ...todos,
      {
        id: todos.length + 1,
        name: "Do something else",
        done: true,
      },
    ];
  }
</script>

<main>
  <button on:click="{addTodo}">Add todo</button>

  <List items={todos} let:item={item}>
    <input type="checkbox" checked={item.done} id={`item1-${item.id}`} />
    <label for={`item1-${item.id}`}>{item.name}</label>
  </List>
</main>
