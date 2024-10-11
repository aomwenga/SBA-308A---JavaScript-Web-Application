// event listener to the button that calls the fetchCatImage function when clicked
document.getElementById("new-dog").addEventListener("click", fetchCatImage);

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
