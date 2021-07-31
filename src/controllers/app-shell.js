export default function ({ main, elm }) {
  main((_) => [_start]);

  function _start() {
    console.log(elm);
  }
}

export const model = {
  name: "text",
  item: "cebola"
};