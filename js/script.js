const container = document.querySelector('#container');
const links = document.querySelectorAll('header li > a');

let url = 'partials/home.html';

function loadContent(url){
fetch(url)
.then(function (rsp) {
return rsp.text();
})
.then(function (data) {
container.innerHTML = data;
});
}
loadContent(url);

function selectContent(ev){
    ev.preventDefault();
    let load = ev.target.href;
    loadContent(load);
}

for (let i=0;i<links.length;i++) {
    links[i].addEventListener("click", selectContent);
}