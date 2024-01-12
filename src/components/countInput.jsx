import { useState } from "react";
import Helmet from "react-helmet";
const CountInput = () => {
  const [count, countValue] = useState(0);
  let Title = count + " " + "times Clicked";
  return (
    <div class="mt-3 mb-3 ms-3 me-3">
      <Helmet>
        <title>{Title}</title>
      </Helmet>
      <button
        onClick={() => countValue((count) => count + 1)}
        class="btn btn-primary"
      >
        Change Counter {count} time clicked
      </button>
    </div>
  );
};
export default CountInput;
