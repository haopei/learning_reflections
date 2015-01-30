# Eloquent Javascript

## Lexical Scoping
The approach to variable visibility where each local scope can see each local scope that contains it, is called lexical scoping.

## Javascript Facts

- Functions are the only things that can create new scope. Contrary to other languages, blocks of code `{...}` do not create new scope.
- the upcoming *let* keyword lets you create a variable which is local to an enclosing block, not an enclosing function.
- function 'declaration' `function myFunc() {...}` is hoisted to the top of their scope and can be used by anything in that scope. Do not use form of function declaration inside conditional or looping blocks of code.
- local variables inside functions are recreated for every call. This means multiple instances of that variable can exist at the same time without conflict.
- The feature of being able to reference a specific instance of a local variable in an enclosing function is called closure.
- A function's parameter is also its local variable.
- a function that calls itself is called *recursive*.

## Call Stacks
Everytime a function runs, it has to remember the context in which it executes. When the function finishes running, it jumps back to the code which called it, and continues running if there is more code to run. The program remembers where to jump back because of the call stack.

## Arguments
- if a function is passed more arguments than it should accept, the function runs without error and the remaining arguments are ignored.

## Data Structures: Objects and Arrays
- Objects allow us to group values, so that we may build complex structures.
- javascript uses the `for (i in object) {...}` to loop inside an object.
- You can use objects for mapping using map

```javascript
  var map = {};
  map['key1'] = 'val1';
  map['key2'] = 'val2';
  map.hasOwnProperty('key1'); // >>> true
  if ('key1' in map) {...}
```

## Coding Guidelines
- Don't worry about code efficiency unless the code proves to be too slow.

## Chapter 6
#### The Secret Life of Objects
- The Function.prototype.call() method calls a function with a given 'this' value and the function's arguments provided individually.
- The Functio.prototype.apply() method calls a function with a given 'this' value and arguments provided as an array (or an array-like object).
- Almost all objects have a prototype object, which is a fallback source of properties. When an property is requested of an object, which it does not contain, the object's prototype (then, its subsequent prototypes) is searched for the requested property.
- The Object.prototype is the ancestral prototype from which almost all prototypes derive. Some objects may derive from a more immediate prototype, which ultimately derives from the Object.prototype.
- Functions derive from Function.prototype, while arrays derive from Array.prototype
- The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).
- Object.getPrototypeOf(Array.prototype) >>> Object.prototype
- Using var killerRabbit = Object.create(protoRabbit) will allow killerRabbit to inherit all the properties of protoRabbit.
- In Javascript, calling a function with the 'new' keyword causes it to be treated as a constructor. The 'this' keyword will be bound to the fresh object. An object created with 'new' is said to be an instance of the constructor. Example:

```javascript
  function Rabbit(type) {
    this.type = type;
  }
  var killerRabbit = new Rabbit('killer');
```
- Constructors, and all functions, automatically gets an empty object called 'prototype'
- There is a difference between prototypes associated with a Constructor and prototypes associated with object instances of that constructor:

```javascript
  Rabbit.prototype === Object.getPrototypeOf(killerRabbit)
  // true
  // The new object’s prototype will be the object found in the prototype property of the constructor function
  Object.getPropertyOf(Rabbit)
  // function Empty() {}
  // The actual prototype of a constructor is Function.prototype since constructors are functions.
```
- New properties can be added to an object instance to overwrite an existing property in its prototype. The prototype property will simply not affect the object anymore.


