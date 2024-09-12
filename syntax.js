//Exercise 1

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const nums2= nums.map((currentElement) => {
    return currentElement * 2; 
});
console.log(nums2); 

//Exercise 2

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstTopping, secondTopping] = pizzaToppings; 
console.log(firstTopping); 
console.log(secondTopping); 

// Exercise 3 

const car = {
    make: 'Audi',
    model: 'q5',
  };
const { make, model } = car; 

console.log(make); 
console.log(model);

//Exercise 4 

const controversialPizzaToppings = [...pizzaToppings];  

console.log(controversialPizzaToppings); 

//Exercise 5 

 const myCar = { ...car }; 

 myCar.model = 'q7'

 console.log(car); 
 console.log(myCar);  
  
//Exercise 6

const propertyName = 'username';

const userProfile = {
    [propertyName]: 'alizahb'
}; 

console.log(userProfile); 

//Exercise 7 

//Exericse 8 

function descriptiveSentence(noun = 'cat', adjective = 'white') {
    return `The ${noun} is ${adjective}.`; 
};
console.log(descriptiveSentence()); 

//Exercise 9 
let pizzaType = 'not tasty';  
let pizzaMessage = pizzaType === 'tasty' ? 'yum' : 'yuck';
console.log(pizzaMessage); 

//Exercise 10

const localLangConfig = null; 
const LANG = localLangConfig || 'en'; 
console.log('Language setting:', LANG); 


const userSavedTheme = 'dark'; // Change to 'dark', 'contrast', etc., or keep it null
const USER_THEME = userSavedTheme || 'light'; 
console.log('User theme setting:', USER_THEME);

//Exercise 11 

const adventurer = {
    name: 'Alice',
  };
  let cat = adventurer.cat?.age;  
  
  console.log(cat);
  




  
