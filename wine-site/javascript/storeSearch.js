//set containers
const whiteWineSection = document.getElementById("whiteWineContainer");
const redWineSection = document.getElementById("redWineContainer");
const beerSection = document.getElementById("BeerContainer");
const otherSection = document.getElementById("OtherContainer");

const searchInput = document.getElementById("wineSearchInput");

// void function to load Product
// product: {type: string, name: string, year: number, cost: number, description: string, imgFileName: string}
function LoadProduct(product) {
  // create card
  const card = document.createElement(`div`);
  card.classList.add("wine-card");

  // create img and insert to card
  // if the img src is not valid show icon instead
  if (product.imgFileName !== "NOPIC") {
    const img = document.createElement("div");
    img.classList.add("cardImg");
    img.style.backgroundImage = `url(../assets/images/${product.imgFileName}.jpg)`;
    card.append(img);
  } else {
    const i = document.createElement("i");
    i.classList.add("fas");
    i.classList.add("fa-wine-bottle");
    card.append(i);
  }

  // create title, year & price div and insert to card
  const cardInfo = document.createElement(`div`);
  const div = document.createElement(`div`);
  cardInfo.classList.add("wine-card-info");

  const title = document.createElement("h3");
  title.innerHTML = `${product.name}`;
  const year = document.createElement("h5");
  year.innerHTML = product.year == "" ? "" : `(${product.year})`;
  const cost = document.createElement("p");
  cost.innerHTML = `${product.cost}₪`;

  div.append(title);
  div.append(year);
  cardInfo.append(div);
  cardInfo.append(cost);

  card.append(cardInfo);

  // create details tag and insert to card
  const description = document.createElement("p");
  description.innerHTML = `${product.description}`;
  card.append(description);

  // add "add to shopping cart"
  const button = document.createElement("button");
  button.innerHTML = "הוסף לסל";
  const cartIcon = document.createElement("i");
  cartIcon.classList.add("fas");
  cartIcon.classList.add("fa-cart-plus");
  button.append(cartIcon);
  button.onclick = (e) => {
    console.log(product.name);
  };
  card.append(button);

  // add card to container based on product type
  switch (product.type) {
    case "white":
      whiteWineSection.append(card);
      break;

    case "red":
      redWineSection.append(card);
      break;

    case "beer":
      beerSection.append(card);
      break;

    default:
      otherSection.append(card);
      break;
  }
}

// void sub-function to check if section does not concludes relative cards it would remove section
// element : HTMLElement
function RemoveSectionIfNessecary(element) {
  const section = element.parentNode.parentNode;
  if (element.hasChildNodes()) {
    section.classList.remove("hide");
  } else {
    section.classList.add("hide");
  }
}

// void function that clears all cards from all views
function resetViews() {
  whiteWineSection.innerHTML = "";
  redWineSection.innerHTML = "";
  beerSection.innerHTML = "";
  otherSection.innerHTML = "";
}

// when typing in searchbar, remove all cards and show only filtered cards
searchInput.addEventListener("change", (e) => {
  LoadItems();
});
