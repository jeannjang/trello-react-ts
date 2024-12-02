import styled from "styled-components";
import { memo } from "react";
import { DraggableProvided } from "react-beautiful-dnd";

const CardComponent = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

interface CardProps {
  todo: string;
  provided: DraggableProvided;
}

const Card = memo(({ todo, provided }: CardProps) => (
  <CardComponent
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
  >
    {todo}
  </CardComponent>
));

export default Card;
