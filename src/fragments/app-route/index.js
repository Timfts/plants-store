export default function AppRoute({ update, msg, main }) {
  main((_) => []);

  update((props) => {
    msg.set((state) => (state.currentRoute = props.currentRoute));
  });
}

export const model = {
  currentRoute: "/",
};
