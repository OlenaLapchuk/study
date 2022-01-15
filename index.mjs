import { getBlackItems, getRedItems, getItemByColor } from "./src/getItems.mjs";

import {
  countItems,
  countPrice,
  sum,
  countBlackItems,
  countPriceOfItems,
  countSumOfRedItems,
  countDiscount,
  addDiscountToItemsofAnswearBrand,
  addDiscountProperty,
  countPriceOfItemsIncludingDiscounts,
} from "./src/countItems.mjs";
import { blackDress, leggings, bag, redDress, hat } from "./src/shop.mjs";
import { buyItems, buyWithDiscountsOnHappyNewYear } from "./src/makePurcahses.mjs";

/* - Створити пустий масив - історія покупок
- Створити функцію яка буде купувати товари. Купити blackDress, вивести суму до сплати
- Купити 2 легкінсів, вивести суму до сплати
- Вивести на екран
- Вивести історію покупок в термінал */

const historyOfPurcases = [];

const purcshasedItems = buyItems([blackDress]);
// console.log(purcshasedItems);

const purcshasedLeggings = buyItems([leggings, leggings]);
// console.log(purcshasedLeggings);

historyOfPurcases.push(purcshasedItems, purcshasedLeggings);
// console.log(`Here  is history of purcahses`, historyOfPurcases);

const itemsIwantToBuy = [leggings, hat];

const itemsWithBigDiscounts = buyWithDiscountsOnHappyNewYear(itemsIwantToBuy);
console.log(itemsIwantToBuy);
console.log(itemsWithBigDiscounts);

/*
- Створити нову функцію для купівлі - якщо товар answer то знижка 70% незалежно від знижки товару 
- Купити 1 ансвер і щось щосвер, вивест не ани суму до сплати */
