const CustomButton = ({ title, handleClick, isDisable }) => {
  return (
    <button
      disabled={isDisable}
      style={{
        background: "#512B78",
        color: "#fff",
        padding: "5px",
        borderRadius: "5px",
        outline: "none",
        border: "none"
      }}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};
export default CustomButton;
