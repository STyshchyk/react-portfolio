import img from "./assets/images/Screenshot_1.png"
import img2 from "./assets/images/Screenshot_2.png"
import img3 from "./assets/images/Screenshot_3.png"
import img4 from "./assets/images/Screenshot_4.png"
import img5 from "./assets/images/Screenshot_5.png"
import img6 from "./assets/images/Screenshot_6.png"
const portfolio = [
    {
        name: "Portfolio",
        link: "https://rolling-scopes-school.github.io/styshchyk-JSFEPRESCHOOL/portfolio/",
        thumbnail: {img},
        text: "Project that has been done during study in rsschool. Site was done using css, html and pure js. It also have mobile/tablet adaptation"
    },
    {
        name: "Zoo-project",
        link: "https://rolling-scopes-school.github.io/styshchyk-JSFE2022Q3/zoo-project/pages/main/",
        thumbnail: {img2},
        text: "Project that has been done during study in rsschool. Site was done using css, html and pure js. It also have mobile/tablet adaptation"
    },
    {
        name: "Snake",
        link: "https://rolling-scopes-school.github.io/styshchyk-JSFEPRESCHOOL/js30-3/",
        thumbnail: {img3},
        text: "Project that has been done during study in rsschool. Snake game with local storage of results, difficulties level & ability to select board size"
    },
    {
        name: "Puzzle",
        link: "https://rolling-scopes-school.github.io/styshchyk-JSFE2022Q3/puzzle/",
        thumbnail: {img4},
        text: "Project that has been done during study in rsschool. Board game with ability to select board size. Game that saves with ability to continue game afterwards. Drap & drop puzzles to win"
    },
    {
        name: "MUI shop",
        link: "https://styshchyk.github.io/material-shop/",
        thumbnail: {img5},
        text: "MUI shop. Stack: React, MUI, React Hooks, REST API, Redux"
    },
    {
        name: "Rick mortu",
        link: "https://styshchyk.github.io/rick_morty/",
        thumbnail: {img6},
        text: "Test task for Reenbit company. React/Redux Toolkit, RTK Query, Firebase Auth"
    }
]

export default portfolio;