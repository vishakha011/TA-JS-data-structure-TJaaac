```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`
[assignment-pic](./assignment-pic.jpeg)
<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true newUser points to same address as user
- `user === newUser;` //true newUser points to same address as user and thier data type is same.
- `user.name === newUser.name;`// true newUser points to same address as user.
- `user.name == newUser.name;`// true newUser points to same address as user.
- `user.sibling == newUser.sibling;`// true newUser points to same address as user.
- `user.sibling === newUser.sibling;`// true newUser points to same address as user.
- `user.sibling == allBrothers;`//false allBrothers points to a different memory address. 
- `user.sibling === allBrothers;`//false allBrothers points to a different memory address. 
- `brothersCopy === allBrothers;`// false allBrothers points to a different memory 
- `brothersCopy == allBrothers;`// false allBrothers points to a different memory 
- `brothersCopy == user.sibling;`// true and brothersCopy and user.sibling pointing to the same reference address
- `brothersCopy === user.sibling;`//true and brothersCopy and user.sibling pointing to the same reference address
- `brothersCopy[0] === user.sibling[0];`//true and brothersCopy and user.sibling pointing to the same reference address
- `brothersCopy[1] === user.sibling[1];` //true and brothersCopy and user.sibling pointing to the same reference address
- `user.sibling[1] === newUser.sibling[1];`//true and brothersCopy and user.sibling pointing to the same reference address
