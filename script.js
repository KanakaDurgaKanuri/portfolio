// ===========================
// Portfolio JavaScript
// ===========================

// Smooth Scroll for Navigation
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });
});

// Sticky Navigation Shadow

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 30) {

        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";

    }

    else {

        nav.style.boxShadow = "none";

    }

});

// Fade Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.2
});

sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// Active Navigation

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(window.pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// Typing Animation

const titles=[
"Embedded Systems Engineer",
"Java Developer",
"Frontend Developer",
"IoT Enthusiast"
];

let title=document.querySelector(".hero-text h2");

let index=0;

function changeTitle(){

    title.textContent=titles[index];

    index++;

    if(index>=titles.length){

        index=0;

    }

}

setInterval(changeTitle,2500);

// Scroll To Top Button

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.id="topBtn";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="25px";
topButton.style.right="25px";
topButton.style.padding="12px 16px";
topButton.style.border="none";
topButton.style.borderRadius="50%";
topButton.style.background="#38bdf8";
topButton.style.color="white";
topButton.style.fontSize="20px";
topButton.style.cursor="pointer";
topButton.style.display="none";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// Welcome Message

console.log("Welcome to Kanaka Durga Portfolio 🚀");