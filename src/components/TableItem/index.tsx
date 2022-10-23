import { Category, Value, Container } from "./styles";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  return (
    <Container>
      <td>{formatDate(item.date)}</td>
      <div>
        <Category bg={categories[item.category].color}>
          {categories[item.category].title}
        </Category>
      </div>
      <td>{item.title}</td>
      <Value
        bg={
          categories[item.category].expense
            ? "var(--orange)"
            : "var(--primary-green)"
        }
      >
        {item.value}
      </Value>
    </Container>
  );
};
