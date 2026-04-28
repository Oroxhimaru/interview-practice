🔥 JavaScript Interview Question #4
❓ Difference between var, let, and const

👉 Ye question almost har interview me aata hai ❗

✅ Simple Answer (Roman Urdu)
Keyword	Scope	Re-declare	Re-assign
var	Function scope	✅ Yes	✅ Yes
let	Block scope	❌ No	✅ Yes
const	Block scope	❌ No	❌ No
🧠 var Example
var x = 10;
var x = 20; // allowed
x = 30;     // allowed

👉 Problem: var scope issue create karta hai, is liye avoid kiya jata hai.

🧠 let Example
let y = 10;
// let y = 20 ❌ error
y = 20; // allowed

👉 let safe hai aur zyada use hota hai.

🧠 const Example
const z = 10;
// z = 20 ❌ error

👉 const ka matlab value change nahi ho sakti.

⚠️ Lekin object me:

const user = { name: "Hassan" };
user.name = "Ali"; // ✅ allowed
🎯 Interview Tip

Bolna:

Use const by default, agar value change ho to let.


🔥 JavaScript Interview Question #5
❓ What is scope in JavaScript?
✅ Answer (Roman Urdu)

Scope ka matlab hota hai variable kahan accessible hai.

Types:

1️⃣ Global Scope
2️⃣ Function Scope
3️⃣ Block Scope

🧠 Example
let a = 10; // global

function test() {
  let b = 20; // function scope
  if (true) {
    let c = 30; // block scope
  }
}

👉 c sirf if ke andar milega.


question random : Block scope kia hai, jahan tak mai n parha hai, kesi kisam ki conditions mai {} k andr variable acceess hotay usko block scope kehtay, lekin kia yeh sirf for loop, while, mai hotay ya inkay illawa bhi block scope hotay

Block Scope kya hota hai?

Block scope ka matlab hota hai:

Jo cheez {} ke andar declare ho, wo sirf usi {} ke andar accessible ho

⚠️ Important:
Block scope sirf let aur const ke sath hota hai
var block scoped nahi hota

Block kaha kaha hota hai?

❌ Sirf for aur while tak limited nahi hai
✅ Jahan bhi {} aata hai (kuch cases mai), wahan block scope hota hai

1️⃣ if / else block
if (true) {
  let x = 10;
  const y = 20;
}

console.log(x); // ❌ error

✔ x aur y sirf if ke block ke andar hain

2️⃣ for loop (common example)
for (let i = 0; i < 3; i++) {
  console.log(i); // ✅
}

console.log(i); // ❌ error

✔ i sirf loop ke andar accessible

3️⃣ while loop
let count = 0;

while (count < 2) {
  let msg = "Hello";
  count++;
}

console.log(msg); // ❌ error
4️⃣ Function ke andar block

Function ka apna function scope hota hai, lekin andar ke {} block scope banatay hain

function test() {
  if (true) {
    let a = 5;
  }
  console.log(a); // ❌ error
}
5️⃣ Simple block {} (without loop / condition)

Yeh kam use hota hai lekin valid JS hai:

{
  let secret = "hidden";
}

console.log(secret); // ❌ error

✔ Yeh bhi block scope hai

❗ var kyun block scoped nahi hota?
if (true) {
  var x = 100;
}

console.log(x); // ✅ 100

⚠️ var sirf function scoped hota hai, block scoped nahi

📌 Summary (yaad rakhne ka formula)

{} = block

let & const → block scoped

var → ❌ block scoped nahi

Block hota hai:

if / else

for

while

function ke andar blocks

even simple {}


🔥 JavaScript Interview Question #6
❓ What is hoisting?
✅ Answer (Easy Roman Urdu)

Hoisting ka matlab hai ke JavaScript variables aur functions ko upar le jati hai execution se pehle.

🧠 Example
console.log(x);
var x = 5;

👉 Output:

undefined

❓ Kyun?
👉 Kyun ke var hoist hota hai.

❌ let aur const
console.log(y);
let y = 10; // ❌ error

👉 let aur const hoist hote hain lekin use nahi kar sakte pehle.


Hoisting mai let aur const bhi hoist hotay lekin error kyu ata? Sir var mai undefined hota. Var ka to mujhe pata hai, lekin let aur const ki kis waja hai?

Bohat **important interview question** poocha hai 👍
Chalo isko **step-by-step, simple Roman Urdu** mai clear kartay hain.

---

## Short answer (yaad rakhne ke liye)

👉 **let aur const bhi hoist hotay hain**
👉 **lekin unko initialize nahi kiya jata**
👉 is wajah se **Temporal Dead Zone (TDZ)** ka error aata hai

---

## Pehle var ka case (reference ke liye)

```js
console.log(a); 
var a = 10;
```

### JavaScript kya karta hai?

```js
var a;          // hoisting
console.log(a); // undefined
a = 10;
```

✔ Error nahi
✔ Kyun? kyun ke `var` ko **undefined se initialize** kar deta hai

---

## Ab let ka case (main point)

```js
console.log(b);
let b = 20;
```

❌ Error:

```
ReferenceError: Cannot access 'b' before initialization
```

### Kya ho raha hai?

JavaScript internally karta hai:

```js
// let b;  // hoist hota hai
// lekin initialize nahi hota
console.log(b); // ❌ TDZ error
b = 20;
```

---

## 🔥 Temporal Dead Zone (TDZ) kya hai?

**TDZ** wo time hota hai:

> jab variable **declare ho chuka hota hai**
> lekin **initialize nahi hota**

📌 **TDZ start:** scope ke start se
📌 **TDZ end:** jab variable ko value mil jaye

---

## Visual timeline (easy way)

```js
{
  // TDZ start
  console.log(x); // ❌ error
  let x = 5;      // TDZ end
}
```

---

## const ka case (aur strict)

```js
console.log(c);
const c = 30;
```

❌ Error (same TDZ)

Aur ek extra rule:

```js
const c; // ❌ SyntaxError
```

✔ const ko **declare ke sath hi value deni hoti hai**

---

## Comparison Table (interview ready)

| Feature                 | var           | let | const |
| ----------------------- | ------------- | --- | ----- |
| Hoisted                 | ✅             | ✅   | ✅     |
| Initialized at hoisting | ✅ (undefined) | ❌   | ❌     |
| TDZ                     | ❌             | ✅   | ✅     |
| Block scoped            | ❌             | ✅   | ✅     |
| Reassign allowed        | ✅             | ✅   | ❌     |

---

## Interview line (golden line ⭐)

> **"let aur const hoist hotay hain lekin TDZ ki wajah se initialization se pehle access nahi kiye ja sakte"**

---

## Ek trick question (try karo)

```js
let x = 10;
{
  console.log(x);
  let x = 20;
}
```

❌ Error aayega 😄
👉 kyun? kyun ke **inner `x` TDZ mai hai**

---


