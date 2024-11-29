import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function DragDrop() {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <div>
        <Droppable droppableId="one">
          {() => (
            <ul>
              <Draggable draggableId="first" index={0}>
                {() => <li>Item one</li>}
              </Draggable>
              <Draggable draggableId="second" index={0}>
                {() => <li>Item two</li>}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default DragDrop;
