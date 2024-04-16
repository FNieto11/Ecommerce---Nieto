const products = [
    {
        id: "brownieFerrero",
        name: "Brownie Ferrero",
        description: "Base de brownie, dulce de leche, Nutella y ferreros",
        stock: 3,
        price: "$8.000",
        category: "tortas",
        image: "/img/tortas/brownieFerrero.jpeg"
    },
    {
        id: "tiramisu",
        name: "Tiramisú",
        description: "Bizcocho humedecido con café, suave crema de mascarpone",
        stock: 3,
        price: "$8.000",
        category: "tortas",
        image: "/img/tortas/tiramisu.jpeg"
    },
    {
        id: "redVelvet",
        name: "Red Velvet",
        description: "Bizcochuelo de chocolate con crema de queso",
        stock: 3,
        price: "$10.000",
        category: "tortas",
        image: "/img/tortas/redVelvet.jpeg"
    },
    {
        id: "lemonPie",
        name: "Lemon Pie",
        description: "Una base de masa sablé, con curd de limón y merengue",
        stock: 3,
        price: "$7.600",
        category: "tortas",
        image: "/img/tortas/lemonPie.jpeg"
    },
    {
        id: "tortaOreo",
        name: "Torta Oreo",
        description: "Capas de galletitas oreo con crema y dulce de leche",
        stock: 3,
        price: "$8.600",
        category: "tortas",
        image: "/img/tortas/tortaOreo.jpeg"
    },
    {
        id: "chocotorta",
        name: "Chocotorta",
        description: "Galletitas de chocolate con una suave crema de dulce de leche y queso crema",
        stock: 3,
        price: "$8.000",
        category: "tortas",
        image: "/img/tortas/chocotorta.jpeg"
    },
    {
        id: "keyLimePie",
        name: "Key Lime Pie",
        description: "Base de masa sable con una suave crema de lima y crema chantilli",
        stock: 3,
        price: "$7.800",
        category: "tortas",
        image: "/img/tortas/keyLimePie.jpeg"
    },
    {
        id: "cheesecakeNewYork",
        name: "Cheesecake New York",
        description: "Base de galletitas, crema de queso con un toque cítrico, salsa de frutos rojos y fruta fresca",
        stock: 3,
        price: "$10.000",
        category: "tortas",
        image: "/img/tortas/cheesecake.jpeg"
    },
    {
        id: "cheesecakeDulcedeLeche",
        name: "Cheesecake Dulce de Leche",
        description: "Base de galletitas de chocolate, crema de queso con dulce de leche y salsa de dulce de leche",
        stock: 3,
        price: "$10.000",
        category: "tortas",
        image: "/img/tortas/cheesecakeDL.jpg"
    },
    {
        id: "cheesecakeChocolate",
        name: "Cheesecake Chocolate",
        description: "Base de galletitas, crema suave de queso y chocolate blanco, con frambuesas y leche condensada",
        stock: 3,
        price: "$10.000",
        category: "tortas",
        image: "/img/tortas/cheesecakeChoco.jpg"
    },
    {
        id: "tresLeches",
        name: "Tres Leches",
        description: "Bizcocho de vainilla humedecido en tres leches cubierto de merengue italiano",
        stock: 3,
        price: "$6.000",
        category: "tortas",
        image: "/img/tortas/tresLeches.jpg"
    },
    {
        id: "tortaBaileys",
        name: "Torta Baileys",
        description: "Bizcochuelo de chocolate, mousse de licor Baileys",
        stock: 3,
        price: "$9.200",
        category: "tortas",
        image: "/img/tortas/mousseBaileys.jpg"
    },
    {
        id: "macaronsChocolate",
        name: "Macarons de Chocolate",
        description: "Merengue de almendras con cacao rellenos de ganache de chocolate",
        stock: 3,
        price: "$700",
        category: "macarons",
        image: "/img/macarons/macaronChocolate.jpg"
    },
    {
        id: "macaronsDulcedeLeche",
        name: "Macarons de Dulce de Leche",
        description: "Merengue de nuez relleno de dulce de leche",
        stock: 3,
        price: "$700",
        category: "macarons",
        image: "/img/macarons/macaronDL.jpg"
    },
    {
        id: "macaronsLimon",
        name: "Macarons de Limón",
        description: "Merengue de almendras relleno de curd de limón",
        stock: 3,
        price: "$700",
        category: "macarons",
        image: "/img/macarons/macaronLimon.jpg"
    },
    {
        id: "macaronsFrambuesa",
        name: "Macarons de Frambuesa",
        description: "Merengue de almendras relleno de crema de frambuesa",
        stock: 3,
        price: "$700",
        category: "macarons",
        image: "/img/macarons/macaronFrambuesa.jpg"
    },
    {
        id: "macaronsMaracuyá",
        name: "Macarons de Maracuyá",
        description: "Merengue de almendras relleno de curd de maracuyá",
        stock: 3,
        price: "$700",
        category: "macarons",
        image: "/img/macarons/macaronMaracuya.jpg"
    },
    {
        id: "macaronsPistacho",
        name: "Macarons de Pistacho",
        description: "Merengue de almendras con pistacho relleno de crema de pistacho",
        stock: 3,
        price: "$700",
        category: "macarons",
        image: "/img/macarons/macaronPistacho.jpg"
    },
    {
        id: "cookiesAvena",
        name: "Cookies de Avena",
        description: "Cookies de avena, mantequilla de maní y chips de chocolate",
        stock: 3,
        price: "$400",
        category: "cookies",
        image: "/img/cookies/cookiesAvena.jpg"
    },
    {
        id: "cookiesLimon",
        name: "Cookies de Limón",
        description: "Cookies masa sablé rellenas de Lemon curd",
        stock: 3,
        price: "$200",
        category: "cookies",
        image: "/img/cookies/cookiesLimon.jpg"
    },
    {
        id: "cookiesManzana",
        name: "Cookies de Manzana",
        description: "Galletas de crumble rellenas de manzana",
        stock: 3,
        price: "$400",
        category: "cookies",
        image: "/img/cookies/cookiesManzana.jpg"
    },
    {
        id: "cookiesSuecas",
        name: "Cookies Suecas",
        description: "Cookies a base de avena y chocolate semiamargo",
        stock: 3,
        price: "$500",
        category: "cookies",
        image: "/img/cookies/cookiesSuecas.jpg"
    },
    {
        id: "alfajoresMaicena",
        name: "Alfajores de Maicena",
        description: "Tapa de maicena, con dulce de leche y coco",
        stock: 3,
        price: "$200",
        category: "cookies",
        image: "/img/cookies/alfajoresMaicena.jpg"
    },
    {
        id: "alfajoresChocolate",
        name: "Alfajores de Chocolate",
        description: "Aljaores de dulce de leche con cobertura de chocolate blanco, con leche y semiamargo",
        stock: 3,
        price: "$300",
        category: "cookies",
        image: "/img/cookies/alfajoresChocolate.jpg"
    },
    {
        id: "cajaNantes",
        name: "Caja Nantes",
        description: "3 rogel<br/>3 marquise<br/>3 almendras con frutos rojos<br/>3 apple crumble",
        stock: 3,
        price: "$7.000",
        category: "petitsFours",
        image: "/img/petitsFours/nantes.jpg"
    },
    {
        id: "cajaLyon",
        name: "Caja Lyon",
        description: "3 tarteleta de frutos rojos<br/>3 marquise<br/>3 lemon pie<br/>3 havanette negro",
        stock: 3,
        price: "$7.000",
        category: "petitsFours",
        image: "/img/petitsFours/lyon.jpg"
    },
    {
        id: "cajaNiza",
        name: "Caja Niza",
        description: "3 cheesecake con frutos rojos<br/>3 marquise<br/>3 rogel<br/>3 cheesecake de dulce de leche",
        stock: 3,
        price: "$7.000",
        category: "petitsFours",
        image: "/img/petitsFours/niza.jpg"
    },
    {
        id: "cajaChocolatosa",
        name: "Caja Chocolatosa",
        description: "4 alfajor de dulce de leche<br/>4 alfajor de chocolate<br/>3 marquise<br/>3 havanette negro",
        stock: 3,
        price: "$7.000",
        category: "petitsFours",
        image: "/img/petitsFours/chocolatosa.jpg"
    },
    {
        id: "cajaDegustacion",
        name: "Caja Degustación",
        description: "1 marquise<br/>1 coco y dulce de leche<br/>1 cheesecake con frutos rojos<br/>1 lemon pie<br/>1 havanette<br/>1 apple crumble<br/>1 rogel",
        stock: 3,
        price: "$5.600",
        category: "petitsFours",
        image: "/img/petitsFours/degustación.jpg"
    },
    {
        id: "cajaPersonalizada",
        name: "Caja Personalizada",
        description: "12 petits fours a elección",
        stock: 3,
        price: "$7.600",
        category: "petitsFours",
        image: "/img/petitsFours/armalo.jpg"
    },
    
]

const getProducts = new Promise((resolve,reject)=>{
    //simulamos un restraso ed red con setTimeout
    setTimeout(()=>{
        resolve(products)
    }, 500)
})

export default getProducts