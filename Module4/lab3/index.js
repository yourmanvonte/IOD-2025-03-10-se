function addCard(title, text) { // pass in title and text as parameters so this can be dynamic
    // clone the template
    const template =
        document.getElementById("card-template")
            .content.cloneNode(true);

    // populate the template
    template.querySelector('.card-title').innerText =
        title;
    template.querySelector('.card-text').innerText =
        text; // pass in title and text as arguments to the function

    // include the populated template into the page
    document.querySelector('#card-list')
        .appendChild(template);
    }

    const cardList = [{
        name: "bob",
        age: 23
    },
    {
        name: "alice",
        age: 39
    }];
    
    cardList.forEach(card => {
        addCard(`${card.name} - Age: ${card.age}`, `${card.name}, ${card.age}`); // now adds card dynamically
    });
    
    addCard("Dynamic", cardList.map(card => `${card.name}, Age: ${card.age}`).join("\n")); // also adds cards dynamically
    // map() is used to to transform the arrays into strings
    // join() is used to join the strings into one string and takes in \n (new line) to separate the strings

const artist = {
        name: "Van Gogh",
        portfolio:[
            {title: "portrait", url:
        "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"},
            {title: "sky", url:
        "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg"},
        ]
    };

const allArtists = [{
        name: "Picasso",
        portfolio: [
            {title: "The Blind Man's Meal", url:
                "https://sararedeghieri.wordpress.com/wp-content/uploads/2013/11/h2_50-188.jpg?w=640"},
            {title: "The Old Guitarist", url:
                "https://upload.wikimedia.org/wikipedia/en/b/bc/Old_guitarist_chicago.jpg"}
        ]
    },
    {
        name: "Leonardo da Vinci",
        portfolio: [
            {title: "The Last Supper", url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/1200px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg"},
            {title: "Mona Lisa", url:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"}
        ]
    },
    {
        name: "Salvador Dali",
        portfolio: [
            {title: "Christ of Saint John of the Cross", url:
                "https://upload.wikimedia.org/wikipedia/en/8/8c/Christ_of_Saint_John_of_the_Cross.jpg"},
            {title: "The Persistence of Memory", url:
                "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg"}
        ]
    }];

    // Function that displays all artists and their portfolios
    function displayArtists(artists) {
        artists.forEach(artist => {
            // Create artist card container
            const artistCard = document.createElement("div");
            artistCard.classList.add("artist-card");

            // Add artist name
            const artistName = document.createElement("h2");
            artistName.innerText = artist.name;
            artistCard.appendChild(artistName);

            // Portfolio container
            const portfolioContainer = document.createElement("div");
            portfolioContainer.classList.add("portfolio-container");

            // Loop through each portfolio item
            artist.portfolio.forEach(item => {

                const portfolioCard = document.createElement("div");
                portfolioCard.classList.add("portfolio-card");

                const title = document.createElement("h3");
                title.innerText = item.title;

                const image = document.createElement("img");
                image.src = item.url;
                image.alt = item.title;

                portfolioCard.appendChild(title);
                portfolioCard.appendChild(image);
                portfolioContainer.appendChild(portfolioCard);
            });

            // Append portfolio to artist card
            artistCard.appendChild(portfolioContainer);

            // Append artist card to the body
            document.body.appendChild(artistCard);
        });
    };

    displayArtists(allArtists); // Call the function to display all artists

    
        function createArtistProfile(artist) {
            // Create artist card container
            const artistCard = document.createElement("div");
            artistCard.classList.add("artist-card");
        
            // Add artist name
            const artistName = document.createElement("h2");
            artistName.innerText = artist.name;
            artistCard.appendChild(artistName);
        
            // Portfolio container
            const portfolioContainer = document.createElement("div");
            portfolioContainer.classList.add("portfolio-container");
            
            // Loop through portfolio items
            artist.portfolio.forEach(item => {
                const portfolioCard = document.createElement("div");
                portfolioCard.classList.add("portfolio-card");
        
                const title = document.createElement("h3");
                title.innerText = item.title;
        
                const image = document.createElement("img");
                image.src = item.url;
                image.alt = item.title;
        
                portfolioCard.appendChild(title);
                portfolioCard.appendChild(image);
                portfolioContainer.appendChild(portfolioCard);
            });
        
            // Append portfolio to artist card
            artistCard.appendChild(portfolioContainer);
        
            // Add to page
            document.body.appendChild(artistCard);
        }
    

        // Call the function with artist data
        createArtistProfile(artist);