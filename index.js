// Write your solution here!
const cats = ["Milo","Otis","Garfield"
]
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
 }
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
function appendCat(name) {
return appendCat =[...cats,name];
}
function prependCat(name) {
    return prependCat =[name,...cats];
}
function removeLastCat(){
    const removeLastCat= cats.slice(0,cats.length-1);
    return removeLastCat
  }
function removeFirstCat(){
    const removeFirstCat=cats.slice(1)
    return removeFirstCat
}
