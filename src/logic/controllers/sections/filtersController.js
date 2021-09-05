import { elementController } from "../../core";

const test = {};

export default elementController("section-filters", ({ on }) => {
  on("selectChange", (e) => {
    test[e?.detail?.slug] = e?.detail?.value;
    makeRequest()
  });

  function makeRequest() {
    console.log(test);
  }
});
