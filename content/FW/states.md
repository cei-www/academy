# Interaction state utilities

The same prefix syntax used for breakpoints covers interaction states — `hover:bg-amber-500`,
`focus:ring-2`, `active:scale-95`, `disabled:opacity-50`. Prefer `focus-visible:` over `focus:` for
the focus ring so keyboard users see it and mouse users do not, and never remove it without a
replacement.

Put `group` on a parent and `group-hover:` on a descendant to style a child when the parent is
hovered — a whole card can react to one hover without any JavaScript.

## Display
### HTML

```
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

<a href="#" class="group block p-4 bg-white rounded shadow hover:shadow-lg max-w-xs">
  <h3 class="font-bold text-slate-900 group-hover:text-amber-600">CE 2103</h3>
  <p class="text-sm text-slate-600">Web Application Development</p>
</a>

<button class="mt-4 px-4 py-2 bg-amber-400 text-amber-900 rounded
               hover:bg-amber-500 focus-visible:ring-2 focus-visible:ring-slate-900
               disabled:opacity-50">Enrol</button>
```

### CSS

```
/* Empty — every style above comes from a utility class. */
```

### Javascript

```

```

## Your Tasks
### 1. Add hover and focus
`focus-visible:` shows the ring for keyboard users only. Tab to the button to see it.

```
<button class="px-4 py-2 bg-amber-400 text-amber-900 rounded
               hover:bg-amber-500 focus-visible:ring-2 focus-visible:ring-slate-900">
  Enrol
</button>
```

### 2. Show a disabled state
`disabled:` styles the real HTML state, so the button is also genuinely unclickable.

```
<button disabled class="px-4 py-2 bg-slate-300 rounded disabled:opacity-50
                        disabled:cursor-not-allowed">Full</button>
```

### 3. React as a group
`group` marks the parent; `group-hover:` styles any descendant when that parent is hovered.

```
<a href="#" class="group block p-4 bg-white rounded hover:bg-slate-50">
  <h3 class="font-bold text-slate-900 group-hover:text-amber-600">CE 2410</h3>
  <p class="text-sm text-slate-600">Hover anywhere on the card.</p>
</a>
```

### 4. Give feedback on click
`active:scale-95` shrinks a button slightly while it is being pressed.

```
<button class="px-4 py-2 bg-amber-400 rounded active:scale-95">Submit</button>
```

### 5. Follow the dark colour scheme
`dark:` applies when the operating system reports a dark colour scheme, no JavaScript needed.

```
<div class="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">Adapts automatically</div>
```

## Exercises

### Exercise 1: Full state set
Give one button a hover, a focus-visible, an active and a disabled style. Reach the focus ring with
the Tab key, not the mouse.

### Exercise 2: Group hover card
Make a card where hovering it lifts the shadow, tints the title amber and reveals an arrow that is
`opacity-0` until `group-hover:opacity-100`.

### Exercise 3: Focus versus focus-visible
Compare `focus:` and `focus-visible:` on two separate buttons — click one, Tab to the other, and
report which ring appears in each case.

### Exercise 4: Disabled button
Build a genuinely `disabled` button styled with `disabled:opacity-50 disabled:cursor-not-allowed`,
and confirm clicking it does nothing.

### Exercise 5: Dark mode card
Style a card with both light and `dark:` variants for background and text, and toggle your OS colour
scheme (or DevTools' rendering emulation) to see it switch.

## Quizes

### Q1. Which prefix shows a focus ring for keyboard users but not for mouse clicks?
1. `focus:`
2. `active:`
3. `hover:`
4. `focus-visible:`

### Q2. What must you add to the parent for `group-hover:` to work on a child?
1. `hover`
2. `group`
3. `peer`
4. `relative`

### Q3. By default in the v4 browser build, when does `dark:bg-slate-900` take effect?
1. Always, because dark mode is the default
2. When the operating system reports a dark colour scheme
3. When a `.dark` class is on `<html>`, with no extra setup
4. Only after you call a JavaScript API to enable it

### Q4. What does `disabled:opacity-50` require to actually apply?
1. Nothing extra — it applies regardless of the element's state
2. The element must actually have the `disabled` attribute
3. A `group` class on the parent
4. A separate JavaScript listener

### Q5. What does `active:scale-95` do?
1. Applies permanently, once the page loads
2. Slightly shrinks the element while it is being actively pressed
3. Disables the element
4. Only works on `<a>` tags
