# HTML symbols

Beyond the handful of entities that exist to escape markup characters, HTML defines named entities for
whole categories of symbols you cannot easily type: arrows (`&rarr;`, `&larr;`), maths
(`&times;`, `&divide;`, `&plusmn;`), currency (`&euro;`, `&yen;`, `&cent;`), and Greek letters
(`&alpha;`, `&beta;`, `&pi;`) among others.

Anything without a name still has a **numeric character reference** — `&#8482;` (decimal) or
`&#x2122;` (hex) both write ™. Named entities are easier to read in source; numeric ones cover
symbols with no name at all. Both only work in HTML text content, never inside a URL or an attribute
value that expects raw text.

## Display
### HTML

```
<p>Arrows: &larr; &uarr; &rarr; &darr;</p>
<p>Maths: 5 &times; 3 &divide; 2 &plusmn; 1 &ne; 4</p>
<p>Currency: &euro; &pound; &yen; &cent;</p>
<p>Greek: &alpha; &beta; &gamma; &pi; &Omega;</p>
<p>Numeric reference: &#8482; is the same as &trade;</p>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; font-size: 20px; color: #131A26; }
```

### Javascript

```

```

## Your Tasks
### 1. Write an arrow
`&rarr;` and its siblings point in each of the four directions.

```
<p>Next &rarr;</p>
```

### 2. Write a maths symbol
`&times;` and `&divide;` read more clearly in source than a plain `x` or `/`.

```
<p>4 &times; 5 = 20</p>
```

### 3. Write a currency symbol
Each currency has its own named entity.

```
<p>Price: &euro;9.99</p>
```

### 4. Write a Greek letter
Useful in maths- or science-flavoured content.

```
<p>&pi; &asymp; 3.14159</p>
```

### 5. Use a numeric reference for a symbol with no name
`&#x2122;` (hex) and `&#8482;` (decimal) both write the same character, ™.

```
<p>MyBrand&#x2122;</p>
```

## Exercises

### Exercise 1: A small maths sentence
Write "5 &times; 3 &ne; 20" as HTML using entities for both symbols.

### Exercise 2: Four-way arrows
Build a small directional pad using the four arrow entities, one per `<span>`.

### Exercise 3: Price list
List three items with prices in three different currencies, each using the correct currency entity.

### Exercise 4: Named vs numeric
Write the same trademark symbol three ways: `&trade;`, `&#8482;`, and `&#x2122;`. Confirm all three
render identically.

### Exercise 5: Look one up
Pick a symbol not covered here (for example an em dash or a check mark) and find its named or numeric
entity, then use it in a sentence.

## Quizes

### Q1. What does `&times;` render as?
1. A plus sign
2. A multiplication sign, ×
3. The literal text "times"
4. Nothing — it is not a valid entity

### Q2. What is `&#8482;` an example of?
1. A named entity
2. A numeric character reference
3. A CSS variable
4. A JavaScript escape sequence

### Q3. Which pair both render the exact same character?
1. `&trade;` and `&#8482;`
2. `&euro;` and `&pound;`
3. `&alpha;` and `&beta;`
4. `&larr;` and `&rarr;`

### Q4. Where do named and numeric entities work?
1. Anywhere at all, including inside a URL
2. Only in HTML text content
3. Only inside `<script>` tags
4. Only inside CSS `content` properties

### Q5. Why might you reach for a numeric reference instead of a named entity?
1. Numeric references render faster
2. The symbol you need has no named entity
3. Named entities are deprecated
4. Numeric references are required inside `<p>` tags
