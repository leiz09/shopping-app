fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((data) => {
        const productsContainer = document.getElementById('products');
        data.forEach((product) => {
            const productElement = document.createElement("div");
            productElement.classList.add('card','card-content',);

            const imageElement = document.createElement("img");
            imageElement.classList.add("img");
            imageElement.src = product.images[0];
            imageElement.alt = product.title;

            const nameElement = document.createElement("h3");
            nameElement.classList.add("name", "top-section");
            nameElement.textContent = product.title;

            const descriptionElement = document.createElement("p");
            descriptionElement.classList.add("card-description");
            descriptionElement.textContent = product.description;

            const priceElement = document.createElement("span");
            priceElement.classList.add("price","bottom-section");
            priceElement.textContent = `$${product.price}`;

            const buttonElement = document.createElement("button");
            buttonElement.classList.add("button","buttons","bottom-section");
            buttonElement.textContent = "Add";

            const buttonElement2 = document.createElement("button");
            buttonElement2.classList.add("button","buttons","bottom-section");
            buttonElement2.textContent = "Add";




            productElement.appendChild(imageElement);
            productElement.appendChild(nameElement);
            productElement.appendChild(descriptionElement);
            productElement.appendChild(priceElement);
            productElement.appendChild(buttonElement);

            productsContainer.appendChild(productElement);
        });
    })
    .catch((error) => {
        console.error("Error fetching products:", error);
    });

        fetch("https://api.escuelajs.co/api/v1/categories")
    .then((response) => response.json())
    .then((data) => {
        const categoriesContainer = document.getElementById("categories");
        data.forEach((category) => {
            const categoryElement = document.createElement("li");
            categoryElement.classList.add("category");

            const linkElement = document.createElement("a");
            linkElement.href = "#";
            linkElement.classList.add("category-link");
            linkElement.textContent = category.name;

            categoryElement.appendChild(linkElement);
            categoriesContainer.appendChild(categoryElement);
        });
    })
    .catch((error) => {
        console.error("Error fetching categories:", error);
    });

