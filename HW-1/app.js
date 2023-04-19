
const setterGenerator = (propName) => {
  return function(value) {
    this[propName] = value;
    return this;
  }
};



const user = {}
const nameSetter = setterGenerator('name')
const f = nameSetter.bind(user);
f('Jack');
console.log(user) // {name: ‘jack’}




