export default function AppShell({ main, msg, injection }) {
  const { router } = injection;
  main((_) => [routesEvents]);

  const routesEvents = () => {
    router.get("/*", (payload) => {
      const route = payload?.params?.[0];
      const formatted = route ? `/${route}` : "/";
      msg.set((state) => (state.currentRoute = formatted));
    });
  };
}

export const model = {
  theme: "default",
  currentRoute: "/",
};
