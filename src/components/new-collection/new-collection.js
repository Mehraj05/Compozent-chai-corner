import NewCollectionHeader from "./new-collection-header/new-collections-header";
import Cards from "./collection-cards/collection-cards";
import "./new-collection.css";
const NewCollection = () => {
  const cards_info = [
    {
      image:
        "https://www.tibertaber.com/cdn/shop/files/TiberTaberBabyBoyCreamSilkbandhgalaTTB23_085_3.jpg?v=1701842604&width=500",
      title: "Kid section",
      subTitle: "All types of kid wear",
      price: 1.0,
      id : 1
    },
    {
      image:
        "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/31100584/2024/12/12/8b35382d-87fb-4784-a95b-95d52323a92f1733983657189-Mr-Bowerbird-Men-Blazers-2351733983656495-1.jpg",
      title: "Men section",
      subTitle: "casual wear, formal wear, sportswear",
      price: 1.4-6,
      id : 2
    },
    {
      image:
        "https://img.faballey.com/images/Product/JMP00019Z/d3.jpg",
      title: "women section",
      subTitle: "Lehengas, and Indo-Western gowns ",
      price: 1.7-9,
      id : 3
    },
    {
      image:
        "https://manyavar.scene7.com/is/image/manyavar/SHOS220D_303-Beige_101.0527_29-07-2024-21-28:283x395",
      title: "treditional section",
      subTitle: "sarees, kurtas, and sherwanis",
      price: 2.0-7,
      id : 4
    },
    {
      image:
        "https://images.asos-media.com/products/pullbear-contrast-stitch-wide-leg-cargo-in-brown/207550040-1-brown/?$n_480w$&wid=476&fit=constrain",
      title: "Gen-Z section",
      subTitle: " large sweatshirts, baggy pants, and loose-fitting t-shirts,",
      price: 2.0-5,
      id : 5
    },
  ];
  return (
    <div className="new-collection">
      <NewCollectionHeader />
      <div className="list-cards">
        {cards_info.map((item, index) => {
          return (
            <Cards
              id={item.id}
              key={index}
              image={item.image}
              title={item.title}
              sub_title={item.subTitle}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
