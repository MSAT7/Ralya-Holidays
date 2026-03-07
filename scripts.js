/*
==========================================================================
PROJECT: Ralya Holidays Website
DEVELOPER: Manu Satyan (https://manusatyan.com)
COPYRIGHT: © 2026 Ralya Holidays. All rights reserved.

DISCLAIMER: This code was developed exclusively for Ralya Holidays by 
Manu Satyan. Unauthorized copying, reproduction, or distribution of 
this codebase, via any medium, is strictly prohibited.
==========================================================================
*/

/* ==========================================================================
   1. DESTINATIONS DATA & CAROUSEL LOGIC
   ========================================================================== */
const destinationsData = {
    asia: [
        {
            img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
            title: "Bali Retreat",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "Kyoto Culture",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            img: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80",
            title: "Thai Beaches",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Great Wall",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "Vietnam Highlights",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ],
    europe: [
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "Parisian Getaway",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "Roman Holiday",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80",
            title: "Swiss Alps",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            img: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=600&q=80",
            title: "Santorini Sunsets",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80",
            title: "London Explorer",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ],
    "south-america": [
        {
            img: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=600&q=80",
            title: "Machu Picchu",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80",
            title: "Rio Carnival",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "Patagonia Trek",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Amazon Safari",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Galapagos Islands",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ],
};

const carousel = document.getElementById("auto-carousel");
const track = document.getElementById("track");
const tabBtns = document.querySelectorAll(".tab-btn");
const tabIndicator = document.getElementById("tab-indicator");

let isPaused = false;
let animationFrameId;

let isTabSwitching = false;
let currentSpeed = 1;
let scrollAccumulator = 0;
let tabSwitchTimer;

function renderCarousel(region) {
    track.innerHTML = "";

    destinationsData[region].forEach((dest) => {
        const cardHTML = `
      <div class="card">
        <img src="${dest.img}" alt="${dest.title}" loading="lazy" />
        <div class="card-content">
          <h3>${dest.title}</h3>
          <p>${dest.desc}</p>
        </div>
      </div>
    `;
        track.insertAdjacentHTML("beforeend", cardHTML);
    });

    const cards = Array.from(track.children);
    cards.forEach((card) => {
        const clone = card.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
    });

    carousel.scrollLeft = 0;
}

function autoScroll() {
    if (!isPaused && !isTabSwitching) {
        if (currentSpeed < 1) {
            currentSpeed += 0.015;
            if (currentSpeed > 1) currentSpeed = 1;
        }

        scrollAccumulator += currentSpeed;

        if (scrollAccumulator >= 1) {
            const pixelsToMove = Math.floor(scrollAccumulator);
            carousel.scrollLeft += pixelsToMove;
            scrollAccumulator -= pixelsToMove;

            const halfWidth = Math.round(track.scrollWidth / 2);
            if (carousel.scrollLeft >= halfWidth) {
                carousel.scrollLeft -= halfWidth;
            }
        }
    }
    animationFrameId = requestAnimationFrame(autoScroll);
}

function updateTabIndicator(activeBtn) {
    if (!activeBtn || !tabIndicator) return;
    const btnLeft = activeBtn.offsetLeft;
    const btnWidth = activeBtn.offsetWidth;
    tabIndicator.style.left = `${btnLeft}px`;
    tabIndicator.style.width = `${btnWidth}px`;
}

tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("active")) return;

        tabBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        updateTabIndicator(btn);

        const selectedRegion = btn.getAttribute("data-region");
        renderCarousel(selectedRegion);

        isTabSwitching = true;
        currentSpeed = 0;
        scrollAccumulator = 0;
        clearTimeout(tabSwitchTimer);

        tabSwitchTimer = setTimeout(() => {
            isTabSwitching = false;
        }, 100);
    });
});

// Carousel Initialization & Event Listeners
if (carousel && track) {
    renderCarousel("asia");
    const initialActiveTab = document.querySelector(".tab-btn.active");
    updateTabIndicator(initialActiveTab);

    window.addEventListener("resize", () => {
        const currentActive = document.querySelector(".tab-btn.active");
        if (currentActive) updateTabIndicator(currentActive);
    });

    carousel.addEventListener("mouseenter", () => (isPaused = true));
    carousel.addEventListener("mouseleave", () => (isPaused = false));
    carousel.addEventListener("touchstart", () => (isPaused = true), {
        passive: true,
    });
    carousel.addEventListener(
        "touchend",
        () => {
            setTimeout(() => {
                isPaused = false;
            }, 1500);
        },
        { passive: true }
    );

    let hasStarted = false;
    const packagesSection = document.getElementById("packages");

    const carouselObserver = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting && !hasStarted) {
                hasStarted = true;
                autoScroll();
                carouselObserver.disconnect();
            }
        },
        { threshold: 0.8 }
    );

    if (packagesSection) {
        carouselObserver.observe(packagesSection);
    }
}

/* ==========================================================================
   2. FADE-IN SCROLL ANIMATIONS
   ========================================================================== */
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach((fader) => {
    appearOnScroll.observe(fader);
});

/* ==========================================================================
   3. AOS INITIALIZATION
   ========================================================================== */
if (typeof AOS !== "undefined") {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: "ease-in-out-sine",
        delay: 100,
    });
}

/* ==========================================================================
   4. STATS COUNTER LOGIC
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const statsSection = document.querySelector(".about-stats-container");
    const counters = document.querySelectorAll(".counter");
    let started = false;

    function startCounting() {
        counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            const duration = 3000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
        });
    }

    if (statsSection) {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !started) {
                    startCounting();
                    started = true;
                    observer.disconnect();
                }
            },
            { threshold: 0.7 }
        );

        observer.observe(statsSection);
    }
});
