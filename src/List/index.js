import React from "react";
import styled from "@emotion/styled";
import { useStoreState } from "../store";
import ListItem from "../ListItem";

function List({ items, updateDots, ...props }) {
  const { dots } = useStoreState();

  return (
    <Container>
      <UnorderedList {...props}>
        {dots.map((item) => (
          <ListItem key={item.color} item={item} />
        ))}
      </UnorderedList>
    </Container>
  );
}

export default List;

// 💅🏻 styles
const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const UnorderedList = styled.ul`
  list-style: none;
`;
