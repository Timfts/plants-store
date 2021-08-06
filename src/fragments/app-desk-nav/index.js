import MENU_ITEMS from "../../constants/menu-items";

export default function AppDeskNav({ main, update, msg, elm, injection }) {
  const { router } = injection;
  main((_) => [events]);

  update((props) => {
    msg.set((state) => (state.currentRoute = props.currentRoute));
  });

  const events = ({ on }) => {
    on("click", "#lala", onClickToggleHandler);
    on("click", ".app-desk-nav__page-link", onClickPageLinkHandler);
  };

  function onClickToggleHandler() {
    msg.set((state) => {
      state.collapsed = !state.collapsed;
    });
  }

  function onClickPageLinkHandler(e) {
    const element = e.delegateTarget;
    const route = element?.dataset?.to;
    if (route) {
      const isMenuOpen = !msg.getState().collapsed;
      router.navigate(route);
      if (isMenuOpen) onClickToggleHandler();
    }
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
