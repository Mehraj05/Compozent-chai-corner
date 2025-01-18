import NewCollectionHeader from "./new-collection-header/new-collections-header";
import Cards from "./collection-cards/collection-cards";
import "./new-collection.css";
const NewCollection = () => {
  const cards_info = [
    {
      image:
        "https://patidarrajwadichai.com/wp-content/uploads/2024/07/Masala-Chai-Benefits-856x500.jpg",
      title: "masala chai",
      subTitle: "A popular choice on cold mornings",
      price: 1.0,
      id : 1
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrLEX5T-lWsZBtHm98SrRWHoDigAaDIzP5CRNCDR7WgoY6tvzC2SeGDZ_C7zTs974gjo&usqp=CAU",
      title: "ginger chai",
      subTitle: "popular hot tea made with grated ginger",
      price: 1.4,
      id : 2
    },
    {
      image:
        "https://jyyna.co.uk/wp-content/uploads/2024/08/cup-of-masala-chai.webp",
      title: "cardamom chai",
      subTitle: "Also known as Elaichi Chai",
      price: 1.7,
      id : 3
    },
    {
      image:
        "https://assets.bonappetit.com/photos/57acca021b334044149751b5/16:9/w_2560%2Cc_limit/bas-best-masala-chai.jpg",
      title: "Bombay Cutting Chai",
      subTitle: "A modified masala chai",
      price: 2.0,
      id : 4
    },
    {
      image:
        "https://shivanilovesfood.com/wp-content/uploads/2022/08/Chai-6.jpg",
      title: "Tulsi Chai",
      subTitle: "made with holy basil, an herb",
      price: 3.0,
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
