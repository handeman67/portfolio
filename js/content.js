
const sam = document.querySelector("#five");
const sample1 = "./txt/sample0.txt";
const sample2 = "./content.html";
const sample3 = "./gallery.html";
const sample4 = "./txt/sample1.txt";
const sample5 = "./img/owl.svg";
const content = document.querySelectorAll(".body");
const pages=[];
const pageSample=[sample1,sample2,sample3,sample4,sample5];
const newPages=['./gallery.html'];
const pageinfo=pageSample;

content.forEach((item,index) => {   
    const gallery = new elm("div", "class", 'gallery', "id");
    const galsect = new elm("div", "class", "section");
          
    let txts = new elm("span", "class", `txt${index}`,"id");
    txts.style = `display : "grid";place-content = "center";`;
    let t=pageinfo[index];//?
    let fll=new loadText(t,txts.id);
    console.log(t);
    txts.innerHTML = fll;
    galsect.appendChild(txts);
    gallery.appendChild(galsect);
    item.appendChild(gallery);
    pages.push(gallery);  

    
});
 pages.forEach((page,index) =>{page.id=page.id+index;});