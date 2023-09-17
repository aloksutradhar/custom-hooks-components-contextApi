import { useState } from "react";
import { ChildContext } from "./App";
import { useUserContext } from "./context/userContext";
import CustomButton from "./components/button/CustomButton";
import ModalComp from "./components/Modal/ModalComp";
import Counter from "./Counter";

const ComponentB = () => {
  const { data } = useUserContext(ChildContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const openModal = () => {
    setModalOpen(true);
    setClickCount(clickCount + 1);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h3>{clickCount}</h3>
      <CustomButton title="Open Modal" handleClick={openModal} />
      <ModalComp show={modalOpen}>
        <Counter />
        <h3>Users Email</h3>
        {data.map((ele, id) => (
          <p key={id}>{ele.email}</p>
        ))}
        <CustomButton title="Close" handleClick={closeModal} />
      </ModalComp>
    </div>
  );
};
export default ComponentB;
