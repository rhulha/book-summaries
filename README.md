# Book Summaries Website

A static website built with Eleventy to showcase chapter-by-chapter summaries of popular fiction novels.

## Books Included

- **1984** by George Orwell
- **Do Androids Dream of Electric Sheep?** (Blade Runner) by Philip K. Dick
- **Neuromancer** by William Gibson

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

Run the development server with live reload:

```bash
npm start
```

The site will be available at `http://localhost:8080`

### Build for Production

Generate the static site:

```bash
npm run build
```

The output will be in the `_site` directory.

## Adding New Books

To add a new book:

1. Create a new directory in `src/content/` (e.g., `src/content/your-book/`)
2. Add your chapter summaries as markdown files (e.g., `chapter01.md`, `chapter02.md`, etc.)
3. Update `src/_data/books.js` to include the new book with its metadata and file pattern
4. Rebuild the site with `npm run build`

