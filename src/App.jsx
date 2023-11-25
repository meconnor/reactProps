import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './components/Greeter'
import Die from './components/Die'
import ListPicker from './components/ListPicker'
import DoubleDice from './components/DoubleDice'
import Heading from './components/Heading'
import ColorList from './components/ColorList'
import Slots from './components/Slots'
import ShoppingList from './components/ShoppingList'
import PropertyList from './components/PropertyList'
import Clicker from './components/Clicker'
import Form from './components/Form'
import ClickerTwo from './components/ClickerTwo'
import Counter from './components/Counter'
import Toggler from './components/Toggler'
import ToggleCounter from './components/ToggleCounter'
import ColorBox from './components/ColorBox'
import ColorBoxGrid from './components/ColorBoxGrid'

// const data = [
//   { id: 1, item: 'eggs', quantity: 12, completed: false},
//   { id: 2, item: 'milk', quantity: 1, completed: true},
//   { id: 3, item: 'chicken breasts', quantity: 4, completed: false},
//   { id: 4, item: 'carrots', quantity: 6, completed: true},
// ];


// const properties = [
//   {id: 129031, name: "Desert Yurt", rating: 4.9, price: 150},
//   {id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250},
//   {id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300},
//   {id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120},
//   {id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140},
//   {id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96},
// ];

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#3F51B5",
  "#673AB7",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

function App() {
  return (
    <div>
      <ColorBoxGrid colors={colors} /> 
      {/* <ColorBox colors={colors} /> */}
       {/* <Counter /> */}
      {/* <Counter  /> */}
      {/* <ClickerTwo message="HI!" buttonText="Click me!" />
      <ClickerTwo message="Please stop clicking me!" buttonText="Do not click me!" /> */}
      {/* <Form />
      <Clicker /> */}
      {/* <PropertyList properties={properties} /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <Slots val1="#" val2="#" val3="#" /> 
      <Slots val1="#" val2="/" val3="#" />  */}
      {/* <Heading color="lightblue" text="Welcome" fontSize="20px" />
      <Heading text="Connor" />
      <DoubleDice />

      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <ColorList colors={["orangered", "slategrey", "olive"]} /> */}

      {/* <DoubleDice />
      <DoubleDice />
      <ListPicker values={[1,2,3]} />
      <ListPicker values={["wtf ", " fuck u ", " omg lol"]} />
      <Die numSides={20}/>
      <Die numSides={6}/>
      <Die numSides={10}/>
      <Greeter person="Connor" from="React Dev Team" />
      <Greeter /> */}
    </div>
  )
}

export default App
