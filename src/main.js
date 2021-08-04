import jails from "jails-js";
import GN from "grapnel";

import * as AppShell from "./fragments/app-shell";
import * as AppMobileNav from "./fragments/app-mobile-nav";
import * as AppDeskNav from "./fragments/app-desk-nav";
import * as AppRoute from "./fragments/app-route";

const Grapnel = GN.default;
const router = new Grapnel({ root: "/", pushState: true });

router.get("/*", (route) => {
  console.log( route);
});

// register components
jails.register("app-shell", AppShell);
jails.register("app-mobile-nav", AppMobileNav);
jails.register("app-desk-nav", AppDeskNav);
jails.register("app-route", AppRoute);

jails.start();
