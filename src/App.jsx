import data from "./data";
import "./style.css";
const App =() => (
    <div className="container mx-auto p-4 bg-gray-200 text-center">
      <h1 className="text-4xl font-bold mb-6 ">Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-3/4">
        <div className="section-1 ">
          <h2 className="text-2xl font-semibold mb-4">Uzbek taomlari</h2>
          {data.UzbekFoods.map((meal) => (
            <div className="meal bg-white rounded-lg shadow-lg p-4 mb-4 min-h-[370px]" key={meal.name}>
              <img src={meal.img} alt={meal.name} className="w-full h-48 object-cover rounded-md mb-4"/>
              <p className="name text-lg font-bold">{meal.name}</p>
              <p className="price text-green-600 text-lg">${meal.price}</p>
              <p className="description text-gray-700">{meal.desc}</p>
            </div>
          ))}
        </div>
        <div className="section-2">
          <h2 className="text-2xl font-semibold mb-4">Turkish taomlari</h2>
          {data.TurkishFoods.map((meal) => (
            <div className="meal bg-white rounded-lg shadow-lg p-4 mb-4 min-h-[370px]" key={meal.name}>
              <img src={meal.img} alt={meal.name} className="w-full h-48 object-cover rounded-md mb-4"/>
              <p className="name text-lg font-bold">{meal.name}</p>
              <p className="price text-green-600 text-lg">${meal.price}</p>
              <p className="description text-gray-700">{meal.desc}</p>
            </div>
          ))}
        </div>
        <div className="section-3">
          <h2 className="text-2xl font-semibold mb-4">Uyg'ur taomlari</h2>
          {data.UygurFoods.map((meal) => (
            <div className="meal bg-white rounded-lg shadow-lg p-4 mb-4 min-h-[370px]" key={meal.name}>
              <img src={meal.img} alt={meal.name} className="w-full h-48 object-cover rounded-md mb-4"/>
              <p className="name text-lg font-bold">{meal.name}</p>
              <p className="price text-green-600 text-lg">${meal.price}</p>
              <p className="description text-gray-700">{meal.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

export default App;
