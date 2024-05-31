let products = [
    {id: 1, name: 'Product A', price: 1000, points: 10},
    {id: 2, name: 'Product B', price: 2000, points: 25},
    {id: 3, name: 'Product C', price: 5000, points: 50},
    {id: 4, name: 'Product D', price: 8000, points: 100},
];
let availablePoints = 150;
  
let purchasedProducts = [];
let totalSpent = 0;

function sortProducts() {
    return products.sort((a, b) => b.points - a.points);
}

function getMaxPointsProduct() {
    const sortedProducts = sortProducts();
    return sortedProducts[0];
}

function calculateRemainingPoints() {
    const maxPointsProduct = getMaxPointsProduct();
    return availablePoints - maxPointsProduct.points;
}

function redeemProducts() {
    const sortedProducts = sortProducts();
    let buyedProducts = [], totalAmounts = 0;

    for (let i = 0; i < sortedProducts.length; i++) {
        if (availablePoints >= sortedProducts[i].points) {
            buyedProducts.push(sortedProducts[i].name);
            totalAmounts += sortedProducts[i].price;
            availablePoints -= sortedProducts[i].points;
        } else {
            break;
        }
    }

    return `${buyedProducts} dan ${totalAmounts}`;
}

console.log(`Produk dengan point tertinggi : ${getMaxPointsProduct().name}`);
console.log(`Sisa point setelah membeli produk poin tertinggi : ${calculateRemainingPoints()}`);
console.log(`Daftar produk yang dibeli dan total harga : ${redeemProducts()}`);