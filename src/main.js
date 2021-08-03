import jails from "jails-js";
import * as AppShell from "./fragments/app-shell";
import * as AppMobileNav from "./fragments/app-mobile-nav";
import * as AppDeskNav from "./fragments/app-desk-nav";

// register components
jails.register("app-shell", AppShell);
jails.register("app-mobile-nav", AppMobileNav);
jails.register("app-desk-nav", AppDeskNav);

jails.start();
