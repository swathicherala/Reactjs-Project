import { useState } from "react";

const ToDoList = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([])

  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      task: item,
      status: false,
    };
    setItems([...items, newItem])
    setItem("")
  };

  const deleteTask = (id) => {
    const updatedItems = items.filter(todo=>id !== todo.id)
    setItems(updatedItems)
  }

  const toggleStatus = (id) => {
    const updatedItems = items.map(todo=>id === todo.id ? {...todo, status: !todo.status} : todo)
    setItems(updatedItems)
  }

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter Item"
      />
      <button onClick={addItem}>Add Item</button>
      <table border="2">
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {items.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td style={{color: todo.status ? "green" : "yellow"}}>{todo.task}</td>
              <td>
                <input 
                type="checkbox" 
                checked={todo.status}
                onChange={() => toggleStatus(todo.id)}
                />
              </td>
              <td><button onClick={() => {deleteTask(todo.id)}}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
