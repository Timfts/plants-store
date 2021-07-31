export default function AppShell({ main, elm, subscribe, msg }) {
  main((_) => [startRouting, events]);

  const events = () => {
    subscribe("evt:change-route", handleChangeRoute);
  };

  function startRouting() {
    console.log(elm);
  }

  /** @param {string} newRoute */
  function handleChangeRoute(newRoute) {
    msg.set((state) => {
      state.currentRoute = newRoute;
    });
  }
}

export const model = {
  theme: "default",
  currentRoute: "",
};
