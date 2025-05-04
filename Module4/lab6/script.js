document.addEventListener("DOMContentLoaded", () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        const posts = data.slice(0, 10); // Limit to 10 posts
        const container = document.querySelector(".row");

        posts.forEach(post => {
          const card = document.createElement("div");
          card.className = "col";

          card.innerHTML = `
            <div class="card h-100" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.body}</p>
              </div>
            </div>
          `;
          
          container.appendChild(card);
        });
      })
      .catch(error => console.error("Error fetching posts:", error));
  });