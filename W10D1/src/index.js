const DOMNodeCollection = require("./dom_node_collection");

window.$l = function $l(arg) {
    if (typeof arg === 'string') {
        // debugger;
        return $l.selector(arg);
    } else if (arg instanceof HTMLElement) {
        return new DOMNodeCollection ([arg]);
    } else if (typeof arg === 'object') {
        return $l.element(arg);
    }

}

$l.element = function (element) {
    if (typeof element === 'object') {
        return new DOMNodeCollection ([element]);
    }
}

$l.selector = function (selector) {
    const nodes = document.querySelectorAll(selector);
    const nodesArray = Array.from(nodes);
    return new DOMNodeCollection (nodesArray);
}