import { useState } from 'react';
import SingleCat from "./SingleCat";

function BigCats() {
  const initialCats = [
    {
      id: 1,
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      image:
        "https://transforms.stlzoo.org/production/animals/cheetah-01-01.jpg?w=1200&h=1200&auto=compress%2Cformat&fit=crop&dm=1658942789&s=16e742d7a9628bb93b63a7922179b43e",
    },
    {
      id: 2,
      name: "Cougar",
      latinName: "Puma concolor",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg",
    },
    {
      id: 3,
      name: "Jaguar",
      latinName: "Panthera onca",
      image:
        "https://www.worldanimalprotection.org/siteassets/images/article/hero.jpg",
    },
    {
      id: 4,
      name: "Leopard",
      latinName: "Panthera pardus",
      image:
        "https://i.pinimg.com/564x/5e/80/52/5e8052b1060ed51d9fefe6e1c8cce569.jpg",
    },
    {
      id: 5,
      name: "Lion",
      latinName: "Panthera leo",
      image:
        "https://media.istockphoto.com/id/182474476/photo/lion.jpg?s=612x612&w=0&k=20&c=Od3in40lsBUlL1OqKQEmAK9wPaiy7ZzcDafr8qRrH30=",
    },
    {
      id: 6,
      name: "Snow leopard",
      latinName: "Panthera uncia",
      image:
        "https://media.istockphoto.com/id/521375354/photo/snow-leopard-in-snow-storm-iii.jpg?s=612x612&w=0&k=20&c=eWC_IuA1HPGo3YESfHaAKVHOzCKuwjF2i1GXn4Mvce8=",
    },
    {
      id: 7,
      name: "Tiger",
      latinName: "Panthera tigris",
      image:
        "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg",
    },
  ];

  const [cats, setCats] = useState(initialCats);

  const sortAlphbetically = () => {
    const sorted = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sorted);
  };

  const reverseList = () => {
    const reversed = [...cats].reverse();
    setCats(reversed);
  };

  const filterPanthera = () => {
    const filtered = initialCats.filter(cat => cat.latinName.startsWith("Panthera"));
    setCats(filtered);
  };

  const resetList = () => {
    setCats(initialCats);
  };

  return (
    <div className="BigCats">
      <h2>Big Cats</h2>

      <div style={{ marginBottom: "1em"}}>
        <button onClick={sortAlphbetically}>Sort A-Z</button>
        <button onClick={reverseList}>Reverse List</button>
        <button onClick={filterPanthera}>Filter Panthera</button>
        <button onClick={resetList}>Reset List</button>
      </div>

      <ul>
        {cats.map((cat) => (
          <SingleCat
            key={cat.id}
            name={cat.name}
            latinName={cat.latinName}
            image={cat.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BigCats;
