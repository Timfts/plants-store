import jails from "jails-js";
import * as AppShell from "./controllers/app-shell";
import * as AppMobileNav from "./controllers/app-mobile-nav";
import * as AppDeskNav from "./controllers/app-desk-nav";

// register components
jails.register("app-shell", AppShell);
jails.register("app-mobile-nav", AppMobileNav);
jails.register("app-desk-nav", AppDeskNav)

jails.start();
