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
            title: "Vietnam",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "Singapore",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80",
            title: "Thailand",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Malaysia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "Indonesia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "Cambodia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "Philippines",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "Laos",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "Brunei",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "South Korea",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "Taiwan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "China",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "Hong Kong",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "Japan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "Bhutan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "Nepal",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    gulf: [
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "Dubai",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "Bahrain",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80",
            title: "Israel",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=600&q=80",
            title: "Jordan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80",
            title: "Kuwait",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "Oman",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "Qatar",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "Saudi Arabia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
            title: "United Arab Emirates",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    india: [
        {
            img: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=600&q=80",
            title: "Andaman Islands",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80",
            title: "Coorg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "Darjeeling",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Goa",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Kashmir",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=600&q=80",
            title: "Kerala",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80",
            title: "Kodaikanal",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "Manali",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Meghalaya",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Ooty",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "Rajasthan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Shimla",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Sikkim",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    islands: [
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Madagascar",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Maldives",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "Mauritius",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Reunion Island",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Sri Lanka",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    cis: [
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Azarbaijan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Armenia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "Kazakhstan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Uzbekistan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    europe: [
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Austria",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Belgium",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "Czech Republic",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Denmark",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Finland",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "France",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Georgia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "Germany",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Greece",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Greenland",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Iceland",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Ireland",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "Italy",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Monaco",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Netherlands",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Norway",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Poland",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "Portugal",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Russia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Serbia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Spain",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Sweden",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "Switzerland",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Turkey",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "United Kingdom",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    "north-america": [
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Bahamas",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Canada",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "Mexico",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "United States",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Alaska",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    "south-america": [
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Argentina",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Brazil",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "Chile",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Peru",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    pacific: [
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Australia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Fiji Islands",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "New Zealand",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    cruises: [
        {
            img: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80",
            title: "Cordelia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
            title: "Royal Carribbean",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=600&q=80",
            title: "MSC",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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

// Generates the HTML cards dynamically based on the selected region tab
function renderCarousel(region) {
    track.innerHTML = "";

    destinationsData[region].forEach((dest) => {
        // Pre-fill a WhatsApp message for the specific package
        const rawMessage = `Hi, I'm interested in learning more about your ${dest.title} Itinerary`;
        const encodedMessage = encodeURIComponent(rawMessage);
        const waUrl = `https://wa.me/+917418970289?text=${encodedMessage}`;

        const cardHTML = `
            <div class="card">
                <img src="${dest.img}" alt="${dest.title}" loading="lazy" />
                <div class="card-overlay"></div>
                <div class="card-content">
                    <h3>${dest.title}</h3>
                    <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="learn-more-btn" style="text-decoration: none; display: inline-block; text-align: center;">Explore</a>
                </div>
            </div>
        `;
        track.insertAdjacentHTML("beforeend", cardHTML);
    });

    // Clone the cards to create an infinite loop effect
    const cards = Array.from(track.children);
    cards.forEach((card) => {
        const clone = card.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
    });

    carousel.scrollLeft = 0;
}

// Handles the continuous left-ward scrolling of the carousel
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

            // Reset scroll position when reaching the cloned cards
            const halfWidth = Math.round(track.scrollWidth / 2);
            if (carousel.scrollLeft >= halfWidth) {
                carousel.scrollLeft -= halfWidth;
            }
        }
    }
    animationFrameId = requestAnimationFrame(autoScroll);
}

// Moves the little indicator line under the active tab
function updateTabIndicator(activeBtn) {
    if (!activeBtn || !tabIndicator) return;
    const btnLeft = activeBtn.offsetLeft;
    const btnWidth = activeBtn.offsetWidth;
    tabIndicator.style.left = `${btnLeft}px`;
    tabIndicator.style.width = `${btnWidth}px`;
}

// --- Custom Tab Scrollbar Logic ---
const tabsWrapper = document.getElementById("tabs-wrapper");
const tabsTrack = document.getElementById("tabs-track");
const scrollbarThumb = document.getElementById("scrollbar-thumb");
const scrollbarTrack = document.getElementById("tabs-scrollbar");

if (tabsWrapper && scrollbarThumb && scrollbarTrack) {
    // 1. Sync the thumb position when the user swipes or scrolls
    tabsWrapper.addEventListener("scroll", () => {
        const scrollableWidth = tabsWrapper.scrollWidth - tabsWrapper.clientWidth;
        // Prevent division by zero if there's no overflow
        if (scrollableWidth <= 0) return;

        const scrollRatio = tabsWrapper.scrollLeft / scrollableWidth;
        const thumbMaxMove = scrollbarTrack.clientWidth - scrollbarThumb.clientWidth;

        // Move the thumb using CSS transform
        scrollbarThumb.style.transform = `translateX(${scrollRatio * thumbMaxMove}px)`;
    });

    // 2. Allow dragging the custom thumb on desktop
    let isDraggingThumb = false;
    let startX, startScrollLeft;

    scrollbarThumb.addEventListener("mousedown", (e) => {
        isDraggingThumb = true;
        startX = e.clientX;
        startScrollLeft = tabsWrapper.scrollLeft;
        document.body.style.userSelect = "none"; // Prevents text highlighting while dragging
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDraggingThumb) return;

        const deltaX = e.clientX - startX;
        const trackWidth = scrollbarTrack.clientWidth - scrollbarThumb.clientWidth;
        const scrollableWidth = tabsWrapper.scrollWidth - tabsWrapper.clientWidth;

        const scrollRatio = deltaX / trackWidth;
        tabsWrapper.scrollLeft = startScrollLeft + (scrollRatio * scrollableWidth);
    });

    document.addEventListener("mouseup", () => {
        isDraggingThumb = false;
        document.body.style.userSelect = "";
    });
}

// Event Listeners for Tab Switching
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

// Carousel Initialization
if (carousel && track) {
    renderCarousel("asia");
    const initialActiveTab = document.querySelector(".tab-btn.active");
    updateTabIndicator(initialActiveTab);

    window.addEventListener("resize", () => {
        const currentActive = document.querySelector(".tab-btn.active");
        if (currentActive) updateTabIndicator(currentActive);
    });

    // Pause the carousel when the user interacts with it
    carousel.addEventListener("mouseenter", () => (isPaused = true));
    carousel.addEventListener("mouseleave", () => (isPaused = false));
    carousel.addEventListener("touchstart", () => (isPaused = true), { passive: true });
    carousel.addEventListener("touchend", () => {
        setTimeout(() => { isPaused = false; }, 1500);
    }, { passive: true });

    let hasStarted = false;
    const packagesSection = document.getElementById("packages");

    // Only start the heavy animation loop once the user scrolls down to the section
    const carouselObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
            hasStarted = true;
            autoScroll();
            carouselObserver.disconnect();
        }
    }, { threshold: 0.6 });

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
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !started) {
                startCounting();
                started = true;
                observer.disconnect();
            }
        }, { threshold: 0.6 });

        observer.observe(statsSection);
    }
});

/* ==========================================================================
   5. REVIEWS SLIDER LOGIC
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const reviewsTrack = document.getElementById('reviews-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (reviewsTrack && prevBtn && nextBtn) {
        const getScrollAmount = () => {
            const firstCard = reviewsTrack.querySelector('.review-card');
            if (firstCard) {
                const cardWidth = firstCard.offsetWidth;
                const gap = parseInt(window.getComputedStyle(reviewsTrack).gap);
                return cardWidth + gap;
            }
            return 350; // Fallback
        };

        prevBtn.addEventListener('click', () => {
            reviewsTrack.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            reviewsTrack.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });
    }
});

/* ==========================================================================
   6. REVIEW MODAL & INTERACTIVE STARS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const reviewModal = document.getElementById('review-modal');
    const openModalBtn = document.getElementById('open-review-modal');
    const closeModalBtn = document.getElementById('close-review-modal');
    const reviewForm = document.getElementById('submit-review-form');
    const starSelects = document.querySelectorAll('.stars-select i');

    // Open/Close Modal Logic
    if (reviewModal && openModalBtn && closeModalBtn) {
        openModalBtn.addEventListener('click', () => {
            reviewModal.classList.add('active');
        });

        closeModalBtn.addEventListener('click', () => {
            reviewModal.classList.remove('active');
        });

        // Close when clicking the dark overlay outside the box
        reviewModal.addEventListener('click', (e) => {
            if (e.target === reviewModal) {
                reviewModal.classList.remove('active');
            }
        });
    }

    // Interactive Star Rating Logic
    let currentRating = 0;
    starSelects.forEach((star, index) => {
        star.addEventListener('click', () => {
            currentRating = index + 1;

            // Loop through all stars and fill them in based on the clicked index
            starSelects.forEach((s, i) => {
                if (i < currentRating) {
                    s.classList.remove('ri-star-line');
                    s.classList.add('ri-star-fill');
                    s.style.color = '#f59e0b'; // Gold color
                } else {
                    s.classList.remove('ri-star-fill');
                    s.classList.add('ri-star-line');
                    s.style.color = '#d1d5db'; // Revert to grey
                }
            });
        });
    });

    // Form Submission Simulation
    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (currentRating === 0) {
                alert("Please select a star rating!");
                return;
            }

            alert(`Thank you for your ${currentRating}-star review!`);

            // Reset form and close modal
            reviewModal.classList.remove('active');
            reviewForm.reset();
            currentRating = 0;
            starSelects.forEach(s => {
                s.classList.remove('ri-star-fill');
                s.classList.add('ri-star-line');
                s.style.color = '#d1d5db';
            });
        });
    }
});

/* ==========================================================================
   7. TRIP DATE CALCULATOR & FORM MANAGER
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('trip-contact-form');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const calcText = document.getElementById('date-calc-text');

    // New Elements for "Solo" idiot-proofing
    const travelersInput = document.getElementById('travelers');
    const vacationTypeSelect = document.getElementById('vacation-type');

    // 1. Force clear the form on every page refresh
    if (contactForm) {
        contactForm.reset();
    }

    // 2. Prevent selecting past dates (Grey out days before today)
    const today = new Date().toISOString().split('T')[0];
    if (startDateInput && endDateInput) {
        startDateInput.setAttribute('min', today);
        endDateInput.setAttribute('min', today);
    }

    // 3. Solo Traveler Logic
    if (vacationTypeSelect && travelersInput) {
        vacationTypeSelect.addEventListener('change', (e) => {
            if (e.target.value === 'solo') {
                travelersInput.value = 1;
                travelersInput.disabled = true; // Locks the field
            } else if (e.target.value === 'couple' || e.target.value === 'honeymoon') {
                travelersInput.value = 2;
                travelersInput.disabled = true; // Locks the field
            } else {
                travelersInput.disabled = false; // Unlocks for other types
            }
        });
    }
    
    // 4. Calculate duration and display days/nights
    function calculateDuration() {
        if (startDateInput.value && endDateInput.value) {
            const start = new Date(startDateInput.value);
            const end = new Date(endDateInput.value);
            
            start.setHours(0, 0, 0, 0);
            end.setHours(0, 0, 0, 0);
            
            const diffTime = end - start;
            
            // The mathematical difference in dates is exactly the number of nights
            const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (nights > 0) {
                const days = nights + 1; // Travel days are inclusive (Nights + 1)
                calcText.textContent = `Trip Duration: ${days} Day${days > 1 ? 's' : ''}, ${nights} Night${nights > 1 ? 's' : ''}`;
                calcText.style.color = "#6b7280"; 
            } else if (nights === 0) {
                calcText.textContent = "Trip Duration: 1 Day (Day Trip)";
                calcText.style.color = "#6b7280";
            } else {
                calcText.textContent = "Error: End date must be after start date.";
                calcText.style.color = "#ef4444"; 
            }
        } else {
            calcText.textContent = ""; 
        }
    }

    if (startDateInput && endDateInput) {
        startDateInput.addEventListener('change', () => {
            // Extra idiot-proofing: End Date can never be before the chosen Start Date
            endDateInput.setAttribute('min', startDateInput.value);
            calculateDuration();
        });

        endDateInput.addEventListener('change', calculateDuration);
    }
});