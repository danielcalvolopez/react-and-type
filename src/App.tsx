import Todos from "./components/Todos";
import Todo from "./models/todo";

const App = () => {
  const todos = [new Todo("Daniel"), new Todo("Marta")];

  return (
    <div>
      List:
      <Todos items={todos} />
    </div>
  );
};

export default App;
