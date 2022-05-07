import { ImageSourcePropType } from "react-native";

interface PricesProps {
  [key: string]: number;
}

interface PizzaProps {
  name: string;
  desc: string;
  prices: PricesProps;
  pic: ImageSourcePropType;
}

export const pizzas: Array<PizzaProps> = [
  {
    name: "Italian",
    desc: "tomato sauce & mozzarella",
    prices: { s: 5.5, m: 7.5, l: 9.5 },
    pic: require("../../../assets/itallian-pizza.png"),
  },
  {
    name: "Veggie",
    desc: "fresh veggies & cheese",
    prices: { s: 6, m: 8, l: 10 },
    pic: require("../../../assets/veggie-pizza.png"),
  },
  {
    name: "Greek",
    desc: "spicy pizza with mozzarella",
    prices: { s: 7.5, m: 9.5, l: 11.5 },
    pic: require("../../../assets/greek-pizza.png"),
  },
];
