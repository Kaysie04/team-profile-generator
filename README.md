# Team Profile Generator Using Node.js and Jest

## Description
The application generates a team profile based on user input using Inquirer. The newly built team profile is then displayed on a generated HTML page. The application also involves OOP and TDD using Jest.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```


## Installation 

```
npm init
```
```
npm i inquirer
```

```
npm i jest
```

## Usage 

To test the application type the following into your terminal
```
npm run test
```

Type in the following command and answer the prompt questions.

```
node index.js
```
Click [here](https://watch.screencastify.com/v/rKx3XqNjeCF1x3kJfda3) for a demonstration video.

## License
MIT
