window.addEventListener("DOMContentLoaded", init);

function init() {
  renderProductList();
}

async function renderProductList() {
  const API_URL = "http://localhost:3000/products";

  const res = await fetch(API_URL);

  const productList = await res.json();

  console.log(productList)

  const tbody = document.getElementById('tbody')
  // B4: Inner HTML
  tbody.innerHTML = `${productList
    .map((product) => {
      return ` <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
                <div class="flex items-center">
                    <input id="checkbox-table-2" type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="checkbox-table-2" class="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${product.title}
            </th>
  
            <td class="px-6 py-4">
            ${product.category}
            </td>
            <td class="px-6 py-4">
            <img src="${product.image}" width="50px"/>
            </td>
            <td class="px-6 py-4">
            ${product.price}$
            </td>
            <td class="px-6 py-4">
                <a href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline px-2">Edit</a>
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
            </td>
        </tr>`;
    })
    .join("")}`;

}