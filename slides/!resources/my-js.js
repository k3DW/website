import * as init from "./my-js/initializeSlides.js"
import { loadScripts } from "./my-js/loadScripts.js";
import { addMouseClickNavigation } from "./my-js/mouseClick.js";
import { substituteIncludes } from "./my-js/substituteIncludes.js";
import { substituteLists } from "./my-js/substituteLists.js"

export async function preInitSlides(object) {
    await substituteIncludes();
    substituteLists();
    await loadScripts(object.scripts);

    init.setBackground(object.backgroundImage);
    init.setSlideSize(object.height, object.width);
    init.setColumns();
    init.setHoriCenter();

    addMouseClickNavigation();
}

export function postInitSlides(object) {
    init.setListFade();
    init.setFooters(object.leftSideFooter, object.rightSideFooter, object.useSubFooter);
}
