const Products = [
    {
        name: "Produkt 1",
        price: 10.5
    },
    {
        name: "Produkt 2",
        price: 4
    },
    {
        name: "Produkt 3",
        price: 7.9
    }
];
console.log('guguuuuuseli');
loadOverview2();
async function loadOverview2() {
    console.log('guguuuuus');
    const response = await fetch("/api/persons");
    const products = Products;
    const overview = document.getElementById("overview");
    for (const product of Products){
        let productCard = document.createElement("card");
        let title = document.createElement("h1");
        let price = document.createElement("p");
        productCard.className = "card";
        title.innerHTML = product.name;
        price.innerHTML = product.price.toString();
        productCard.appendChild(title);
        productCard.appendChild(price);
        overview.appendChild(productCard);
    }
}
const loadOverview1 = loadOverview2;
export { loadOverview1 as loadOverview };
