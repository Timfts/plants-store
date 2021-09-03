import { elementController } from "../../core";

export default elementController("section-filters", ({ on }) => {
  on("selectChange", (e) => {
    console.log(e?.detail);
  });
});
