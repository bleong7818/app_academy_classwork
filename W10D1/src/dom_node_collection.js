class DOMNodeCollection {
    constructor (nodes) {
        this.nodes = nodes;
    }

    html (string) {
        if (typeof string === "string") {
           this.forEach((node) => {
               node.innerHTML = string;
           })
        } else {
            return this.nodes[0].innerHTML;
        }
    }

    each(callback) {
        this.nodes.forEach((ele) => {
            callback(ele);
        })
    }

    empty () {
        debugger;
        this.forEach((node) => {
            node.html = "";
        });
    }

    apprend (something) {
        if (this.nodes.length === 0) return;

        if (typeof something === "object" && !(something instanceof DOMNodeCollection)) {
                something = $l(something);
        }

        if (typeof something === 'string') {
            this.each ((node) => {
                node.innerHTML += something;
            });
        } else if (something instanceof DOMNodeCollection) {
            this.each((node) => {
                something.each((child) => {
                    node.appendChild(child);
                });
            });
        }
    }

    attr(key, value) {
        if (typeof value === 'string') {
            this.each((node) => node.setAttribute(key, value));
        } else {
            return this.nodes[0].getAttribute(key);
        }
    }

    addClass(newClass) {
        this.each(node => node.classList.add(newClass))
    }

    removeClass(oldClass) {
        this.each(node => node.classList.remove(oldClass))
    }

    children() {
        let childNodes = [];
        this.each((node) => {
            const children = node.children;
            childNodes = childNodes.concat(Array.from(children));
        });

        return new DOMNodeCollection (childNodes);
    }

    parent() {
        let parents = [];
        this.each((node) => {
            const parent = node.parentNode;
            parents = parents.concat(Array.from(children));
        });
    }


}

module.exports = DOMNodeCollection;