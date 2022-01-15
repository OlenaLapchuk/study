import { countPriceOfItemsIncludingDiscounts } from "./countItems.mjs";

export function buyItems(items) {
  const purchase = { items: [], totalSum: 0 };
  items.forEach((item) => {
    purchase.items.push(item);
  });
  const totalSum = countPriceOfItemsIncludingDiscounts(items);
  purchase.totalSum = totalSum;
  return purchase;
}

export function buyWithDiscountsOnHappyNewYear(items) {
  const purchase = { items: [], totalSum: 0 };
  items.forEach((item) => {
    if (item.brand === "Answear") {
      const itemWithDiscount = {
        ...item,
        discount: 0.7,
      };
      purchase.items.push(itemWithDiscount);
      return;
    }
    purchase.items.push(item);
  });
  const totalSum = countPriceOfItemsIncludingDiscounts(purchase.items);
  purchase.totalSum = totalSum;
  return purchase;
}
