# JavaScript Concepts Explained

## 1. Loose Equality & Type Coercion
JavaScript performs **type coercion** when using `==`.  
An empty array becomes `false`, and `![]` also becomes `false`.  
So the comparison results in `false == false`, which is **true**.

---

## 2. Function Return
A function that returns the sum of two numbers will output their addition.  
Example: Passing 2 and 3 returns **5**.

---

## 3. Arrays & Loops
Arrays store multiple values.  
Loops help iterate through each element using index positions starting from 0.  
Each value is accessed and processed one by one.

---

## 4. Function Scope vs Global Scope
Variables inside a function are **local**.  
They do not affect variables declared outside the function.

- Inside function → local value is used  
- Outside function → global value remains unchanged  

---

## 5. Hoisting: Function vs Variable
JavaScript hoists both variables and functions.  
However, **functions are hoisted before variables**.

- Function declaration is available first  
- Variable is hoisted as `undefined`  
- Later, variable assignment overrides the function  

---

## 6. Truthy & Falsy Values
Non-empty strings are always **truthy** in JavaScript.  
Even `"0"` is treated as true.  
So the condition executes the `if` block.

---

## 7. String + Number
When a number is added to a string, JavaScript converts the number into a string.  
This results in **string concatenation**, not arithmetic addition.

---

## 8. Array Reference
Arrays are stored by **reference**.

- Assigning one array to another variable does not create a copy  
- Both variables point to the same array  
- Changes in one affect the other  

---

## 9. Hoisting Inside Functions
Variables declared with `var` are hoisted inside functions.  
Before assignment, they are initialized as `undefined`.

---

## 10. Block Scope vs Function Scope
- `var` is **function-scoped** → accessible outside blocks  
- `let` is **block-scoped** → limited to the block  

Accessing a `let` variable outside its block results in an error.

---

## Summary
These examples demonstrate key JavaScript concepts:

- Type coercion  
- Scope (global, function, block)  
- Hoisting  
- Reference vs value  
- Truthy / falsy evaluation  

Understanding these helps prevent unexpected behavior in JavaScript.
### Connect With Me 🤝 :
www.linkedin.com/in/harshaasg
