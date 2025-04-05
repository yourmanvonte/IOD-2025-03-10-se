const book = {
    title: 'The Fallen King',
    description: 'A King who has fallen from his throne, now seeks to start a new life.',
    author: 'Roscoe Bojangles',
    pages: 350
}

console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book.pages);

// changing the description of the original book object
book.description = 'A king who now needs to learn to live as a man.';
console.log(book.description);

// an array of 5 book objects
const allBooks = [
    {
    title: 'Rising Above',
    description: 'A journe of how to rise above the challenges of life.',
    auhtor: 'John Doe',
    pages: 260
    },

    {
      title: "Heaven's Warlord",
      description: 'A story of a warrior who fights for the heavens.',
      author: 'Jane Buckheimer',
      pages: 380
    },
    {
        title: 'In the Depths',
        description: 'A story of someone who has fallen deep into the depths of their mind',
        author: 'Billy Bob',
        pages: 437
    },
    {
        title: 'The Phoenix Soldier',
        description: 'A Naby soldier returns from the dead to fight for his country.',
        author: 'Jill Smith',
        pages: 475
    },
    {
        title: 'What Lies Beneath',
        description: 'A girl falls for a guy who has a dark secret.',
        author: 'Michael Crabtree',
        pages: 437
    }];

    // loop through the array of book objects and print out the title of each book

    for (let i = 0; i < allBooks.length; i++) {
        console.log(allBooks[i].title);
    };
