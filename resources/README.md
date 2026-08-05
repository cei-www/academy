# resources/

Sample assets lessons can reference. Everything here is generated for this course — no third-party
files, nothing to attribute.

Paths are written relative to the site root, e.g. `resources/img/campus-800.jpg`. That works both in
a lesson's own page and inside the playground preview: the preview iframe uses `srcdoc`, so its base
URL is the app's URL, and relative paths resolve the same way in both places.

## img/

| File | Size | Why it exists |
| --- | --- | --- |
| `campus.jpg` | 1600×900 | Full-size photo-style image |
| `campus-800.jpg` | 800×450 | Same picture, mid resolution — `srcset` demos |
| `campus-400.jpg` | 400×225 | Same picture, small — thumbnail / file-size comparisons |
| `banner.jpg` | 1600×400 | Very wide, so `object-fit` differences are obvious |
| `profile.jpg` | 600×600 | Square — avatars, `border-radius: 50%` |
| `chip.png` | 512×512 | Transparent background — PNG vs JPG |
| `ce-logo.svg` | 240×80 | Vector — scales without blurring |
| `box-model.svg` | 360×240 | Diagram used by the Box model lesson |

## data/

Served from this folder, so `fetch()` works with no external API and no CORS setup.

| File | Shape |
| --- | --- |
| `students.json` | 8 records — id, name, year, gpa, skills |
| `courses.json` | 6 records — code, title, credits, seats, enrolled |
| `posts.json` | 6 records — title, author, tags, published, likes |
| `gallery.json` | 5 records — image src/alt/width/height, for render-to-DOM exercises |
| `profile.json` | a single object, including a nested one — shows JSON is not always an array |

Keep at least one array *and* one plain object here: AJAX lessons need both to teach that
`res.json()` gives back whatever the endpoint sends, not always a list.
