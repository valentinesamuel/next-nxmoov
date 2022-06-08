import { Box } from '@chakra-ui/react'
import { DragDropContext } from 'react-beautiful-dnd';
import DesktopCard from './DesktopCard'
import DesktopDisplayZone from './DesktopDisplayZone';

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.cards];
      const destItems = [...destColumn.cards];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          cards: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          cards: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.cards];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          cards: copiedItems,
        },
      });
    }
  };

  const DesktopView = ({ columns }) => {
    // This is the area that renders all the columns
    return (
    <Box display="flex" h="100vh">
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <DesktopDisplayZone
              column={column}
              droppableColumnId={columnId}
              key={index}
            />
          );
        })}
      </DragDropContext>
    </Box>
  );
}

export default DesktopView