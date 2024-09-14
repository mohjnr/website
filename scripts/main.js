// Load the latest review and editor's pick on the home page
window.addEventListener('load', function() {
    loadGameReview();
    loadEditorsPick();
     addScrollAnimation();
});

// Load full reviews on the Reviews page
if (window.location.pathname.includes("reviews.html")) {
    window.addEventListener('load', function() {
        loadFullReviews();
        addScrollAnimation();
    });
}

// Function to load the latest review
function loadGameReview() {
    const latestReviewContainer = document.getElementById('latest-review');
    
    // Fetch or define the latest review data 
    const latestReview = {
        title: 'Eldring',
        rating: 4.5,
        reviewText: 'An exhilarating new adventure in the world of fantasy gaming!',
        image: '/img/eldring.jpg',
        link:"#elden-ring"
    };
    
    const reviewHTML = `
        <article>
            <img src="${latestReview.image}" alt="${latestReview.title}" width="300">
            <h4>${latestReview.title}</h4>
            <p>Rating: ${latestReview.rating}/5</p>
            <p>${latestReview.reviewText}</p>
             

        </article>
    `;
    
    latestReviewContainer.innerHTML = reviewHTML;
}

// Function to load the editor's pick
function loadEditorsPick() {
    const editorsPickContainer = document.getElementById('editors-pick');
    
    // Fetch or define the editor's pick data
    const editorsPick = {
        title: 'Editor’s Pick: Game of the Year',
        rating: 5,
        reviewText: 'A groundbreaking RPG that sets a new standard in immersive storytelling.',
        image: '/img/fc25.jpg'
    };
    
    const pickHTML = `
        <article>
            <img src="${editorsPick.image}" alt="${editorsPick.title}" width="300">
            <h4>${editorsPick.title}</h4>
            <p>Rating: ${editorsPick.rating}/5</p>
            <p>${editorsPick.reviewText}</p>
        </article>
    `;
    
    editorsPickContainer.innerHTML = pickHTML;
}
function addScrollAnimation() {
    const articles = document.querySelectorAll('article');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Make visible when in viewport
            }
        });
    }, {
        threshold: 0.1
    });
    
    articles.forEach(article => {
        observer.observe(article);
    });
}

// Function to load full reviews on the reviews page
function loadFullReviews() {
    const reviewsContainer = document.getElementById('full-reviews');
    
    // Example array of full reviews (can be fetched from an API)
    const reviews = [
        { title: 'Elden Ring', rating: 4, reviewText: 'An amazing adventure!', image:"/img/eldring.jpg", link:"#elden-ring" }
    ];
    
    reviews.forEach(review => {
        const reviewArticle = document.createElement('article');
        reviewArticle.innerHTML = `
        <div>
            <h4>${review.title}</h4>
            <p>Rating: ${review.rating}/5</p>
            <p>${review.reviewText}</p>
            <a href="${review.link}">This is where the review will be</a>
            
        </div>
        <img src="${review.image}" alt="${review.title}">
        `;
        reviewsContainer.appendChild(reviewArticle);
    });
}

