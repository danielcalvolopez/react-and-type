import Todos from "./components/Todos";

const App = () => {
  const items = ["Hey", "How", "Are", "You?"];

  return (
    <div>
      List:
      <Todos items={items} />
    </div>
  );
};

export default App;
