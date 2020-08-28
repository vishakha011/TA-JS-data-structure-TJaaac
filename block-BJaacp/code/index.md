1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]` //false both are pointing to different memory address
- What is the value of obj? // { name: 'Arya' }
- `obj == newObj` //false both are pointing to different memory address
- `obj === newObj` //false both are pointing to different memory address
- `user === newObj` //false both are pointing to different memory address
- `user == newObj` //false both are pointing to different memory address
- `user == obj` // true copy by reference
- `arr == arr2` // true copy by reference
- `arr === arr2` // true copy by reference

2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

<!-- To add this image here use ![name](./hello.jpg) -->
![assignment-pic](./assignment-pic.jpeg) 

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1);
console.log(person2);
```
person1 - { name: 'Alex', age: 25 }
when called the erson.age is reassigned to 25.
person2 - { name: 'John', age: 50 } 
when called asseigned to a new memory address

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); //1. true - both the references point to the same object on the memory address
console.log(user.brothers.length === brothers.length); //2. true - both the references point to the same object on the memory address
```
