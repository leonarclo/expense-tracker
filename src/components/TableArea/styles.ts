import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  background-color: var(--white);
  padding: 20px;
  box-shadow: 0 0 5px #ccc;
  border-radius: 15px;
  margin-top: 20px;
`;

export const THColumn = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 10px 0;
  text-align: center;
`;
