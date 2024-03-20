import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onItemSelect: (item: string) => void;
}

function ListGroup({ items, heading, onItemSelect }: Readonly<Props>) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && "No items to display"}
      <ul className="list-group">
        {items.map((item, index) => (
          <button
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            tabIndex={0}
            onClick={() => {
              setSelectedIndex(index);
              onItemSelect(item);
            }}
          >
            {item}
          </button>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
