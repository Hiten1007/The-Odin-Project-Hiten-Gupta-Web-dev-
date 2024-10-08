import {home} from "./home.js";
import {menu} from "./menu.js";

export const intialPage = (function() {

    function createDisplay(){
        const header = document.querySelector("#mainheader");
        
        header.appendChild(menu.createHeading("Taste Haven", "h1"));
        const nav = document.createElement("nav");


        nav.appendChild(createButton("home", "Home"));
        nav.appendChild(createButton("menu", "Menu"));
        nav.appendChild(createButton("aboutus", "About Us"));

        header.appendChild(nav);

        home.createDisplay();
        
        const footer = createFooter('footer', 'Made by Hiten Gupta');
        document.body.appendChild(footer);

    }
    function createButton(idText, Heading){
        const button = document.createElement("button");
        button.setAttribute("id", idText);
        button.textContent = Heading;

        return button;
    }

    function createFooter(id, text) {
        const footer = document.createElement('footer');
        footer.setAttribute('id', id);
        const h3 = document.createElement('h3');
        h3.textContent = text;
        footer.appendChild(h3);
        return footer;
    }

    return {createDisplay};

})();