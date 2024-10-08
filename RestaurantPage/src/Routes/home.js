import {menu} from "./menu.js";
import { aboutUs } from "./about";

export const home = (function() {

    const createPhoto = (src, alt) => {
        const photo = document.createElement("img");
        photo.setAttribute("src", src);
        photo.setAttribute("alt", alt);
        return photo;
    };

    const createDish = (imgSrc, imgAlt, name, description) => {
        const dish = document.createElement("div");
    
        const dishImage = document.createElement("img");
        dishImage.setAttribute("src", imgSrc);
        dishImage.setAttribute("alt", imgAlt);
        dish.appendChild(dishImage);
    
        const dishName = document.createElement("h3");
        dishName.textContent = name;
        dish.appendChild(dishName);
    
        const dishContent = document.createElement("p");
        dishContent.textContent = description;
        dish.appendChild(dishContent);
    
        return dish;
    };

    const createTestimonial = (text, author) => {
        const blockquote = document.createElement("blockquote");
    
        const quote = document.createElement("p");
        quote.textContent = text;
        blockquote.appendChild(quote);
    
        const cite = document.createElement("cite");
        cite.textContent = author;
        blockquote.appendChild(cite);
    
        return blockquote;
    };

    function createDisplay(){
const content = document.querySelector("#content");

// Heading section
content.appendChild(menu.createHeading("Taste Haven", "h1"));

// Home content section
const section1 = document.createElement("section");

section1.appendChild(createPhoto("https://example.com/restaurant-image.jpg", "Add an image of a food"));

section1.appendChild(aboutUs.createText("At Taste Haven, we bring you the finest culinary experiences, blending flavors from around the world. Our chefs use fresh ingredients to create mouth-watering dishes that will leave you craving for more. Come and enjoy a delightful meal in a cozy ambiance!"));

content.appendChild(section1);

// Story section
const section2 = document.createElement("section");

section2.appendChild(menu.createHeading("Our Story", "h2"));

section2.appendChild(aboutUs.createText("Founded in 2010, Taste Haven has become a beloved spot for food lovers in town. Our passion for fresh ingredients and unique flavors is what sets us apart. We believe in providing a cozy ambiance and dishes that make you feel at home."));

content.appendChild(section2);

// Chef's specials section
const section3 = document.createElement("section");

section3.appendChild(menu.createHeading("Chef's Specials", "h2"));

section3.appendChild(createDish("https://example.com/special1.jpg", "Spaghetti Carbonara", "Spaghetti Carbonara", "A classic Italian dish with creamy sauce, pancetta, and freshly grated parmesan."));
section3.appendChild(createDish("https://example.com/special2.jpg", "Grilled Salmon", "Grilled Salmon", "Perfectly seasoned and served with a side of roasted vegetables and lemon butter sauce."));

content.appendChild(section3);

// Testimonials section
const section4 = document.createElement("section");

section4.appendChild(menu.createHeading("What Our Customers Say", "h2"));

section4.appendChild(createTestimonial("The best dining experience I've ever had! The food is simply exquisite and the ambiance is warm and inviting.", "- John Doe"));
section4.appendChild(createTestimonial("A hidden gem in the city! Every dish is a masterpiece, and the staff is incredibly friendly.", "- Jane Smith"));

content.appendChild(section4);

// Visit section
const section5 = document.createElement("section");

section5.appendChild(menu.createHeading("Visit Us", "h2"));

section5.appendChild(aboutUs.createText("📍 123 Main Street, Your City, Your State"));

const visitTimes = document.createElement("div");

visitTimes.appendChild(createTime("Mon-Fri: 11:00 AM - 10:00 PM"));
visitTimes.appendChild(createTime("Sat-Sun: 9:00 AM - 11:00 PM"));

section5.appendChild(visitTimes);

content.appendChild(section5);

// Gallery section
const section6 = document.createElement("section");

section6.appendChild(menu.createHeading("Our Space & Dishes", "h2"));

const photos = document.createElement("div");

photos.appendChild(createPhoto("https://example.com/interior1.jpg", "Cozy dining area"));
photos.appendChild(createPhoto("https://example.com/interior2.jpg", "Bar area"));
photos.appendChild(createPhoto("https://example.com/dish1.jpg", "Delicious dish 1"));
photos.appendChild(createPhoto("https://example.com/dish2.jpg", "Delicious dish 2"));

section6.appendChild(photos);

content.appendChild(section6);
    }
    
    function createTime(time){
        const timeBox = document.createElement("div");
        timeBox.textContent = time;

        return timeBox;
    }

    return {createDisplay, createPhoto};

})();