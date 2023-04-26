let productos = [
    { id: '1' , marca: 'Adidas', name: "Adidas Originals Forum Low", stock:50, price: 40000, photo:'/images/Adidas-id1.webp', description: "Forum Low W es un nuevo producto para Mujer de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conocés Forum Low W podés dejar una reseña abajo; siempre nos encanta conocer tu opinión." },
    { id: '2' , marca: 'Nike', name: "Jordan Air 1 Mid", stock:50, price: 62000, photo:'/images/Jordan-id2.webp', description: "Inspirada en el AJ1 original, esta edición de corte mid mantiene el look icónico que te encanta, y los colores selectos y el cuero impecable le dan una identidad distintiva."},
    { id: '3' , marca: 'Adidas', name: "Adidas Originals NMD R1", stock:50, price: 49000, photo:'/images/Adidas-id3.webp', description: "Diseñamos las zapatillas adidas NMD_R1 para ayudarte a enfrentar tus aventuras y desafíos diarios. Pero este par también fue creado para celebrar tu amor por el deporte. Los colores brillantes se inspiran en los colores de los equipos de fútbol, un homenaje que podés lucir en las gradas o en las calles de la ciudad. La amortiguación BOOST mantiene tus pies cómodos sin importar si estás alentando al equipo de tu corazón o enfrentándote a un nuevo día." },
    { id: '4' , marca: 'Adidas', name: "Adidas Niteball 2.0", stock:50, price: 41000, photo:'/images/Adidas-id4.webp', description: "Mantené tus pies cómodos y tu estilo impecable en todo momento con estas zapatillas adidas. Usalas con tus shorts de running favoritos para lucir un look deportivo y casual. El exterior de malla ayuda a mantener tus pies frescos, mientras que la amortiguación ultraliviana te ofrece soporte en cada uno de tus pasos." },
    { id: '5' , marca: 'Nike', name: "Nike Air Force 1 React", stock:50, price: 71000, photo:'/images/Nike-id5.webp', description: "Más rápido que 1, 2, 3: el calzado de básquetbol original se pone al instante para que puedas ponerte en marcha. Su sistema FlyEase que permite poner y quitar el calzado con facilidad brinda una experiencia de manos libres, mientras que el cuero fresco ofrece el color más impecable para brindar el mejor uso. Sí, es todo lo que amas y más."},
    { id: '6' , marca: 'Puma', name: "Puma TRC Blaze", stock:50, price: 40000, photo:'/images/Puma-id6.webp', description: "El equipo Mercedes-AMG Petronas Motorsport conoce el potencial del grupo para crear algo más fuerte que el individuo. Las zapatillas de automovilismo Mercedes F1 TRC Blaze se inspiran en este ethos, pero también aluden a los modelos de running icónicos de PUMA con un empeine que mezcla la malla con revestimientos de gamuza. Además, combinan el famoso trío de las zapatillas Trinomic con amortiguación, flexibilidad y estabilidad para ofrecer una sensación y un performance del más alto nivel."},
    { id: '7' , marca: 'Adidas', name: "Adidas Originals Retropy", stock:50, price: 58000, photo:'/images/Retropy-id7.webp', description:"Experimentás una sensación inmediata de tranquilidad cuando dejás atrás la ciudad y te sumergís en la naturaleza. Algo similar a lo que sentís cuando te ponés estas zapatillas adidas Retropy Adisuper. No solo por las líneas y formas fluidas que se inspiran en la naturaleza, sino también por la comodidad. Algo que ofrecen por montones gracias a la mediasuela de EVA a base de materiales biológicos." },
    { id: '8' , marca: 'Adidas', name: "Adidas Originals Astir", stock:50, price: 43000, photo:'/images/Astir-id8.webp', description: "Estas zapatillas adidas Astir lucen un diseño extravagante inspirado en los clásicos diseños de los años 2000. La base es una silueta de running, pero los toques de colores y estampados esparcidos a lo largo del exterior pueden distraerte de ese hecho. Dijimos casi, ya que no hay duda de que las líneas dinámicas y la suela inspirada en el rendimiento provienen del deporte, no importa cuánta actitud se les agregue."},
    { id: '9' , marca: 'Nike', name: "Nike Dunk Low", stock:50, price: 52000, photo:'/images/Dunk-id9.webp', description: "El Nike Dunk Low es esencial para tu armario. Este ícono del básquetbol de mediados de los 80 regresa con una confección superduradera y los colores del original. La almohadilla en el tobillo y la tracción de goma lo convierten en todo un éxito."},
    { id: '10' , marca: 'Nike', name: "Nike Air Force 1 07SE", stock:50, price: 55000, photo:'/images/Force-id10.webp', description:"Tu calzado favorito regresa en un estilo de diseño low. Los nuevos colores y texturas te brindan un look elegante, materiales y detalles premium que agregan una sensación familiar. Como sea que lo veas, no hay quien le gane." },
    { id: '11' , marca: 'Nike', name: "Nike Crater Impact", stock:50, price: 46000, photo:'/images/Crater-id11.webp', description: "El Nike Crater Impact forma parte de nuestro compromiso con la sustentabilidad para transformar los desechos en un calzado con menor impacto. Confeccionado con al menos un 25% de material reciclado por peso, aporta opciones de diseño únicas que reducen los desechos en comparación con los métodos tradicionales, como Swoosh bordado, revestimientos eficientes y una entresuela de espuma Crater, por supuesto." },
    { id: '12' , marca: 'Adidas', name: "Adidas Originals Stan Smith", stock:50, price: 41000, photo:'/images/Stan-id12.webp', description: "El look que ya conocés y adorás con una suela de plataforma Puede que sea solo un pequeño cambio, pero hace toda la diferencia para estas zapatillas Stan Smith de adidas. La suela elevada se destaca aún más con un ribete de suela de doble capa que enfatiza las proporciones. El exterior suave de primera calidad le añade un elemento premium al modelo, convirtiéndolo en el balance perfecto entre un look de bajo y alto perfil, y en el par de zapatillas ideal para combinar con todo."}
]
   

export const mFetch = (id) =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(!id ? productos : productos.find(producto => producto.id === id))
        }, 500)
    })
} 