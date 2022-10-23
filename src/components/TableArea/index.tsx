import { Item } from "../../types/Item";
import { TableItem } from "../TableItem";
import { Container, THColumn } from "./styles";

type Props = {
  list: Item[];
};
function TableArea({ list }: Props) {
  return (
    <Container>
      <thead>
        <tr>
          <THColumn width={150}>Data</THColumn>
          <THColumn width={200}>Categoria</THColumn>
          <THColumn>Título</THColumn>
          <THColumn width={150}>Valor</THColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item}></TableItem>
        ))}
      </tbody>
    </Container>
  );
}

export default TableArea;
