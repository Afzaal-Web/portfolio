const reactProjectsGrid = document.getElementById('react-projects-grid');
const vanillaProjectsGrid = document.getElementById('vanilla-projects-grid');

const prevReactBtn = document.getElementById('prev-react');
const nextReactBtn = document.getElementById('next-react');
const paginationReact = document.getElementById('pagination-react');

const prevVanillaBtn = document.getElementById('prev-vanilla');
const nextVanillaBtn = document.getElementById('next-vanilla');
const paginationVanilla = document.getElementById('pagination-vanilla');

const projectPerPage = 4;

let totalPagesReact;
let totalPagesVanilla;
let currentPageReact = 1;
let currentPageVanilla = 1;

const projects = [
    {
        url: "https://codepen.io/Muhammad-Afzaal-the-reactor/pen/yyNGaEP",
        title: "Random Quote Machine",
        screenshot: "https://shots.codepen.io/Muhammad-Afzaal-the-reactor/pen/yyNGaEP-512.webp",
        type: "react"
    },
    {
        url: "https://codepen.io/Muhammad-Afzaal-the-reactor/pen/NPqeREp",
        title: "Markdown Previewer",
        screenshot: "https://shots.codepen.io/Muhammad-Afzaal-the-reactor/pen/NPqeREp-512.webp",
        type: "react"
    },
    {
        url: "https://codepen.io/Muhammad-Afzaal-the-reactor/pen/jEPXVOY",
        title: "Drum Machine",
        screenshot: "https://shots.codepen.io/Muhammad-Afzaal-the-reactor/pen/jEPXVOY-512.webp",
        type: "react"
    },
    {
        url: "https://codepen.io/Muhammad-Afzaal-the-reactor/pen/ogXJYLg",
        title: "JavaScript Calculator",
        screenshot: "https://shots.codepen.io/Muhammad-Afzaal-the-reactor/pen/ogXJYLg-512.webp",
        type: "react"
    },
    {
        url: "https://codepen.io/Muhammad-Afzaal-the-reactor/pen/pvJqNLQ",
        title: "25 + 5 Clock",
        screenshot: "https://shots.codepen.io/Muhammad-Afzaal-the-reactor/pen/pvJqNLQ-512.webp",
        type: "react"
    },
      {
        url: 'https://afzaal-web.github.io/countries-explorer/',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/Palindrome-JS-Checker',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/Roman-Numeral-Converter',
        type: "vanilla"
    },
    {
        url: 'https://afzaal-web.github.io/Asynchronous-Programming/',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/Calorie-Form',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/Cash-Register',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/Color-Changer',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/Date-Formatter',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/Decimal-To-Binary',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/dice-game',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/expenses-with-oop',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/fetch-promises',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/football-team-cards',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/functional-programming-spreadsheet',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/GradeBook',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/music-player',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/number-sorter',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/oop-basics',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/phone-validator',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/platformer-game',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/pyramid-generator',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/RPG-Creature-Search-App',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/rpg-dragon-repeller',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/shopping-cart-by-Basic-Opp',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/spam-filter',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/statistic-calculator',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/student-grade-by-oop',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/todo-app',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/TODO-APP-with-OOP',
        type: "vanilla"
    },
    {
        url: 'https://Afzaal-Web.github.io/',
        type: "vanilla"
    }
];

const reactProjects = projects.filter(p => p.type === 'react');

const getData = () => {
    projects.forEach((project) => {
        if (!project.title || !project.screenshot) {
            const fileName = project.url.split("/")[3];

            if (fileName) {
                const screenshotPath = `images/${fileName}.png`;
                project.screenshot = screenshotPath;

                const title = fileName
                    .replace(/-/g, " ")
                    .split(" ")
                    .map(word => word[0].toUpperCase() + word.slice(1))
                    .join(" ");
                project.title = title;
            } else {
                project.title = project.title || "Untitled Project";
                project.screenshot = project.screenshot || "images/placeholder.png";
            }
        }
    });
};

const reactProject = () => {
    totalPagesReact = Math.ceil(reactProjects.length / projectPerPage);
    if (currentPageReact > totalPagesReact) currentPageReact = totalPagesReact;

    const startIndex = (currentPageReact - 1) * projectPerPage;
    const paginated = reactProjects.slice(startIndex, startIndex + projectPerPage);

    reactProjectsGrid.innerHTML = '';
    if (paginated.length === 0) {
        reactProjectsGrid.innerHTML = '<p>No React projects available.</p>';
        return;
    }

    paginated.forEach((project) => {
        reactProjectsGrid.innerHTML += `
            <a class="project-tile" href="${project.url}" target="_blank">
              <img src="${project.screenshot}" alt="${project.title}" 
              onerror="this.onerror = null; this.src ='images/sample.png'" rel="noopener noreferrer"/>
              <p>${project.title}</p>
            </a>`;
    });

    renderPageNumbersReact();
};

const VanillaJsProjects = () => {
    const vanillaProjects = projects.filter(p => p.type === 'vanilla');
    totalPagesVanilla = Math.ceil(vanillaProjects.length / projectPerPage);

    if (currentPageVanilla > totalPagesVanilla) currentPageVanilla = totalPagesVanilla;

    const startIndex = (currentPageVanilla - 1) * projectPerPage;
    const paginated = vanillaProjects.slice(startIndex, startIndex + projectPerPage);

    vanillaProjectsGrid.classList.remove('visible');
    setTimeout(() => {
        vanillaProjectsGrid.innerHTML = '';

        paginated.forEach((project) => {
            vanillaProjectsGrid.innerHTML += `
            <a class="project-tile" href="${project.url}" target="_blank">
              <img src="${project.screenshot}" alt="${project.title}" 
              onerror="this.onerror = null; this.src ='images/sample.png'" rel="noopener noreferrer"/>
              <p>${project.title}</p>
            </a>`;
        });

        renderPageNumbersVanilla();
        setTimeout(() => vanillaProjectsGrid.classList.add('visible'), 20);
    }, 100);
};

const renderPageNumbersReact = () => {
    paginationReact.innerHTML = '';
      const paginationWrapper = paginationReact.closest('.pagination');
   if (reactProjects.length <= projectPerPage) {
        paginationWrapper.style.display = "none";
        return;}

    for (let i = 1; i <= totalPagesReact; i++) {
        const pageLink = document.createElement('button');
        pageLink.textContent = i;
        if (i === currentPageReact) pageLink.classList.add('active');
        pageLink.addEventListener('click', () => {
            currentPageReact = i;
            showProjects();
        });
        paginationReact.appendChild(pageLink);
    }
    prevReactBtn.disabled = currentPageReact === 1;
    nextReactBtn.disabled = currentPageReact === totalPagesReact;
};

const renderPageNumbersVanilla = () => {
    paginationVanilla.innerHTML = '';
    for (let i = 1; i <= totalPagesVanilla; i++) {
        const pageLink = document.createElement('button');
        pageLink.textContent = i;
        if (i === currentPageVanilla) pageLink.classList.add('active');
        pageLink.addEventListener('click', () => {
            currentPageVanilla = i;
            showProjects();
        });
        paginationVanilla.appendChild(pageLink);
    }
    prevVanillaBtn.disabled = currentPageVanilla === 1;
    nextVanillaBtn.disabled = currentPageVanilla === totalPagesVanilla;
};

// Pagination button handlers
nextReactBtn.addEventListener('click', e => {
    e.preventDefault();
    if (currentPageReact < totalPagesReact) {
        currentPageReact++;
        showProjects();
    }
});

prevReactBtn.addEventListener('click', e => {
    e.preventDefault();
    if (currentPageReact > 1) {
        currentPageReact--;
        showProjects();
    }
});

nextVanillaBtn.addEventListener('click', e => {
    e.preventDefault();
    if (currentPageVanilla < totalPagesVanilla) {
        currentPageVanilla++;
        showProjects();
    }
});

prevVanillaBtn.addEventListener('click', e => {
    e.preventDefault();
    if (currentPageVanilla > 1) {
        currentPageVanilla--;
        showProjects();
    }
});

const showProjects = () => {
    getData();
    reactProject();
    VanillaJsProjects();
};

window.onload = () => showProjects();
