import { useState } from "react";

import RenderPropList from "./RenderPropList";
import RenderPropChildrenList from "./RenderPropChildrenList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Buy milk", done: true },
    { id: 2, name: "File taxes", done: false },
    { id: 3, name: "Fix bug in production", done: true },
  ]);

  const addItem = () => {
    setTodos((todos) => {
      return [
        ...todos,
        {
          id: todos.length + 1,
          name: "Do something else",
          done: true,
        },
      ];
    });
  };

  return (
    <div>
      <button onClick={addItem}>Add item</button>

      <h2>Render props</h2>

      <RenderPropList
        items={todos}
        getKey={(item) => item.id}
        render={(item) => (
          <>
            <input type="checkbox" defaultChecked={item.done} id={`item1-${item.id}`} />
            <label htmlFor={`item1-${item.id}`}>{item.name}</label>
          </>
        )}
      />

      <h2>Render props children</h2>

      <RenderPropChildrenList items={todos} getKey={(item) => item.id}>
        {(item) => (
          <>
            <input type="checkbox" defaultChecked={item.done} id={`item2-${item.id}`} />
            <label htmlFor={`item2-${item.id}`}>{item.name}</label>
          </>
        )}
      </RenderPropChildrenList>
    </div>
  );
}

export default App;
