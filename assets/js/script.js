// Constantly changing images
document.addEventListener("DOMContentLoaded", () => {
    const mobileImages = [
        "image-mobile-1",
        "image-mobile-2",
        "image-mobile-3",
        "image-mobile-4",
        "image-mobile-5",
    ];
    const medScreenImages = [
        "image-med-1",
        "image-med-2",
        "image-med-3",
        "image-med-4",
        "image-med-5",
    ];

    const largeScreenImages = [
        "image-large-1",
        "image-large-2",
        "image-large-3",
        "image-large-4",
        "image-large-5",
    ];

    let currentIndexMobile = 0;
    let currentIndexMedium = 0;
    let currentIndexLarge = 0;
    // When true prevents constant image preloads
    let isLoaded = false;
    console.log(isLoaded);
    const backgroundElement = document.querySelector(".main-container");

    // Preload the next image based on the current screen size
    const preloadImages = (classNames, directory) => {
        classNames.forEach((className) => {
            const img = new Image();
            img.src = `./assets/img/${directory}/${className}.jpg`; // Adjust the path as per your image structure

            console.log(img);
        });

        console.log(isLoaded);
    };

    // Replace the main-container class with no-default-background class
    backgroundElement.classList.replace(
        "main-container",
        "no-default-main-container"
    );

    const changeBackground = () => {
        const screenSize = window.innerWidth;
        let currentImages;

        // Preload images for different screen sizes
        if (isLoaded === false) {
            if (screenSize > 1200) {
                currentImages = largeScreenImages;
                isLoaded = true;
                preloadImages(largeScreenImages, "large");
            } else if (screenSize > 700) {
                currentImages = medScreenImages;
                isLoaded = true;
                preloadImages(medScreenImages, "med");
            } else {
                currentImages = mobileImages;
                isLoaded = true;
                preloadImages(mobileImages, "mobile");
            }
        }

        if (screenSize > 1200) {
            // large screens
            backgroundElement.classList.remove(...largeScreenImages); // Remove mobile image
            currentIndexLarge =
                (currentIndexLarge + 1) % largeScreenImages.length;
            const nextImageClass = largeScreenImages[currentIndexLarge];
            backgroundElement.classList.add(nextImageClass);
        } else if (screenSize > 700) {
            // Medium screens
            backgroundElement.classList.remove(...medScreenImages); // Remove mobile image
            currentIndexMedium =
                (currentIndexMedium + 1) % medScreenImages.length;
            const nextImageClass = medScreenImages[currentIndexMedium];
            backgroundElement.classList.add(nextImageClass);
        } else {
            // mobile screens
            backgroundElement.classList.remove(...mobileImages); // Remove mobile image
            currentIndexMobile = (currentIndexMobile + 1) % mobileImages.length;
            const nextImageClass = mobileImages[currentIndexMobile];
            backgroundElement.classList.add(nextImageClass);
        }
    };
    changeBackground();

    setInterval(changeBackground, 7000);
});
