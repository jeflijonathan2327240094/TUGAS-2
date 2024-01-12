import { useState } from "react";

const InputName = (e) => {
  const [name, setName] = useState("");
  const ButtonPrint = () => {
    if (name.length == 0) {
      alert("Input Nama Tidak Boleh Kosong!!");
    } else {
      alert("nama anda adalah =" + name);
    }
  };
  return (
    <div class="mt-3 mb-3 me-3 ms-3 d-block">
      <div class="form-group mt-3 mb-3">
        <label htmlFor="name">Nama Anda</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name..."
        />
      </div>
      <div class="mt-3 mb-3">
        <button onClick={ButtonPrint} class="btn btn-warning">
          Print
        </button>
      </div>
    </div>
  );
};
export default InputName;
