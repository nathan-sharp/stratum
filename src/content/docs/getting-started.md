---
title: Getting Started
description: Learn how to get started with Starlight documentation.
---

Welcome to the Getting Started guide! This page will help you understand the basics of your new documentation site.

## What is Starlight?

Starlight is a documentation framework built on Astro that provides:

- ✨ Beautiful, modern design
- 🚀 Fast performance
- 📱 Mobile-friendly
- 🌙 Dark mode support
- 🔍 Full-text search
- 📖 Easy to navigate

## Creating New Pages

To add a new page to your documentation, create a new Markdown file in `src/content/docs/`:

```markdown
---
title: My Page
description: A short description of my page
---

Your content here...
```

## Organizing Content

You can organize your documentation with subdirectories:

```
src/content/docs/
├── welcome.md
├── getting-started.md
└── guides/
    ├── example.md
    └── tips.md
```

Then update your sidebar in `astro.config.mjs` to reflect the structure.

## Next Steps

- Explore the [Features](/features) page
- Check out the [Starlight docs](https://starlight.astro.build)
- Customize your site configuration
