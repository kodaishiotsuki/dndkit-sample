import React, { useState } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";

import { Draggable } from "./Draggable";

/* The implementation details of <Item> and <ScrollableList> are not
 * relevant for this example and are therefore omitted. */

function App() {
  const [items] = useState(["1", "2", "3", "4", "5"]);
  const [activeId, setActiveId] = useState(null);

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <ScrollableList>
        {items.map((id) => (
          <Draggable key={id} id={id}>
            <Item value={`Item ${id}`} />
          </Draggable>
        ))}
      </ScrollableList>

      <DragOverlay>
        {activeId ? <Item value={`Item ${activeId}`} /> : null}
      </DragOverlay>
    </DndContext>
  );

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd() {
    setActiveId(null);
  }
}
