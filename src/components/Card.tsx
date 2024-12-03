import styled from "styled-components";
import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import { ToDoObject } from "../atoms";

interface CardComponentProps {
  $isDragging: boolean;
}

const CardComponent = styled.div<CardComponentProps>`
  background-color: ${(props) =>
    props.$isDragging ? "#ffffff85" : props.theme.cardColor};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  transition: background-color 0.2s ease-in-out;
`;

interface CardProps {
  todo: ToDoObject;
  index: number;
}

const Card = memo(({ todo, index }: CardProps) => (
  <Draggable draggableId={String(todo.id)} index={index}>
    {(provided, snapshot) => (
      <CardComponent
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        $isDragging={snapshot.isDragging}
      >
        {todo.text}
      </CardComponent>
    )}
  </Draggable>
));

export default Card;
