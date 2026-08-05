# Embedding content with iframe

`<iframe>` embeds another whole HTML document inside the current page, in its own browsing context —
its own DOM, its own scripts, sandboxed from the parent unless you allow otherwise. `title` is
required for accessibility, since screen readers announce it to say what the embedded document is.
`srcdoc` sets the embedded document's content directly as a string, no separate file needed; `src`
instead points at a URL. `loading="lazy"` defers loading an off-screen iframe until it nears the
viewport.

The `sandbox` attribute restricts what the embedded document may do — with no value it blocks
scripts, forms and more all at once; listing specific tokens like `allow-scripts` re-enables only
what you choose.

## Display
### HTML

```
<iframe title="Embedded welcome note"
        srcdoc="<body style='font-family:sans-serif;margin:8px;'><h3>Hello from inside</h3><p>This document is separate from the page around it.</p></body>"
        width="360" height="120"></iframe>

<iframe title="Sandboxed, no scripts"
        srcdoc="<p>This frame cannot run scripts or submit forms.</p>"
        sandbox width="360" height="60"></iframe>
```

### CSS

```
body { font-family: system-ui, sans-serif; margin: 16px; color: #131A26; }
iframe { border: 1px solid #DDE2E8; border-radius: 6px; display: block; margin-bottom: 10px; }
```

### Javascript

```

```

## Your Tasks
### 1. Embed a document with srcdoc
`srcdoc` sets the embedded page's HTML as a string, right inline.

```
<iframe title="Note" srcdoc="<p>Inline content</p>" width="300" height="80"></iframe>
```

### 2. Give every iframe a title
Screen readers announce `title` to say what the embedded document is — never leave it out.

```
<iframe title="Course schedule" src="schedule.html"></iframe>
```

### 3. Restrict an embedded document with sandbox
A bare `sandbox` attribute blocks scripts, forms, and more, all at once.

```
<iframe title="Untrusted snippet" srcdoc="<p>Locked down</p>" sandbox></iframe>
```

### 4. Allow only what you need back
Specific tokens re-enable one capability at a time.

```
<iframe title="Interactive demo" src="demo.html" sandbox="allow-scripts"></iframe>
```

### 5. Defer loading an off-screen iframe
`loading="lazy"` waits until the iframe nears the viewport before loading it.

```
<iframe title="Below the fold" src="extra.html" loading="lazy"></iframe>
```

## Exercises

### Exercise 1: Inline embed
Build an `<iframe>` using `srcdoc` to show a short inline message, with a `title` describing it.

### Exercise 2: Locked-down frame
Add a bare `sandbox` attribute to an iframe and, in one sentence, describe what changes about the
embedded content's abilities.

### Exercise 3: Selective sandbox
Set `sandbox="allow-scripts"` on an iframe and explain what that one token re-enables that a bare
`sandbox` would have blocked.

### Exercise 4: Size and border
Give an iframe an explicit `width`/`height` and a CSS border, and confirm it behaves like a normal
block-level box otherwise.

### Exercise 5: Lazy loading
Add `loading="lazy"` to an iframe placed far down a long page, and explain in one sentence when the
browser actually fetches it.

## Quizes

### Q1. Why is `title` required on every `<iframe>`?
1. It sets the frame's border color
2. Screen readers announce it to say what the embedded document is
3. It is purely decorative and has no accessibility role
4. It sets the embedded document's `<title>` tag

### Q2. What does `srcdoc` do differently from `src`?
1. Nothing, they are identical
2. `srcdoc` sets the embedded document's HTML directly as a string; `src` points at a URL
3. `srcdoc` only works with images
4. `srcdoc` disables scripts automatically

### Q3. What does a bare `sandbox` attribute (no value) do?
1. Nothing — it must always have a value
2. Blocks scripts, forms and more, all at once
3. Only blocks images from loading
4. Only affects the parent page, not the iframe

### Q4. What does `sandbox="allow-scripts"` do compared to a bare `sandbox`?
1. Blocks scripts more strictly
2. Re-enables just script execution while keeping other restrictions
3. Removes all restrictions entirely
4. Has no effect — `allow-scripts` is not a valid token

### Q5. What does `loading="lazy"` do on an `<iframe>`?
1. Loads it immediately, at a lower network priority
2. Defers loading until the iframe nears the viewport
3. Prevents it from ever loading
4. Only works on `<img>`, not `<iframe>`
