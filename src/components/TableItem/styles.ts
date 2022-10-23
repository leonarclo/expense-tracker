import styled from "styled-components";

export const Container = styled.tr`
  td {
    padding: 10px;
  }
`;

export const Category = styled.td<{ bg: string }>`
  display: inline-block;
  padding: 10px 10px;
  border-radius: 5px;
  color: var(--white);
  background-color: ${(props) => props.bg};
  width: 100%;
`;

export const Value = styled.td<{ bg: string }>`
  display: inline-block;
  padding: 10px 10px;
  border-radius: 5px;
  color: var(--white);
  background-color: ${(props) => props.bg};
  width: 100%;
`;
