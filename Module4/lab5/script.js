let news = [
    { id: 1, title: 'Election Results',
        content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success',
        content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning',
        content: "Residents should prepare..." }
];

const updateNews = () => {
    let container = document.getElementById('news-container');
    container.innerHTML = ''; // Clears existing content

    news.forEach(item => {
        let newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `<h2>${item.title}</h2><p>${item.content}</p>`;
        container.appendChild(newsItem);
    }); // Appends each news item to the container
};

document.addEventListener("DOMContentLoaded", () => { // Ensures the DOM is fully loaded before executing the script
    updateNews();
    
    document.getElementById('submit').addEventListener("click", function(event) { // Adds an event to the submit button
        event.preventDefault() // Prevents default form submission
    
        let titleInput = document.getElementById('title').value; 
        let contentInput = document.getElementById('content').value;
    
        // Checks if the inputs are not empty
        if (titleInput && contentInput) {
            let newNewsItem = {
                id: news.length + 1,
                title: titleInput,
                content: contentInput
            };
    
            news.push(newNewsItem); // Adds the new item to the news array
            updateNews(); // Updates the displayed news
    
            document.getElementById('title').value = '';
            document.getElementById('content').value = '';
        } else {
            alert("Please fill in both fields."); // Alerts if fields are empty 
        }
    });

    document.getElementById('stop-button').addEventListener('click', () => {
        clearInterval(newsInterval); // Stops the interval
        console.log("News updates stopped.");
    });
});

let newsInterval = setInterval(() => {
    updateNews();
    console.log("News refreshed at:", new Date().toLocaleTimeString());
}, 5000); // Refreshes news every 5 seconds