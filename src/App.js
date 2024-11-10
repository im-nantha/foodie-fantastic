import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>PIZZA HEADER</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <h1>PIZZA FOOTER</h1>
    </footer>
  );
}

const pizzaData = [
  {
    name: "spagatti",
    pizzaImage: "pizza/pizza-image.jpg",
    pizzaIngredient: "tomato, cheese",
    pizzaAmount: 10,
  },
  {
    name: "Papparoni",
    pizzaImage: "pizza/pizza-image.jpg",
    pizzaIngredient: "sauce, pepper",
    pizzaAmount: 20,
  },
  {
    name: "Mutton pizza",
    pizzaImage: "pizza/pizza-image.jpg",
    pizzaIngredient: "mutton, gravy",
    pizzaAmount: 30,
  },
  {
    name: "chicken pizza",
    pizzaImage: "pizza/pizza-image.jpg",
    pizzaIngredient: "chicken, gravy",
    pizzaAmount: 40,
  },
  {
    name: "ombellate pizza",
    pizzaImage: "pizza/pizza-image.jpg",
    pizzaIngredient: "egg, gravy",
    pizzaAmount: 40,
  },
  {
    name: "yummy pizza",
    pizzaImage: "pizza/pizza-image.jpg",
    pizzaIngredient: "puffs, gravy",
    pizzaAmount: 40,
  },
];

function Menu() {
  const totalPizza = pizzaData;
  // const totalPizza = 0;

  return (
    <main>
      <h2>our menu</h2>
      {/* {totalPizza && (
        <ul className="menu-wrapper">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}
      {totalPizza ? (
        <ul className="menu-wrapper">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>we are still working in progress :-|</p>
      )}
    </main>
  );
}

/*function Pizza(props) {
  return (
    <li className="pizza-cards">
      <div className="pizza-wrapper">
        <img
          className="pizza-wrapper-image"
          src={props.pizzaObj.pizzaImage}
          alt={props.pizzaObj.pizzaName}
        />
      </div>
      <div className="pizza-content">
        <h2>{props.pizzaObj.pizzaName}</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{props.pizzaObj.pizzaIngredient}</p>
          <p>{props.pizzaObj.pizzaAmount}</p>
        </div>
      </div>
    </li>
  );
}*/

function Pizza({ pizzaObj }) {
  // props destructuring by adding same object name in above function parameter
  return (
    <li className="pizza-cards">
      <div className="pizza-wrapper">
        <img
          className="pizza-wrapper-image"
          src={pizzaObj.pizzaImage}
          alt={pizzaObj.pizzaName}
        />
      </div>
      <div className="pizza-content">
        <h2>{pizzaObj.pizzaName}</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{pizzaObj.pizzaIngredient}</p>
          <p>{pizzaObj.pizzaAmount}</p>
        </div>
      </div>
    </li>
  );
}

export default App;

{
  /* <Pizza pizzaName="spagatti" pizzaImage="pizza/pizza-image.jpg"
          pizzaIngredient="tomato, cheese" pizzaAmount={10} />
        <Pizza pizzaName="Papparoni" pizzaImage="pizza/pizza-image.jpg"
          pizzaIngredient="sauce, pepper" pizzaAmount={20} />
        <Pizza pizzaName="Mutton pizza" pizzaImage="pizza/pizza-image.jpg"
          pizzaIngredient="mutton, gravy" pizzaAmount={30 + 2} /> */
}
