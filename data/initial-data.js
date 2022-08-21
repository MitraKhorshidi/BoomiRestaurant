const foods = [
  {
    id: 1,
    title: "Beef Stroganoff",
    ingredients: "Veal fillet with mushroom sauce and vegtables",
    price: 68,
  },
  {
    id: 2,
    title: "Cheese Burger ",
    ingredients: "Lamb,lettuce,tomato,pickled cucumber,onion,bread,cheese",
    price: 150,
  },
  {
    id: 3,
    title: "Chicken Stroganoff",
    ingredients: "chicken with mushroom sauce and vegtables",
    price: 90,
  },
  {
    id: 4,
    title: "Steak",
    ingredients: "Veal fillet with mushroom sauce and vegtables ",
    price: 160,
  },
  {
    id: 5,
    title: "Pasta Alfredo",
    ingredients: "Pasta with cream sauce",
    price: 60,
  },
  {
    id: 6,
    title: "Pasta Napolitan",
    ingredients: "Pasta with tomato sauce and chicken fiilet",
    price: 70,
  },
  {
    id: 7,
    title: "Lasagna",
    ingredients: "Lasagna with tomato sauce,minced meat and cheeses",
    price: 111,
  },
  {
    id: 8,
    title: "Chelo Kabab Soltani",
    ingredients: "lamb kebab with persian rice and chicken kebab",
    price: 140,
  },
  {
    id: 9,
    title: "Chelo Kabab Barg",
    ingredients: "lamb kebab with persian rice and tomato kebab with salad",
    price: 130,
  },
  {
    id: 10,
    title: "Chelo Chicken Kebab",
    ingredients: "Chicken kebab with persian rice and tomato kebab",
    price: 111,
  },
  {
    id: 11,
    title: "Barberry Rice with Chicken",
    ingredients: "Barberry Rice with Chicken and tomato sauce",
    price: 70,
  },
  {
    id: 12,
    title: "Tahchin",
    ingredients: "Rice with chicken and yogourt ",
    price: 111,
  },
];

const tables = [
  { id: 1, min: 2, max: 4 },
  { id: 2, min: 2, max: 4 },
  { id: 3, min: 2, max: 4 },
  { id: 4, min: 1, max: 3 },
  { id: 5, min: 1, max: 3 },
  { id: 6, min: 1, max: 3 },
  { id: 7, min: 2, max: 4 },
  { id: 8, min: 2, max: 4 },
  { id: 9, min: 1, max: 2 },
  { id: 10, min: 2, max: 4 },
  { id: 11, min: 2, max: 4 },
  { id: 12, min: 2, max: 4 },
  { id: 13, min: 2, max: 4 },
  { id: 14, min: 1, max: 3 },
  { id: 15, min: 5, max: 8 },
];

import { foodModel, tableModel } from "./database";

export async function fillFoodDB() {
  for (let food of foods) {
    await foodModel.create(food);
  }
}

export async function fillTableDB() {
  for (let table of tables) {
    await tableModel.create(table);
  }
}
