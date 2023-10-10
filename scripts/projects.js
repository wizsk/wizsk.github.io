const projects = [
    /*
    * // templates
    {
        "name": "_",
        "img": "https://files.catbox.moe/o9ocaz.png",
        "repo": "https://github.com/wizsk",
        "desc": "_____"
    },
    */
    {
        "name": "GoShare",
        "img": "https://github.com/wizsk/goshare/raw/main/assets/ss/desktop-da.png",
        "repo": "https://github.com/wizsk/goshare",
        "desc": "A go backend for serving or uploading file locally"
    },
    {
        "name": "brn",
        "img": "https://raw.githubusercontent.com/wizsk/brn/main/imgs/demo.gif",
        "repo": "https://github.com/wizsk/brn",
        "desc": "Bulk rename files in a sweep with your favourite text editor"
    },
    {
        "name": "FileUP",
        "img": "/img/go-module.png",
        "repo": "https://github.com/wizsk/fileup",
        "desc": "A go module for receiving big files in chunk from the client with only http"
    },

    {
        "name": "Dictionary",
        "img": "https://raw.githubusercontent.com/wizsk/svelte-dictionary/main/static/screenshot.png",
        "repo": "https://github.com/wizsk/svelte-dictionary",
        "desc": "A Dictionary web app made with svelte and api"
    },
    {
        "name": "TC",
        "img": "https://github.com/wizsk/tc/raw/main/main_page_screenshot.png",
        "repo": "https://github.com/wizsk/tc",
        "desc": "A timer+clock site like 'fliqo' for studying or screensaver."
    },
];

const arrow = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/></svg>`

const links = document.getElementById("links");
let linksHtml = ""
projects.forEach((p) => {
    linksHtml += `<a class="pr-item" href="${p.repo}">
                    <img atl="${p.name} image" src="${p.img}"/>
                    <div>${p.name}</div>
                    <p>${p.desc}</p>
                  </a>`;
});

links.innerHTML = linksHtml;

