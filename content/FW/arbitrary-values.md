# Arbitrary values

Every named utility is a preset from a fixed scale — `p-4` is `1rem`, `text-xl` is a set size. When a
design genuinely needs a value outside that scale, square brackets let a utility take one directly:
`w-[137px]`, `top-[3px]`, `bg-[#1DA1F2]`. The property comes from the utility name; the exact value
comes from inside the brackets.

Reach for an arbitrary value only when nothing on the scale fits — a `137px` icon slot to match a
fixed design, a one-off colour from a brand guideline. For everything else, the named scale (`p-4`,
`gap-6`, `text-brand` from `@theme`) keeps values consistent across the whole page; arbitrary values
bypass that consistency, so overusing them brings back the drift problem utilities exist to prevent.

## Display
### HTML

```
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<div class="flex items-center gap-4 p-4">
  <div class="w-[72px] h-[72px] rounded-full bg-[#1DA1F2]"></div>
  <div>
    <h3 class="text-[1.35rem] font-bold text-slate-900">Rathachai C.</h3>
    <p class="text-sm text-slate-600">Instructor, CE-KMITL</p>
  </div>
</div>

<div class="relative mt-4 h-24 bg-slate-100 rounded">
  <span class="absolute top-[10px] left-[14px] text-xs text-slate-500">Badge</span>
</div>
```

### CSS

```
/* Empty — every value above is expressed with an arbitrary-value utility. */
```

### Javascript

```

```

## Your Tasks
### 1. Set an exact pixel width
Square brackets accept any CSS length, not just the named scale.

```
<div class="w-[137px] h-[137px] bg-slate-200"></div>
```

### 2. Use a one-off colour
A brand hex that is not on the default palette still works as an arbitrary value.

```
<div class="bg-[#1DA1F2] text-white p-4">Tweet-blue banner</div>
```

### 3. Position with an exact offset
`top-[10px]` and `left-[14px]` place an absolutely positioned element precisely.

```
<span class="absolute top-[10px] left-[14px]">Badge</span>
```

### 4. Set an exact font size
`text-[1.35rem]` reaches a size between the named steps like `text-xl` and `text-2xl`.

```
<h3 class="text-[1.35rem] font-bold">Between text-xl and text-2xl</h3>
```

### 5. Prefer the scale first
Before writing an arbitrary value, check whether a named utility already matches closely enough.

```
<!-- p-4 (1rem) is probably close enough — try it before reaching for p-[15px] -->
```

## Exercises

### Exercise 1: Match a fixed design
Build an avatar exactly `72px` square using `w-[72px] h-[72px]`, and compare it to the nearest named
size (`w-16` at `4rem`/`64px` or `w-20` at `5rem`/`80px`).

### Exercise 2: One-off brand colour
Style a banner with a hex colour from outside Tailwind's default palette using `bg-[#...]`, and
explain why `@theme` would be the better choice if this colour were reused three times.

### Exercise 3: Precise positioning
Place a small badge at an exact pixel offset inside a `relative` container using
`absolute top-[..px] left-[..px]`.

### Exercise 4: Between two named sizes
Find a font size that falls between two of Tailwind's named `text-*` steps and set it with an
arbitrary value. Note both neighbouring named sizes for comparison.

### Exercise 5: Arbitrary value vs theme token
Take a colour used in three different elements as `bg-[#0F1B33]` each time, and refactor all three to
use a `@theme`-registered `bg-brand` instead. Explain which version is easier to change later.

## Quizes

### Q1. What does `w-[137px]` do?
1. Sets the width to the nearest step on Tailwind's default scale
2. Sets the width to exactly `137px`, bypassing the named scale
3. Is invalid syntax and does nothing
4. Sets a `min-width` rather than a `width`

### Q2. Where does the property in an arbitrary-value utility come from?
1. It is guessed from the value's type
2. From the utility name itself, e.g. `bg-` sets `background-color`
3. From a separate `@property` declaration
4. Arbitrary values cannot set a specific property

### Q3. When is an arbitrary value the right choice over a named utility?
1. Always — arbitrary values are more precise
2. Only when no value on the named scale is close enough for the design
3. Never — arbitrary values are deprecated
4. Only inside `@apply` blocks

### Q4. What is the downside of using many arbitrary values across a page?
1. They are slower to parse in the browser
2. They bypass the consistency a named scale provides, reintroducing drift
3. They require a build step and fail in the CDN browser build
4. They cannot be combined with responsive prefixes

### Q5. Which is the better fix for a colour reused in five components?
1. Repeat `bg-[#0F1B33]` in all five, since brackets are the standard tool
2. Register it once with `@theme` as `--color-brand` and use `bg-brand`
3. Move the colour into the CSS box as a plain class
4. There is no way to reuse an arbitrary value
