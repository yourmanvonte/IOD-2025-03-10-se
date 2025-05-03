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
    });
}

updateNews(news);

setInterval(updateNews, 5000); // This will keep the news updated every 5 seconds