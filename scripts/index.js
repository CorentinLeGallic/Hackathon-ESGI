const imagesContainer = document.getElementById("character-images-container");

const previousCharacter = document.getElementById("previous-character");
const currentCharacter = document.getElementById("current-character");
const nextCharacter = document.getElementById("next-character");

const leftArrow = document.getElementById("left-arrow-container");
const rightArrow = document.getElementById("right-arrow-container");

const characterName = document.getElementById("character-name");
const characterDescription = document.getElementById("character-description");

const elements = document.getElementsByClassName("element");
const slideElements = document.getElementsByClassName("scroll-slide");

const opacityElements = document.querySelectorAll(".section-title:not(#lore-title)");

const backgroundAudio = document.getElementById("background-audio");

const playPauseButton = document.getElementById("play-pause-audio");
const playPauseImg = document.getElementById("play-pause-img");

const volumeButton = document.getElementById("volume-audio");
const volumeMenu = document.getElementById("volume-menu");
const volumeRange = document.getElementById("volume-range");

const characters = [
    {
        name: "Euclydia",
        story: "Euclydia, la Flamme Ardente, est une mage de renom connue pour sa maîtrise exceptionnelle du feu. Héritière des flammes ancestrales, elle a consacré sa vie à protéger les royaumes contre les forces obscures. Son artefact mystique et son habileté magique font d'elle une redoutable protectrice des terres enflammées, prête à défendre ses alliés avec une passion ardente."
    }, {
        name: "Zephir",
        story: "Zephir, né au sommet des Montagnes Éthérées, est un maître de l'air, imprégné de sagesse des vents. Sa maîtrise des courants aériens en fait un protecteur agile des cieux et des terres, cherchant à maintenir l'équilibre entre les royaumes et à défendre les innocents contre les tempêtes."
    }, {
        name: "Aqualia",
        story: "Aqualia, élevée dans les profondeurs de l'Océan des Sages, canalise la puissance des eaux primordiales. En tant que gardienne des océans, elle protège les secrets marins et veille sur la vie aquatique. Son lien profond avec l'eau lui confère une sagesse incomparable et un pouvoir de guérison."
    }, {
        name: "Néréa",
        story: "Néréa, issue des rives enchantées de l'Étang des Lunes, unit la grâce de l'eau à la sagesse ancestrale des marécages. Gardienne des équilibres naturels, elle veille sur la faune et la flore aquatiques, utilisant sa magie pour guider et protéger les écosystèmes fragiles."
    }, {
        name: "Océane",
        story: "Océane, née sous le croissant de la Lune Azurée, incarne la pureté et la force des eaux primordiales. Sa jeunesse cache une sagesse ancienne, héritée des mystères des profondeurs. En harmonie avec les flux marins, elle protège les mers et les rivières, guidant les voyageurs perdus vers un havre de paix."
    }, {
        name: "Pyra",
        story: "Pyra, la Flamme Éternelle, est la gardienne des Volcans Ardents. Son aura brûlante et sa maîtrise du feu sacré ont forgé sa réputation de protectrice intrépide des terres incandescentes. Son destin est lié aux flammes elles-mêmes, et son courage guide les cœurs des braves dans les moments les plus sombres."
    }, {
        name: "Ignia",
        story: "Ignia, la Brûlure Féroce, est née des brasiers du Mont Ardent. Son tempérament fougueux et son esprit indomptable lui ont valu le respect et la crainte de tous. En tant que gardienne du feu, elle veille sur les volcans et les déserts, protégeant les secrets des flammes et purifiant les âmes des intrépides."
    }, {
        name: "Embera",
        story: "Embera, née des cendres de la Forge Brisée, a surmonté les épreuves les plus ardentes de la vie. Son passé tumultueux a forgé sa détermination et sa résilience. En canalisant la colère des flammes, elle embrase son chemin vers la rédemption, prête à défendre ceux qui ont besoin de lumière dans les ténèbres."
    }, {
        name: "Seraphina",
        story: "Seraphina, gardienne des Sources Sacrées, incarne l'harmonie des eaux cristallines. Sa sagesse transcende les âges, guidant les âmes égarées vers la tranquillité des rivières paisibles. En équilibre avec les flux célestes, elle protège les secrets des eaux profondes et guide les destins vers un avenir d'espoir et de pureté."
    }, {
        name: "Aélys",
        story: "Aélys, l'Élémentaire des Vents, vagabonde à travers les cieux infinis, recherchant l'aventure et la découverte. Armée de sa magie aérienne et de son courage indomptable, elle protège les voyageurs des tempêtes déchaînées et des dangers célestes. Son esprit libre et son désir d'exploration l'emmènent là où peu osent s'aventurer, faisant d'elle une héroïne des cieux."
    }, {
        name: "Aéron",
        story: "Aéron, prodige de l'Air, éblouit par sa maîtrise précoce des courants célestes. Sa jeunesse cache une sagesse bien au-delà de ses années, héritage des anciens gardiens des nuages. Armé de son grimoire ancestral, il cherche à percer les mystères du firmament et à protéger les royaumes des tempêtes imminentes."
    }, {
        name: "Gaïus",
        story: "Gaïus, Gardien des Terres Anciennes, incarne la force immuable de la nature. Son âge avancé est le témoignage de sa longue vie consacrée à la préservation des équilibres terrestres. Armé de son bâton ancestral, il veille sur les secrets enfouis sous la surface, prêt à défendre les royaumes contre toute menace souterraine."
    }, {
        name: "Térakka",
        story: "Térakka, la Colosse de Pierre, est née des montagnes rugueuses et des cavernes profondes. Sa force indomptable égale la robustesse des roches elles-mêmes. En tant que gardienne des terres sauvages, elle protège les vallées verdoyantes et les sommets majestueux, utilisant sa magie pour façonner et défendre les royaumes contre les assauts des ténèbres."
    }, {
        name: "Sylvain",
        story: "Sylvain, l'Alchimiste des Forêts, est un sage ermite qui vit en harmonie avec la nature. Sa connexion profonde avec la terre et les plantes lui permet de cultiver des connaissances anciennes sur les secrets de la flore. En tant que protecteur des forêts, il veille sur les écosystèmes fragiles et guide les voyageurs perdus à travers les bois touffus."
    }, {
        name: "Géor",
        story: "Géor, le Briseur de Roches, est un jeune prodige dont la maîtrise de la terre dépasse de loin son âge. Né parmi les montagnes escarpées, il canalise la puissance des roches pour façonner et protéger son royaume. Son talent brut et sa détermination font de lui un gardien redoutable des terres ancestrales."
    }, {
        name: "Sylphée",
        story: "Sylphée, l'Élémentaire de l'Air, danse avec les vents et chante avec les nuages. Son lien inné avec les courants célestes lui confère une agilité et une grâce incomparables dans les cieux. En tant que protectrice des hauteurs, elle veille sur les royaumes aériens, guidant les voyageurs perdus vers des horizons inexplorés et des destinées audacieuses."
    }
];

let currentCharacterIndex = 1;
let isExecuting = false;

let leftOffset = (window.innerWidth - 210) < 500 ? (window.innerWidth - 210) : 500;
imagesContainer.style.left = `-${leftOffset}px`;

leftArrow.addEventListener("click", () => {
    if (!isExecuting) {
        isExecuting = true;
        currentCharacterIndex = currentCharacterIndex > 1 ? currentCharacterIndex - 1 : 16;
        imagesContainer.style.left = "0";
        characterName.textContent = characters[currentCharacterIndex - 1]["name"];
        characterDescription.textContent = characters[currentCharacterIndex - 1]["story"];
        setTimeout(() => {
            currentCharacter.setAttribute("src", `./assets/images/characters/${currentCharacterIndex}.png`);
            imagesContainer.style.transition = "none";
            imagesContainer.style.left = `-${leftOffset}px`;
            previousCharacter.setAttribute("src", `./assets/images/characters/${currentCharacterIndex > 1 ? currentCharacterIndex - 1 : 16}.png`);
            nextCharacter.setAttribute("src", `./assets/images/characters/${currentCharacterIndex < 16 ? currentCharacterIndex + 1 : 1}.png`);
        }, 200);
        setTimeout(() => isExecuting = false, 250);
        imagesContainer.style.transition = "left .2s";
    }
});

rightArrow.addEventListener("click", () => {
    if (!isExecuting) {
        isExecuting = true;
        currentCharacterIndex = currentCharacterIndex < 16 ? currentCharacterIndex + 1 : 1;
        imagesContainer.style.left = `-${leftOffset * 2}px`;
        characterName.textContent = characters[currentCharacterIndex - 1]["name"];
        characterDescription.textContent = characters[currentCharacterIndex - 1]["story"];
        setTimeout(() => {
            currentCharacter.setAttribute("src", `./assets/images/characters/${currentCharacterIndex}.png`);
            imagesContainer.style.transition = "none";
            imagesContainer.style.left = `-${leftOffset}px`;
            previousCharacter.setAttribute("src", `./assets/images/characters/${currentCharacterIndex > 1 ? currentCharacterIndex - 1 : 16}.png`);
            nextCharacter.setAttribute("src", `./assets/images/characters/${currentCharacterIndex < 16 ? currentCharacterIndex + 1 : 1}.png`);
        }, 200)
        setTimeout(() => isExecuting = false, 250);
        imagesContainer.style.transition = "left .2s";
    }
});

window.addEventListener("resize", () => {
    imagesContainer.style.transition = "none";
    leftOffset = (window.innerWidth - 210) < 500 ? (window.innerWidth - 210) : 500;
    imagesContainer.style.left = `-${leftOffset}px`;
});

Array.from(elements).forEach(element => {
    setTimeout(() => {
        activeElementOnScroll(element, 100);
    }, 2200);
});

Array.from(slideElements).forEach(slideElement => {
    setTimeout(() => {
        activeElementOnScroll(slideElement, 100);
    }, 1000);
});

opacityElements.forEach(opacityElement => {
    setTimeout(() => {
        activeElementOnScroll(opacityElement, 100);
    }, 500);
});

window.addEventListener("scroll", () => {
    Array.from(elements).forEach(element => {
        activeElementOnScroll(element, 100);
    });
    Array.from(slideElements).forEach(slideElement => {
        activeElementOnScroll(slideElement, 100);
    });
    opacityElements.forEach(opacityElement => {
        activeElementOnScroll(opacityElement, 100);
    });
});

window.addEventListener("resize", () => {
    Array.from(elements).forEach(element => {
        activeElementOnScroll(element, 100);
    });
});

let audioIsPlaying = false;

playPauseButton.addEventListener("click", () => {
    if (audioIsPlaying) {
        playPauseImg.classList.remove("pause");
        playPauseImg.classList.add("play");
        playPauseImg.setAttribute("src", "./assets/images/play-audio.png");
        backgroundAudio.pause();
    } else {
        playPauseImg.classList.remove("play");
        playPauseImg.classList.add("pause");
        playPauseImg.setAttribute("src", "./assets/images/pause-audio.png");
        backgroundAudio.play();
    }
    audioIsPlaying = !audioIsPlaying;
});

let volumeMenuIsActive = false;

volumeButton.addEventListener("click", () => {
    if (volumeMenuIsActive) {
        volumeMenu.classList.remove("active");
    } else {
        volumeMenu.classList.add("active");
    }
    volumeMenuIsActive = !volumeMenuIsActive;
});

volumeRange.addEventListener("input", (e) => {
    backgroundAudio.volume = e.target.value / 100;
});