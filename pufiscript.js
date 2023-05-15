  
// add event listeners
document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("myImage");
    const button = document.getElementById("myButton");
  
    // event listener for the image
    image.addEventListener("mouseover", function() {
        // add image hover effect
        image.style.filter = "grayscale(77%)";
        console.log("Image turned GRAY!");
    });

    image.addEventListener("mouseout", function() {
        // remove image hover effect/revert to original state
        image.style.filter = "none";
        console.log("Image back to normal!");
    });
  
    // event listener for the button
    button.addEventListener("click", function() {
        // redirect to the IMDb page when clicked
        window.location.href = "https://www.imdb.com/title/tt0110912/";
        console.log("Button was clicked!");
    });
  
    // event listener for second image
    const image2 = document.getElementById("myImage2");
    image2.addEventListener("mouseover", function() {
        // add image hover effect
        image2.style.transform = "scale(1.5)";
        console.log("Image2 got BIGGER!");
    });

    image2.addEventListener("mouseout", function() {
        // remove image hover effect/revert to original state
        image2.style.transform = "none";
        console.log("Image2 back to normal!");
    });



    // fetch and parse JSON file
    fetch("characters.json")
        .then(response => response.json())
        .then(data => {
            const characters = data.characters;
            // access character/actor information and perform desired action(s)
            characters.forEach(character => {
                console.log("Name: " + character.name);
                console.log("Actor: " + character.actor);
                console.log("Description: " + character.description);
                console.log("-----------------------");
            });
        })

        .catch(error => {
            console.error("Error fetching JSON file:", error);
        });
});
