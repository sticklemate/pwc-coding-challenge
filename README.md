[![Netlify Status](https://api.netlify.com/api/v1/badges/1e194d44-7650-406d-9f1f-c54876114cf0/deploy-status)](https://app.netlify.com/sites/tender-bohr-6e3fc8/deploys)

# PwC Coding Challenge

Weather Widget built with React
[Live Demo] :

## Tech Stack Used

**React, Typescript, Redux, StyledComponents**

## Usage

Enable locations on your device to get Weather data for the current location

<img alt="weather for current location" src="https://github.com/sticklemate/pwc-coding-challenge/blob/main/docs/gif/location_current.gif?raw=true" width="550" height="300" />

Search for any city or place and retrieve weather data for the week

<img alt="search weather location" src="https://github.com/sticklemate/pwc-coding-challenge/blob/main/docs/gif/location_search.gif?raw=true" width="550" height="300" />


## Getting Started

First you need an API key from OpenWeatherMap, you can get one by creating an account on their **[website](https://openweathermap.org/)**.
After you get the API key, create a **.env** file at root directory, copy the line below to the file and replace YOUR_KEY with your OpenWeatherMap API Key (Also available in the example.env file)

```
REACT_APP_WEATHER_API_KEY=YOUR_API_KEY
```

You can obtain your Algolia Places API key **[here](https://community.algolia.com/places/pricing.html)**. You will get higher rate limits if you sign up and provide an api key OR it's just limited to 1000 requests/day! Moreover, code logic handles the scenario where no Algolia App ID & API key are provided since these are optional.*

## Basic Setup
Clone this repository, install dependencies and run the local server

```bash
git clone https://github.com/sticklemate/pwc-coding-challenge.git
```

```bash
cd pwc-coding-challenge
```

## Available Scripts
```bash
npm install
```
Installs all the project related packages and dependencies
```bash
npm start
```
Runs the app in the development mode.Open [http://localhost:3000](http://localhost:3000/) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

```bash
npm test
```
Launches the test runner in the interactive watch mode. See the section about [**running tests**](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```bash
npm run build
```
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [**deployment**](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```bash
npm run eject
```
**Note**: _this is a one-way operation. Once you eject, you can’t go back!_

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Roadmap

- [ ] Build a proxy server using Express for API requests

- [ ] Unit Testing is limited at the moment. Need to add more relevant test scenarios

- [ ] Create some mock data to test APIs

- [ ] Add documentation for components using **Storybook**


## Attribution

[OpenWeatherMap](https://openweathermap.org/ 'OpenWeatherMap') (Weather data API)

[Algolia Places](https://community.algolia.com/places/ 'Algolia Places') (Place suggestion API)

[Icons8.com](https://www.icons8.com 'Icons8.com') (Weather icons)
