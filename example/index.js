import Platform from "xlb-platform";

import module from '../src/index';

let vue = Platform.getVue([
    {
        name: "system",
        path: "/system",
        component: module.page,
        children: module.router
    }
]);
vue.$mount("#app");
