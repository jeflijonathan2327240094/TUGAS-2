//import Title from "./components/Title";
import CountInput from "./components/countInput";
import BackgroundColor from "./components/backgroundColor";
import InputName from "./components/inputName";
import MyIdentity from "./components/identity";
function App() {
  return (
    <div>
      <CountInput />
      <MyIdentity
        name="Jefli Jonathan"
        npm="232720094"
        link="https://github.com/jeflijonathan2327240094/TUGAS-2.git"
      />
      <InputName />
      <BackgroundColor />
    </div>
  );
}

export default App;
