import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://www.daringgourmet.com/wp-content/uploads/2014/05/Swabian-Potato-Salad-1.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://i0.wp.com/sugarspiceslife.com/wp-content/uploads/2019/03/Greek-Meat-Sauce-with-Spaghetti-5.jpg?resize=683%2C1024&ssl=1',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes'],
    },
  ];
  constructor() {}

  ngOnInit() {}
}
