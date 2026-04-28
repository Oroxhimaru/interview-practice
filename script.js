/* Task:
Loop method se duplicates remove karo
Short method se bhi karo
 */

{
    const arr = ["a", "b", "a", "c", "b"];
    const uniqueArray = [];
    for(let i = 0; i < arr.length; i++){
  if(!uniqueArray.includes(arr[i]))
       uniqueArray.push(arr[i]);
    }

console.log(uniqueArray);
}

{
   const arr = ["a", "b", "a", "c", "b"];
   let uniqueArray = [];
   uniqueArray = [...new Set(arr)]; 
   console.log(uniqueArray);
}

//explnation
/*
🧠 Problem: Array se duplicates remove karna
Input:
[1, 2, 2, 3, 4, 4, 5]

Output:
[1, 2, 3, 4, 5]

Method 1️⃣: LOOP METHOD (foundation strong karega)
Step 0: Dimagh mein socho

Ek naya empty array banao

Original array ka har element check karo

Agar element pehle se naya array mein nahi hai → add karo

Agar hai → skip

Code (loop method)
const arr = [1, 2, 2, 3, 4, 4, 5];

const uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }
}

console.log(uniqueArr);

Ab har line ka matlab (layman level)
const arr = [1, 2, 2, 3, 4, 4, 5];


➡️ Ye woh array hai jisme duplicates hain.

const uniqueArr = [];


➡️ Ek khali dabba bana liya jisme sirf unique values jayengi.

for (let i = 0; i < arr.length; i++) {


➡️ Loop start:

i = 0 → pehla element

arr.length → array ka total size

Har round mein i++ → next element

if (!uniqueArr.includes(arr[i])) {


➡️ Check kar rahe hain:

arr[i] → current element

includes() → pooch raha hai:
“kya ye value pehle se uniqueArr mein hai?”

! ka matlab → agar nahi hai

uniqueArr.push(arr[i]);


➡️ Agar value nayi hai → uniqueArr ke andar daal do.

console.log(uniqueArr);


➡️ Final result print.

Interview tip 🧠

Loop method slow hota hai (O(n²)), lekin logic clear hota hai, isliye interviewers pehle ye dekhna pasand karte hain.

Method 2️⃣: SHORT METHOD (modern + clean)
JavaScript ka weapon: Set

Set kya hota hai?
Set ek aisi collection hoti hai jisme:

Duplicate allowed nahi

Har value unique hoti hai

Code (short method)
const arr = [1, 2, 2, 3, 4, 4, 5];

const uniqueArr = [...new Set(arr)];

console.log(uniqueArr);

Line-by-line explanation
new Set(arr)


➡️ Array ko Set bana diya
➡️ Set khud hi duplicates hata deta hai

Example:

Set(1, 2, 3, 4, 5)

[...new Set(arr)]


➡️ Set array nahi hota
➡️ ... (spread operator) Set ko wapas array bana deta hai

const uniqueArr = [...new Set(arr)];


➡️ Final unique array mil gaya 🎉

Comparison (interview mein pooch sakte hain)
Method	Pros	Cons
Loop	Logic clear	Slow
Set	Fast, clean	Beginner ko magic lagta hai
Interview-friendly answer 🧠

“Pehlay main loop se solution explain karta hoon taake logic clear ho, phir optimized solution Set ke sath batata hoon.”
Interview tip (gold)

Agar interviewer pooche:

“Agar output empty aa raha ho to kya check karoge?”

Tum bol sakte ho:

“Main pehle loop condition check karunga, specially comparison operator, kyun ke agar loop run hi nahi hua to array empty rahegi.”

🔥 Very strong answer. 
*/





/*
🧠 Problem: Array ke elements ki frequency count karna
Matlab kya?

Array mein har value kitni dafa repeat hui hai, wo count karna.

Input:
["a", "b", "a", "c", "b", "a"]

Output:
{
  a: 3,
  b: 2,
  c: 1
}

Method 1️⃣: LOOP METHOD (foundation)
Step 0: Dimagh mein logic (sab se important)

Socho ek register / notebook hai:

Pehli dafa “a” dekho → likh do a: 1

Dubara “a” aaye → pehle se likha hai → count +1

“b” aaye → naya hai → b: 1

Is notebook ko hum object kehte hain.

Code (loop method)
const arr = ["a", "b", "a", "c", "b", "a"];

const frequency = {};

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];

  if (frequency[element]) {
    frequency[element] = frequency[element] + 1;
  } else {
    frequency[element] = 1;
  }
}

console.log(frequency);

Ab har line ko layman style samjho
const arr = ["a", "b", "a", "c", "b", "a"];


➡️ Ye input array hai.

const frequency = {};


➡️ Ek khali object banaya
➡️ Isme hum count store karenge

Soch lo:

{
  a: 3,
  b: 2
}

for (let i = 0; i < arr.length; i++) {


➡️ Loop start
➡️ Har element ek-ek karke check hoga

const element = arr[i];


➡️ Current value ko variable mein daal liya
➡️ Jaise: "a"

if (frequency[element]) {


➡️ Check:

“kya ye element pehle se object mein mojood hai?”

Agar hai → true

Agar nahi → undefined (false)

frequency[element] = frequency[element] + 1;


➡️ Agar pehle se hai:

Purana count lo

1 add karo

Wapas store karo

Example:

a: 2 → a: 3

else {
  frequency[element] = 1;
}


➡️ Agar pehli dafa mila:

Count ko 1 se start karo

console.log(frequency);


➡️ Final result

Output banega:
{ a: 3, b: 2, c: 1 }

Method 2️⃣: SHORT METHOD (reduce)

⚠️ Pehle warning:
Reduce magic jaisa lagta hai, lekin hum isko bhi layman bana denge 😄

Reduce ka simple matlab

“Poora array ghoom kar ek single value banana”

Yahan wo single value → object

Code (short method)
const arr = ["a", "b", "a", "c", "b", "a"];

const frequency = arr.reduce((acc, current) => {
  acc[current] = (acc[current] || 0) + 1;
  return acc;
}, {});

console.log(frequency);

Line-by-line (slow + simple)
arr.reduce((acc, current) => { ... }, {})


acc → accumulator (object)

current → current array value

{} → starting value (empty object)

acc[current] = (acc[current] || 0) + 1;


Is line ko tod ke samjho:

Part 1:
acc[current]


➡️ Object ke andar value access kar rahe ho

Part 2:
acc[current] || 0


➡️ Agar value exist karti hai → use karo
➡️ Agar nahi → 0 use karo

Part 3:
+ 1


➡️ Count increase

return acc;


➡️ Accumulator wapas bhejna zaroori hai
➡️ Warna reduce kaam nahi karega

Reduce ka flow (dimagh mein picture)

acc = {}

current = "a" → { a: 1 }

current = "b" → { a: 1, b: 1 }

current = "a" → { a: 2, b: 1 }

...

Interview tip 🧠

Agar interviewer bole:

“reduce kyun use kiya?”

Tum bolo:

“Loop se logic clear hota hai, reduce se code concise aur functional ho jata hai.”

🔥 Balanced answer.
*/

{
    //1️⃣ Loop method se karo
    //2️⃣ Reduce method se karo

    const arr = [1, 2, 2, 3, 3, 3, 4];
    const frequency= {};
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        if(frequency[element]){
           frequency[element] = frequency[element] + 1;
        } else {
            frequency[element] = 1;
        }
    }
    console.log(frequency);

}

{
    const arr = [1, 2, 2, 3, 3, 3, 4];
   const frequency = arr.reduce((acc, current) => {
     acc[current] = (acc[current] || 0) + 1;
     return acc;
   }, {})
   console.log(frequency);
}




/*
🧠 New Concept: Most Frequent Element (Layman Mode ON)
Problem:

Array mein jo element sab se zyada dafa repeat hua ho, usko return karo.

Example:
[1, 2, 2, 3, 3, 3, 4]


Output:

3

Step 1: Dimagh mein simple plan

Hum directly most frequent nahi nikalenge.

Pehle:
👉 Frequency object banayenge (jo tum seekh chuke ho)

Phir:
👉 Object ko loop kar ke max count nikalenge

Method 1️⃣: Loop Method (Detailed)
Full Code Pehle Dekho
const arr = [1, 2, 2, 3, 3, 3, 4];

const frequency = {};

// Step 1: Count frequency
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];

  if (frequency[element]) {
    frequency[element] = frequency[element] + 1;
  } else {
    frequency[element] = 1;
  }
}

// Step 2: Find max
let maxCount = 0;
let mostFrequent = null;

for (let key in frequency) {
  if (frequency[key] > maxCount) {
    maxCount = frequency[key];
    mostFrequent = key;
  }
}

console.log(mostFrequent);

Ab bilkul breakdown karte hain
🔹 Step 1: Frequency banana

Ye part tum already master kar chuke ho.

Result banega:

{
  1: 1,
  2: 2,
  3: 3,
  4: 1
}

🔹 Step 2: Maximum nikalna
Ye variables kyun banaye?
let maxCount = 0;
let mostFrequent = null;


maxCount → sab se bara number store karega

mostFrequent → us key ko store karega jiska count sab se bara hai

Ye loop kya kar raha hai?
for (let key in frequency)


Ye object ko loop karta hai.

Example:

key = "1"

key = "2"

key = "3"

Ye condition kya kar rahi hai?
if (frequency[key] > maxCount)


Check:

Kya current key ka count ab tak ke max se zyada hai?

Agar haan:

maxCount = frequency[key];
mostFrequent = key;


Matlab:

Max update karo

Element update karo

Flow dimagh mein dekho:

Start:

maxCount = 0


Check 1:

1 ka count = 1

1 > 0 → yes

maxCount = 1

mostFrequent = 1

Check 2:

2 ka count = 2

2 > 1 → yes

maxCount = 2

mostFrequent = 2

Check 3:

3 ka count = 3

3 > 2 → yes

maxCount = 3

mostFrequent = 3

Check 4:

1 > 3 → no

Final answer → 3
 */

/*
🎯 Goal: Most Frequent Element (Short Method)

Input:

[1, 2, 2, 3, 3, 3, 4]


Output:

3

🧠 Big Picture (pehle overview)

Short method mein 3 steps hain:

1️⃣ Reduce se frequency object banana
2️⃣ Object.entries se object ko array mein convert karna
3️⃣ Dobara reduce chala ke max find karna

Bas.

Ab har cheez tod ke samjhte hain.

🔹 Step 1: Frequency banana (Reduce)
const frequency = arr.reduce((acc, current) => {
  acc[current] = (acc[current] || 0) + 1;
  return acc;
}, {});


Tum ye already samajh chuke ho, but quick recap:

acc → empty object {} se start hota hai

current → current element

(acc[current] || 0) → agar exist nahi karta to 0

+1 → count increase

Result:

{
  1: 1,
  2: 2,
  3: 3,
  4: 1
}


Ab humare paas counts hain.

🔹 Step 2: Object ko array mein convert karna

Object directly reduce nahi hota.
Isliye use convert karte hain:

Object.entries(frequency)


Ye kya karta hai?

Ye object ko is form mein convert karta hai:

[
  ["1", 1],
  ["2", 2],
  ["3", 3],
  ["4", 1]
]


Har item ek array hai:

[key, value]


Matlab:

index 0 → key

index 1 → count

🔹 Step 3: Dobara reduce chala ke max nikalna

Ab hum ye karte hain:

.reduce((max, current) => {
  return current[1] > max[1] ? current : max;
})


Ab isko todte hain.

Reduce ka flow

First iteration:

max = ["1", 1]
current = ["2", 2]


Check:

2 > 1 → yes


Return:

["2", 2]


Next:

max = ["2", 2]
current = ["3", 3]


Check:

3 > 2 → yes


Return:

["3", 3]


Next:

max = ["3", 3]
current = ["4", 1]


Check:

1 > 3 → no


Return:

["3", 3]


Final result:

["3", 3]

🔹 Last step

Hum sirf key chahte hain:

[0]


Isliye final code:

const mostFrequent = Object.entries(
  arr.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
  }, {})
).reduce((max, current) => {
  return current[1] > max[1] ? current : max;
})[0];

🧠 Simplified Version (Readable Way)

Main tumhe readable format mein likh deta hoon:

const frequency = arr.reduce((acc, current) => {
  acc[current] = (acc[current] || 0) + 1;
  return acc;
}, {});

const entries = Object.entries(frequency);

const maxEntry = entries.reduce((max, current) => {
  if (current[1] > max[1]) {
    return current;
  } else {
    return max;
  }
});

const mostFrequent = maxEntry[0];


Yeh same kaam kar raha hai — bas readable.

Important Interview Reality 🧠

Sach bataun?

Agar tum interview mein loop method likh do with clean explanation,
wo reduce ke complex one-liner se zyada impressive hota hai.

Reduce sirf tab likhna jab full confidence ho. */

{
  const arr = ["a", "b", "a", "c", "b", "a"];
  const frequency = {};
  for (let i = 0; i < arr.length; i++){
    const element = arr[i];
    if(frequency[element]){
     frequency[element]= frequency[element] + 1;
    } else {
      frequency[element] = 1;
    }
  }
  console.log(frequency);

  let maxCount = 0;
  let mostFrequent = null;
  for (let key in frequency){
    if(frequency[key] > maxCount){
      maxCount = frequency[key];
      mostFrequent = key;
}
  }
console.log(mostFrequent);
}

