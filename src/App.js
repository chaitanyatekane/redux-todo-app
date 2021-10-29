import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App in Redux</h2>
        <form>
          <input
            placeholder="Enter Todo"
            style={{
              width: 350,
              padding: 10,
              borderRadius: 10,
              border: "none",
              fontSize: 20,
            }}
          />
          <button
            type="submit"
            style={{
              padding: 12,
              borderRadius: 10,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            Go
          </button>
        </form>
        <ul className="allTodos">
          <li className="singleTodo">
            <span className="todoText">First Todo</span>
            <button
              style={{
                borderRadius: 15,
                padding: 10,
                border: "1px solid white",
                backgroundColor: "orangered",
              }}
            >
              Delete
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
