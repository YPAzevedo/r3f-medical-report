import React, { useRef } from "react";
import styled from "@emotion/styled";
import { actionTypes, useStoreDispatch } from "../store";

export default function ListItem({ item }) {
  const titleRef = useRef(null);
  const dispatch = useStoreDispatch();

  return (
    <StyledLi key={item.color} color={item.color}>
      <StyledHeader>
        <StyledInput
          ref={titleRef}
          value={item.title}
          onFocus={() => titleRef.current.select()}
          onChange={(event) =>
            dispatch({
              type: actionTypes.upadteTitle,
              title: event.target.value,
              color: item.color,
            })
          }
        />
        <StyledButton
          onClick={() =>
            dispatch({ type: actionTypes.removeDot, color: item.color })
          }
        >
          🗑
        </StyledButton>
      </StyledHeader>
      <StyledTextArea
        placeholder="Describe your symptoms here..."
        value={item.description}
        onChange={(event) =>
          dispatch({
            type: actionTypes.updateDescription,
            description: event.target.value,
            color: item.color,
          })
        }
      />
    </StyledLi>
  );
}

// 💅🏻 styles
const StyledLi = styled.li`
  width: 250px;
  height: 150px;
  border-left: 5px solid ${(props) => props.color};
  background: white;
  margin: 12px;
  padding: 5px;
  border-radius: 8px;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  font-weight: bold;
  font-size: 18px;
  width: 200px;
`;

const StyledButton = styled.button`
  border: none;
  background: transparent;
`;

const StyledTextArea = styled.textarea`
  width: 230px;
  height: 115px;
`;
