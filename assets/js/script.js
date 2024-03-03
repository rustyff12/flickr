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

    const backgroundElement = document.querySelector(".main-container");

    const changeBackground = () => {
        const screenSize = window.innerWidth;
        if (screenSize > 1200) {
            backgroundElement.classList.remove(...largeScreenImages); // Remove mobile image
            currentIndexLarge =
                (currentIndexLarge + 1) % largeScreenImages.length;
            const nextImageClass = largeScreenImages[currentIndexLarge];
            backgroundElement.classList.add(nextImageClass);
        } else if (screenSize > 700) {
            // large screen
            backgroundElement.classList.remove(...medScreenImages); // Remove mobile image
            currentIndexMedium =
                (currentIndexMedium + 1) % medScreenImages.length;
            const nextImageClass = medScreenImages[currentIndexMedium];
            backgroundElement.classList.add(nextImageClass);
        } else {
            backgroundElement.classList.remove(...mobileImages); // Remove mobile image
            currentIndexMobile = (currentIndexMobile + 1) % mobileImages.length;
            const nextImageClass = mobileImages[currentIndexMobile];
            backgroundElement.classList.add(nextImageClass);
        }
    };

    setInterval(changeBackground, 5000);
});
