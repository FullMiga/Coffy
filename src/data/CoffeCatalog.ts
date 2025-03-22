export type coffeeCatalog = {
  imageURL: string;
  title: string;
  price: number;
  description: string;
  tags: string[];
}

export const coffeeCatalog = [
  {imageURL: "./coffee/coffee_traditionalEspresso.png", title: "Traditional Espresso", price: 9.90, description: "The traditional coffee made with hot water and ground beans", tags: ["Traditional"]},
  {imageURL: "./coffee/coffee_americanEspresso.png", title: "American Espresso", price: 9.90, description: "Diluted espresso, less intense than the traditional one", tags: ["Traditional"]},
  {imageURL: "./coffee/coffee_creamyEspresso.png", title: "Creamy Espresso", price: 9.90, description: "Traditional espresso coffee with a creamy foam", tags: ["Traditional"]},
  {imageURL: "./coffee/coffee_icedEspresso.png", title: "Iced Espresso", price: 9.90, description: "A drink made with espresso coffee and ice cubes", tags: ["Traditional", "Iced"]},
  {imageURL: "./coffee/coffee_coffeeWithMilk.png", title: "Coffee with Milk", price: 9.90, description: "Half and half of traditional espresso with steamed milk", tags: ["Traditional", "With Milk"]},
  {imageURL: "./coffee/coffee_latte.png", title: "Latte", price: 9.90, description: "A shot of espresso with twice the milk and creamy foam", tags: ["Traditional", "With Milk"]},
  {imageURL: "./coffee/coffee_cappuccino.png", title: "Cappuccino", price: 9.90, description: "A cinnamon-flavored drink made with equal parts coffee, milk, and foam", tags: ["Traditional", "With Milk"]},
  {imageURL: "./coffee/coffee_macchiato.png", title: "Macchiato", price: 9.90, description: "Espresso coffee mixed with a little hot milk and foam", tags: ["Traditional", "With Milk"]},
  {imageURL: "./coffee/coffee_mocaccino.png", title: "Mocaccino", price: 9.90, description: "Espresso coffee with chocolate syrup, a little milk, and foam", tags: ["Traditional", "With Milk"]},
  {imageURL: "./coffee/coffee_hotChocolate.png", title: "Hot Chocolate", price: 9.90, description: "A drink made with chocolate dissolved in hot milk and coffee", tags: ["Special", "With Milk"]},
  {imageURL: "./coffee/coffee_cuban.png", title: "Cuban", price: 9.90, description: "Iced espresso drink with rum, heavy cream, and mint", tags: ["Special", "Alcoholic", "Iced"]},
  {imageURL: "./coffee/coffee_hawaiian.png", title: "Hawaiian", price: 9.90, description: "A sweetened drink made with coffee and coconut milk", tags: ["Special"]},
  {imageURL: "./coffee/coffee_arabian.png", title: "Arabian", price: 9.90, description: "A drink made with Arabica coffee beans and spices", tags: ["Special"]},
  {imageURL: "./coffee/coffee_irish.png", title: "Irish", price: 9.90, description: "A coffee-based drink with Irish whiskey, sugar, and whipped cream", tags: ["Special", "Alcoholic"]},
];