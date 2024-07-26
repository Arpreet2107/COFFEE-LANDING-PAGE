document.addEventListener('DOMContentLoaded', () => {
    // Get button elements
    const shopNowBtn = document.querySelector('.main-btn');
    const learnMoreStoryBtn = document.getElementById('learn-more-story');
    const learnMoreCoffeeBtn = document.getElementById('learn-more-coffee');
    const cardBtns = document.querySelectorAll('.card-btn');

    // Add event listeners
    shopNowBtn.addEventListener('click', () => {
        alert('Redirecting to shop...');
        // Example redirect
        // window.location.href = 'shop.html';
    });

    learnMoreStoryBtn.addEventListener('click', () => {
        alert('Learn more about our story...');
        // Example redirect
        // window.location.href = 'our-story.html';
    });

    learnMoreCoffeeBtn.addEventListener('click', () => {
        alert('Learn more about our coffee...');
        // Example redirect
        // window.location.href = 'coffee.html';
    });

    cardBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('More details about this product...');
            // Example redirect
            // window.location.href = 'product-details.html';
        });
    });
});
