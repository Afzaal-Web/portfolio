const projectsGrid = document.getElementById('projects-grid');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const pagination = document.getElementById('pagination-numbers');

const projects = [
    { url: 'https://Afzaal-Web.github.io/Palindrome-JS-Checker' },
    { url: 'https://Afzaal-Web.github.io/Roman-Numeral-Converter' },
    { url: 'https://afzaal-web.github.io/Asynchronous-Programming/' },
    { url: 'https://Afzaal-Web.github.io/Calorie-Form' },
    { url: 'https://Afzaal-Web.github.io/Cash-Register' },
    { url: 'https://Afzaal-Web.github.io/Color-Changer' },
    { url: 'https://Afzaal-Web.github.io/Date-Formatter' },
    { url: 'https://Afzaal-Web.github.io/Decimal-To-Binary' },
    { url: 'https://Afzaal-Web.github.io/dice-game' },
    { url: 'https://Afzaal-Web.github.io/expenses-with-oop' },
    { url: 'https://Afzaal-Web.github.io/fetch-promises' },
    { url: 'https://Afzaal-Web.github.io/football-team-cards' },
    { url: 'https://Afzaal-Web.github.io/functional-programming-spreadsheet' },
    { url: 'https://Afzaal-Web.github.io/GradeBook' },
    { url: 'https://Afzaal-Web.github.io/music-player' },
    { url: 'https://Afzaal-Web.github.io/number-sorter' },
    { url: 'https://Afzaal-Web.github.io/oop-basics' },
    { url: 'https://Afzaal-Web.github.io/phone-validator' },
    { url: 'https://Afzaal-Web.github.io/platformer-game' },
    { url: 'https://Afzaal-Web.github.io/pyramid-generator' },
    { url: 'https://Afzaal-Web.github.io/RPG-Creature-Search-App' },
    { url: 'https://Afzaal-Web.github.io/rpg-dragon-repeller' },
    { url: 'https://Afzaal-Web.github.io/shopping-cart-by-Basic-Opp' },
    { url: 'https://Afzaal-Web.github.io/spam-filter' },
    { url: 'https://Afzaal-Web.github.io/statistic-calculator' },
    { url: 'https://Afzaal-Web.github.io/student-grade-by-oop' },
    { url: 'https://Afzaal-Web.github.io/todo-app' },
    { url: 'https://Afzaal-Web.github.io/TODO-APP-with-OOP' },
    { url: 'https://google.com' },

    {
        url: 'https://google.com',
        title: 'My New Project 1',
        screenshot: 'images/sample.png'
    },
    {
        url: 'https://google.com/',
        title: 'My New Project 2',
        screenshot: 'images/sample.png'
    },
    {
        url: 'https://google.com',
        screenshot: 'images/sample.png'
    },
    { url: 'https://afzaal-241212.github.io/oveseas' },
];


const projectPerPage = 6;
let currentPage = 1;

const totalPages = Math.ceil(projects.length / projectPerPage);

nextButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (currentPage < totalPages) {
        currentPage++;
        showVanillaJsProjects();
    }
});

previousButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (currentPage > 1) {
        currentPage--;
        showVanillaJsProjects();
    }
});

const renderPageNumbers = () => {
    pagination.innerHTML = '';
    for(let i = 1; i <= totalPages; i++){
        const pageLink = document.createElement('button');
    pageLink.textContent = i;
if (i === currentPage) {
      pageLink.classList.add('active');
    }
    pageLink.addEventListener('click', (e) => {
        currentPage = i;
        showVanillaJsProjects();
    });
    pagination.appendChild(pageLink);

    }
    if (currentPage === 1) {
    previousButton.disabled = true;
} else {
    previousButton.disabled = false;
}

if (currentPage === totalPages) {
    nextButton.disabled = true;
} else {
    nextButton.disabled = false;
}

    

}

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
}

const showVanillaJsProjects = () => {
  projectsGrid.classList.remove('visible'); // Start fade out

  setTimeout(() => {
    projectsGrid.innerHTML = '';
    getData();

    const startIndex = (currentPage - 1) * projectPerPage;
    const endIndex = startIndex + projectPerPage;

    const paginatedProjects = projects.slice(startIndex, endIndex);

    paginatedProjects.forEach((project) => {
      projectsGrid.innerHTML += `
        <a class="project-tile" href="${project.url}" target="_blank">
          <img src="${project.screenshot}" alt="${project.title}" onerror="this.onerror = null; this.src ='images/sample.png'" rel="noopener noreferrer"/>
          <p>${project.title}</p>
        </a>`;
    });

    renderPageNumbers();

    // Fade in
    setTimeout(() => {
      projectsGrid.classList.add('visible');
    }, 20); 

      projectsGrid.scrollIntoView({ behavior: 'smooth' });
  }, 100); 
};



window.onload = () => showVanillaJsProjects();