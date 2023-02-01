import { createStyles, Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { IconCheck } from "@tabler/icons";
import {
  ThemeIcon
} from "@mantine/core";

const ICON_SIZE = 60;
const useStyles = createStyles((theme) => ({
  item: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    padding: `${theme.spacing.sm}px ${theme.spacing.xl}px`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    marginBottom: theme.spacing.sm,
  },

  itemDragging: {
    boxShadow: theme.shadows.sm,
  },
  icon: {
    position: "absolute",
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },

  symbol: {
    fontSize: 20,
    fontWeight: 700,
    width: 2000,
  },
}));

interface DndListProps {
  data: {
    type: string;
    name: string;
  }[];
  
}

export function DndList({ data }: DndListProps) {
  const { classes, cx } = useStyles();
  const [state, handlers] = useListState(data);

  const items = state.map((item, index) => (
    <Draggable key={item.type} index={index} draggableId={item.type}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          <div >
            
          <div style={{alignSelf:'left'}}>
          <ThemeIcon  size={ICON_SIZE} radius={ICON_SIZE} color={'green'}>
          <IconCheck size={34} stroke={1.5} />
         </ThemeIcon>
          <Text className={classes.symbol} >{item.name} </Text>
          </div>
          <div style={{alignSelf:'right'}}>
            <Text >{item.type}</Text>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) =>
        handlers.reorder({ from: source.index, to: destination?.index || 0 })
      }
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}