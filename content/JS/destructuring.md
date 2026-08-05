# Destructuring, spread and rest overview

Destructuring pulls values out of an object or array into variables in one statement. For objects the
name on the left must match the key; for arrays position decides.

```
const { name, gpa: score = 0 } = student;   // rename gpa to score, default if missing
const [first, second] = skills;             // by position
```

Destructuring in a parameter list gives you named arguments: the caller passes one object, so the
order of the fields stops mattering and each one can have a default.

The same `...` token does two opposite jobs. In a call or a literal it **spreads** — it unpacks a
value into the pieces around it, which is how you copy and merge. In a parameter list or on the left
of a destructuring pattern it **rests** — it collects the leftovers into a new array or object.

Spread copies only one level deep. `{ ...student }` gives you a new outer object whose nested arrays
and objects are still the very same ones, so pushing into `copy.skills` also changes `student.skills`.

## Display
### HTML

```
<h1>Student card</h1>
<pre id="out"></pre>
```

### CSS

```
body { font-family: system-ui, sans-serif; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
#out { background: #EEF1F4; border: 1px solid #DDE2E8; padding: 10px; }
```

### Javascript

```
const student = {
  name: "Ploy", year: 2, gpa: 3.52,
  skills: ["C", "Verilog"],
  office: { building: "ECC", room: "A-401" }
};

const { name, gpa: score, major = "CE", skills: [mainSkill, ...restSkills] } = student;
console.log(name, score, major, mainSkill, restSkills);

function card({ name, year = 1, gpa = 0 }) {
  return `${name} · year ${year} · GPA ${gpa.toFixed(2)}`;
}
console.log(card(student), card({ name: "Nan" }));

const merged = { ...student, gpa: 3.9, club: "Robotics" };
const copy = { ...student };
copy.skills.push("Rust");                 // shallow: hits the original too

document.getElementById("out").textContent =
  JSON.stringify({ merged: merged.gpa, shared: student.skills }, null, 2);
```

## Your Tasks
### 1. Destructure an object
Rename with `key: newName` and supply a default for keys that may be absent.

```
const { name, year, nickname = "—" } = student;
console.log(name, year, nickname);
```

### 2. Destructure an array and nest
Positions can be skipped with a bare comma, and patterns nest as deep as the data.

```
const [a, , c = "none"] = ["C", "Verilog"];
const { office: { room } } = student;
console.log(a, c, room);
```

### 3. Named arguments
One object parameter, destructured in place, means the caller never has to remember an order.

```
function enrol({ code, credits = 3, semester = 1 }) {
  console.log(`${code}: ${credits} credits, semester ${semester}`);
}
enrol({ semester: 2, code: "CE-231" });
```

### 4. Spread to copy and merge
Later sources win, so put overrides last.

```
const withClub = { ...student, club: "Robotics" };
const allSkills = [...student.skills, "Python"];
console.log(withClub.club, allSkills, student.skills.length);
```

### 5. Rest in both roles
`...rest` in parameters collects extra arguments; in a pattern it collects the remaining keys.

```
function mean(...marks) {
  return marks.reduce((s, m) => s + m, 0) / marks.length;
}
const { name: who, ...details } = student;
console.log(mean(3.5, 3.2, 4.0), who, Object.keys(details));
```

## Exercises

### Exercise 1: Swap without a temp
Swap two variables in one line using array destructuring, and log both before and after.

### Exercise 2: Options object
Write `formatName({ first, last, upper = false })` returning `"First Last"`, uppercased when `upper`
is `true`. Call it three times with different subsets of the options.

### Exercise 3: Prove the shallow copy
At the console prompt, make `const c = { ...student }`, push into `c.skills`, then log
`student.skills`. Write one comment saying why the array is shared but `c.gpa = 4` is not.

### Exercise 4: Deep enough copy
Fix Exercise 3 so `c` gets its own `skills` array and its own `office` object, using spread only.

### Exercise 5: Merge defaults
Write `withDefaults(config)` that merges a user config over
`{ theme: "light", perPage: 10, tags: [] }` and returns a new object, leaving both inputs unchanged.

## Quizes

### Q1. What does `const { gpa: score } = { gpa: 3.5 }` create?
1. A variable `gpa` holding `3.5`
2. Two variables, `gpa` and `score`
3. A variable `score` holding `3.5`
4. A variable `score` holding the string `"gpa"`

### Q2. In `function f(...args) {}`, what is `args`?
1. An array of every argument passed
2. The first argument only
3. An object keyed by parameter name
4. A copy of the enclosing scope

### Q3. What does `console.log({ ...{ a: 1, b: 2 }, b: 9 })` print?
1. `{ a: 1, b: 2 }`
2. `{ b: 9 }`
3. `{ a: 1, b: [2, 9] }`
4. `{ a: 1, b: 9 }`

### Q4. After `const c = { ...s }; c.skills.push("Go");` what is true?
1. Only `c.skills` has `"Go"`
2. Both `s.skills` and `c.skills` have `"Go"`, because the array itself was not copied
3. The push throws, because spread freezes the copy
4. Only `s.skills` has `"Go"`

### Q5. `const [x = 1, y = 2] = [undefined, 5]` gives
1. `x` is `undefined`, `y` is `5`
2. `x` is `1`, `y` is `2`
3. `x` is `1`, `y` is `5`
4. `x` is `undefined`, `y` is `2`
