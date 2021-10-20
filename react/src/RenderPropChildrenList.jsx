function RenderPropList(props) {
  const { items, getKey, children } = props;
  return (
    <ul>
      {items.map((item) => (
        <li key={getKey(item)}>{children(item)}</li>
      ))}
    </ul>
  );
}

export default RenderPropList;
