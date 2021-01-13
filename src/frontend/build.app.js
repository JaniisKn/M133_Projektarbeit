const Products = [
    {
        name: "Appenzeller Käse",
        price: "10.50",
        img: "appenzeller.jpg"
    },
    {
        name: "Vanille Glace",
        price: "4.00",
        img: "vanille_glace.jpg"
    },
    {
        name: "Kalbsbratwürste",
        price: "7.90",
        img: "kalbsbratwuerste.jpg"
    },
    {
        name: "Nektarinen",
        price: "2.60",
        img: "nektarinen.jpg"
    },
    {
        name: "Olivenöl",
        price: "3.10",
        img: "olivenoel.jpg"
    },
    {
        name: "Senf",
        price: "4.60",
        img: "senf.jpg"
    },
    {
        name: "Krustenkranz",
        price: "3.30",
        img: "krustenkranz.jpg"
    },
    {
        name: "Tomaten",
        price: "2.10",
        img: "tomaten.jpg"
    }
];
loadOverview2();
async function loadOverview2() {
    const response = await fetch("/api/persons");
    const products = Products;
    const overview = document.getElementById("overview");
    for (const product of Products){
        let productCard = document.createElement("card");
        let title = document.createElement("h5");
        let price = document.createElement("p");
        let picture = document.createElement("img");
        productCard.className = "card";
        title.innerHTML = product.name;
        price.innerHTML = product.price + '.-';
        picture.src = `./media/${product.img}`;
        picture.className = "product-picture-overview";
        productCard.appendChild(title);
        productCard.appendChild(picture);
        productCard.appendChild(price);
        overview.appendChild(productCard);
    }
}
const loadOverview1 = loadOverview2;
export { loadOverview1 as loadOverview };
