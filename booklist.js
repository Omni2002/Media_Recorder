// Books //
// Book Class
class Book {
    constructor(title, author, genre, rating) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.rating = rating;
    }
}
// Books UI Class: handles UI changes (but not storage)
class BooksUI {
    // displays the table of books upon launch
    static display() {
        const books = BooksStore.getBooks();
        
        books.forEach((book) => BooksUI.addBookToTable(book));
    }
    // adds a book to the table (doesn't add to local storage)
    static addBookToTable(book) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.rating}</td>
            <td><a href="#" class="delete">x</a></td>
        `;
        const booktableBody = document.querySelector('#book_table > tbody');
        booktableBody.appendChild(row);
    }
    // removes a book from the table (doesn't remove from local storage)
    static deleteBookFromTable(el) {
        if (el.classList.contains('delete')) {      // checks if we clicked on the <a> tag that is the delete button
            el.parentElement.parentElement.remove(); // el is the <a> tag, so parentElement's parentElement is the table row that we want to remove.
            // show success message
            BooksUI.showAlert('Book Removed', 'success')        
        }
    }
    // shows success or danger alerts
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        if (div.classList.contains('danger')) {
            div.style.display = 'block';
            div.style.backgroundColor = 'rgb(252, 86, 86)';
        } else if (div.classList.contains('success')) {
            div.style.display = 'block';
            div.style.backgroundColor = 'rgb(63, 161, 63)';
        }
        div.appendChild(document.createTextNode(message));
        const parent = document.querySelector('body');
        const sibling = document.querySelector('#search_bar');
        parent.insertBefore(div, sibling);
        //vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 2000);
    }
    // clear input fields
    static clearBookFields() {
        const inputList = document.querySelectorAll('.form_container input');
        inputList.forEach((input) => {
            input.value = '';
        });
    }
}

// Books Storage Class: handles local storage changes
class BooksStore {
    // returns array of all book objects
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    // adds a book object into the local storage
    static addBook(book) {
        const books = BooksStore.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static deleteBook(title) {
        const books = BooksStore.getBooks();

        books.forEach((book, index) => {
            if (book.title == title) {
                books.splice(index, 1);
            }
        });
        
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Podcasts //
// Podcast Class
class Podcast {
    constructor(title, podcaster, genre, rating) {
        this.title = title;
        this.podcaster = podcaster;
        this.genre = genre;
        this.rating = rating;
    }
}
// Podcasts UI Class: handles UI tasks
class PodcastsUI {
    // displays the table of podcasts upon launch
    static display() {
        const podcasts = PodcastsStore.getPodcasts();
        
        podcasts.forEach((podcast) => PodcastsUI.addPodcastToTable(podcast));
    }
    // adds a podcast to the table (doesn't add to local storage)
    static addPodcastToTable(podcast) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${podcast.title}</td>
            <td>${podcast.podcaster}</td>
            <td>${podcast.genre}</td>
            <td>${podcast.rating}</td>
            <td><a href="#" class="delete">x</a></td>
        `;
        const podcasttableBody = document.querySelector('#podcast_table > tbody');
        podcasttableBody.appendChild(row);
    }
    // removes a podcast from the table (doesn't remove from local storage)
    static deletePodcastFromTable(el) {
        if (el.classList.contains('delete')) {      // checks if we clicked on the <a> tag that is the delete button
            el.parentElement.parentElement.remove(); // el is the <a> tag, so parentElement's parentElement is the table row that we want to remove.
            // show success message
            PodcastsUI.showAlert('Podcast Removed', 'success')
        }
    }
    // shows success or danger alerts
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        if (div.classList.contains('danger')) {
            div.style.display = 'block';
            div.style.backgroundColor = 'rgb(252, 86, 86)';
        } else if (div.classList.contains('success')) {
            div.style.display = 'block';
            div.style.backgroundColor = 'rgb(63, 161, 63)';
        }
        div.appendChild(document.createTextNode(message));
        const parent = document.querySelector('body');
        const sibling = document.querySelector('#search_bar');
        parent.insertBefore(div, sibling);
        //vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 2000);
    }
    // clear input fields
    static clearPodcastFields() {
        const inputList = document.querySelectorAll('.form_container input');
        inputList.forEach((input) => {
            input.value = '';
        });
    }
}
// Podcasts Storage Class: handles local storage
class PodcastsStore {
    // returns array of all podcast objects
    static getPodcasts() {
        let podcasts;
        if (localStorage.getItem('podcasts') === null) {
            podcasts = [];
        } else {
            podcasts = JSON.parse(localStorage.getItem('podcasts'));
        }
        return podcasts;
    }
    // adds a podcast object into the local storage
    static addPodcast(podcast) {
        const podcasts = PodcastsStore.getPodcasts();
        podcasts.push(podcast);
        localStorage.setItem('podcasts', JSON.stringify(podcasts));
    }
    static deletePodcast(title) {
        const podcasts = PodcastsStore.getPodcasts();

        podcasts.forEach((podcast, index) => {
            if (podcast.title == title) {
                podcasts.splice(index, 1);
            }
        });
        
        localStorage.setItem('podcasts', JSON.stringify(podcasts));
    }
}

// Videos //
// Video Class
class Video {
    constructor(title, content_creator, genre, rating) {
        this.title = title;
        this.content_creator = content_creator;
        this.genre = genre;
        this.rating = rating;
    }
}
// Videos UI Class: handles UI tasks
class VideosUI {
    // displays the table of videos upon launch
    static display() {
        const videos = VideosStore.getVideos();
        
        videos.forEach((video) => VideosUI.addVideoToTable(video));
    }
    // adds a video to the table (doesn't add to local storage)
    static addVideoToTable(video) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${video.title}</td>
            <td>${video.content_creator}</td>
            <td>${video.genre}</td>
            <td>${video.rating}</td>
            <td><a href="#" class="delete">x</a></td>
        `;
        const videotableBody = document.querySelector('#video_table > tbody');
        videotableBody.appendChild(row);
    }
    // removes a video from the table (doesn't remove from local storage)
    static deleteVideoFromTable(el) {
        if (el.classList.contains('delete')) {      // checks if we clicked on the <a> tag that is the delete button
            el.parentElement.parentElement.remove(); // el is the <a> tag, so parentElement's parentElement is the table row that we want to remove.
            // show success message
            VideosUI.showAlert('Podcast Removed', 'success')
        }
    }
    // shows success or danger alerts
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        if (div.classList.contains('danger')) {
            div.style.display = 'block';
            div.style.backgroundColor = 'rgb(252, 86, 86)';
        } else if (div.classList.contains('success')) {
            div.style.display = 'block';
            div.style.backgroundColor = 'rgb(63, 161, 63)';
        }
        div.appendChild(document.createTextNode(message));
        const parent = document.querySelector('body');
        const sibling = document.querySelector('#search_bar');
        parent.insertBefore(div, sibling);
        //vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 2000);
    }
    // clear input fields
    static clearVideoFields() {
        const inputList = document.querySelectorAll('.form_container input');
        inputList.forEach((input) => {
            input.value = '';
        });
    }
}
// Videos Storage Class: handles local storage
class VideosStore {
    // returns array of all video objects
    static getVideos() {
        let videos;
        if (localStorage.getItem('videos') === null) {
            videos = [];
        } else {
            videos = JSON.parse(localStorage.getItem('videos'));
        }
        return videos;
    }
    // adds a video object into the local storage
    static addVideo(video) {
        const videos = VideosStore.getVideos();
        videos.push(video);
        localStorage.setItem('videos', JSON.stringify(videos));
    }
    static deleteVideo(title) {
        const videos = VideosStore.getVideos();

        videos.forEach((video, index) => {
            if (video.title == title) {
                videos.splice(index, 1);
            }
        });
        
        localStorage.setItem('videos', JSON.stringify(videos));
    }
}

// Articles //
// Article Class
class Article {
    constructor(title, author, genre, rating) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.rating = rating;
    }
}
// Articles UI Class: handles UI tasks
class ArticlesUI {
    // displays the table of articles upon launch
    static display() {
        const articles = ArticlesStore.getArticles();
        
        articles.forEach((article) => ArticlesUI.addArticleToTable(article));
    }
    // adds an article to the table (doesn't add to local storage)
    static addArticleToTable(article) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${article.title}</td>
            <td>${article.author}</td>
            <td>${article.genre}</td>
            <td>${article.rating}</td>
            <td><a href="#" class="delete">x</a></td>
        `;
        const articletableBody = document.querySelector('#article_table > tbody');
        articletableBody.appendChild(row);
    }
    // removes an article from the table (doesn't remove from local storage)
    static deleteArticleFromTable(el) {
        if (el.classList.contains('delete')) {      // checks if we clicked on the <a> tag that is the delete button
            el.parentElement.parentElement.remove(); // el is the <a> tag, so parentElement's parentElement is the table row that we want to remove.
            // show success message
            ArticlesUI.showAlert('Podcast Removed', 'success')
        }
    }
    // shows success or danger alerts
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        if (div.classList.contains('danger')) {
            div.style.display = 'block';
            div.style.backgroundColor = 'rgb(252, 86, 86)';
        } else if (div.classList.contains('success')) {
            div.style.display = 'block';
            div.style.backgroundColor = 'rgb(63, 161, 63)';
        }
        div.appendChild(document.createTextNode(message));
        const parent = document.querySelector('body');
        const sibling = document.querySelector('#search_bar');
        parent.insertBefore(div, sibling);
        //vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 2000);
    }
    // clear input fields
    static clearArticleFields() {
        const inputList = document.querySelectorAll('.form_container input');
        inputList.forEach((input) => {
            input.value = '';
        });
    }
}
// Articles Storage Class: handles local storage
class ArticlesStore {
    // returns array of all article objects
    static getArticles() {
        let articles;
        if (localStorage.getItem('articles') === null) {
            articles = [];
        } else {
            articles = JSON.parse(localStorage.getItem('articles'));
        }
        return articles;
    }
    // adds an article object into the local storage
    static addArticle(article) {
        const articles = ArticlesStore.getArticles();
        articles.push(article);
        localStorage.setItem('articles', JSON.stringify(articles));
    }
    static deleteArticle(title) {
        const articles = ArticlesStore.getArticles();

        articles.forEach((article, index) => {
            if (article.title == title) {
                articles.splice(index, 1);
            }
        });
        
        localStorage.setItem('articles', JSON.stringify(articles));
    }
}

// Display all tables when the page loads
document.addEventListener('DOMContentLoaded', BooksUI.display);
document.addEventListener('DOMContentLoaded', PodcastsUI.display);
document.addEventListener('DOMContentLoaded', VideosUI.display);
document.addEventListener('DOMContentLoaded', ArticlesUI.display);

// Media Selection Listener
mediaType = document.getElementById('media_select');
mediaType.addEventListener('change', changeMedia);
function changeMedia() {
    switch (mediaType.value) {
        case 'book':
            document.getElementById('books_container').style.display = 'block';
            document.getElementById('podcasts_container').style.display = 'none';
            document.getElementById('videos_container').style.display = 'none';
            document.getElementById('articles_container').style.display = 'none';
            break;
        case 'podcast':
            document.getElementById('books_container').style.display = 'none';
            document.getElementById('podcasts_container').style.display = 'block';
            document.getElementById('videos_container').style.display = 'none';
            document.getElementById('articles_container').style.display = 'none';
            break;
        case 'video':
            document.getElementById('books_container').style.display = 'none';
            document.getElementById('podcasts_container').style.display = 'none';
            document.getElementById('videos_container').style.display = 'block';
            document.getElementById('articles_container').style.display = 'none';
            break;
        case 'article':
            document.getElementById('books_container').style.display = 'none';
            document.getElementById('podcasts_container').style.display = 'none';
            document.getElementById('videos_container').style.display = 'none';
            document.getElementById('articles_container').style.display = 'block';
            break;
    }
}

// Event: Add a Book //
document.querySelector('#books_container button').addEventListener('click', (e) => {
    e.preventDefault();
    // get form values
    const title = document.querySelector('#books_container input[name="title"]').value;
    const author = document.querySelector('#books_container input[name="author"]').value;
    const genre = document.querySelector('#books_container input[name="genre"]').value;
    const rating = document.querySelector('#books_container input[name="rating"]').value;
    // validate
    if (title === '' || author === '' || genre === '') {
        BooksUI.showAlert('Please fill in all fields', 'danger');
    } 
    else if (rating > 5 || rating < 0) {
        BooksUI.showAlert('Ratings must be between 0 and 5', 'danger');
    }
    else {
        // instantiate book
        const book = new Book(title, author, genre, rating);
        // add book to table
        BooksUI.addBookToTable(book);
        // add book to local storage
        BooksStore.addBook(book);
        // show success message
        BooksUI.showAlert('Book Added', 'success');
        // clear input fields
        BooksUI.clearBookFields();
    }
});
// Event: Remove a Book //
document.querySelector('#book_table tbody').addEventListener('click', (e) => {
    e.preventDefault();
    // removes book from table
    BooksUI.deleteBookFromTable(e.target);
    // removes book from local storage
    BooksStore.deleteBook(e.target.parentElement.parentElement.firstElementChild.textContent);
});
// Event: Add a Podcast //
document.querySelector('#podcasts_container button').addEventListener('click', (e) => {
    e.preventDefault();
    // get form values
    const title = document.querySelector('#podcasts_container input[name="title"]').value;
    const podcaster = document.querySelector('#podcasts_container input[name="podcaster"]').value;
    const genre = document.querySelector('#podcasts_container input[name="genre"]').value;
    const rating = document.querySelector('#podcasts_container input[name="rating"]').value;
    // validate
    if (title === '' || podcaster === '' || genre === '') {
        PodcastsUI.showAlert('Please fill in all fields', 'danger');
    } 
    else if (rating > 5 || rating < 0) {
        PodcastsUI.showAlert('Ratings must be between 0 and 5', 'danger');
    }
    else {
        // instantiate podcast
        const podcast = new Podcast(title, podcaster, genre, rating);
        // add podcast to table
        PodcastsUI.addPodcastToTable(podcast);
        // add podcast to local storage
        PodcastsStore.addPodcast(podcast);
        // show success message
        PodcastsUI.showAlert('Podcast Added', 'success');
        // clear input fields
        PodcastsUI.clearPodcastFields();
    }
});
// Event: Remove a Podcast //
document.querySelector('#podcast_table tbody').addEventListener('click', (e) => {
    e.preventDefault();
    // removes podcast from table
    PodcastsUI.deletePodcastFromTable(e.target);
    // removes podcast from local storage
    PodcastsStore.deletePodcast(e.target.parentElement.parentElement.firstElementChild.textContent);
});
// Event: Add a Video //
document.querySelector('#videos_container button').addEventListener('click', (e) => {
    e.preventDefault();
    // get form values
    const title = document.querySelector('#videos_container input[name="title"]').value;
    const content_creator = document.querySelector('#videos_container input[name="content_creator"]').value;
    const genre = document.querySelector('#videos_container input[name="genre"]').value;
    const rating = document.querySelector('#videos_container input[name="rating"]').value;
    // validate
    if (title === '' || content_creator === '' || genre === '') {
        VideosUI.showAlert('Please fill in all fields', 'danger');
    }
    else if (rating > 5 || rating < 0) {
        VideosUI.showAlert('Ratings must be between 0 and 5', 'danger');
    }
    else {
        // instantiate video
        const video = new Video(title, content_creator, genre, rating);
        // add video to table
        VideosUI.addVideoToTable(video);
        // add video to local storage
        VideosStore.addVideo(video);
        // show success message
        VideosUI.showAlert('Video Added', 'success');
        // clear input fields
        VideosUI.clearVideoFields();
    }
});
// Event: Delete a Video //
document.querySelector('#video_table tbody').addEventListener('click', (e) => {
    e.preventDefault();
    // removes video from table
    VideosUI.deleteVideoFromTable(e.target);
    // removes video from local storage
    VideosStore.deleteVideo(e.target.parentElement.parentElement.firstElementChild.textContent);
});
// Event: Add an Article //
document.querySelector('#articles_container button').addEventListener('click', (e) => {
    e.preventDefault();
    // get form values
    const title = document.querySelector('#articles_container input[name="title"]').value;
    const author = document.querySelector('#articles_container input[name="author"]').value;
    const genre = document.querySelector('#articles_container input[name="genre"]').value;
    const rating = document.querySelector('#articles_container input[name="rating"]').value;
    // validate
    if (title === '' || author === '' || genre === '') {
        ArticlesUI.showAlert('Please fill in all fields', 'danger');
    }
    else if (rating > 5 || rating < 0) {
        ArticlesUI.showAlert('Ratings must be between 0 and 5', 'danger');
    }
    else {
        // instantiate article
        const article = new Article(title, author, genre, rating);
        // add article to table
        ArticlesUI.addArticleToTable(article);
        // add article to local storage
        ArticlesStore.addArticle(article);
        // show success message
        ArticlesUI.showAlert('Article Added', 'success');
        // clear input fields
        ArticlesUI.clearArticleFields();
    }
});
// Event: Delete an Article //
document.querySelector('#article_table tbody').addEventListener('click', (e) => {
    e.preventDefault();
    // removes article from table
    ArticlesUI.deleteArticleFromTable(e.target);
    // removes article from local storage
    ArticlesStore.deleteArticle(e.target.parentElement.parentElement.firstElementChild.textContent);
});

// Table Selector //
var displayType = document.getElementById('display_show');
displayType.addEventListener('change', changeDisplay);
function changeDisplay() {
    switch(displayType.value) {
        case 'books':
            document.getElementById('book_table').style.display = 'block';
            document.getElementById('podcast_table').style.display = 'none';
            document.getElementById('video_table').style.display = 'none';
            document.getElementById('article_table').style.display = 'none';
            break;
        case 'podcasts':
            document.getElementById('book_table').style.display = 'none';
            document.getElementById('podcast_table').style.display = 'block';
            document.getElementById('video_table').style.display = 'none';
            document.getElementById('article_table').style.display = 'none';
            break;
        case 'videos':
            document.getElementById('book_table').style.display = 'none';
            document.getElementById('podcast_table').style.display = 'none';
            document.getElementById('video_table').style.display = 'block';
            document.getElementById('article_table').style.display = 'none';
            break;
        case 'articles':
            document.getElementById('book_table').style.display = 'none';
            document.getElementById('podcast_table').style.display = 'none';
            document.getElementById('video_table').style.display = 'none';
            document.getElementById('article_table').style.display = 'block';
            break;
    }
}

// Search Filter
searchBar = document.querySelector('#search_bar input');
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    bookTable = document.querySelectorAll('#book_table tbody tr');
    podcastTable = document.querySelectorAll('#podcast_table tbody tr');
    videoTable = document.querySelectorAll('#video_table tbody tr');
    articleTable = document.querySelectorAll('#article_table tbody tr');

    switch(displayType.value) {
        case 'books':
            bookTable.forEach(book => {
                if (!(book.textContent.toLowerCase().includes(searchString))) {
                    book.style.visibility = 'hidden';
                } else {
                    book.style.visibility = 'visible';
                }
            })
            break
        case 'podcasts':
            podcastTable.forEach(podcast => {
                if (!(podcast.textContent.toLowerCase().includes(searchString))) {
                    podcast.style.visibility = 'hidden';
                } else {
                    podcast.style.visibility = 'visible';
                }
            })
            break
        case 'videos':
            videoTable.forEach(video => {
                if (!(video.textContent.toLowerCase().includes(searchString))) {
                    video.style.visibility = 'hidden';
                } else {
                    video.style.visibility = 'visible';
                }
            })
            break
        case 'articles':
            articleTable.forEach(article => {
                if (!(article.textContent.toLowerCase().includes(searchString))) {
                    article.style.visibility = 'hidden';
                } else {
                    article.style.visibility = 'visible';
                }
            })
            break
    };
});