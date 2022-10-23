import { Container, Header, Title, MainContent } from "./App.styles";
import { Item } from "./types/Item";
import { Categories } from "./types/Categories";
import items from "./data/items";
import { categories } from "./data/categories";
import { useEffect, useState } from "react";
import { filterListbyMonth, getCurrentMonth } from "./helpers/dateFilter";
import TableArea from "./components/TableArea";
import InfoArea from "./components/InfoArea";

function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListbyMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <Container>
      <Header>
        <Title>Controle de Finanças</Title>
      </Header>
      <MainContent>
        <InfoArea />
        <TableArea list={filteredList} />
      </MainContent>
    </Container>
  );
}

export default App;
