import { home } from "./Routes/home.js";
import { menu } from "./Routes/menu.js";
import { aboutUs } from "./Routes/about.js";
import { intialPage } from "./Routes/initial-page-load.js";


const Page = (function () {
    function addNavEvents(){
        const homeButton = document.querySelector("#home");
        const menuButton = document.querySelector("#menu");
        const aboutButton = document.querySelector("#aboutus");

        homeButton.addEventListener("click", ()=>{
            content.textContent = "";
            home.createDisplay();
        });

        menuButton.addEventListener("click", ()=>{
            content.textContent = "";
            menu.createDisplay();
        });
        
        aboutButton.addEventListener("click", ()=>{
            content.textContent = "";
            aboutUs.createDisplay();
        });
    }

    return {addNavEvents};
})();


intialPage.createDisplay();
Page.addNavEvents();