// set form parts
const filterTypeInput = document.getElementById("filterTypeInput");
const filterActionInput = document.getElementById("filterActionInput");
const filterValueInput = document.getElementById("filterValueInput");
const filterPills = document.getElementById("filterPills");

const filterActionSelectContainer = document.getElementById("filterActionSelectContainer");

// declare filters
/** filter : {
 *      id: number,
 *      filterType: string,
 *      filterAction: string,
 *      filterValue: string / number
 * } */
let filters = [];
let idCount = 0;

// void function that adds filter to 'filters' by modal values
function AddFilter() {
  const filter = {
    id: idCount,
    filterType: filterTypeInput.value,
    filterAction: filterActionInput.value,
    filterValue: filterValueInput.value,
  };

  idCount++;

  filters.push(filter);
  console.log(filters);
}

// boolean function that checks if inputs are valid
// filter : Filter
function IsFilterValid(filter) {
  let valid = true;
  if (filter.filterType.trim()) {
  } else {
    valid = false;
  }
}

// if filter type is 'מכיל' - no nned for bigger / smaller / equel
filterTypeInput.addEventListener("change", (e) => {
  console.log(filterTypeInput.value);
  if (filterTypeInput.value === "includes") {
    filterActionSelectContainer.classList.add("hide");
  } else {
    filterActionSelectContainer.classList.remove("hide");
  }
});

// void funtion that removes filter from filter list if it exist
// id : number
function RemoveFilterById(id) {
  let needToReloadItems = false;
  if (typeof id === "number") {
    filters.forEach((filter) => {
      if (filter.id === id) {
        needToReloadItems = true;
        filters.remove(filter);
      }
    });

    if (needToReloadItems) {
      LoadItems();
    }
  }
}

// void function that remove all filters
function ResetFilters() {
  filters = [];
  filterPills.innerHTML = "";
  LoadItems();
}
