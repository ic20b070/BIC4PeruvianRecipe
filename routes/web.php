<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'GuestController@index')->name('welcome');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::resource('ingredient', 'IngredientController');
Route::resource('recipe', 'RecipeController');

Route::get('/search/ingredient', 'IngredientController@search')->name('ingredient.search');
Route::post('/search/ingredient', 'IngredientController@query')->name('ingredient.query');
//Route::put('/ingredient','IngredientController@update')->name('ingredient.update');


Route::get('/list/recipe', 'RecipeController@list')->name('recipe.list');
Route::get('/list/ingredient', 'IngredientController@list')->name('ingredient.list');


