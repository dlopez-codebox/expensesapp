import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "1",
      title: "Papel de baño",
      amount: 95.35,
      date: new Date(2020, 7, 7),
    },
    {
      id: "2",
      title: "Cena en Madrid",
      amount: 500,
      date: new Date(2020, 8, 7),
    },
    {
      id: "3",
      title: "Escritorio",
      amount: 400,
      date: new Date(2020, 9, 7),
    },
    {
      id: "4",
      title: "Seguro del carro",
      amount: 59,
      date: new Date(2020, 10, 7),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
