# football-stats-react-recharts

## Table of Contents
1. [Description](#description)
2. [Technologies](#technologies)
3. [Demo](#demo)
4. [Installation and viewing](#installation-and-viewing)
5. [Implementation, observations, other notes](#implementation-observations-other-notes)


## Description:
The app is built for getting stats about football matches. It has of three filters: Team, Player and Match. Once player and match filters are chosen, the stats are presented in a radar-chart with some details about the game and the player.

## Technologies:
JavaScript, React, React Hooks, Recharts, SCSS, SCSS Modules, localStorage HTML, Webpack, Babel, Eslint, Stylelint.

## Demo:
1. First search with refresh:
![first-search-with refresh](https://user-images.githubusercontent.com/66952678/113122943-066cf980-920c-11eb-9510-e1a715f591ea.gif)

2. Search and Radar Chart
![search](https://user-images.githubusercontent.com/66952678/113123322-62d01900-920c-11eb-9b09-6d093d245735.gif)

## Installation and viewing
1. Open the repo in your code editor
2. Install NPM packages `npm install`
3. View the project in the browser: `npm run start`

## Implementation, observations, other notes:

### Chart
The Chart is implemented using Reacharts library. Once fetch request is successful and the results are received, a Radar Chart is rendered on the page showing stats for a match. The polygon area of the chart gets updates according to the data received and the colour of the area is team's colour.

### Filters
There are 3 available filters: Team, Player and Match. Once any of the filters is chosen, the other select-options are updated based on the chosen filter, e.g. if option "England" is chosen in filter Team, the filter Player will only show players of that team and then once the player is chosen, the filter Match will only show matches related to that player, etc.
</br>
</br>
In order to clear the choice, the user can simply select "All" option of select.
</br>
</br>
All the 3 filters can work both individually and together.
</br>
Once at least 2 filters are chosen (Player and Match), the Search button activates, otherwise that button is disabled.
</br>
</br>
For drop-down menu, the options are taken dynamically from the mock-data provided using JS array methods.

### LocalStorage
As soon as data is fetched successfully, the results of the search are saved in the localStorage and in case the window is refreshed, the filters and stats chart are populated from localStorage.

### Styles
SCSS and CSS Modules

### Additional implementations
In addition to current code, I believe the following implementations would be beneficial:</br>
- The data with an array of products can be fetched from an actual API rather that from a mock file.
- Additional testing with Jest could be implemented in order to check the logic of the filters and other utilities.
- Responsive design can be implemented to the app.
