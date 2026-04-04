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
            img: "https://images.unsplash.com/photo-1588411393236-d2524cca1196?auto=format&fit=crop&w=600&q=80",
            title: "Vietnam",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=600&q=80",
            title: "Singapore",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?auto=format&fit=crop&w=600&q=80",
            title: "Thailand",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1574218747243-6a6ac3639337?auto=format&fit=crop&w=600&q=80",
            title: "Malaysia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1524675053444-52c3ca294ad2?auto=format&fit=crop&w=600&q=80",
            title: "Indonesia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1736128077115-0d72fc08ebd4?auto=format&fit=crop&w=600&q=80",
            title: "Cambodia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1697473259118-473211915531?auto=format&fit=crop&w=600&q=80",
            title: "Philippines",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1719906002318-f96435b2e47d?auto=format&fit=crop&w=600&q=80",
            title: "Laos",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1621795651141-7559a2b35d75?auto=format&fit=crop&w=600&q=80",
            title: "Brunei",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1671101691341-5f0344d6620a?auto=format&fit=crop&w=600&q=80",
            title: "South Korea",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1607470954340-d38447767312?auto=format&fit=crop&w=600&q=80",
            title: "Taiwan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/flagged/photo-1552553030-837c9c2b0fac?auto=format&fit=crop&w=600&q=80",
            title: "China",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1596295426983-c98ba78de039?auto=format&fit=crop&w=600&q=80",
            title: "Hong Kong",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1574236170880-fbbca132d83d?auto=format&fit=crop&w=600&q=80",
            title: "Japan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1638246438556-5d5042582f05?auto=format&fit=crop&w=600&q=80",
            title: "Bhutan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1718373438885-a4e67b5ca455?auto=format&fit=crop&w=600&q=80",
            title: "Nepal",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    gulf: [
        {
            img: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=600&q=80",
            title: "Dubai",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1674251454089-9c95931dd8a6?auto=format&fit=crop&w=600&q=80",
            title: "Bahrain",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1715882352252-168c62059a11?auto=format&fit=crop&w=600&q=80",
            title: "Israel",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1591014979304-6d2599e8b904?auto=format&fit=crop&w=600&q=80",
            title: "Jordan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1567074994308-df304d5611db?auto=format&fit=crop&w=600&q=80",
            title: "Kuwait",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1623680904963-5580d963e18e?auto=format&fit=crop&w=600&q=80",
            title: "Oman",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1763811939290-448e5663ee86?auto=format&fit=crop&w=600&q=80",
            title: "Qatar",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1646424857576-2a66db82a65c?auto=format&fit=crop&w=600&q=80",
            title: "Saudi Arabia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1579526075574-89aa38a66bef?auto=format&fit=crop&w=600&q=80",
            title: "United Arab Emirates",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    india: [
        {
            img: "https://images.unsplash.com/photo-1587920523826-402a5ae32580?auto=format&fit=crop&w=600&q=80",
            title: "Andaman Islands",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1672399444836-3f2d667ded8e?auto=format&fit=crop&w=600&q=80",
            title: "Arunachal Pradesh",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1563428838080-886156fdbda4?auto=format&fit=crop&w=600&q=80",
            title: "Coorg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1724159609417-0b84ff619e7c?auto=format&fit=crop&w=600&q=80",
            title: "Darjeeling",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1623815616454-f4de13de2634?auto=format&fit=crop&w=600&q=80",
            title: "Goa",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=600&q=80",
            title: "Kashmir",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1755547944443-3bb7114e2b1f?auto=format&fit=crop&w=600&q=80",
            title: "Kerala",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1734007741768-0d55ed0cc02b?auto=format&fit=crop&w=600&q=80",
            title: "Kodaikanal",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1656437717503-971f67b6af21?auto=format&fit=crop&w=600&q=80",
            title: "Manali",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1686472886489-1d2d7e08ff9c?auto=format&fit=crop&w=600&q=80",
            title: "Meghalaya",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1707655315272-33a54a771068?auto=format&fit=crop&w=600&q=80",
            title: "Ooty",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1650530777057-3a7dbc24bf6c?auto=format&fit=crop&w=600&q=80",
            title: "Rajasthan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1675910366346-8772afe3fd7e?auto=format&fit=crop&w=600&q=80",
            title: "Shimla",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1585914285280-72bae40d4b3a?auto=format&fit=crop&w=600&q=80",
            title: "Sikkim",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    africa: [
        {
            img: "https://images.unsplash.com/photo-1568241360857-e23e825c4e08?auto=format&fit=crop&w=600&q=80",
            title: "Morocco",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?auto=format&fit=crop&w=600&q=80",
            title: "Kenya",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1580060860978-d479ebf95a53?auto=format&fit=crop&w=600&q=80",
            title: "South Africa",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1549035092-33b2937b075a?auto=format&fit=crop&w=600&q=80",
            title: "Tanzania",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1677281786479-80691d707310?auto=format&fit=crop&w=600&q=80",
            title: "Rwanda",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1634029878815-1bb307302471?auto=format&fit=crop&w=600&q=80",
            title: "Ethiopia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1668646998533-792d1efca2a4?auto=format&fit=crop&w=600&q=80",
            title: "Egypt",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    islands: [
        {
            img: "https://images.unsplash.com/photo-1590426911380-bd4a61d4d3ea?auto=format&fit=crop&w=600&q=80",
            title: "Madagascar",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1595184979141-090792f6b578?auto=format&fit=crop&w=600&q=80",
            title: "Maldives",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1577636113322-84d2b3cd7010?auto=format&fit=crop&w=600&q=80",
            title: "Mauritius",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1617972405994-b3932f05d83a?auto=format&fit=crop&w=600&q=80",
            title: "Reunion Island",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1574611122955-5baa61496637?auto=format&fit=crop&w=600&q=80",
            title: "Sri Lanka",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    cis: [
        {
            img: "https://images.unsplash.com/photo-1602485487042-e5e9b528c389?auto=format&fit=crop&w=600&q=80",
            title: "Azarbaijan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1697700257503-1b6e2034eb37?auto=format&fit=crop&w=600&q=80",
            title: "Armenia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1677842296338-eeb8c866d22c?auto=format&fit=crop&w=600&q=80",
            title: "Kazakhstan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1719995153986-63e529a32585?auto=format&fit=crop&w=600&q=80",
            title: "Uzbekistan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    europe: [
        {
            img: "https://images.unsplash.com/photo-1633886648986-ec392f72d900?auto=format&fit=crop&w=600&q=80",
            title: "Austria",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1710453406331-b7a8f581c446?auto=format&fit=crop&w=600&q=80",
            title: "Belgium",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1638801214685-fcb98111f21f?auto=format&fit=crop&w=600&q=80",
            title: "Bulgaria",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1603551664565-1b3c3dd61075?auto=format&fit=crop&w=600&q=80",
            title: "Croatia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1563804026626-f0225ec1817a?auto=format&fit=crop&w=600&q=80",
            title: "Czech Republic",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1552560880-2482cef14240?auto=format&fit=crop&w=600&q=80",
            title: "Denmark",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1579201157678-a242a244b34e?auto=format&fit=crop&w=600&q=80",
            title: "Finland",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&q=80",
            title: "France",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1558352532-d30aee197dea?auto=format&fit=crop&w=600&q=80",
            title: "Georgia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1554882065-755875a26e41?auto=format&fit=crop&w=600&q=80",
            title: "Germany",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1591865986097-77712322981b?auto=format&fit=crop&w=600&q=80",
            title: "Greece",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1691354963043-e034045eb320?auto=format&fit=crop&w=600&q=80",
            title: "Greenland",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1663093370324-c4fc0583dbf8?auto=format&fit=crop&w=600&q=80",
            title: "Iceland",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1601805824475-527ed396e4d2?auto=format&fit=crop&w=600&q=80",
            title: "Ireland",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1555992828-ca4dbe41d294?auto=format&fit=crop&w=600&q=80",
            title: "Italy",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1570003550321-14dd053a5956?auto=format&fit=crop&w=600&q=80",
            title: "Monaco",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1744525091370-b08af3164efd?auto=format&fit=crop&w=600&q=80",
            title: "Netherlands",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1542047078441-229be3aa1f12?auto=format&fit=crop&w=600&q=80",
            title: "Norway",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1615119449152-d94284eafa45?auto=format&fit=crop&w=600&q=80",
            title: "Poland",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1663410623682-51b019f52064?auto=format&fit=crop&w=600&q=80",
            title: "Portugal",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?auto=format&fit=crop&w=600&q=80",
            title: "Russia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1715002926303-5bc18e2b20d5?auto=format&fit=crop&w=600&q=80",
            title: "Serbia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1574556462575-eb106a5865a0?auto=format&fit=crop&w=600&q=80",
            title: "Spain",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1543139465-aa8dc66dc427?auto=format&fit=crop&w=600&q=80",
            title: "Sweden",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1723243117582-84e2bbec1135?auto=format&fit=crop&w=600&q=80",
            title: "Switzerland",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=600&q=80",
            title: "Turkey",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1710794924341-63e6d86ce87b?auto=format&fit=crop&w=600&q=80",
            title: "United Kingdom",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    "north-america": [
        {
            img: "https://images.unsplash.com/photo-1580541631971-a0e8ce42e97f?auto=format&fit=crop&w=600&q=80",
            title: "Bahamas",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1509118796018-30cc4ce216f1?auto=format&fit=crop&w=600&q=80",
            title: "Canada",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1721270129636-bb5ae48ed73b?auto=format&fit=crop&w=600&q=80",
            title: "Mexico",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1649430651810-713b47dbdb83?auto=format&fit=crop&w=600&q=80",
            title: "United States",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1644086874672-7aa27da6765c?auto=format&fit=crop&w=600&q=80",
            title: "Alaska",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    "south-america": [
        {
            img: "https://images.unsplash.com/photo-1764066531610-5457f1bc5419?auto=format&fit=crop&w=600&q=80",
            title: "Argentina",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1683331404237-64c763c70f5b?auto=format&fit=crop&w=600&q=80",
            title: "Brazil",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1768310067694-c2410aab1c87?auto=format&fit=crop&w=600&q=80",
            title: "Chile",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1740299121229-12c2935d8842?auto=format&fit=crop&w=600&q=80",
            title: "Peru",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    pacific: [
        {
            img: "https://images.unsplash.com/photo-1689834677356-441a39b353ab?auto=format&fit=crop&w=600&q=80",
            title: "Australia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1544550581-1bcabf842b77?auto=format&fit=crop&w=600&q=80",
            title: "Fiji Islands",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1571215682742-561893604b40?auto=format&fit=crop&w=600&q=80",
            title: "New Zealand",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ],
    cruises: [
        {
            img: "https://images.unsplash.com/photo-1614095557130-2f4a9e1da57d?auto=format&fit=crop&w=600&q=80",
            title: "Cordelia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1550700077-dc057a824e27?auto=format&fit=crop&w=600&q=80",
            title: "Costa Cruises",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1580553625147-1197f1d11dfd?auto=format&fit=crop&w=600&q=80",
            title: "Royal Carribbean",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1511316695145-4992006ffddb?auto=format&fit=crop&w=600&q=80",
            title: "Star Dream Cruises",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: "https://images.unsplash.com/photo-1659175966706-3b4868aa03e7?auto=format&fit=crop&w=600&q=80",
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
let scrollDirection = 1; 
let isWaitingAtEdge = false; // NEW: Controls the pause at the ends

// Generates the HTML cards dynamically based on the selected region tab
function renderCarousel(region) {
    track.innerHTML = "";

    destinationsData[region].forEach((dest) => {
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

    // Reset scroll state when tab changes
    if (carousel) {
        carousel.scrollLeft = 0;
    }
    scrollDirection = 1; 
    isWaitingAtEdge = false;
}

// Handles the continuous ping-pong scrolling of the carousel
function autoScroll() {
    // Calculate the maximum possible scroll distance
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    // ONLY auto-scroll if there is at least one full card hidden (approx 300px)
    if (maxScrollLeft > 300) {
        if (!isPaused && !isTabSwitching && !isWaitingAtEdge) {
            
            if (currentSpeed < 1) {
                currentSpeed += 0.015;
                if (currentSpeed > 1) currentSpeed = 1;
            }

            // Add speed in the current direction (positive or negative)
            scrollAccumulator += (currentSpeed * scrollDirection);

            if (Math.abs(scrollAccumulator) >= 1) {
                const pixelsToMove = Math.trunc(scrollAccumulator);
                carousel.scrollLeft += pixelsToMove;
                scrollAccumulator -= pixelsToMove;

                // Hit the RIGHT edge
                if (carousel.scrollLeft >= maxScrollLeft - 1 && scrollDirection === 1) {
                    scrollDirection = -1; // Set direction to left
                    isWaitingAtEdge = true; // Pause movement
                    setTimeout(() => { isWaitingAtEdge = false; }, 1000); // 1-second rest
                } 
                // Hit the LEFT edge
                else if (carousel.scrollLeft <= 1 && scrollDirection === -1) {
                    scrollDirection = 1; // Set direction to right
                    isWaitingAtEdge = true; // Pause movement
                    setTimeout(() => { isWaitingAtEdge = false; }, 1000); // 1-second rest
                }
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