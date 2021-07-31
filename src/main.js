import jails from "jails-js";
import * as AppShell from "./controllers/app-shell";

// register components
jails.register("app-shell", AppShell);

jails.start();
