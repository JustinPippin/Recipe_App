import React, { Component } from 'react';
import axios from 'axios';

class RecipeSearcher extends Component {

    constructor(props) {
        super(props);
        this.state = { recipes: [] }
    }

    getRandomRecipe = () => {
        axios({
            /*We can configure everything we need to about the HTTP request in here */
            method: "GET",
            url: 'https://www.themealdb.com/api/json/v1/1/random.php'
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    getRecipeByName = (name) => {
        axios({
            /*We can configure everything we need to about the HTTP request in here */
            method: "GET",
            url: 'https://www.themealdb.com/api/json/v1/1/random.php',
            params: {
                s: name
            }
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    //Create a function called getRecipeByLetter that takes in a letter as a parameter. This should carry out the proper Axios call to the database. You will need to pass in the letter as the param f in the call.

   getRecipeByLetter = (letter) => {
       axios ({
           method: "GET",
           url: 'https://www.themealdb.com/api/json/v1/1/search.php',
           params: {
               f: letter
           }
       })
       .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
   }

    render() {
        this.getRandomRecipe('Chicken');
        return (
            <div>
            </div>
        );
    }
}

export default RecipeSearcher;