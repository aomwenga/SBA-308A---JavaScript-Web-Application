// event listener to the button that calls the fetchCatImage function when clicked
document.getElementById("new-cat").addEventListener("click", fetchCatImage);

// async function to fetch a random cat image from The Cat API
async function fetchCatImage() {
  try {
    // Use the fetch API to send a GET request to The Cat API
    const response = await fetch("https://api.thecatapi.com/v1/images/search", {
      headers: {
        "x-api-key":
          "live_7JHK2hfszqskVylVAVpPIPRyPADDs6zzCDz1mNvlaD1H6wHVhnBVT4rNKXOiojoD", // Include the API key in the request headers
      },
    });
    // JSON response to get the image data
    const data = await response.json();
    // show the image in the gallery
    displayCatImage(data[0].url);
  } catch (error) {
    // errors that occur during the fetch request
    console.error("Error fetching the cat image:", error);
  }
}

// display the fetched cat image
function displayCatImage(imageUrl) {
  // element where images will be displayed
  const gallery = document.getElementById("cat-gallery");
  // new image element
  const img = document.createElement("img");
  // set the source of the image
  img.src = imageUrl;
  // add the image to the gallery
  gallery.appendChild(img);
}

// initial cat image when the page loads
fetchCatImage();

// Create user interaction with the API through a search feature, paginated gallery, or similar. This feature should use GET requests to retrieve associated data.
// event listener
document
  .getElementById("search-cat")
  .addEventListener("click", searchCatByBreed);

// fetch initial cat image and populate the breed list on page load
fetchCatImage();
fetchBreeds();
// get list of cat breeds from The Cat API
async function fetchBreeds() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key":
          "live_7JHK2hfszqskVylVAVpPIPRyPADDs6zzCDz1mNvlaD1H6wHVhnBVT4rNKXOiojoD", // Include the API key in the request headers
      },
    });
    // json response to get the breed data
    const breeds = await response.json();
    // populate the breed dropdown list
    populateBreedList(breeds);
  } catch (error) {
    // errors that occur during the fetch request
    console.error("Error fetching the breeds:", error);
  }
}

// show the breed dropdown list
function populateBreedList(breeds) {
  const breedSelect = document.getElementById("breed-select");
  breeds.forEach((breed) => {
    const option = document.createElement("option");
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}

// search for cat images by breed
async function searchCatByBreed() {
  const breedSelect = document.getElementById("breed-select");
  const breedId = breedSelect.value;

  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
      {
        headers: {
          "x-api-key":
            "live_7JHK2hfszqskVylVAVpPIPRyPADDs6zzCDz1mNvlaD1H6wHVhnBVT4rNKXOiojoD", // Include the API key in the request headers
        },
      }
    );
    // json response to get the image data
    const data = await response.json();
    // show the image in the gallery
    displayCatImage(data[0].url);
  } catch (error) {
    // errors that occur during the fetch request
    console.error("Error fetching the cat images by breed:", error);
  }
}

// add event listener to the form that calls the addCat function when the form is submitted
document.getElementById("cat-form").addEventListener("submit", addCat);

// async function to add a cat name
async function addCat(event) {
  event.preventDefault(); // prevent the form from submitting in the default way
  const catName = document.getElementById("cat-name").value; // get the cat name from the form input

  try {
    const response = await fetch("https://api.thecatapi.com/v1/cats", {
      method: "POST", // use the POST method to send data
      headers: {
        "Content-Type": "application/json", // set the content type to JSON
        "x-api-key":
          "live_7JHK2hfszqskVylVAVpPIPRyPADDs6zzCDz1mNvlaD1H6wHVhnBVT4rNKXOiojoD", //  API key
      },
      body: JSON.stringify({ name: catName }), // json string
    });
    const data = await response.json(); // json response
    console.log("Cat added:", data); // log the response data
  } catch (error) {
    // log any errors
    console.error("Error adding the cat:", error);
  }
}

// i can see the cat being added in the console log as an object, but not the value
