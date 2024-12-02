import { Droppable, Draggable } from "react-beautiful-dnd";

import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  padding: 30px 10px;
  padding-bottom: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 150px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 16px;
`;

interface BoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: BoardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {toDos.map((toDo, index) => (
              <Draggable key={toDo} draggableId={toDo} index={index}>
                {(provided) => <Card todo={toDo} provided={provided} />}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
