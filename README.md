# Custom Form

A contact-style form with a custom dropdown select built from scratch in vanilla JavaScript.

## How the dropdown works

- A read-only input shows the current choice; clicking it toggles the option list and rotates the arrow icon
- Picking an option writes it into the input and closes the list
- Clicking anywhere outside the select closes it, using `closest()` to tell inside clicks from outside ones

## Built with

HTML5, CSS3 and vanilla JavaScript.

## Run it locally

```bash
git clone https://github.com/Arulkumaran-2001/Custom-Form.git
```

Then open `index.html` in a browser.

## What I'd change today

- Give every input an `id` that matches its label's `for`, so clicking a label focuses the field and screen readers announce it
- Add keyboard support to the dropdown (arrow keys, Enter, Escape) with `role="listbox"` and `role="option"`, or style a native `<select>` instead
- Use `type="tel"` for the phone field and add validation messages
- Fix the "Product Tye" label typo

---

Built by [Arulkumaran R](https://arulkumaran-portfolio-blush.vercel.app), full stack developer in Thiruvananthapuram. See my [portfolio](https://arulkumaran-portfolio-blush.vercel.app) for recent production work.
