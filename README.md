# PSU Career Fair Map
An Online interactive map for students of the PSU Career Fair held in the SMSU ballroom

## Need

### UX Research Summary: 
Based on observations and informal interviews with students I discovered that the current process is as follows:
- When each student arrives in fron of the SMSU Ballroom, they are given a floor map with numbered blocks (which has been the same for the past few years), and another sheet with the list of companies present and their respective block number
- As the sttudent enters the hall, they need to cross-reference the map with the list to find out where each company's staff is located. 
- More often than not, students don't have time or the capacity to memorise information of all the n companies that they want to approach, leading to last minute google searches to find out more about a company before approaching their stall. 
- **(Pain point) Thus each student goes through the hassle of managing a file full of resumes in one hand, and the map, the list and their phone in the other (Not to mention, *ahem* the SWAG - Stuff We All Get)**
- **(Pain point) Also, it is difficult to figure out the most efficient route to take to cover all companies that they want to visit in one go.**

### Brainstorming, Ideation and Design 
The thought process behind the solution
- Each student carries their mobile phone regardless
- We could make the map and the list of companies present at the fair, online 
- **Provide them a way to mark the companies they WISH to go to (click to mark yellow)**
- **And, mark the companies they have ALREADY been to (click again to mark green),**
- **Also, using Google's Knowledge Graph API, provide them with (possibly) the logo of the company to identify their banner and some summaried information, with a double-click.**

## Prototype

**Node.js (Express.js), EJS and CSS**

https://psucareerfairmap.herokuapp.com/

## How To

- npm install : to install dependencies specified in package.json and create the node_modules folder
- create .env file for Google's Knowledge Graph API's key
- node .\app.js : to run 

## What I did

- npm init: to generate package.json
- npm install <package>: to install express and all other dependencies
- created .env for Google's Knowledge Graph API's key
- created .gitignore to ignore uploading .env and node_modules
- started with app.js
- created public folder for CSS file and Javascript file to handle events
- created views folder for ejs file to generate the right HTML
- node app.js to run 
- deployed to heroku from github repository after adding line "scripts: start: node app.js" and updating config vars to include Google API Key
