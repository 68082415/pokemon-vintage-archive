
/* POKEMON VINTAGE CARD DATA */

const cards = [
    {
        id: "base1-4",
        name: "CHARIZARD",
        set: "BASE SET",
        number: "4/102",
        year: "1999",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base1/4.png",
        description: "หนึ่งในการ์ดที่มีชื่อเสียงที่สุดของยุค Base Set ภาพประกอบ Charizard สะท้อนเสน่ห์ของการ์ด Pokémon ในยุคเริ่มต้น"
    },
    {
        id: "base1-2",
        name: "BLASTOISE",
        set: "BASE SET",
        number: "2/102",
        year: "1999",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base1/2.png",
        description: "การ์ด Blastoise รุ่นดั้งเดิม โดดเด่นด้วยภาพโปเกม่อนธาตุน้ำและงานศิลปะแบบคลาสสิก"
    },
    {
        id: "base1-15",
        name: "VENUSAUR",
        set: "BASE SET",
        number: "15/102",
        year: "1999",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base1/15.png",
        description: "การ์ด Venusaur ยุคแรกที่มีเอกลักษณ์จากการใช้สีและภาพประกอบของโปเกม่อนธาตุพืช"
    },
    {
        id: "base1-14",
        name: "RAICHU",
        set: "BASE SET",
        number: "14/102",
        year: "1999",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base1/14.png",
        description: "Raichu เป็นอีกหนึ่งการ์ดโฮโลกราฟิกจาก Base Set ที่สะท้อนงานภาพแบบดั้งเดิม"
    },
    {
        id: "base2-3",
        name: "FLAREON",
        set: "JUNGLE",
        number: "3/64",
        year: "1999",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base2/3.png",
        description: "Flareon จากชุด Jungle โดดเด่นด้วยสีส้มแดงและภาพประกอบที่ให้ความรู้สึกอบอุ่น"
    },
    {
        id: "base2-4",
        name: "JOLTEON",
        set: "JUNGLE",
        number: "4/64",
        year: "1999",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base2/4.png",
        description: "Jolteon เป็นหนึ่งในวิวัฒนาการของ Eevee ที่ได้รับการนำเสนอในชุด Jungle"
    },
    {
        id: "base2-11",
        name: "SNORLAX",
        set: "JUNGLE",
        number: "11/64",
        year: "1999",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base2/11.png",
        description: "การ์ด Snorlax จากชุด Jungle ที่มีภาพประกอบสะท้อนบุคลิกสงบและผ่อนคลาย"
    },
    {
        id: "base2-12",
        name: "VAPOREON",
        set: "JUNGLE",
        number: "12/64",
        year: "1999",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base2/12.png",
        description: "Vaporeon จากชุด Jungle มีความโดดเด่นด้วยโทนสีฟ้าและรูปทรงของโปเกม่อนธาตุน้ำ"
    },
    {
        id: "base3-2",
        name: "ARTICUNO",
        set: "FOSSIL",
        number: "2/62",
        year: "1999",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base3/2.png",
        description: "Articuno นกในตำนานธาตุน้ำแข็ง เป็นหนึ่งในการ์ดสำคัญของชุด Fossil"
    },
    {
        id: "base3-4",
        name: "DRAGONITE",
        set: "FOSSIL",
        number: "4/62",
        year: "1999",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base3/4.png",
        description: "Dragonite จากชุด Fossil เป็นการ์ดมังกรยุคแรกที่มีงานภาพอันโดดเด่น"
    },
    {
        id: "base3-5",
        name: "GENGAR",
        set: "FOSSIL",
        number: "5/62",
        year: "1999",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base3/5.png",
        description: "Gengar จากชุด Fossil โดดเด่นด้วยภาพประกอบที่ให้บรรยากาศลึกลับ"
    },
    {
        id: "base3-10",
        name: "LAPRAS",
        set: "FOSSIL",
        number: "10/62",
        year: "1999",
        rarity: "Rare Holo",
        image: "https://images.pokemontcg.io/base3/10.png",
        description: "Lapras จากชุด Fossil เป็นการ์ดโปเกม่อนธาตุน้ำที่มีภาพประกอบแบบคลาสสิก"
    }
];

/* GET CARD FROM PAGE URL */

const params = new URLSearchParams(window.location.search);
const requestedId = params.get("card");

const selectedCard =
    cards.find(card => card.id === requestedId) || cards[0];

/* UPDATE CARD DETAILS */

document.getElementById("detail-image").src =
    selectedCard.image;

document.getElementById("detail-image").alt =
    selectedCard.name + " Pokémon Card";

document.getElementById("detail-name").textContent =
    selectedCard.name;

document.getElementById("detail-description").textContent =
    selectedCard.description;

document.getElementById("detail-set").textContent =
    selectedCard.set;

document.getElementById("detail-number").textContent =
    selectedCard.number;

document.getElementById("detail-year").textContent =
    selectedCard.year;

document.getElementById("detail-rarity").textContent =
    selectedCard.rarity;

document.title =
    selectedCard.name + " | Pokémon Vintage Archive";

/* GENERATE CARD SELECTOR */

const cardPicker = document.getElementById("card-picker");

cards.forEach(card => {
    const link = document.createElement("a");

    link.href = "collection.html?card=" + card.id;
    link.className = "card-option";

    if (card.id === selectedCard.id) {
        link.classList.add("selected");
        link.setAttribute("aria-current", "page");
    }

    const image = document.createElement("img");
    image.src = card.image;
    image.alt = card.name;
    image.loading = "lazy";

    const name = document.createElement("span");
    name.textContent = card.name;

    link.appendChild(image);
    link.appendChild(name);

    cardPicker.appendChild(link);
});
