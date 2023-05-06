[![License: MIT](https://custom-icon-badges.demolab.com/badge/license-MIT-yellowgreen.svg?logo=law)](https://opensource.org/licenses/MIT)
![GitHub repo size](https://custom-icon-badges.demolab.com/github/repo-size/Nweekley84/my-day-planner?logo=repo)
![GitHub top language](https://img.shields.io/github/languages/top/Nweekley84/my-day-planner?logo=javascript&logoColor=f5f5f5)
![GitHub last commit](https://custom-icon-badges.demolab.com/github/last-commit/Nweekley84/my-day-planner?logo=git-commit)
# Nate's My Day Planner
> Use starter code to complete a work day scheduler.
> Must display current day at top of calendar.
> Must use timeblocks for standard business hours.
> Must color code timeblocks past/present/future.
> Must be able to enter events.
> Save buttons must store to local storage.
> Must display saved local storage strings upon refresh.
> Live demo: [![Here](https://custom-icon-badges.demolab.com/badge/Here-blue?logo=link)](https://nweekley84.github.io/my-day-planner/)
<!--[_here_]().-->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Resources](#resources)
* [License](#resources)


## General Information
- Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code.
- Purpose is to put into practice local storage and more importantly play around with [Day.js](https://day.js.org/).
- Undertaken because it utilizes what we learned in module 5, and lets us explore date and time features.


## Technologies Used
- [![Chrome Dev Tools 112.0.5615.121](https://custom-icon-badges.demolab.com/badge/Chrome-112.0.5615.121-blue?logo=googlechrome)](https://developer.chrome.com/tags/new-in-devtools/) 
- [![VSCode 1.77.3](https://custom-icon-badges.demolab.com/badge/VSCode-1.77.3-blue?logo=visualstudiocode)](https://code.visualstudio.com/updates/v1_78)
- [![macOS Mojave 10.14.6](https://custom-icon-badges.demolab.com/badge/Mojave-10.14.6-blue?logo=macos)](https://support.apple.com/kb/DL2011?locale=en_US) 


## Features
- Upon page load, display the current Date in the header.
- Use plugin script for Advanced Formatting in [Day.js](https://day.js.org/) to display 1st, 2nd, 3rd, ect..
- Wrap everything in a document.ready function so DOM loads first.
- Displays 8 time-blocks for standard work day 9am-5pm.
- Dynamically display each block with color codes to reflect past/present/future using css/js.
- Dynamically update in realtime without refreshing as hours pass.
- Store events added to each timeblock in local storage.
- Make sure stored event's persist upon refresh and display in their corresponding time-blocks.
- At 12:00am, aka Midnight/0000, reset timeblocks from past to future stylings (from grey to green).

## Screenshots
![Example screenshot 1](./assets/images/00ss.gif)

## Usage
To organize your daily events during a normal 9am-5pm work schedule and save those events to local storage.

## Project Status
![project status](https://custom-icon-badges.demolab.com/badge/Completed-grey?logo=check-circle-fill&logoColor=green)

## Room for Improvement
- Possibly expand the day planner into a full week, month, or even a year.
- Make it into a full day planner, not just the 8 working hours.
- Add option to include "very important" events that trigger a email reminder 30 minutes prior to said important event.

To do:
- All required tasks completed.

## Acknowledgements
- This project was inspired by starter code provided via [UCSD Bootcamp Extension](https://bootcamp.extension.ucsd.edu/).

## Resources
- [![MDN Web Docs](https://custom-icon-badges.demolab.com/badge/MDN&nbsp;Web&nbsp;Docs-black?logo=mdnwebdocs&logoColor=blue)](https://developer.mozilla.org/en-US/)
- [![Stackoverflow](https://custom-icon-badges.demolab.com/badge/Stack&nbsp;Overflow-black?logo=stackoverflow&logoColor=orange)](https://stackoverflow.com/)
- [![Google](https://custom-icon-badges.demolab.com/badge/Google-black?logo=google&logoColor=red)](https://www.google.com/)
- [![Youtube](https://custom-icon-badges.demolab.com/badge/Youtube-black?logo=video&logoColor=red)](https://www.youtube.com/)
- [![ChatGPT](https://custom-icon-badges.demolab.com/badge/ChatGPT-black?logo=openai&logoColor=white)](https://openai.com/blog/chatgpt)

## <img src="https://icon-library.com/images/license-icon/license-icon-17.jpg" width="28"> License
This project is [MIT](https://opensource.org/licenses/MIT) licensed. <br>© 2023 [Nathan Weekley](mailto:nweekley27@gmail.com) 

---
<div align="center">

[![github](./assets/images/githubcat.svg)](https://github.com/Nweekley84) 
</div>