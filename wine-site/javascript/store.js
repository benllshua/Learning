// ------------------------
// load products into sections at initial load
// ------------------------
LoadItems();

// void function that load items to view by search input val
function LoadItems() {
  resetViews();
  const inputVal = searchInput.value.trim();

  const filteredProducts = products.filter(
    (product) => product.name.includes(inputVal) || product.description.includes(inputVal)
  );

  // products are imported in 'store.html'
  filteredProducts.forEach((product) => {
    LoadProduct(product);
  });
  // if section does not concludes relative cards - remove headline
  const allSections = [whiteWineSection, redWineSection, beerSection, otherSection];
  allSections.forEach((section) => {
    RemoveSectionIfNessecary(section);
  });
}

// open and close void functions for modals
function OpenAddProductForm() {
  document.body.classList.add("showAddProductForm");
}
function CloseAddProductForm() {
  document.body.classList.remove("showAddProductForm");
}
function OpenFilterForm() {
  document.body.classList.add("showFilterForm");
}
function CloseFilterForm() {
  document.body.classList.remove("showFilterForm");
}
