import Categories from "./Categories";
import Menu from "./Menu";
import Title from "./Title";
import menu from "./data";
import { useState } from "react";

// const tempCategories=menu.map((item)=>item.category)
// const tempSet=new Set(tempCategories)
// const tempItems=['all',...tempSet]
// console.log(tempItems)
const allCategories=['all',...new Set(menu.map((item)=>item.category))]
// console.log(allCategories)

const App = () => {
 const[menuItems,setMenuItems]= useState(menu)
 const [categories, setCategories]=useState(allCategories)
 const filterItems=(category)=>{
  if(category === 'all'){
    setMenuItems(menu)
    return;
  }
  console.log(category)
  const newItems=menu.filter((item)=>{
    return item.category === category
  })
  setMenuItems(newItems)
 }
//  console.log(categories)
  return <main>
    <section className="menu">
      <Title text="our menu"/>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems} />
    </section>
  </main>
};
export default App;
 