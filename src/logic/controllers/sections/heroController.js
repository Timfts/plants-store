import { elementController } from "../../core";

export default elementController("hero-section", ({ root, on }) => {
  on("mousemove", (e) => {
    console.log(e);
  });

  console.log(root);
});
