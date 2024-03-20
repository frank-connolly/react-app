import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          You clicked the magic button!
        </Alert>
      )}
      <Button
        color="success"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
