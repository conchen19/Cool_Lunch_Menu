document.addEventListener("DOMContentLoaded", function (event) {
    var mondayChange = document.getElementById('mondayImage')
    var tuesdayChange = document.getElementById('tuesdayImage')
    var wednesdayChange = document.getElementById('wednesdayImage')
    var thursdayChange = document.getElementById('thursdayImage')
    var fridayChange = document.getElementById('fridayImage')

    mondayChange.addEventListener('click', function (e) {
        //console.log(mondayChange.src)
        if (mondayChange.src === "file:///C:/Users/GWC03/Documents/GWC_Fun/soup_salad_sandwich.jpg") {
            mondayChange.src = "file:///C:/Users/GWC03/Documents/GWC_Fun/mondayimage2.jpg";
        } else if (mondayChange.src === "file:///C:/Users/GWC03/Documents/GWC_Fun/mondayimage2.jpg") {
            mondayChange.src = "file:///C:/Users/GWC03/Documents/GWC_Fun/soup_salad_sandwich.jpg";
        };
    });

    tuesdayChange.addEventListener('click', function (e) {
        console.log(tuesdayChange.src)
        if (tuesdayChange.src === "file:///C:/Users/GWC03/Documents/GWC_Fun/betterTacos.jpg") {
            tuesdayChange.src = "file:///C:/Users/GWC03/Documents/GWC_Fun/taco3.jpg";
        } else if (tuesdayChange.src === "file:///C:/Users/GWC03/Documents/GWC_Fun/taco3.jpg") {
            tuesdayChange.src = "file:///C:/Users/GWC03/Documents/GWC_Fun/betterTacos.jpg";
        };
    });

    wednesdayChange.addEventListener('click', function (e) {
        console.log(wednesdayChange.src)
        if (wednesdayChange.src === "file:///C:/Users/GWC03/Documents/GWC_Fun/pasta.jpg") {
            wednesdayChange.src = "file:///C:/Users/GWC03/Documents/GWC_Fun/pasta2.png";
        } else if (wednesdayChange.src === "file:///C:/Users/GWC03/Documents/GWC_Fun/pasta2.png") {
            wednesdayChange.src = "file:///C:/Users/GWC03/Documents/GWC_Fun/pasta.jpg";
        };
    });

    thursdayChange.addEventListener('click', function (e) {
        console.log (thursdayChange.src)
        if (thursdayChange.src === "file:///C:/Users/GWC03/Documents/GWC_Fun/pizza.jpg") {
            thursdayChange.src = "file:///C:/Users/GWC03/Documents/GWC_Fun/pizza3.jpg";
        } else if (thursdayChange.src === "file:///C:/Users/GWC03/Documents/GWC_Fun/pizza3.jpg") {
            thursdayChange.src = "file:///C:/Users/GWC03/Documents/GWC_Fun/pizza.jpg";
        };
    })

    fridayChange.addEventListener('click', function (e) {
        console.log (fridayChange.src)
        if (fridayChange.src === "file:///C:/Users/GWC03/Documents/GWC_Fun/fondue.jpg") {
            fridayChange.src = "file:///C:/Users/GWC03/Documents/GWC_Fun/sushi.jpg";
        } else if (fridayChange.src === "file:///C:/Users/GWC03/Documents/GWC_Fun/sushi.jpg") {
            fridayChange.src = "file:///C:/Users/GWC03/Documents/GWC_Fun/fondue.jpg";
        };
    });
});