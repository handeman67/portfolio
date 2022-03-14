function hamburg() {
    let list = document.getElementsByTagName("ul");
    list[0].style.display = 'none';
    nav.appendChild(menue);
    menue.innerHTML = `
  <span id="ham" class="top"></span>
  <span id="ham" class="middle"></span>
  <span id="ham" class="bottom"></span>
`;


    let ham = document.getElementById("hamburg");
    ham.addEventListener("click", (evt) => {
        this.list = list[0];
        ham.appendChild(this.list);
        this.list.style.display = 'flex';
        this.list.style.flexDirection = 'row';
        console.log(this.list);

        return ham.classList.add('checked');

    });
}