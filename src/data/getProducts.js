const products = [
    {
        id: "brownieFerrero",
        name: "Brownie Ferrero",
        description: "Base de brownie, dulce de leche, Nutella y ferreros",
        fulldescription: "El Brownie Ferrero es una exquisita creación que combina una base de brownie tierno y rico con capas de dulce de leche suave y Nutella cremosa, coronada con trozos de Ferrero Rocher crujientes. Cada bocado ofrece una explosión de sabores irresistibles y texturas indulgentes, creando una experiencia de postre decadente que deleitará a los amantes del chocolate y los golosos por igual. Es el equilibrio perfecto entre indulgencia y satisfacción.",
        stock: 3,
        price: "8000",
        category: "Tortas",
        image: "/img/tortas/brownieFerrero.jpeg"
    },
    {
        id: "tiramisu",
        name: "Tiramisú",
        description: "Bizcocho humedecido con café, suave crema de mascarpone",
        fulldescription: "El Tiramisú es un postre italiano clásico que combina capas de bizcocho humedecido con café espresso, intercaladas con una suave crema de mascarpone. Cada bocado ofrece una armoniosa fusión de sabores, donde el amargor del café se equilibra con la dulzura de la crema, creando una experiencia indulgente y reconfortante para los amantes del dulce y del café. Es un verdadero placer para los sentidos.",
        stock: 3,
        price: "8000",
        category: "Tortas",
        image: "/img/tortas/tiramisu.jpeg"
    },
    {
        id: "redVelvet",
        name: "Red Velvet",
        description: "Bizcochuelo de chocolate con crema de queso",
        fulldescription: "El Red Velvet es un clásico pastel de terciopelo rojo con un suave y húmedo bizcocho de chocolate que se complementa perfectamente con una generosa capa de crema de queso. Esta combinación de sabores y texturas crea un postre irresistible que deleita con su delicada dulzura y su cremosidad sedosa. Es una experiencia decadente que captura la esencia del lujo y la indulgencia.",
        stock: 3,
        price: "10000",
        category: "Tortas",
        image: "/img/tortas/redVelvet.jpeg"
    },
    {
        id: "lemonPie",
        name: "Lemon Pie",
        description: "Una base de masa sablé, con curd de limón y merengue",
        fulldescription: "El Lemon Pie es una delicia refrescante que combina una base de masa sablé crujiente con un relleno de curd de limón, equilibrado con una suave capa de merengue. Cada bocado ofrece una explosión de sabor cítrico y dulce, contrastado con la textura ligera y aireada del merengue. Es un postre que despierta los sentidos y brinda una experiencia deliciosa y reconfortante.",
        stock: 3,
        price: "7600",
        category: "Tortas",
        image: "/img/tortas/lemonPie.jpeg"
    },
    {
        id: "tortaOreo",
        name: "Torta Oreo",
        description: "Capas de galletitas oreo con crema y dulce de leche",
        fulldescription: "La Torta Oreo es un festín para los amantes de las galletas, con capas de galletas Oreo entrelazadas con cremosa crema y dulce de leche. Cada mordisco es una explosión de sabores y texturas, donde la crujiente galleta se combina con la suavidad de la crema y la dulzura del dulce de leche. Es un placer indulgente que cautiva los sentidos y deja un sabor duradero.",
        stock: 3,
        price: "8600",
        category: "Tortas",
        image: "/img/tortas/tortaOreo.jpeg"
    },
    {
        id: "chocotorta",
        name: "Chocotorta",
        description: "Galletitas de chocolate con una suave crema de dulce de leche y queso crema",
        fulldescription: "La Chocotorta es una deliciosa creación que combina galletitas de chocolate con una suave crema de dulce de leche y queso crema. Cada capa de esta tentadora golosina ofrece una fusión perfecta de sabores, donde la riqueza del chocolate se equilibra con la dulzura del dulce de leche y la suavidad del queso crema. Es un postre irresistible que deleita a todos los amantes del chocolate y los dulces.",
        stock: 3,
        price: "8000",
        category: "Tortas",
        image: "/img/tortas/chocotorta.jpeg"
    },
    {
        id: "keyLimePie",
        name: "Key Lime Pie",
        description: "Base de masa sable con una suave crema de lima y crema chantilli",
        fulldescription: "La Key Lime Pie es una exquisitez que combina una base de masa sable con una suave crema de lima y una cubierta de crema chantilli. Cada bocado ofrece una armoniosa fusión de sabores, donde la acidez refrescante de la lima se equilibra perfectamente con la dulzura de la crema chantilli. Es un postre ligero y refrescante que deleita con su sabor tropical y su textura sedosa.",
        stock: 3,
        price: "7800",
        category: "Tortas",
        image: "/img/tortas/keyLimePie.jpeg"
    },
    {
        id: "cheesecakeNewYork",
        name: "Cheesecake New York",
        description: "Base de galletitas, crema de queso con un toque cítrico, salsa de frutos rojos y fruta fresca",
        fulldescription: "El Cheesecake New York presenta una base de galletitas crujientes, una deliciosa crema de queso con un toque cítrico que lo distingue, y se completa con una exquisita salsa de frutos rojos y fruta fresca. Cada bocado es una combinación de sabores y texturas que se complementan entre sí, ofreciendo una experiencia culinaria indulgente y equilibrada que deleita los paladares más exigentes.",
        stock: 3,
        price: "10000",
        category: "Tortas",
        image: "/img/tortas/cheesecake.jpeg"
    },
    {
        id: "cheesecakeDulcedeLeche",
        name: "Cheesecake Dulce de Leche",
        description: "Base de galletitas de chocolate, crema de queso con dulce de leche y salsa de dulce de leche",
        fulldescription: "El Cheesecake Dulce de Leche ofrece una base de galletitas de chocolate decadentes, una crema de queso suave y cremosa enriquecida con dulce de leche, todo coronado con una irresistible salsa de dulce de leche. Cada bocado es un festín para los amantes del dulce, combinando la riqueza del chocolate con la dulzura sedosa del dulce de leche en una armoniosa y deliciosa experiencia culinaria.",
        stock: 3,
        price: "10000",
        category: "Tortas",
        image: "/img/tortas/cheesecakeDL.jpg"
    },
    {
        id: "cheesecakeChocolate",
        name: "Cheesecake Chocolate",
        description: "Base de galletitas, crema suave de queso y chocolate blanco, con frambuesas y leche condensada",
        fulldescription: "El Cheesecake Chocolate presenta una base de galletitas crujientes, una crema suave de queso y chocolate blanco que deleita con su dulzura, y se complementa con frambuesas frescas y un toque final de leche condensada. Cada bocado es una explosión de sabores, donde el rico chocolate blanco se equilibra con la acidez de las frambuesas y la dulzura de la leche condensada, ofreciendo una experiencia decadente y deliciosa.",
        stock: 3,
        price: "10000",
        category: "Tortas",
        image: "/img/tortas/cheesecakeChoco.jpg"
    },
    {
        id: "tresLeches",
        name: "Tres Leches",
        description: "Bizcocho de vainilla humedecido en tres leches cubierto de merengue italiano",
        fulldescription: "El Tres Leches es un postre tradicional que consta de un bizcocho de vainilla esponjoso y húmedo, bañado en una mezcla de tres tipos de leche, y coronado con una capa de merengue italiano. Cada bocado es una explosión de sabor y textura, donde la dulzura del bizcocho se equilibra con la ligereza del merengue y la riqueza de las tres leches. Es un postre indulgente y reconfortante que cautiva los sentidos.",
        stock: 3,
        price: "6000",
        category: "Tortas",
        image: "/img/tortas/tresLeches.jpg"
    },
    {
        id: "tortaBaileys",
        name: "Torta Baileys",
        description: "Bizcochuelo de chocolate, mousse de licor Baileys",
        fulldescription: "La Torta Baileys es un placer celestial que combina un bizcochuelo de chocolate decadente con una suave y deliciosa mousse de licor Baileys. Cada bocado es una experiencia indulgente, donde el intenso sabor del chocolate se combina perfectamente con el rico y sedoso sabor del licor Baileys. Es el postre perfecto para los amantes del chocolate y los aficionados al licor, que buscan una delicia sofisticada y lujosa.",
        stock: 3,
        price: "9200",
        category: "Tortas",
        image: "/img/tortas/mousseBaileys.jpg"
    },
    {
        id: "macaronsChocolate",
        name: "Macarons de Chocolate",
        description: "Merengue de almendras con cacao rellenos de ganache de chocolate",
        fulldescription: "Los Macarons de Chocolate son una delicia exquisita que presenta merengue de almendras con cacao, delicadamente horneado para lograr una textura crujiente por fuera y suave por dentro, rellenos con un lujoso ganache de chocolate. Cada bocado es una explosión de sabor, donde el rico chocolate se combina con la delicadeza del merengue, ofreciendo una experiencia culinaria indulgente y sofisticada que cautiva los sentidos.",
        stock: 24,
        price: "700",
        category: "Macarons",
        image: "/img/macarons/macaronChocolate.jpg"
    },
    {
        id: "macaronsDulcedeLeche",
        name: "Macarons de Dulce de Leche",
        description: "Merengue de nuez relleno de dulce de leche",
        fulldescription: "Los Macarons de Dulce de Leche son una tentación sublime que consiste en merengue de nuez cuidadosamente horneado para obtener una textura crujiente por fuera y suave por dentro, rellenos con el dulce de leche más cremoso y delicioso. Cada bocado es una experiencia de indulgencia pura, donde la dulzura de la nuez se equilibra perfectamente con la suavidad y el sabor decadente del dulce de leche, creando una delicia irresistiblemente exquisita.",
        stock: 24,
        price: "700",
        category: "Macarons",
        image: "/img/macarons/macaronDL.jpg"
    },
    {
        id: "macaronsLimon",
        name: "Macarons de Limón",
        description: "Merengue de almendras relleno de curd de limón",
        fulldescription: "Los Macarons de Limón son una delicada tentación que presenta merengue de almendras horneado a la perfección, creando una textura crujiente por fuera y suave por dentro, rellenos con un refrescante curd de limón. Cada bocado es una explosión de sabor y frescura, donde la acidez del limón se equilibra con la dulzura del merengue, ofreciendo una experiencia culinaria sofisticada y deliciosa que deleita los sentidos.",
        stock: 24,
        price: "700",
        category: "Macarons",
        image: "/img/macarons/macaronLimon.jpg"
    },
    {
        id: "macaronsFrambuesa",
        name: "Macarons de Frambuesa",
        description: "Merengue de almendras relleno de crema de frambuesa",
        fulldescription: "Los Macarons de Frambuesa son una exquisitez que presenta merengue de almendras horneado a la perfección para obtener una textura crujiente por fuera y suave por dentro, rellenos con una cremosa crema de frambuesa. Cada bocado ofrece una combinación perfecta de dulzura y acidez, donde el sabor vibrante de las frambuesas se equilibra con la delicadeza del merengue, creando una experiencia culinaria sofisticada y deliciosa que cautiva los sentidos.",
        stock: 24,
        price: "700",
        category: "Macarons",
        image: "/img/macarons/macaronFrambuesa.jpg"
    },
    {
        id: "macaronsMaracuyá",
        name: "Macarons de Maracuyá",
        description: "Merengue de almendras relleno de curd de maracuyá",
        fulldescription: "Los Macarons de Maracuyá son una delicia exótica que consiste en merengue de almendras horneado con precisión para lograr una textura crujiente por fuera y suave por dentro, rellenos con un curd de maracuyá refrescante y delicioso. Cada bocado ofrece una explosión de sabor tropical, donde la acidez característica del maracuyá se equilibra perfectamente con la dulzura y la suavidad del merengue, creando una experiencia culinaria que deleita los sentidos y transporta a los paladares a lugares lejanos.",
        stock: 24,
        price: "700",
        category: "Macarons",
        image: "/img/macarons/macaronMaracuya.jpg"
    },
    {
        id: "macaronsPistacho",
        name: "Macarons de Pistacho",
        description: "Merengue de almendras con pistacho relleno de crema de pistacho",
        fulldescription: "Los Macarons de Pistacho son una exquisita delicia que presenta merengue de almendras con pistacho, horneado para lograr una textura crujiente por fuera y suave por dentro, rellenos con una irresistible crema de pistacho. Cada bocado ofrece una combinación perfecta de sabores, donde la riqueza y el aroma del pistacho se combinan con la suavidad del merengue, creando una experiencia culinaria sofisticada y deliciosa que deleita los sentidos.",
        stock: 24,
        price: "700",
        category: "Macarons",
        image: "/img/macarons/macaronPistacho.jpg"
    },
    {
        id: "cookiesAvena",
        name: "Cookies de Avena",
        description: "Cookies de avena, mantequilla de maní y chips de chocolate",
        fulldescription: "Las Cookies de Avena son un clásico reconfortante que combina la textura suave y nutritiva de la avena con la cremosidad de la mantequilla de maní y la indulgencia de los chips de chocolate. Cada bocado ofrece una mezcla deliciosa de sabores y texturas, donde la dulzura y la riqueza se equilibran perfectamente. Son el acompañamiento perfecto para una tarde de café o como un dulce capricho en cualquier momento del día.",
        stock: 48,
        price: "400",
        category: "Cokies y Alfajores",
        image: "/img/cookies/cookiesAvena.jpg"
    },
    {
        id: "cookiesLimon",
        name: "Cookies de Limón",
        description: "Cookies masa sablé rellenas de Lemon curd",
        fulldescription: "Las Cookies de Limón son una deliciosa creación que combina una masa sablé crujiente y delicada con un relleno de Lemon Curd, creando una experiencia culinaria refrescante y deliciosa. Cada bocado ofrece una explosión de sabor cítrico y dulce, donde la acidez del limón se equilibra perfectamente con la dulzura de la masa sablé. Son el acompañamiento perfecto para una taza de té o como un postre ligero después de una comida.",
        stock: 48,
        price: "200",
        category: "Cokies y Alfajores",
        image: "/img/cookies/cookiesLimon.jpg"
    },
    {
        id: "cookiesManzana",
        name: "Cookies de Manzana",
        description: "Galletas de crumble rellenas de manzana",
        fulldescription: "Las Cookies de Manzana son una delicia reconfortante que combina la textura crujiente y escamosa del crumble con un relleno jugoso de manzana. Cada bocado ofrece una explosión de sabor agridulce, donde la dulzura natural de las manzanas se equilibra perfectamente con la mezcla de especias y la textura crujiente del crumble. Son el acompañamiento perfecto para una tarde de otoño o como un dulce bocado en cualquier momento del día.",
        stock: 48,
        price: "400",
        category: "Cokies y Alfajores",
        image: "/img/cookies/cookiesManzana.jpg"
    },
    {
        id: "cookiesSuecas",
        name: "Cookies Suecas",
        description: "Cookies a base de avena y chocolate semiamargo",
        fulldescription: "Las Cookies Suecas son una tentadora combinación de avena y chocolate semiamargo, que se unen para crear una experiencia culinaria única y deliciosa. Cada bocado ofrece una mezcla irresistible de la textura suave y nutritiva de la avena con el rico sabor del chocolate semiamargo. Estas galletas son perfectas para disfrutar en cualquier momento del día, ya sea con un vaso de leche o como un regalo gourmet para compartir con amigos y familiares.",
        stock: 48,
        price: "500",
        category: "Cokies y Alfajores",
        image: "/img/cookies/cookiesSuecas.jpg"
    },
    {
        id: "alfajoresMaicena",
        name: "Alfajores de Maicena",
        description: "Tapa de maicena, con dulce de leche y coco",
        fulldescription: "Los Alfajores de Maicena son una exquisitez argentina que consiste en dos tapas de maicena suaves y delicadas, rellenas con una generosa capa de dulce de leche y espolvoreadas con coco rallado. Cada bocado ofrece una combinación armoniosa de sabores y texturas que deleitan los sentidos, donde la dulzura del dulce de leche se combina con la suavidad de la maicena y el toque crujiente del coco. Es el dulce perfecto para cualquier ocasión.",
        stock: 48,
        price: "200",
        category: "Cokies y Alfajores",
        image: "/img/cookies/alfajoresMaicena.jpg"
    },
    {
        id: "alfajoresChocolate",
        name: "Alfajores de Chocolate",
        description: "Alfajores de dulce de leche con cobertura de chocolate blanco, con leche y semiamargo",
        fulldescription: "Los Alfajores de Chocolate son una delicia irresistible que presenta alfajores rellenos de dulce de leche, cubiertos con capas de chocolate blanco, con leche y semiamargo. Cada bocado ofrece una combinación tentadora de sabores y texturas, donde la dulzura del dulce de leche se complementa con la suavidad del chocolate blanco y la intensidad del chocolate con leche y semiamargo. Son el dulce perfecto para disfrutar en cualquier momento y deleitar a los amantes del chocolate.",
        stock: 48,
        price: "300",
        category: "Cokies y Alfajores",
        image: "/img/cookies/alfajoresChocolate.jpg"
    },
    {
        id: "cajaNantes",
        name: "Caja Nantes",
        description: "3 rogel<br/>3 marquise<br/>3 almendras con frutos rojos<br/>3 apple crumble",
        fulldescription: "La Caja Nantes ofrece una selección exquisita que incluye 3 rogel, 3 marquise, 3 almendras con frutos rojos y 3 apple crumble. Cada elemento de esta caja es una deliciosa creación que combina sabores y texturas únicas. Desde la riqueza y el crujido del rogel hasta la suavidad de las marquise y el equilibrio de dulzura y acidez de las almendras con frutos rojos y el apple crumble, esta caja promete una experiencia culinaria inolvidable.",
        stock: 12,
        price: "7000",
        category: "Petits Fours",
        image: "/img/petitsFours/nantes.jpg"
    },
    {
        id: "cajaLyon",
        name: "Caja Lyon",
        description: "3 tarteleta de frutos rojos<br/>3 marquise<br/>3 lemon pie<br/>3 havanette negro",
        fulldescription: "La Caja Lyon presenta una selección exquisita que incluye 3 tarteletas de frutos rojos, 3 marquise, 3 lemon pie y 3 havanette negro. Cada elemento de esta caja es una deliciosa obra maestra que ofrece una experiencia culinaria única. Desde la frescura de los frutos rojos en las tarteletas hasta la suavidad y acidez del lemon pie, junto con el intenso sabor del havanette negro, esta caja cautiva los sentidos y promete satisfacer los paladares más exigentes.",
        stock: 12,
        price: "7000",
        category: "Petits Fours",
        image: "/img/petitsFours/lyon.jpg"
    },
    {
        id: "cajaNiza",
        name: "Caja Niza",
        description: "3 cheesecake con frutos rojos<br/>3 marquise<br/>3 rogel<br/>3 cheesecake de dulce de leche",
        fulldescription: "La Caja Niza ofrece una experiencia indulgente con una variedad de postres exquisitos. Incluye 3 cheesecake con frutos rojos, 3 marquise, 3 rogel y 3 cheesecake de dulce de leche. Cada elemento es una deliciosa obra maestra que combina sabores y texturas únicas. Desde la frescura de los frutos rojos en los cheesecakes hasta la suavidad y el dulzor del rogel y del cheesecake de dulce de leche, esta caja es un festín para los amantes de los postres.",
        stock: 12,
        price: "7000",
        category: "Petits Fours",
        image: "/img/petitsFours/niza.jpg"
    },
    {
        id: "cajaChocolatosa",
        name: "Caja Chocolatosa",
        description: "4 alfajor de dulce de leche<br/>4 alfajor de chocolate<br/>3 marquise<br/>3 havanette negro",
        fulldescription: "La Caja Chocolatosa ofrece una selección tentadora de postres indulgentes. Incluye 4 alfajores de dulce de leche, 4 alfajores de chocolate, 3 marquise y 3 havanette negro. Cada elemento es una deliciosa combinación de sabores y texturas, desde la suavidad y dulzura de los alfajores hasta la intensidad del chocolate en las marquise y el havanette negro. Esta caja es el regalo perfecto para cualquier amante del chocolate y los dulces.",
        stock: 12,
        price: "7000",
        category: "Petits Fours",
        image: "/img/petitsFours/chocolatosa.jpg"
    },
    {
        id: "cajaDegustacion",
        name: "Caja Degustación",
        description: "1 marquise<br/>1 coco y dulce de leche<br/>1 cheesecake con frutos rojos<br/>1 lemon pie<br/>1 havanette<br/>1 apple crumble<br/>1 rogel",
        fulldescription: "La Caja Degustación es una experiencia culinaria variada y deliciosa que ofrece una amplia selección de postres exquisitos. Incluye 1 marquise, 1 coco y dulce de leche, 1 cheesecake con frutos rojos, 1 lemon pie, 1 havanette, 1 apple crumble y 1 rogel. Cada postre presenta sabores y texturas únicas, desde la suavidad y dulzura del cheesecake hasta la frescura del lemon pie y la intensidad del havanette. Esta caja es perfecta para disfrutar en cualquier ocasión especial o para compartir con amigos y familiares.",
        stock: 12,
        price: "5600",
        category: "Petits Fours",
        image: "/img/petitsFours/degustación.jpg"
    },
    {
        id: "cajaPersonalizada",
        name: "Caja Personalizada",
        description: "12 petits fours a elección",
        fulldescription: "La Caja Personalizada ofrece una selección de 12 petits fours a elección, brindando una experiencia culinaria única y personalizada. Cada caja es una expresión de gusto y preferencia, donde los clientes pueden elegir entre una variedad de exquisitos petits fours para satisfacer sus antojos y deleitar sus sentidos. Es el regalo perfecto para cualquier ocasión especial o simplemente para consentirse a uno mismo con una variedad de sabores deliciosos y tentadores.",
        stock: 12,
        price: "7600",
        category: "Petits Fours",
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