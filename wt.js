const adviceButton = document.getElementById("getAdviceButton");
const adviceText = document.getElementById("adviceText");

adviceButton.addEventListener("click", async () => {
  try {
    const accessId = "Mauii";
    const password = "SwissSlopes$721";

    const headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(`${accessId}:${password}`));

    const response = await fetch("https://api.adviceslip.com/advice", {
      headers,
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
});

const axios = require("axios");

// API credentials
const accessID = "Mauii";
const password = "SwissSlopes$721";
const apiURL = "https://www.weathertech.com/consumeapi/";

// Fetch data from the API
axios
  .get(apiURL, {
    auth: {
      username: accessID,
      password: password,
    },
  })
  .then((response) => {
    const apiData = response.data;
    // Assuming apiData is an array of product objects

    apiData.forEach((product) => {
      const title = product.title;
      const description = product.description;
      const price = product.price;
      // ... other attributes ...

      // Create an object matching Shopify's product structure
      const shopifyProduct = {
        product: {
          title: title,
          body_html: description,
          variants: [
            {
              price: price,
              // ... other variant attributes ...
            },
          ],
          // ... other product attributes ...
        },
      };

      // Make API request to create product on Shopify
      const shopifyCreateEndpoint =
        "https://your-shop-name.myshopify.com/admin/api/2023-07/products.json";
      axios
        .post(shopifyCreateEndpoint, shopifyProduct, {
          auth: {
            username: "Mauii",
            password: "SwissSlopes$721",
          },
        })
        .then((shopifyResponse) => {
          console.log(`Product '${title}' created on Shopify successfully.`);
        })
        .catch((error) => {
          console.error(
            `Error creating product '${title}' on Shopify:`,
            error.response.data
          );
        });
    });
  })
  .catch((error) => {
    console.error("Error fetching data from API:", error);
  });

console.log(apiData);
