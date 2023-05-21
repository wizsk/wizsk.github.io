const projects = [
    /*
    {
        "name": "_",
        "img": "https://files.catbox.moe/o9ocaz.png",
        "repo": "https://github.com/wizsk",
        "desc": "_____"
    },
    */

    {
        "name": "TC",
        "img": "https://files.catbox.moe/fnzreb.png",
        "repo": "https://github.com/wizsk/tc",
        "desc": "It'a a timer+clock site like `fliqo` for studying or screensaver."
    },
];

const arrow = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/></svg>`

const links = document.getElementById("links");
let linksHtml = ""
projects.forEach((p) => {
    linksHtml += `<div class="pr-item">
                    <a target="_blank" href="${p.repo}"><img atl="${p.name} image" src="${p.img}"/> </a>
                    <a target="_blank" href="${p.repo}">${p.name}</a>
                    <p>${p.desc}</p>
                  </div>`;
});

links.innerHTML = linksHtml;

