import { Categories } from "../types/Categories";

export const categories: Categories = {
  food: {
    title: "Alimentação",
    color: "var(--secondary-green)",
    expense: true,
  },
  rent: { title: "Aluguel", color: "var(--dark-green)", expense: true },
  salary: {
    title: "Salário",
    color: "var(--primary-green)",
    expense: false,
  },
};
