import MENU_ITEMS from "../constants/menu-items";

export default function AppDeskNav({ main, update, msg, elm }) {
  main((_) => [onMount, events]);

  update((props) => {
    msg.set((state) => (state.currentRoute = props.currentRoute));
  });

  const events = ({ on }) => {
    on("click", "#lala", onClickToggleHandler);
  };

  function onMount() {
    console.log(elm);
  }

  function onClickToggleHandler() {
    msg.set((state) => {
      state.collapsed = !state.collapsed;
    });
  }
}

export const model = {
  currentRoute: "",
  items: MENU_ITEMS,
  collapsed: false,
};

export const view = (state) => ({
  ...state,
  css: {
    collapsed: state.collapsed ? "app-desk-nav--collapsed" : "",
  },
});
