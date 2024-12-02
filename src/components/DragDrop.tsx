import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDosState } from "../atoms";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const Boards = styled.div`
  display: grid;
  grid-gap: 10px;
  width: 300px;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 30px 10px;
  padding-bottom: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 150px;
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

function DragDrop() {
  const [toDos, setToDos] = useRecoilState(toDosState);
  const handleDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
    const newToDos = Array.from(toDos);
    const [reorderedItem] = newToDos.splice(source.index, 1);
    newToDos.splice(destination.index, 0, reorderedItem);
    setToDos(newToDos);
    console.log("destination:", destination, "source:", source);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(provided) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                {toDos.map((toDo, index) => (
                  <Draggable key={toDo} draggableId={toDo} index={index}>
                    {(provided) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default DragDrop;
