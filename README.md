# Filmio

## Components
* Header
* MovieList
* SigleMovie
* MovieDetail

### Header
Header accepts an array with routes and display them in the top right of the header. The `data` folder holds the actual data. This ensures scalability and makes a great test scenario.

### MovieList
This component is responsible of displaying every single `Movie` component in the view.

### SingleMovie
This abstract component describes the single movie that will be shown in a grid style. Can be reusable for other purposes as *Similar Movies* when used in combination with `MovieList`

### MovieDetail
This component displayes the `Movie` data in the coresponding view. It takes advantage of the dynamic route and display every movie, given a valid ID. You can actually replace the Id of the path `/movies/id` with any valid one and filmio will fetch the movie data for you!
**Try `557` for some web and strings 😊**



## Project setup

To see Filmio in action you should run the following commands
```
yarn install
yarn serve
```

To execute the tests
```
yarn test:unit
```
