    
    async function fetchProducts() {
      const res = await fetch("api/products");
      const data = await res.json();
      allProducts = data;
      populateCategoryFilter(data);
      renderProducts(data);
    };
    
    const productGrid = document.getElementById("productGrid");
    const categoryFilter = document.getElementById("categoryFilter");
    const searchInput = document.getElementById("searchInput");
    const sortSelect = document.getElementById("sortSelect");

    let allProducts = [];

    const categoryIcons = {
      "electronics": "fa-solid fa-tv",
      "jewelery": "fa-solid fa-gem",
      "men's clothing": "fa-solid fa-mars",
      "women's clothing": "fa-solid fa-venus"
    };

    function populateCategoryFilter(products) {
      const categories = [...new Set(products.map(p => p.category))];
      categories.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat;
        option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        categoryFilter.appendChild(option);
      });
    };

    function renderProducts(products) {
      productGrid.innerHTML = '';
      products.forEach(product => {
        const icon = categoryIcons[product.category] || "fa-solid fa-tag";
        const card = `
          <div class="col-md-4">
            <div class="card product-card h-100">
              <img src="${product.image}" class="card-img-top product-img" alt="${product.title}">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">${product.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">$${product.price.toFixed(2)}</h6>
                <p class="card-text">${product.description.substring(0, 100)}...</p>
                <div class="mt-auto text-end text-primary">
                  <i class="${icon}" title="${product.category}"></i>
                </div>
              </div>
            </div>
          </div>
        `;
        productGrid.insertAdjacentHTML('beforeend', card);
      });
    };

    function applyFilters() {
      let filtered = [...allProducts];
      const category = categoryFilter.value;
      const search = searchInput.value.toLowerCase();
      const sortBy = sortSelect.value;

      if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
      };

      if (search) {
        filtered = filtered.filter(p =>
          p.title.toLowerCase().includes(search) ||
          p.description.toLowerCase().includes(search)
        );
      };

      switch (sortBy) {
        case "price-asc":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "title-asc":
          filtered.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "title-desc":
          filtered.sort((a, b) => b.title.localeCompare(a.title));
          break;
      };

      renderProducts(filtered);
    };

    categoryFilter.addEventListener('change', applyFilters);
    searchInput.addEventListener('input', applyFilters);
    sortSelect.addEventListener('change', applyFilters);

    fetchProducts();