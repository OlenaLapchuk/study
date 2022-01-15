export function countItems(items) {
    return items.length;
  }
  
  export function countPrice(items) {
    let totalPrice = 0;
    items.forEach((odynTovar) => {
      totalPrice = totalPrice + odynTovar.price;
    });
    return totalPrice;
  }
  
  export function sum(a, b) {
    return a + b;
  }

  export function countBlackItems(items) {
    const blackItems = [];
    items.forEach((item) => {
      if (item.color === "black") {
        blackItems.push(item);
      }
    });
    return countPrice(blackItems);
  }

  export function countPriceOfItems(items) {
    let totalSum = 0;
    items.forEach((item) => {
      totalSum = totalSum + item.price;
    });
    return totalSum;
  }

  export function countSumOfRedItems(redItems) {
    let totalSumOfRedItems = 0;
    redItems.forEach((redItem) => {
      totalSumOfRedItems = totalSumOfRedItems + redItem.price;
    });
    return totalSumOfRedItems;
  }

  export function countDiscount(itemPrice) {
    return 0.3 * itemPrice;
  }
  
  export function addDiscountToItemsofAnswearBrand(items) {
    let discountForItem;
    let priceWithDiscount;
    items.forEach((item) => {
      if (item.brand === "Answear") {
        discountForItem = countDiscount(item.price);
        priceWithDiscount = item.price - discountForItem;
      }
    });
  
    return discountForItem;
  }
  
  export function addDiscountProperty(items) {
    items.forEach((item) => {
      if (item.brand === "Answear") {
        item.discount = 0.3;
      } else {
        item.discount = 0;
      }
    });
  }
  
  export function countPriceOfItemsIncludingDiscounts(items) {
    let sumWithDiscount = 0;
    items.forEach((item) => {
      sumWithDiscount = sumWithDiscount + (item.price - item.price * item.discount); //   sumWithDiscount = sumWithDiscount + (item.price - (item.price * item.discount) / 100);
    });
  
    return sumWithDiscount;
  }




