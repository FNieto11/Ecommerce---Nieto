const products = [
    {
        id: "brownieFerrero",
        name: "Brownie Ferrero",
        description: "Base de brownie, dulce de leche, Nutella y ferreros",
        fulldescription: "Una base de brownie decadente y esponjosa, con su característico sabor a chocolate intenso, sirve como lienzo para esta indulgente creación. Una generosa capa de dulce de leche cremoso se extiende sobre el brownie, añadiendo un toque de dulzura caramelizada que se funde en cada bocado. Luego, se draper Nutella sedosa, agregando una rica profundidad de sabor a avellana y cacao. Para coronar esta obra maestra de la indulgencia, se colocan Ferreros enteros, aportando una textura crujiente y un estallido de chocolate y avellanas. Este postre es un viaje de sabores lujuriosos y texturas tentadoras.",
        stock: 3,
        price: "8000",
        category: "tortas",
        image: "/img/tortas/brownieFerrero.jpeg"
    },
    {
        id: "tiramisu",
        name: "Tiramisú",
        description: "Bizcocho humedecido con café, suave crema de mascarpone",
        fulldescription: "Un bizcocho delicadamente humedecido con el rico aroma del café, infundiendo cada mordisco con una calidez reconfortante y un sabor robusto. Sobre esta base, se despliega una suave crema de mascarpone, que ofrece una textura sedosa y un sabor delicadamente lácteo. La crema, ligera pero indulgente, se funde con el bizcocho, creando una armonía de sabores que danzan en el paladar. Cada bocado es una experiencia sensorial, donde el dulzor del mascarpone se equilibra perfectamente con la amargura sutil del café. Este postre es un homenaje a la elegancia y la simplicidad refinada de la cocina italiana.",
        stock: 3,
        price: "8000",
        category: "tortas",
        image: "/img/tortas/tiramisu.jpeg"
    },
    {
        id: "redVelvet",
        name: "Red Velvet",
        description: "Bizcochuelo de chocolate con crema de queso",
        fulldescription: "Un bizcochuelo de chocolate, esponjoso y tentador, se convierte en el lienzo perfecto para esta exquisita creación. Con cada bocado, el rico sabor a cacao envuelve el paladar, mientras la suavidad del bizcocho se deshace en la boca. Sobre esta delicia chocolatada, se extiende una generosa capa de crema de queso, cremosa y ligeramente ácida, que contrasta perfectamente con la dulzura del bizcocho. La combinación de texturas, desde la esponjosidad del bizcochuelo hasta la untuosidad de la crema de queso, crea una experiencia culinaria irresistible. Este postre es un homenaje al equilibrio entre lo decadente y lo reconfortante.",
        stock: 3,
        price: "10000",
        category: "tortas",
        image: "/img/tortas/redVelvet.jpeg"
    },
    {
        id: "lemonPie",
        name: "Lemon Pie",
        description: "Una base de masa sablé, con curd de limón y merengue",
        fulldescription: "Una base crujiente de masa sablé, con su textura delicadamente quebradiza, sirve como el lienzo perfecto para esta exquisita creación. Sobre esta base, se extiende una generosa capa de curd de limón, con su sabor agridulce que hace brillar cada bocado con una explosión de frescura cítrica. Encima del curd, se monta un merengue suave y esponjoso, que se dora delicadamente en la parte superior para crear un contraste de texturas entre la suavidad y la ligereza. Cada porción es una experiencia de sabor vibrante y decadente, donde se fusionan lo dulce, lo ácido y lo delicado en una armonía perfecta.",
        stock: 3,
        price: "7600",
        category: "tortas",
        image: "/img/tortas/lemonPie.jpeg"
    },
    {
        id: "tortaOreo",
        name: "Torta Oreo",
        description: "Capas de galletitas oreo con crema y dulce de leche",
        fulldescription: "Este postre deleita con capas juguetonas de galletitas Oreo, cada una ofreciendo un crujido tentador y un sabor a cacao inconfundible. Entre las capas de galletitas, se encuentra una cremosa y indulgente crema, que agrega una suavidad irresistible y un contraste perfecto con la textura crujiente de las galletas. Además, se introduce el dulce de leche, con su riqueza caramelizada que se funde entre las capas, agregando un toque decadente y una dulzura celestial. Cada bocado es una sinfonía de sabores y texturas, creando una experiencia culinaria que deleita los sentidos y reconforta el alma.",
        stock: 3,
        price: "8600",
        category: "tortas",
        image: "/img/tortas/tortaOreo.jpeg"
    },
    {
        id: "chocotorta",
        name: "Chocotorta",
        description: "Galletitas de chocolate con una suave crema de dulce de leche y queso crema",
        fulldescription: "Deliciosas galletitas de chocolate sirven como base para esta creación celestial. Cada galletita, rica en cacao, aporta un crujido tentador que se complementa con una suave y sedosa crema de dulce de leche y queso crema. Esta crema, indulgente y delicadamente dulce, se funde con la galletita, creando una combinación de sabores que deleita el paladar. El dulce de leche aporta una nota caramelizada y cremosa, mientras que el queso crema agrega una sutileza láctea que equilibra perfectamente la dulzura. Cada bocado es una experiencia de indulgencia gourmet que cautiva los sentidos y deja un dulce recuerdo.",
        stock: 3,
        price: "8000",
        category: "tortas",
        image: "/img/tortas/chocotorta.jpeg"
    },
    {
        id: "keyLimePie",
        name: "Key Lime Pie",
        description: "Base de masa sable con una suave crema de lima y crema chantilli",
        fulldescription: "Una base de masa sablé, con su crujiente y delicada textura, forma el lienzo perfecto para este exquisito postre. Sobre esta base se extiende una suave crema de lima, que irradia un frescor cítrico y vibrante en cada bocado. La crema de lima, con su equilibrio entre dulzura y acidez, se combina armoniosamente con la masa sablé, creando una sinfonía de sabores. Para coronar esta obra maestra, se remata con crema chantilly, añadiendo una suavidad ligera y una nota de indulgencia láctea que completa la experiencia. Este postre es una celebración de la frescura y la elegancia en cada delicioso bocado.",
        stock: 3,
        price: "7800",
        category: "tortas",
        image: "/img/tortas/keyLimePie.jpeg"
    },
    {
        id: "cheesecakeNewYork",
        name: "Cheesecake New York",
        description: "Base de galletitas, crema de queso con un toque cítrico, salsa de frutos rojos y fruta fresca",
        fulldescription: "Una base crujiente de galletitas forma el fundamento de este exquisito postre. Sobre esta base se despliega una cremosa crema de queso, infusionada con un toque cítrico que despierta los sentidos y añade una dimensión fresca y vibrante al conjunto. La suavidad de la crema de queso se complementa con una generosa salsa de frutos rojos, que aporta una explosión de color y sabor agridulce que contrasta deliciosamente con la cremosidad de la crema. Como toque final, se coronan estas capas con fruta fresca, añadiendo un toque de frescura y un estallido de sabores naturales que completan esta experiencia gastronómica inolvidable.",
        stock: 3,
        price: "10000",
        category: "tortas",
        image: "/img/tortas/cheesecake.jpeg"
    },
    {
        id: "cheesecakeDulcedeLeche",
        name: "Cheesecake Dulce de Leche",
        description: "Base de galletitas de chocolate, crema de queso con dulce de leche y salsa de dulce de leche",
        fulldescription: "Una base decadente de galletitas de chocolate establece el escenario para esta delicia celestial. Sobre esta base, se extiende una generosa capa de crema de queso fusionada con dulce de leche, creando una combinación de sabores lujuriosamente cremosos y dulcemente caramelizados. Esta cremosa y sedosa mezcla se equilibra perfectamente con la intensidad chocolatada de las galletitas, ofreciendo una experiencia indulgente en cada bocado. Para coronar este festín de sabores, se vierte una tentadora salsa de dulce de leche sobre la crema, añadiendo una capa adicional de riqueza y dulzura. Este postre es una celebración de los placeres más exquisitos y reconfortantes del mundo culinario.",
        stock: 3,
        price: "10000",
        category: "tortas",
        image: "/img/tortas/cheesecakeDL.jpg"
    },
    {
        id: "cheesecakeChocolate",
        name: "Cheesecake Chocolate",
        description: "Base de galletitas, crema suave de queso y chocolate blanco, con frambuesas y leche condensada",
        fulldescription: "Una base crujiente de galletitas crea el lienzo perfecto para este postre celestial. Sobre esta base, se extiende una crema suave de queso y chocolate blanco, que fusiona la dulzura cremosa del chocolate blanco con la delicada acidez del queso, creando una armonía de sabores exquisita. Las frambuesas frescas añaden un toque de frescura y un estallido de color vibrante, complementando la dulzura del chocolate blanco con su acidez natural. Como toque final, se rocía una lluvia de leche condensada sobre el conjunto, aportando una dulzura indulgente que completa esta experiencia gastronómica de ensueño.",
        stock: 3,
        price: "10000",
        category: "tortas",
        image: "/img/tortas/cheesecakeChoco.jpg"
    },
    {
        id: "tresLeches",
        name: "Tres Leches",
        description: "Bizcocho de vainilla humedecido en tres leches cubierto de merengue italiano",
        fulldescription: "Un bizcocho de vainilla suave y esponjoso se convierte en la estrella de este postre decadente. Humedecido en una mezcla de tres leches, cada bocado ofrece una explosión de sabores dulces y cremosos que se funden en el paladar. La textura esponjosa del bizcocho se combina perfectamente con la riqueza de las leches, creando una experiencia indulgente y reconfortante. Para coronar esta obra maestra, se cubre con una capa de merengue italiano, que agrega una dulzura sutil y una textura ligera y aireada. Este postre es un festín para los sentidos, una celebración de sabores y texturas que deleita y sorprende en cada bocado.",
        stock: 3,
        price: "6000",
        category: "tortas",
        image: "/img/tortas/tresLeches.jpg"
    },
    {
        id: "tortaBaileys",
        name: "Torta Baileys",
        description: "Bizcochuelo de chocolate, mousse de licor Baileys",
        fulldescription: "Un bizcochuelo de chocolate, rico y esponjoso, sirve como base para esta deliciosa creación. Cada mordisco revela la indulgencia del chocolate en su máxima expresión. Sobre este lienzo de cacao se extiende una mousse sedosa y delicada, infusionada con el exquisito licor Baileys. Esta mousse, con su sabor decadente y su textura suave como la seda, añade una dimensión de indulgencia que complementa a la perfección el rico sabor del bizcochuelo. Cada bocado es un festín para los sentidos, una experiencia celestial que combina el placer del chocolate con la sofisticación del licor. Este postre es una verdadera indulgencia para los amantes del chocolate y el Baileys.",
        stock: 3,
        price: "9200",
        category: "tortas",
        image: "/img/tortas/mousseBaileys.jpg"
    },
    {
        id: "macaronsChocolate",
        name: "Macarons de Chocolate",
        description: "Merengue de almendras con cacao rellenos de ganache de chocolate",
        fulldescription: "Estos macarons de chocolate son una auténtica obra maestra culinaria. Con una base de merengue de almendras y cacao, cada uno de estos delicados bocados ofrece una textura crujiente por fuera y suave por dentro. El relleno de ganache de chocolate añade una decadencia irresistible, con su suavidad sedosa y su intenso sabor a cacao. Cada mordisco es una explosión de placer para el paladar, combinando la sutileza del merengue con la riqueza del chocolate en una armonía perfecta. Estos macarons son el epítome de la elegancia y el lujo, perfectos para deleitar a los amantes del chocolate en cualquier ocasión especial.",
        stock: 24,
        price: "700",
        category: "macarons",
        image: "/img/macarons/macaronChocolate.jpg"
    },
    {
        id: "macaronsDulcedeLeche",
        name: "Macarons de Dulce de Leche",
        description: "Merengue de nuez relleno de dulce de leche",
        fulldescription: "Estos macarons de dulce de leche son una verdadera delicia que combina la delicadeza del merengue de nuez con la cremosidad irresistible del dulce de leche. Cada bocado ofrece una experiencia celestial: una capa crujiente por fuera que da paso a un interior suave y aireado. El dulce de leche, con su sabor caramelizado y su textura indulgente, se convierte en el relleno perfecto, añadiendo una dulzura decadente que se funde con el sabor tostado de las nueces en el merengue. Es una combinación de sabores y texturas que deleitará los sentidos y dejará un recuerdo dulce y reconfortante en cada paladar.",
        stock: 24,
        price: "700",
        category: "macarons",
        image: "/img/macarons/macaronDL.jpg"
    },
    {
        id: "macaronsLimon",
        name: "Macarons de Limón",
        description: "Merengue de almendras relleno de curd de limón",
        fulldescription: "Estos macarons de limón son una verdadera explosión de frescura y sabor cítrico. Con una base de merengue de almendras, cada macaron ofrece una textura crujiente por fuera y suave por dentro, complementada con el relleno de curd de limón. El curd de limón, con su intensidad ácida y suavidad sedosa, se funde perfectamente con la sutileza del merengue, creando una experiencia gustativa refrescante y exquisita. Cada bocado es como un rayo de sol en el paladar, perfecto para disfrutar en cualquier momento del día como una indulgencia fresca y deliciosa.",
        stock: 24,
        price: "700",
        category: "macarons",
        image: "/img/macarons/macaronLimon.jpg"
    },
    {
        id: "macaronsFrambuesa",
        name: "Macarons de Frambuesa",
        description: "Merengue de almendras relleno de crema de frambuesa",
        fulldescription: "Estos macarons de frambuesa son una verdadera delicia para los amantes de los sabores frutales y dulces. Con una base de merengue de almendras, cada macaron ofrece una textura crujiente por fuera y suave por dentro, que se combina perfectamente con el relleno de crema de frambuesa. La crema de frambuesa, con su intensidad afrutada y suavidad cremosa, añade un toque fresco y exquisito a cada bocado. Es una combinación de sabores y texturas que deleitará los sentidos y dejará un sabor dulce y refrescante en cada paladar. Estos macarons son el acompañamiento perfecto para cualquier ocasión especial o simplemente para deleitarse con un capricho delicioso.",
        stock: 24,
        price: "700",
        category: "macarons",
        image: "/img/macarons/macaronFrambuesa.jpg"
    },
    {
        id: "macaronsMaracuyá",
        name: "Macarons de Maracuyá",
        description: "Merengue de almendras relleno de curd de maracuyá",
        fulldescription: "Estos macarons de maracuyá son una explosión de sabor tropical en cada bocado. Con una base de merengue de almendras, cada macaron ofrece una textura crujiente por fuera y suave por dentro, que se complementa perfectamente con el relleno de curd de maracuyá. El curd de maracuyá, con su vibrante sabor agridulce y su textura sedosa, agrega una nota refrescante y exótica a cada mordisco. Es una combinación perfecta de sabores y texturas que deleitará los sentidos y transportará al paladar a un paraíso tropical. Estos macarons son ideales para disfrutar en cualquier ocasión y para aquellos que buscan un toque de frescura y aventura en sus postres.",
        stock: 24,
        price: "700",
        category: "macarons",
        image: "/img/macarons/macaronMaracuya.jpg"
    },
    {
        id: "macaronsPistacho",
        name: "Macarons de Pistacho",
        description: "Merengue de almendras con pistacho relleno de crema de pistacho",
        fulldescription: "Estos macarons de pistacho son una exquisitez para los amantes de este fruto seco. Con una base de merengue de almendras y pistacho, cada macaron ofrece una textura crujiente por fuera y suave por dentro, que se complementa a la perfección con el relleno de crema de pistacho. La crema de pistacho, con su sabor intenso y suavidad cremosa, añade una nota deliciosa y reconfortante a cada bocado. Es una combinación armoniosa de sabores y texturas que deleitará los sentidos y dejará un sabor delicioso y satisfactorio en cada paladar. Estos macarons son ideales para disfrutar como postre o como un dulce capricho en cualquier momento del día.",
        stock: 24,
        price: "700",
        category: "macarons",
        image: "/img/macarons/macaronPistacho.jpg"
    },
    {
        id: "cookiesAvena",
        name: "Cookies de Avena",
        description: "Cookies de avena, mantequilla de maní y chips de chocolate",
        fulldescription: "Estas cookies de avena, mantequilla de maní y chips de chocolate son una combinación irresistible de sabores y texturas. Cada galleta está cargada con trozos de avena que le dan una textura robusta y nutritiva, mientras que la mantequilla de maní aporta un rico sabor y una suavidad cremosa. Los chips de chocolate, derretidos en cada bocado, añaden un toque de dulzura indulgente que complementa perfectamente el sabor salado de la mantequilla de maní. Estas cookies son el acompañamiento perfecto para una taza de leche o una merienda rápida para satisfacer los antojos de dulce y salado.",
        stock: 48,
        price: "400",
        category: "cookies",
        image: "/img/cookies/cookiesAvena.jpg"
    },
    {
        id: "cookiesLimon",
        name: "Cookies de Limón",
        description: "Cookies masa sablé rellenas de Lemon curd",
        fulldescription: "Estas cookies de masa sablé, rellenas de lemon curd, son una delicia que combina la textura crujiente y mantecosa de la masa con la frescura y acidez del lemon curd. Cada galleta se deshace en la boca, liberando un estallido de sabor cítrico y dulce que deleita los sentidos. El contraste entre la suavidad de la masa y la intensidad del lemon curd crea una experiencia gustativa única y satisfactoria. Estas cookies son perfectas para disfrutar en cualquier momento del día, ya sea como postre después de una comida o como un tentempié indulgente junto a una taza de té.",
        stock: 48,
        price: "200",
        category: "cookies",
        image: "/img/cookies/cookiesLimon.jpg"
    },
    {
        id: "cookiesManzana",
        name: "Cookies de Manzana",
        description: "Galletas de crumble rellenas de manzana",
        fulldescription: "Estas galletas de crumble rellenas de manzana son una delicia reconfortante que evoca los sabores y aromas del otoño. La base de crumble, con su textura crujiente y migajosa, envuelve un relleno generoso de compota de manzana, que aporta un sabor dulce y reconfortante con un toque de especias cálidas. Cada bocado es una explosión de sabores de temporada, con la combinación perfecta de la dulzura de la manzana y la rusticidad del crumble. Estas galletas son ideales para disfrutar junto a una taza de té caliente en una tarde fresca de otoño o como un capricho dulce para cualquier ocasión especial.",
        stock: 48,
        price: "400",
        category: "cookies",
        image: "/img/cookies/cookiesManzana.jpg"
    },
    {
        id: "cookiesSuecas",
        name: "Cookies Suecas",
        description: "Cookies a base de avena y chocolate semiamargo",
        fulldescription: "Estas cookies a base de avena y chocolate semiamargo son una combinación perfecta de lo indulgente y lo nutritivo. Cada galleta está cargada con copos de avena que le dan una textura robusta y satisfactoria, mientras que los trozos de chocolate semiamargo se derriten en la boca, ofreciendo un contraste delicioso entre lo dulce y lo amargo. Estas cookies son ideales para aquellos que buscan un dulce capricho con un toque de bondad saludable, perfectas para disfrutar en cualquier momento del día como un tentempié energético o un postre indulgente con una taza de café o leche.",
        stock: 48,
        price: "500",
        category: "cookies",
        image: "/img/cookies/cookiesSuecas.jpg"
    },
    {
        id: "alfajoresMaicena",
        name: "Alfajores de Maicena",
        description: "Tapa de maicena, con dulce de leche y coco",
        fulldescription: "Los alfajores de maicena son un clásico dulce latinoamericano que deleita con su combinación de sabores y texturas. Con una tapa de maicena que se deshace en la boca, estas galletas son el lienzo perfecto para el dulce de leche, que añade una cremosidad indulgente y un sabor caramelizado irresistible. Para rematar esta delicia, se espolvorea coco rallado sobre el dulce de leche, aportando un toque de frescura y una textura crujiente que completa la experiencia. Cada bocado es una explosión de sabores tropicales y dulzura reconfortante, perfecto para disfrutar en cualquier ocasión o para endulzar el día con un sabor delicioso y reconfortante.",
        stock: 48,
        price: "200",
        category: "cookies",
        image: "/img/cookies/alfajoresMaicena.jpg"
    },
    {
        id: "alfajoresChocolate",
        name: "Alfajores de Chocolate",
        description: "Aljaores de dulce de leche con cobertura de chocolate blanco, con leche y semiamargo",
        fulldescription: "Los alfajores de dulce de leche con cobertura de chocolate blanco, con leche y semiamargo son una exquisitez que combina lo mejor de ambos mundos: la dulzura del dulce de leche con la cremosidad del chocolate y el contraste entre el chocolate blanco, con leche y semiamargo. Cada bocado ofrece una explosión de sabores y texturas, desde la suavidad sedosa del dulce de leche hasta la intensidad del chocolate, con un toque de amargor en el chocolate semiamargo que equilibra la dulzura del conjunto. Estos alfajores son perfectos para satisfacer los antojos de dulce y chocolate, ideales para disfrutar en cualquier momento del día como un capricho indulgente o como un regalo especial para alguien querido.",
        stock: 48,
        price: "300",
        category: "cookies",
        image: "/img/cookies/alfajoresChocolate.jpg"
    },
    {
        id: "cajaNantes",
        name: "Caja Nantes",
        description: "3 rogel<br/>3 marquise<br/>3 almendras con frutos rojos<br/>3 apple crumble",
        fulldescription: "3 Rogel: Capas de dulce de leche entre hojuelas de masa sablé, coronadas con merengue italiano, son un homenaje a la dulzura y la textura crujiente.<br/>3 Marquise: Estos pequeños postres, con su rico sabor a chocolate y su textura suave y sedosa, son un deleite para los amantes del cacao.<br/>3 Almendras con frutos rojos: La combinación de la crocancia de las almendras con la frescura y acidez de los frutos rojos es una explosión de sabor en cada bocado.<br/>3 Apple Crumble: La mezcla de manzanas dulces y canela, cubierta con una crujiente capa de crumble, evoca los sabores reconfortantes de un delicioso postre casero.",
        stock: 12,
        price: "7000",
        category: "petitsFours",
        image: "/img/petitsFours/nantes.jpg"
    },
    {
        id: "cajaLyon",
        name: "Caja Lyon",
        description: "3 tarteleta de frutos rojos<br/>3 marquise<br/>3 lemon pie<br/>3 havanette negro",
        fulldescription: "3 Tarteletas de Frutos Rojos: Estas tarteletas son una explosión de frescura con una mezcla de frutos rojos que contrasta perfectamente con la dulzura de la base de masa sablé.<br/>3 Marquise: Con su rico sabor a chocolate y su textura sedosa, estas marquise son un verdadero placer para los amantes del cacao.<br/>3 Lemon Pie: La combinación de la acidez del limón con la dulzura de la crema de limón y la base de masa brisa hace de estos Lemon Pie un postre deliciosamente refrescante.<br/>3 Havanette Negro: Estos dulces son una fiesta para el paladar, con su combinación de chocolate negro y coco que crea un equilibrio perfecto entre lo dulce y lo exótico.",
        stock: 12,
        price: "7000",
        category: "petitsFours",
        image: "/img/petitsFours/lyon.jpg"
    },
    {
        id: "cajaNiza",
        name: "Caja Niza",
        description: "3 cheesecake con frutos rojos<br/>3 marquise<br/>3 rogel<br/>3 cheesecake de dulce de leche",
        fulldescription: "3 Cheesecake con Frutos Rojos: Estos pequeños cheesecakes combinan la suavidad y cremosidad del queso crema con la frescura de los frutos rojos, creando un equilibrio perfecto entre lo dulce y lo ácido.<br/>3 Marquise: Con su intenso sabor a chocolate y su textura sedosa, estas marquise son un auténtico placer para los amantes del cacao.<br/>3 Rogel: Capas de dulce de leche entre hojuelas de masa sablé, coronadas con merengue italiano, hacen de estos rogel una experiencia irresistible.<br/>3 Cheesecake de Dulce de Leche: Estos cheesecakes son un homenaje a la dulzura del dulce de leche, con una base de galleta y una capa cremosa de queso crema con dulce de leche, perfectamente equilibrados en sabor y textura.",
        stock: 12,
        price: "7000",
        category: "petitsFours",
        image: "/img/petitsFours/niza.jpg"
    },
    {
        id: "cajaChocolatosa",
        name: "Caja Chocolatosa",
        description: "4 alfajor de dulce de leche<br/>4 alfajor de chocolate<br/>3 marquise<br/>3 havanette negro",
        fulldescription: "4 Alfajores de Dulce de Leche: Con su clásica combinación de dos tapas de masa suave y un relleno generoso de dulce de leche, estos alfajores son un homenaje a la dulzura tradicional.<br/>4 Alfajores de Chocolate: Una variante deliciosa de los clásicos alfajores, con tapas de masa de chocolate que encierran un relleno cremoso de dulce de leche, cubiertos con una fina capa de chocolate.<br/>3 Marquise: Estos pequeños postres de chocolate son una verdadera indulgencia, con su textura suave y cremosa que se deshace en la boca, ofreciendo un intenso sabor a cacao.<br/>3 Havanette Negro: Con su combinación de chocolate negro y coco, estos dulces son una fiesta para el paladar, con un equilibrio perfecto entre lo dulce y lo exótico.",
        stock: 12,
        price: "7000",
        category: "petitsFours",
        image: "/img/petitsFours/chocolatosa.jpg"
    },
    {
        id: "cajaDegustacion",
        name: "Caja Degustación",
        description: "1 marquise<br/>1 coco y dulce de leche<br/>1 cheesecake con frutos rojos<br/>1 lemon pie<br/>1 havanette<br/>1 apple crumble<br/>1 rogel",
        fulldescription: "Una caja degustación de petits fours es una deliciosa selección de bocados dulces, perfectos para complacer cualquier paladar exigente. Estos diminutos manjares son una mezcla exquisita de sabores y texturas, desde delicados macarons hasta suaves trufas de chocolate, pasando por crujientes galletas y exquisitos mini pasteles. Cada bocado es una obra maestra en miniatura, cuidadosamente elaborada con ingredientes de alta calidad y presentada con elegancia en una caja especialmente diseñada. Ideal para compartir con amigos en una tarde de té o como regalo gourmet, esta caja ofrece una experiencia culinaria inolvidable en cada mordisco.",
        stock: 12,
        price: "5600",
        category: "petitsFours",
        image: "/img/petitsFours/degustación.jpg"
    },
    {
        id: "cajaPersonalizada",
        name: "Caja Personalizada",
        description: "12 petits fours a elección",
        fulldescription: "Disfruta de una selección exquisita con nuestros 12 petits fours a elección. Desde clásicos como marquise de chocolate y alfajores de dulce de leche hasta opciones innovadoras como cheesecake con frutos rojos y lemon pie, cada bocado es una experiencia gourmet en miniatura. Con sabores que deleitan y texturas que sorprenden, esta variedad ofrece el placer perfecto para cualquier ocasión. Ya sea para una reunión íntima o un regalo especial, nuestros petits fours son el toque final perfecto para deleitar a tus seres queridos con una experiencia dulce y elegante.",
        stock: 12,
        price: "7600",
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