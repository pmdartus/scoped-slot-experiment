function RenderPropList(props) {
  const { items, getKey, render } = props;
  return (
    <ul>
      {items.map((item) => (
        <li key={getKey(item)}>{render(item)}</li>
      ))}
    </ul>
  );
}

export default RenderPropList;
