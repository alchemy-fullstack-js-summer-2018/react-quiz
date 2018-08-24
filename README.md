# React Quiz

This quiz is designed to test your familiarity with basic React components. _Do not use redux_, **use React's built in `state` and `setState`**.

## Rules

1. Use standard lab process: fork this repo and clone locally.
1. **Make an initial commit when you start your work**
1. You have **45 minutes** to complete what you can.
1. You must complete this work on your own within the allotted time
    * You **need to manage your time** to have PR and last commit before deadline (remember, you can
    open PR and push your commits frequently).
1. You may use normal resources that a software developer uses on the job (docs, google, your prior work)
1. Working webpack react build system is included (**remember to `npm i` after cloning your forked repo!**)
1. You may install npm packages of your choosing, though probably not needed
1. Use general best practices and common sense
    * Highly recommended to implement what is needed, no more no less
    * Blind boilerplate or copying in code will not be helpful and will likely create more work
    * **Focus effort on requirements of the lab**
1. Total possible points are 70. You will be graded out of 50 points

## Submission requirement

* **Do a fork and PR like a normal lab**
* **Read the requirements more than once, it will save you a ton of time**

## Base Requirements

Build an app that displays a list of pokemon and allows a user to choose a favorite. 

### Load the data

Notice there is a file `pokedex.js` that exports an array of pokemon, and in `App` this is imported and set as the initial state.

### Components

Provide prop-type validation for all components that receive props

Use the following component structure:

```
App
  |
  +- Pokedex
      |
      +- [Pokemon]
```

#### `App` 

* Top level App component. 
* Owns state for `pokedex` and `favorite`
* Displays image and name of user's favorite pokemon, or "Select a favorite pokemon" if no favorite has been selected
* Displays child component `Pokedex`, passing `pokedex` and an `onSelect` callback function that 
will update `favorite` with the selected pokemon

#### `Pokedex`

* Receives two props
    * `pokedex` (array of pokemon) 
    * `onSelect` (callback function)
* Creates a list with a `Pokemon` component for each pokemon

#### `Pokemon`

* Receives two props
    * `pokemon` (pokemon to display) 
    * `onSelect` (callback function to indicate this is the favorite)
* Displays pokemon name, image, type 1, type 2, attack, and defense. 
* Use at least two of the color properties in the styles (for example, background and text color).
* Register a click handler that calls the `onSelect` callback.