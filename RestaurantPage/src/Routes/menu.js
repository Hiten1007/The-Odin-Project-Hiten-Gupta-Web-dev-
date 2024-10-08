export const menu = (function() {

const createHeading = (headingText, tag) =>{
    const heading = document.createElement(tag);
    heading.textContent = headingText;
    return heading;
};
const Dish = (dishName, description, price) =>{
    const dish = document.createElement("div");
    
    dish.appendChild(createHeading(dishName, "h4"));

    const dishDescription = document.createElement("p");
    dishDescription.textContent = description;
    dish.appendChild(dishDescription);

    const dishPrice = document.createElement("p");
    dishPrice.textContent = price;
    dish.appendChild(dishPrice);

    return dish;
};

function menuDisplay(){
    const content = document.querySelector("#content");
//Headig section done
content.appendChild(createHeading("Welcome To Taste Haven", "h1"));

const menu = document.createElement("section");

menu.appendChild(createHeading("Our Menu", "h2"))

//Starters section
const starters = document.createElement("div");

starters.appendChild(createHeading("Starters", "h3"));
starters.appendChild(Dish("Bruschetta", "Toasted bread topped with fresh tomatoes, garlic, and basil.", "$7.50"));
starters.appendChild(Dish("Stuffed Mushrooms", "Portobello mushrooms stuffed with cheese and herbs, baked to perfection.", "$9.00"));

menu.appendChild(starters);

//Main Course Section
const mainCourse = document.createElement("div");
mainCourse.appendChild(createHeading("Main Course", "h3"));
mainCourse.appendChild(Dish("Grilled Salmon", "Served with a side of roasted vegetables and lemon butter sauce.", "$18.00"));
mainCourse.appendChild(Dish("Spaghetti Carbonara", "Classic Italian pasta with creamy sauce, pancetta, and freshly grated parmesan.", "$14.50"));

menu.appendChild(mainCourse);

//Desserts section
const desserts = document.createElement("div");
desserts.appendChild(createHeading("Desserts", "h3"));
desserts.appendChild(Dish("Tiramisu", "Traditional Italian dessert with layers of mascarpone cheese and espresso-soaked ladyfingers.", "$6.00"));
desserts.appendChild(Dish("Chocolate Lava Cake", "Warm chocolate cake with a gooey center, served with vanilla ice cream.", "$7.50"));

menu.appendChild(desserts);

content.appendChild(menu);
}

return {menuDisplay, Dish, createHeading};

})();