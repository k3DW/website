import * as init from "./my-js/initializeSlides.js"
import { loadScripts } from "./my-js/loadScripts.js";
import { addMouseClickNavigation } from "./my-js/mouseClick.js";
import { substituteIncludes } from "./my-js/substituteIncludes.js";

window.k3DW = {};

window.k3DW.preInitSlides = async (object) => {
    await substituteIncludes();
    await loadScripts(object.scripts);

    init.setBackground(object.backgroundImage);
    init.setSlideSize(object.height, object.width);
    init.setColumns();
    init.setHoriCenter();

    addMouseClickNavigation();
}

window.k3DW.postInitSlides = (object) => {
    init.setListFade();
    init.setFooters(object.leftSideFooter, object.rightSideFooter, object.useSubFooter);
}
