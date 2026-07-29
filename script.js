// =========================================
// HEADER AO ROLAR A PÁGINA
// =========================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});



// =========================================
// MENU MOBILE
// =========================================

const menuButton = document.querySelector(".menu-mobile");

const nav = document.querySelector("nav");


menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


// Fecha menu ao clicar em um link

const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});



// =========================================
// SCROLL SUAVE
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener("click", function(e){

        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });


});



// =========================================
// CONTADORES ANIMADOS
// =========================================


const counters = document.querySelectorAll(".counter");


const startCounter = (counter) => {


    const target = Number(
        counter.getAttribute("data-target")
    );


    let current = 0;


    const increment = Math.ceil(target / 120);



    const updateCounter = () => {


        current += increment;


        if(current < target){


            counter.innerText =
            current.toLocaleString("pt-BR");


            requestAnimationFrame(updateCounter);


        }else{


            counter.innerText =
            target.toLocaleString("pt-BR");


        }


    };


    updateCounter();


};



const counterObserver = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            startCounter(entry.target);


            counterObserver.unobserve(entry.target);


        }


    });


},{

    threshold:.5

});



counters.forEach(counter=>{


    counterObserver.observe(counter);


});



// =========================================
// ANIMAÇÃO DOS CARDS AO APARECER
// =========================================


const animatedElements = document.querySelectorAll(

".feature-card, .advantage-card, .stat-card, .timeline-card"

);



const animationObserver = new IntersectionObserver((entries)=>{


    entries.forEach((entry,index)=>{


        if(entry.isIntersecting){


            setTimeout(()=>{


                entry.target.classList.add("show");


            },index * 100);



            animationObserver.unobserve(entry.target);


        }


    });



},{

    threshold:.15

});



animatedElements.forEach(element=>{


    animationObserver.observe(element);


});



// =========================================
// FAQ ABRIR E FECHAR
// =========================================


const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach(item=>{


    const button = item.querySelector(".faq-question");



    button.addEventListener("click",()=>{


        const answer = item.querySelector(".faq-answer");



        faqItems.forEach(other=>{


            if(other !== item){


                other.classList.remove("active");


                other.querySelector(".faq-answer")
                .style.maxHeight = null;


            }


        });



        item.classList.toggle("active");



        if(item.classList.contains("active")){


            answer.style.maxHeight =
            answer.scrollHeight + "px";


        }else{


            answer.style.maxHeight = null;


        }



    });



});



// =========================================
// EFEITO PARALLAX NOS BLOB
// =========================================


const blobs = document.querySelectorAll(".blob");


window.addEventListener("mousemove",(e)=>{


    const x = e.clientX / window.innerWidth;

    const y = e.clientY / window.innerHeight;



    blobs.forEach((blob,index)=>{


        const speed = (index + 1) * 15;


        blob.style.transform = 
        `
        translate(
        ${x * speed}px,
        ${y * speed}px
        )
        `;


    });


});



// =========================================
// ANIMAÇÃO DE ENTRADA DO HERO
// =========================================


window.addEventListener("load",()=>{


    document.querySelector(".hero-left")
    .style.animation =
    "fadeUp 1s ease forwards";



    document.querySelector(".hero-right")
    .style.animation =
    "fadeUp 1.2s ease forwards";



});



// =========================================
// ADICIONA KEYFRAME PELO JS
// =========================================


const style = document.createElement("style");


style.innerHTML = `


@keyframes fadeUp{


from{

opacity:0;

transform:translateY(40px);

}


to{

opacity:1;

transform:translateY(0);

}


}


`;



document.head.appendChild(style);



// =========================================
// BOTÕES COM EFEITO DE CLIQUE
// =========================================


const buttons = document.querySelectorAll(
".primary-button, .secondary-button, .header-button"
);



buttons.forEach(button=>{


    button.addEventListener("mousedown",()=>{


        button.style.transform =
        "scale(.95)";


    });



    button.addEventListener("mouseup",()=>{


        button.style.transform =
        "";


    });



});



// =========================================
// ANO AUTOMÁTICO NO FOOTER
// =========================================


const year = new Date().getFullYear();


const footerText = document.querySelector(".footer-bottom p");


if(footerText){


    footerText.innerHTML =
    `© ${year} Novo Começo. Todos os direitos reservados.`;


}