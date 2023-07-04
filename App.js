import MainScreen from "./src/Screens/MainScreen";

const taskList = [
  {
    id: 1,
    text: "Regar plantas",
    completed: false,
  },
  {
    id: 2,
    text: "Lavar platos",
    completed: false,
  },
  {
    id: 3,
    text: "Limpiar el baño",
    completed: false,
  },
  {
    id: 4,
    text: "Ir a comprar carne",
    completed: false,
  },
  {
    id: 5,
    text: "Comprar carbón",
    completed: false,
  },
];

export default function App() {
  return <MainScreen taskList={taskList} />;
}
