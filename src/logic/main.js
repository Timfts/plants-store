import { elementController } from "./core";

const HeroSectionController = elementController("hero-section", ({ root }) => {
  console.log(root);
});

HeroSectionController();
