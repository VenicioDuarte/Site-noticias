document.addEventListener('DOMContentLoaded', () => {
    const newsList = document.getElementById('news-list');

    const newsData = [
        {
            title: 'Notícia 1',
            summary: 'Resumo da notícia 1.',
            content: 'Conteúdo completo da notícia 1.',
        },
        {
            title: 'Notícia 2',
            summary: 'Resumo da notícia 2.',
            content: 'Conteúdo completo da notícia 2.',
        },
        {
            title: 'Notícia 3',
            summary: 'Resumo da notícia 3.',
            content: 'Conteúdo completo da notícia 3.',
        },
    ];

    newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        const newsTitle = document.createElement('h3');
        newsTitle.textContent = news.title;

        const newsSummary = document.createElement('p');
        newsSummary.textContent = news.summary;

        const readMoreButton = document.createElement('button');
        readMoreButton.textContent = 'Leia Mais';
        readMoreButton.addEventListener('click', () => {
            alert(news.content);
        });

        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsSummary);
        newsItem.appendChild(readMoreButton);

        newsList.appendChild(newsItem);
    });
});
