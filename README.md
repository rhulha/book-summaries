# Book Summaries Website

A static website built with Eleventy 3.1.2 to showcase chapter-by-chapter summaries of classic science fiction novels.

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

## Project Structure

```
BookSummariesWebSite/
├── src/
│   ├── _data/
│   │   └── books.js           # Data file that reads book summaries
│   ├── _layouts/
│   │   ├── base.njk           # Base HTML layout
│   │   └── book.njk           # Book page layout
│   ├── content/               # Book summaries (markdown)
│   │   ├── 1984/              # 1984 chapter summaries
│   │   ├── blade-runner/      # Blade Runner chapter summaries
│   │   └── neuromancer/       # Neuromancer chapter summaries
│   ├── css/
│   │   └── style.css          # Styles
│   ├── index.njk              # Homepage
│   └── books.njk              # Book pages (uses pagination)
├── eleventy.config.js         # Eleventy configuration
└── package.json
```

## Adding New Books

To add a new book:

1. Create a new directory in `src/content/` (e.g., `src/content/your-book/`)
2. Add your chapter summaries as markdown files (e.g., `chapter01.md`, `chapter02.md`, etc.)
3. Update `src/_data/books.js` to include the new book with its metadata and file pattern
4. Rebuild the site with `npm run build`

## Features

- Responsive design
- Clean, readable typography
- Chapter-by-chapter navigation
- Automatic generation of book pages from source files
