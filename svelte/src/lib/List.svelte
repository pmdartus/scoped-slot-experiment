<script>
  export let items;
</script>

<ul>
  {#each items as item (item.id)}
  <li>
    <slot item={item}></slot>
  </li>
  {/each}
</ul>