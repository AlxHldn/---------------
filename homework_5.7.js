let myMap = new Map();

myMap.set("Name", "Alex");
myMap.set("Age", 27);
myMap.set(true, false);

for (let name of myMap.keys()) {
  console.log(`Ключ - ${name} , значение - ${myMap.get(name)}`);
}
