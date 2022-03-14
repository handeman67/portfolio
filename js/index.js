function see(e, se, newtext) {
    const result = document.getElementById('result');
    result.innerText += `${newtext} =${e}`; //?
    result.innerText += `${newtext} =${se}`; //?

}

class elm {
    constructor(elm, at1, name, at2) {

        !elm ? elm = "div" : elm;
        !name ? name = null : name;
        let e = document.createElement(`${elm}`);
        !at2 ? (at2 = null) : e.setAttribute(at2, name);
        !at1 ? (at1 = null) : e.setAttribute(at1, name);
        return e;
    }
}


const nav = document.getElementById("navwrap");
const menue = new elm("div", "class", "hamburg", "id");
const sections = document.querySelectorAll("section");
const doc = document.documentElement;
const Width = doc.offsetWidth;
const Height = doc.offsetHeight;
const bodyScroll = doc.offsetWidth;


function check(a, b) {
    this.up = a = false;
    this.down = b = false;
    if (!a && !b) { return this.up, this.down; }
    return this;

}

const move = {
    sclTp: doc.scrollTop,
    sclLft: doc.scrollLeft,
    sclrgt: doc.scrollRight,
    sclbtm: doc.scrollBottom,
    scrollthrough: (sclTp = 0) || (document.documentElement.scrollTop = 0)

};

function scrollFunction() {

    if (bodyScroll < 20) {
        nav.style.display = "flex";
        // see(bodyScroll, "X");
        check(true, false);
        console.log('up', this.document.documentElement);
    } else {

        nav.style.display = "block";
        // see(bodyScroll, "Y");
        check(false, true);
        console.log("down", check().down);
    }

}


// creating the mainwindow
const handleEvent1 = () => {
    let mainInner = new elm("div", "class", "main");
    return mainInner;
};


const section = document.querySelectorAll("section");
const prevNode = [];

const li = document.querySelectorAll(".navButton");
li.forEach((item) => {
    item.addEventListener("click", (index) => {
        // since my btn text and id are the same
        let b = index;
        let Id = b.target.innerText;
        let main = () => { return document.getElementById(`${Id}`); };
        (prevNode.length <= 0) ? setTimeout(() => {
            window.location.href = `#"${Id}"`;
            main().classList.add('display');
            window.location.href = `#"${Id}"`;
            prevNode.push(main());
        }, 100): setTimeout(() => {
            let old = prevNode.splice(0, 1);
            window.location.href = `#"${Id}"`;
            main().classList.add('display');
            main() !== old[0] ? old[0].classList.remove('display') : see('same button'), prevNode.push(main());

        }, 100);

    });
});


function loadNav() {
    let header = document.getElementById("navwrap");
    let list = document.getElementsByTagName("ul");
    let btns = document.querySelectorAll("button");
    btns.forEach((item) => {
        // console.log(item);
        item.addEventListener("click", () => {
            let current = document.getElementsByClassName("active");
            let Nw = item.getElementsByClassName("active");
            (current.length > 0) ? current[0].className = current[0].className.replace("active", ""): item.classList.add("active");
            (Nw !== null || undefined) ? item.classList.add("active"): current[0].classList.romove("active");
        });
    });



}