
document.addEventListener('DOMContentLoaded', function () {

    //  image hover effect (like Jon Barron's)
    const profileImage = document.querySelector('.hoverZoomLink');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.04) rotate(-2deg)';
            this.style.boxShadow = '0 6px 24px 0 rgba(60, 80, 120, 0.18)';
        });

        profileImage.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = 'none';
        });
    }

   
    console.log("Portfolio loaded successfully!");
});