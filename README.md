# Grammar mode README

This is an VS Code extension to let the author of a source file add a comment to force the file to use a certain grammar / Syntax (aka "mode" in EMACS) and show the appropriate syntax highlighting. This is needed on files with no extensions or files that start with one language but then are mostly another language (like react view files).

---

## Usage

Add a string containing `language ID` (you can check it in language selector) in some place of first 4 lines of file.

```
syntax=language-id
#syntax=yaml
// syntax=javascript
<!-- blabla syntax=xml -->

```

Regexp pattern: `/(?<=syntax=)(?:\w+[-.]?)+/`

---

## Requirements

There are no additional dependencies.
---

## Extension Settings

Extension doesn't have any settings.

---

## Release Notes

Users appreciate release notes as you update your extension.

### 0.0.4

- Extension activates on file open

### 0.0.3

- Now supported grammar names starting with `source.`
- Updated deps

### 0.0.2

- Removed forgotten debug messages.
### 0.0.1

Initial release.

---

## For more information

* [Similar extension for Atom](https://github.com/azhinu/grammar-mode)

---

## License 

**WTFPL**

You can do with this extension whatever you want.
