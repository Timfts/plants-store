export default function ({ main, elm, render }) {
  main((_) => [_start]);

  function _start() {
    console.log("hello", elm);
  }
}

export const model = {
  currentItem: "heart",
  itens: [
    {
      icon: "heart",
    },
    {
      icon: "save",
    },
    {
      icon: "person",
    },
  ],
};
