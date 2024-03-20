import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  const handleItemSelect = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onItemSelect={handleItemSelect}
      />
    </div>
  );
}

export default App;
