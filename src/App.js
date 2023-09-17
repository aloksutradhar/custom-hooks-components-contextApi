import "./styles.css";
import ComponentA from "./ComponentA";
import { UserContext } from "./context/userContext";
import ComponentB from "./ComponentB";
import Counter from "./Counter";

export default function App() {
  return (
    <UserContext>
      <div className="App">
        <ComponentA />
        <hr />
        <ComponentB />
        <Counter />
      </div>
    </UserContext>
  );
}
