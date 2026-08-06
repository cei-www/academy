# Getting Started

**CE WebDev Academy** is a live, in-browser playground for learning HTML, CSS and JavaScript — no
installs, no setup. Every lesson pairs a short explanation with real, editable code you can change
and re-run instantly, right here in the browser.

The panel below (labelled **Display** in every lesson) is the same live playground you'll use
throughout the course. Try it now: open the **CSS** box and change one of the hex colors in the
gradient, then press **Render** — the banner above updates immediately.

Browse lessons using the course tree on the left. Pick any topic and this middle panel loads that
lesson's own starting HTML, CSS and JavaScript.

## Display
### HTML

```
<div class="hero">
  <h1>CE WebApp Academy</h1>
  <div class="sub">An interactive tool for learning HTML, CSS, and JavaScript</div>
  <div class="credit">by CE-KMITL</div>
</div>
```

### CSS

```
body { margin: 0; min-height: 100vh; font-family: system-ui, sans-serif; }
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  background: linear-gradient(120deg, #0F1B33, #15803D, #F2A93B, #B91C1C, #0F1B33);
  background-size: 400% 400%;
  animation: shift 12s ease infinite;
}
.hero h1 { margin: 0 0 6px; font-size: 28px; letter-spacing: -0.02em; }
.hero h1 .ltr { display: inline-block; transition: transform 150ms ease, margin 150ms ease; }
.hero .sub { font-size: 14px; opacity: 0.9; }
.hero .credit { margin-top: 10px; font-size: 12px; opacity: 0.75; }

@keyframes shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Javascript

```
const heading = document.querySelector(".hero h1");
const text = heading.textContent;

heading.innerHTML = text
  .split("")
  .map(ch => (ch === " " ? " " : `<span class="ltr">${ch}</span>`))
  .join("");

heading.querySelectorAll(".ltr").forEach(letter => {
  letter.addEventListener("mouseover", () => {
    letter.style.transform = "scale(1.4)";
    letter.style.margin = "0 3px";
  });
  letter.addEventListener("mouseout", () => {
    letter.style.transform = "scale(1)";
    letter.style.margin = "0";
  });
});
```

## How to Use

1. **Browse lessons.** The course tree on the left lists every topic, grouped by level. Click a
   lesson to load it; use the search box above the tree to jump straight to a title.

2. **Read, then edit.** Each lesson's code lives in the HTML / CSS / JS boxes in the middle panel —
   change anything and see the effect for yourself.

3. **Press Render** to re-run your edited code and update the preview on the right.

4. **Switch how the editors are arranged** with the layout buttons, top-right of the code panel:
   <span style="display:inline-flex;vertical-align:middle;color:#0F1B33;margin:0 2px;"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="8" height="8" rx="1"></rect><rect x="13" y="3" width="8" height="8" rx="1"></rect><rect x="3" y="13" width="8" height="8" rx="1"></rect><rect x="13" y="13" width="8" height="8" rx="1"></rect></svg></span> Grid,
   <span style="display:inline-flex;vertical-align:middle;color:#0F1B33;margin:0 2px;"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="4.5" rx="1"></rect><rect x="3" y="9.75" width="7" height="4.5" rx="1"></rect><rect x="3" y="16.5" width="7" height="4.5" rx="1"></rect><rect x="13" y="3" width="8" height="18" rx="1"></rect></svg></span> Stack,
   <span style="display:inline-flex;vertical-align:middle;color:#0F1B33;margin:0 2px;"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="3" rx="0.5"></rect><rect x="3" y="7.5" width="7" height="13.5" rx="1"></rect><rect x="13" y="3" width="8" height="18" rx="1"></rect></svg></span> Tabs, or
   <span style="display:inline-flex;vertical-align:middle;color:#0F1B33;margin:0 2px;"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="8" height="18" rx="1"></rect><rect x="13" y="3" width="8" height="18" rx="1"></rect></svg></span> Full HTML.

5. **Resize the code text** with the **A− / A+** buttons — this applies to every code box, including
   the Full HTML view.

6. **Reset a lesson** with the
   <span style="display:inline-flex;vertical-align:middle;color:#0F1B33;margin:0 2px;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg></span>
   button, top-right of the playground — it discards your edits and restores that lesson's original
   starting code.

7. **Check the console** at the bottom of the preview panel — every `console.log`, warning and error
   from your code shows up there, collapsible so it doesn't get in your way.

8. **Work through each lesson in order:** read the explanation, try the Display, then complete
   **Your Tasks**, the **Exercises**, and the **Quiz** at the end of the lesson.

## Credits

Built for the CE-KMITL web development course. Content, code playground, and course structure by
**Rathachai Chawuthai**, with course material covering HTML, CSS, JavaScript, AJAX, Tailwind CSS, and
advanced topics including SVG and D3.js.
