import randomColor from "randomcolor";
const BackgroundColor = () => {
  const ButtonColor = () => {
    let color = randomColor();
    document.body.style.backgroundColor = color;
  };
  return (
    <div class="mt-3 mb-3 ms-3 me-3">
      <button onClick={ButtonColor} class="btn btn-danger">
        Change Background to random color (Challenge)
      </button>
    </div>
  );
};
export default BackgroundColor;
