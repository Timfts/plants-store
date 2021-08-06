import MENU_ITEMS from "../../constants/menu-items";

export default function AppMobileNav({ main, update, msg, injection }) {
  const { router } = injection;

  main((_) => [events]);

  const events = ({ on }) => {
    on("click", ".app-mobile-nav__icon-holder", buttonClickHandler);
  };

  update((props) => {
    msg.set((state) => (state.currentRoute = props.currentRoute));
  });

  /** @param {PointerEvent} e */
  function buttonClickHandler(e) {
    const element = e.target;
    if (element instanceof HTMLElement) {
      const route = element?.dataset?.to;
      router.navigate(route);
    }
  }
}

export const model = {
  currentRoute: "",
  items: MENU_ITEMS,
};
