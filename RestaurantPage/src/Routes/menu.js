const content = document.querySelector("#content");

const createHeading = (headingText, tag) =>{
    const heading = document.createElement(tag);
    heading.textContent = headingText;
    return heading;
};

content.appendChild(createHeading("Welcome To Taste Haven"));

const menu = document.createElement("section");

menu.appendChild(createHeading("Our Menu", "h2"))

const starters = document.createElement("div");


