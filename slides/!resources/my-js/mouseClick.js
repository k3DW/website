export function addMouseClickNavigation() {
    // https://www.raymondcamden.com/2012/10/20/Adding-mouse-click-navigation-to-revealjs
    window.addEventListener("mousedown", handleClick, false);
    window.addEventListener("contextmenu", function(e) { e.preventDefault(); }, false);
    function handleClick(e) {
        e.preventDefault();
        if(e.button === 0) Reveal.next(); 
        if(e.button === 2) Reveal.prev(); 
    }
}
