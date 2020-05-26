# BIC4 Project: Peruvian cookbook

## The Peruvian cookbook

This software lists peruvian recipes and ingredients belongs to them.
It is possible to search for ingredients by various parameters.

## Exercise

### Already providing

All routes that are needed are implemented:
 * **GET** ```/ingredient``` &rarr; Lists all ingredients
 * **GET** ```/list/ingredient``` &rarr; Returns JSON of all ingredients
 * **GET** ```/list/recipe``` &rarr; Returns JSON of all recipe
 * **POST** ```/ingredient``` &rarr; Stores new ingredients
 * **GET** ```/ingredient/{slug}``` &rarr; Show ingredient
 * **PUT** ```/ingredient/{slug}``` &rarr; Update ingredient
 * **DELETE** ```/ingredient/{slug}``` &rarr; Delete ingredient
 * **GET** ```/ingredient/{slug}/edit``` &rarr; Edit ingredient
 * **GET** ```/search/ingredient``` &rarr; Search ingredients
 * **POST** ```/search/ingredient``` &rarr; Query ingredients
 * **GET** ```/recipe``` &rarr; Lists all recipe
 * **GET** ```/list/recipe``` &rarr; Returns JSON of all recipe
 * **POST** ```/recipe``` &rarr; Stores new recipe
 * **GET** ```/recipe/{slug}``` &rarr; Show recipe
 * **PUT** ```/recipe/{slug}``` &rarr; Update recipe
 * **DELETE** ```/recipe/{slug}``` &rarr; DELETE recipe
 * **GET** ```/recipe/{slug}/edit``` &rarr; Edit recipe

All views can be found in ```/resources/views```.

### TODO

#### VueJS

Implement your [VueJS](https://vue.js) components in the folder ```/resources/js/components```.
Register your components in ```/resources/js/app.js``` and use them in the following files:

 * ```/resources/views/recipe```
     * ```/resources/views/recipe/create.blade.php```
     * ```/resources/views/recipe/edit.blade.php```
     * ```/resources/views/recipe/index.blade.php```
     * ```/resources/views/recipe/show.blade.php```
 * ```/resources/views/ingredient```
      * ```/resources/views/ingredient/create.blade.php```
      * ```/resources/views/ingredient/edit.blade.php```
      * ```/resources/views/ingredient/index.blade.php```
      * ```/resources/views/ingredient/search.blade.php```
      * ```/resources/views/ingredient/show.blade.php```

To query data for dropdowns in forms or to reload lists use the list routes:
 * **GET** ```/list/recipe```
 * **GET** ```/list/ingredient```

For the search form use ```q``` as the name for the text input.
The search will be handled by the backend.

#### CSS (SCSS)

The design of the software need to be adapted.
[Bulma](https://bulma.io) is used to layout and style the website.
If wanted default styles can be overwritten by setting variables in the ```/resources/sass/_variables.scss``` file.
Also it is possible to write custom styles in ```/resources/sass/_custom.scss```.

A new logo need to be set. If pictures will be present on the website place them in ```/public/img``` folder.
Here you will also find the logo.

### Hints

#### JavaScript and CSS (SCSS)

To compile scss and JavaScript ```npm run dev``` need to be executed in the project folder.
It is also possible to run ```npm run watch``` so it is not need to execute ```npm run dev``` every time a change happend.

#### Data for Database

To make starting developing fast there are some seeders implemented to fill all needed tables except the user table.
To populate the database run the command ```php artisan db:seed``` in the terminal in project root folder.
