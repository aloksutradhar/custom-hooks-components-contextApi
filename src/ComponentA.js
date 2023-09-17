import { ChildContext } from "./App";
import { useUserContext } from "./context/userContext";

const ComponentA = () => {
  const { data } = useUserContext(ChildContext);
  console.log(data);

  return (
    <div>
      {data.map((ele, id) => (
        <div key={id}>{ele.name}</div>
      ))}
    </div>
  );
};
export default ComponentA;
