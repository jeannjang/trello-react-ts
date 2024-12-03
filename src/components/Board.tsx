import { useForm } from "react-hook-form";
import { Droppable } from "react-beautiful-dnd";
import { useSetRecoilState } from "recoil";
import { ToDoObject, toDoState } from "../atoms";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  padding: 30px 10px;
  padding-bottom: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 16px;
`;

const Form = styled.form`
  width: 100%;
  margin-bottom: 10px;
  input {
    width: 100%;
    border-radius: 5px;
    border: none;
    font-size: 12px;
  }
`;

interface AreaProps {
  $isDraggingOver: boolean;
  $isDraggingFromThisWith: boolean;
}

const Area = styled.div<AreaProps>`
  background-color: ${(props) =>
    props.$isDraggingOver
      ? "#ffffff85"
      : props.$isDraggingFromThisWith
      ? "#4a535f24"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.2s ease-in-out;
  border-radius: 5px;
`;

interface BoardProps {
  toDos: ToDoObject[];
  boardId: string;
}

interface FormState {
  toDo: string;
}

function Board({ toDos, boardId }: BoardProps) {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<FormState>();

  const handleValid = (data: FormState) => {
    // const newToDo = {
    //     id: Date.now(),
    //     text: toDo,
    //   };
    setToDos((allBoards) => ({
      ...allBoards,
      [boardId]: [
        ...allBoards[boardId],
        { id: Date.now().toString(), text: data.toDo },
      ],
    }));
    setValue("toDo", "");
  };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(handleValid)}>
        <input
          type="text"
          {...register("toDo", { required: true })}
          placeholder="Add a task"
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            $isDraggingOver={snapshot.isDraggingOver}
            $isDraggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <Card key={toDo.id} todo={toDo} index={index} />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
