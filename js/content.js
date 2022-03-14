
const sam = document.querySelector("#five");
const sample1 = './txt/sample0.txt';
const sample2 = './content.html';
const sample3 = './gallery.html';
const sample4 = './txt/sample1.txt';
const sample5 = './img/owl.svg';
const content = document.querySelectorAll(".body");
const pages=[];
const pageSample=[sample1,sample2,sample3,sample4,sample5];
const newPages=['./gallery.html'];
const pageinfo=pageSample;
let count=0;

content.forEach((item) => {   
    const gallery = new elm("div", "class", 'gallery', "id");
    const galsect = new elm("div", "class", "section");
          
    let txts = new elm("span", "class", "txt"+count,"id");
    txts.style = `display : "grid";place-content = "center";`;
    let t=pageinfo[count];
    count++;
    let fll=new loadText(t,txts.id);
    txts.innerHTML = fll;
    galsect.appendChild(txts);
    gallery.appendChild(galsect);
    item.appendChild(gallery);
    pages.push(gallery);  
    
});
 pages.forEach((page) =>{page.id=page.id+count;count++;});