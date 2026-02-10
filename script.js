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
 */