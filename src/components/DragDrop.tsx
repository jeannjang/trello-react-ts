import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "../atoms";
import Board from "./Board";
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
  width: 100%;
  max-width: 980px;
  grid-template-columns: repeat(3, 1fr);
`;

function DragDrop() {
  //toDos = 기존의 toDos{모든보드}상태 { "TODO": ["task1", "task2"], "DOING": ["task3"], "DONE": ["task4"] }
  const [toDos, setToDos] = useRecoilState(toDoState);

  const handleDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;

    // Same board Move
    if (destination.droppableId === source.droppableId) {
      const boardCopy = [...toDos[source.droppableId]];
      const draggedTodo = boardCopy[source.index];
      boardCopy.splice(source.index, 1);
      boardCopy.splice(destination.index, 0, draggedTodo);
      setToDos({
        ...toDos,
        [source.droppableId]: boardCopy, // = { "TODO": ["b", "c", "a"] }
      });
    }

    // Cross board Move
    if (destination.droppableId !== source.droppableId) {
      const sourceBoard = [...toDos[source.droppableId]];
      const draggedTodo = sourceBoard[source.index];
      const destinationBoard = [...toDos[destination.droppableId]];
      sourceBoard.splice(source.index, 1);
      destinationBoard.splice(destination.index, 0, draggedTodo);
      setToDos({
        ...toDos,
        [source.droppableId]: sourceBoard,
        [destination.droppableId]: destinationBoard,
      });
      console.log(source, destination);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} toDos={toDos[boardId]} boardId={boardId} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default DragDrop;
