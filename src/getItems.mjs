export function getBlackItems(items) {
  const blackItems = [];
  items.forEach((item) => {
    if (item.color === "black") {
      blackItems.push(item);
    }
  });
  return blackItems;
}
export function getRedItems(items) {
  const listOfRedItems = [];
  items.forEach((item) => {
    if (item.color === "red") {
      listOfRedItems.push(item);
    }
  });

  return listOfRedItems;
}
export function getItemByColor(items, color) {
  const listWithItemsByColor = [];
  items.forEach((item) => {
    if (item.color === color) {
      listWithItemsByColor.push(item);
    }
  });
  return listWithItemsByColor;
}
