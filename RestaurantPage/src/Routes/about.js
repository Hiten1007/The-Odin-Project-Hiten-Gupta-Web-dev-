import { home } from "./home.js";
import { menu } from "./menu.js";

export const aboutUs = (function() {
    function createDisplay(){
        const content = document.querySelector("#content");

        content.appendChild(menu.createHeading("About Us", "h2"));

        content.appendChild(createText("Welcome to <strong>Taste Haven</strong>, a place where culinary passion meets exceptional flavors. Established in 2010, we have been serving our customers with an array of delicious dishes, crafted from the freshest ingredients and inspired by global cuisines. Our aim is to provide not just a meal, but an experience that delights your taste buds and creates unforgettable memories."));
        content.appendChild(createText("Our chefs are dedicated to bringing innovation and creativity to each dish, ensuring that every visit to Taste Haven offers something new and exciting. Whether you are here for a romantic dinner, a family gathering, or a casual meal with friends, our warm and cozy ambiance makes you feel right at home."));
        content.appendChild(createText(" We believe in the magic of great food and its ability to bring people together. Join us at Taste Haven and be a part of our story!"));

        content.appendChild(menu.createHeading("Contact Us", "h3"));

        content.appendChild(createContact("Address:", "123 Main Street, Your City, Your State"));
        content.appendChild(createContact("Phone:", "+1 (234) 567-890"));
        content.appendChild(createContact("Email:", "info@tastehaven.com"));
        content.appendChild(home.createPhoto("https://example.com/about-image.jpg", "Image representing the ambiance of Taste Haven"));
    }

    function createText(text){
        const textBox = document.createElement("p");
        textBox.textContent = text;

        return textBox;
    }

    function createContact(strongText, Contact){
        const contactBox = document.createElement("div");

        const strongBox = document.createElement("strong");
        strongBox.textContent = strongText + " ";
        contactBox.appendChild(strongBox);

        contactBox.appendChild(createText(Contact));

        return contactBox;
    }

    return {createDisplay, createText};

})();