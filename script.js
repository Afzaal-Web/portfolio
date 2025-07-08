const projectsGrid = document.getElementById('projects-grid');
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
    getData();
    projects.forEach((project) => {
        projectsGrid.innerHTML += `
         <a class="project-tile" href="${project.url}" target="_blank">
        <img src="${project.screenshot}" alt="${project.title}" onerror="this.onerror = null; this.src ='images/sample.png'" rel="noopener noreferrer"/>
        <p>${project.title}</p>
      </a>`
    })


}

window.onload = () => showVanillaJsProjects();