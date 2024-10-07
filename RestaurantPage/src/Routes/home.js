const home = document.querySelector("#home");


const content = document.querySelector("#content");

// Heading section
const heading = document.createElement("div");
heading.textContent = "Taste Haven";
content.appendChild(heading);

// Home content section
const section1 = document.createElement("section");

const image = document.createElement("img");
image.setAttribute("src", "https://example.com/restaurant-image.jpg");
image.setAttribute("alt", "Add an image of a food");
section1.appendChild(image);

const homeContent = document.createElement("p");
homeContent.textContent = "At Taste Haven, we bring you the finest culinary experiences, blending flavors from around the world. Our chefs use fresh ingredients to create mouth-watering dishes that will leave you craving for more. Come and enjoy a delightful meal in a cozy ambiance!";
section1.appendChild(homeContent);

content.appendChild(section1);

// Story section
const section2 = document.createElement("section");

const heading2 = document.createElement("h2");
heading2.textContent = "Our Story";
section2.appendChild(heading2);

const para = document.createElement("p");
para.textContent = "Founded in 2010, Taste Haven has become a beloved spot for food lovers in town. Our passion for fresh ingredients and unique flavors is what sets us apart. We believe in providing a cozy ambiance and dishes that make you feel at home.";
section2.appendChild(para);

content.appendChild(section2);

// Chef's specials section
const section3 = document.createElement("section");

const heading3 = document.createElement("h2");
heading3.textContent = "Chef's Specials";
section3.appendChild(heading3);

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

section3.appendChild(createDish("https://example.com/special1.jpg", "Spaghetti Carbonara", "Spaghetti Carbonara", "A classic Italian dish with creamy sauce, pancetta, and freshly grated parmesan."));
section3.appendChild(createDish("https://example.com/special2.jpg", "Grilled Salmon", "Grilled Salmon", "Perfectly seasoned and served with a side of roasted vegetables and lemon butter sauce."));

content.appendChild(section3);

// Testimonials section
const section4 = document.createElement("section");

const testimonialHeading = document.createElement("h2");
testimonialHeading.textContent = "What Our Customers Say";
section4.appendChild(testimonialHeading);

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

section4.appendChild(createTestimonial("The best dining experience I've ever had! The food is simply exquisite and the ambiance is warm and inviting.", "- John Doe"));
section4.appendChild(createTestimonial("A hidden gem in the city! Every dish is a masterpiece, and the staff is incredibly friendly.", "- Jane Smith"));

content.appendChild(section4);

// Visit section
const section5 = document.createElement("section");

const visitHeading = document.createElement("h2");
visitHeading.textContent = "Visit Us";
section5.appendChild(visitHeading);

const location = document.createElement("p");
location.textContent = "📍 123 Main Street, Your City, Your State";
section5.appendChild(location);

const visitTimes = document.createElement("div");

const Time1 = document.createElement("div");
Time1.textContent = "Mon-Fri: 11:00 AM - 10:00 PM";
visitTimes.appendChild(Time1);

const Time2 = document.createElement("div");
Time2.textContent = "Sat-Sun: 9:00 AM - 11:00 PM";
visitTimes.appendChild(Time2);

section5.appendChild(visitTimes);

content.appendChild(section5);

// Gallery section
const section6 = document.createElement("section");

const galleryHeading = document.createElement("h2");
galleryHeading.textContent = "Our Space & Dishes";
section6.appendChild(galleryHeading);

const photos = document.createElement("div");

const createPhoto = (src, alt) => {
    const photo = document.createElement("img");
    photo.setAttribute("src", src);
    photo.setAttribute("alt", alt);
    return photo;
};

photos.appendChild(createPhoto("https://example.com/interior1.jpg", "Cozy dining area"));
photos.appendChild(createPhoto("https://example.com/interior2.jpg", "Bar area"));
photos.appendChild(createPhoto("https://example.com/dish1.jpg", "Delicious dish 1"));
photos.appendChild(createPhoto("https://example.com/dish2.jpg", "Delicious dish 2"));

section6.appendChild(photos);

content.appendChild(section6);