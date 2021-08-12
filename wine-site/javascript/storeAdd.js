// ------------------------
//      add new product
// ------------------------
// void function that receive data from modal form inputs, creats new one and configure it both in
// user interface and localStorage if needed
function AddNewProduct() {
  // get inputs
  const productTypeInput = document.getElementById("productTypeInput");
  const productNameInput = document.getElementById("productNameInput");
  const productYearInput = document.getElementById("productYearInput");
  const productCostInput = document.getElementById("productCostInput");
  const productDescriptionInput = document.getElementById("productDescriptionInput");
  const productImageInput = document.getElementById("productImageInput");

  let valid = true;

  let product = {
    type: "",
    name: "",
    year: 0,
    cost: 0,
    description: "",
    imgFileName: "",
  };

  //collect data and store it in 'product'
  product.type = productTypeInput.value.trim();
  product.name = productNameInput.value;
  product.year = productYearInput.value;
  product.cost = productCostInput.value.trim();
  product.description = productDescriptionInput.value.trim();
  product.imgFileName = "NOPIC"; // need to be changed but no backend to upload to...

  // validate data
  const names = products.map((product) => {
    return product.name;
  });
  if (product.name === "" || names.includes(product.name)) {
    valid = false;
    alert("שם לא תקין, יכול להיות שהוא כבר לקוח");
    productNameInput.classList.add("danger");
  } else {
    productNameInput.classList.remove("danger");
  }

  if (product.description === "") {
    valid = false;
    productDescriptionInput.classList.add("danger");
  } else {
    productDescriptionInput.classList.remove("danger");
  }

  if (Number(product.cost)) {
    if (Number(product.cost > 0)) {
      productCostInput.classList.remove("danger");
    } else {
      valid = false;
      productCostInput.classList.add("danger");
    }
  } else {
    valid = false;
    alert("Please insert a valid price");
    productCostInput.classList.add("danger");
  }

  // if save is checked - add product to localStorage
  if (document.getElementById("saveProductInput").checked) {
    // 1) check if user browser has localStorage
    if (typeof Storage !== "undefined") {
      // 2) check that data is valid
      if (valid) {
        // 3) get localStorage 'savedProducts' combine with new one and set localStorage
        const savedProducts = JSON.parse(window.localStorage.getItem("savedProducts"));
        const newSavedProducts = savedProducts.push(product);
        window.localStorage.setItem("savedProducts", JSON.stringify(savedProducts));

        // 4) add to user frontend
        LoadProduct(product);

        // 5) close modal
        closeLoginForm();
      }
    }
    // user browser doesn't have localStorage
    else {
      valid = false;
      alert("לדפדפן שלך אין את היכולת לשמור מידע");
    }
  }
  // dont save to localStorage but still show card
  else {
    if (valid) {
      LoadProduct(product);
      closeLoginForm();
    }
  }
}

// add event listners to modal input so after error it would remove it
productNameInput.addEventListener("change", () => {
  productNameInput.classList.remove("danger");
});
productCostInput.addEventListener("change", () => {
  productCostInput.classList.remove("danger");
});
productDescriptionInput.addEventListener("change", () => {
  productDescriptionInput.classList.remove("danger");
});
