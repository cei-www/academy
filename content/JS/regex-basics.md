# Regular expressions

A regular expression matches a pattern in a string instead of one exact value. `/pattern/flags`
builds one directly; `g` finds every match instead of stopping at the first, `i` ignores case.
`.test(str)` answers yes/no; `str.match(regex)` returns the matches themselves; `str.replace(regex,
replacement)` swaps every match for something else.

Inside a pattern, `\d` means any digit, `\w` any word character, `+` one or more, `*` zero or more,
and `^`/`$` anchor the start and end of the string. Escaping a literal special character, like a dot
in an email, needs a backslash: `\.`.

## Display
### HTML

```
<h1>Student ID check</h1>
<input id="sid" value="66010123">
<button id="check" type="button">Check</button>
<p id="out"></p>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
h1 { color: #0F1B33; font-size: 20px; }
button { padding: 6px 12px; margin-left: 6px; }
```

### Javascript

```
const idPattern = /^\d{8}$/;
const out = document.getElementById("out");

document.getElementById("check").addEventListener("click", () => {
  const value = document.getElementById("sid").value;
  out.textContent = idPattern.test(value)
    ? "valid: eight digits"
    : "invalid: must be exactly eight digits";
});

const text = "Contact ploy@kmitl.ac.th or nan@kmitl.ac.th";
console.log(text.match(/[\w.]+@[\w.]+/g));
console.log(text.replace(/@[\w.]+/g, "@[hidden]"));
```

## Your Tasks
### 1. Test a pattern
`.test()` returns a plain boolean.

```
const hasDigits = /\d+/;
console.log(hasDigits.test("room A401"));   // true
```

### 2. Match every occurrence
The `g` flag returns every match, not just the first.

```
const text = "CE-231, CE-232, CE-241";
console.log(text.match(/CE-\d{3}/g));
```

### 3. Anchor the whole string
`^` and `$` require the match to cover the entire string, not just part of it.

```
const eightDigits = /^\d{8}$/;
console.log(eightDigits.test("66010123"));   // true
console.log(eightDigits.test("6601012"));    // false, only 7 digits
```

### 4. Replace matches
`.replace` with a `g`-flagged regex swaps every match, not just the first.

```
const masked = "555-1234".replace(/\d/g, "*");
console.log(masked);   // ***-****
```

### 5. Ignore case
The `i` flag makes letters match regardless of case.

```
console.log(/kmitl/i.test("Studying at KMITL"));   // true
```

## Exercises

### Exercise 1: Validate a student ID
Write a pattern requiring exactly eight digits, and test it against a few valid and invalid inputs.

### Exercise 2: Extract course codes
Given a string containing several course codes like `CE-231`, extract all of them with `.match` and
the `g` flag.

### Exercise 3: Mask an email
Write a pattern that replaces everything after `@` in an email address with `[hidden]`.

### Exercise 4: Case-insensitive search
Check whether a string contains the word "web" regardless of capitalisation.

### Exercise 5: Simple password check
Write a pattern requiring at least one digit and a minimum length of 8, and explain in a comment what
each part of the pattern does.

## Quizes

### Q1. What does `.test()` return?
1. The matched text
2. A plain boolean
3. An array of matches
4. `undefined` if there is no match

### Q2. What does the `g` flag do?
1. Nothing — it is ignored by modern browsers
2. Finds every match instead of stopping at the first
3. Makes the match case-insensitive
4. Anchors the pattern to the start of the string

### Q3. What does `^\d{8}$` require?
1. At least eight digits anywhere in the string
2. The whole string to be exactly eight digits
3. Eight characters of any kind
4. A string starting with eight digits, ignoring the rest

### Q4. What does `\d` match inside a regular expression?
1. Any letter
2. Any digit
3. Any whitespace character
4. A literal backslash

### Q5. What does `str.replace(/\d/g, "*")` do to `"555-1234"`?
1. Replaces only the first digit
2. Replaces every digit with `*`
3. Removes every digit entirely
4. Throws, since `replace` needs a string pattern
