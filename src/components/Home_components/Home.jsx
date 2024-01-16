import React, { useEffect, useState } from "react";
import CoffeeCard from "../../utils/CoffeeCard";

const Home = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/coffee")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);
  return (
    <>
      <h3 className="font-extrabold text-5xl text-green-400 flex justify-center mb-5 mt-12 ">
        OUR COFFEE LIST
      </h3>
     <div className="container mx-auto grid md:grid-cols-2 ">
     {
      coffees.map(coffee=><CoffeeCard coffees={coffees} setCoffees={setCoffees}  key={coffee._id} coffee={coffee}></CoffeeCard>)
      }
     </div>
    </>
  );
};

export default Home;
