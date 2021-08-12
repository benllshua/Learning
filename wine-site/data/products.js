let products = [
  {
    type: "white",
    name: "שרדונה",
    year: 1996,
    cost: 92,
    description: "השרדונה הוא יין לבן מעודן ויפיפה בטעמו וניחוחו",
    imgFileName: "shardanaWine",
  },
  {
    type: "white",
    name: "בלולנד",
    year: 1998,
    cost: 97,
    description: "בלולנד הוא יין איכותי ויחיד ממינו",
    imgFileName: "bluelandWine",
  },
  {
    type: "white",
    name: "סוביניון בלאן",
    year: 2004,
    cost: 67,
    description: "יין ארומטי מרענן עם ניחוח הדרי עדין",
    imgFileName: "sauvignonWine",
  },
  {
    type: "white",
    name: "יפו סובאג'",
    year: 1969,
    cost: 252,
    description: "השרדונה הוא יין לבן מעודן ויפיפה בטעמו וניחוחו",
    imgFileName: "yaffoSobajWine",
  },
  {
    type: "white",
    name: "סנסר",
    year: 1983,
    cost: 146,
    description: "השרדונה הוא יין לבן מעודן ויפיפה בטעמו וניחוחו",
    imgFileName: "sancerreWine",
  },
  {
    type: "white",
    name: "פינו גריזו",
    year: 2008,
    cost: 50,
    description: "השרדונה הוא יין לבן מעודן ויפיפה בטעמו וניחוחו",
    imgFileName: "pinotWine",
  },
  {
    type: "white",
    name: "פינו גריזו",
    year: 2008,
    cost: 50,
    description: "השרדונה הוא יין לבן מעודן ויפיפה בטעמו וניחוחו",
    imgFileName: "NOPIC",
  },
  {
    type: "red",
    name: "פינו גריזו",
    year: 2008,
    cost: 50,
    description: "השרדונה הוא יין לבן מעודן ויפיפה בטעמו וניחוחו",
    imgFileName: "NOPIC",
  },
  {
    type: "beer",
    name: "פינו גריזו",
    year: 2008,
    cost: 50,
    description: "השרדונה הוא יין לבן מעודן ויפיפה בטעמו וניחוחו",
    imgFileName: "NOPIC",
  },
  {
    type: "?",
    name: "פינו גריזו",
    year: 2008,
    cost: 50,
    description: "השרדונה הוא יין לבן מעודן ויפיפה בטעמו וניחוחו",
    imgFileName: "NOPIC",
  },
];

// localStorageProducts //

// make sure that browser has local storage
if (typeof Storage !== "undefined") {
  //make sure that 'savedProducts' exists in localStorage

  const savedProducts = JSON.parse(window.localStorage.getItem("savedProducts"));
  if (!Boolean(savedProducts)) {
    window.localStorage.setItem("savedProducts", JSON.stringify([]));
  }
  // if 'savedProducts' exists in localStorage - add them to 'products'
  else {
    products = products.concat(savedProducts);
    console.log(savedProducts);
  }
}
