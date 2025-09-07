# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website for Kyle Lyon (lyon.computer) - a static website showcasing notes, projects, studies, and media. The site is built with vanilla HTML, CSS, and JavaScript without any build system or package management tools.

## Architecture

### Core Structure
- **Static HTML Pages**: `index.html` (homepage), `post.html` (individual post viewer), `archive.html` (category archives), `site-index.html` (site index)
- **Content Management**: Posts are stored as Markdown files in `posts/{type}/` directories, with JSON metadata in `assets/data/{type}.json`
- **Dynamic Loading**: JavaScript fetches JSON metadata and renders post lists dynamically; post content is fetched and rendered using the Marked library

### Content Types
- **Notes** (`posts/notes/`): Technical articles and analysis
- **Projects** (`posts/projects/`): Project portfolios and case studies  
- **Studies** (`posts/studies/`): Academic or research content
- **Media** (`posts/media/`): Media appearances and presentations

### Key JavaScript Components
- **`home.js`**: Loads and renders recent posts on homepage (limited to 5 items per category)
- **`post.js`**: Handles individual post rendering with URL parsing, markdown processing, and breadcrumb navigation
- **`archive.js`**: Manages category archive pages
- **`site-index.js`**: Generates site-wide index

### URL Structure
The site supports both query parameters and pretty URLs:
- Query: `post.html?type=notes&slug=post-name`
- Pretty: `/notes/post-name`

### Content Data Flow
1. JSON files in `assets/data/` contain post metadata (date, title, href)
2. JavaScript dynamically fetches JSON and populates HTML tables
3. Post links use slug-based routing to `post.html` 
4. `post.js` fetches and renders markdown content with the Marked library

## Development

### Local Development
This is a static site with no build process. Serve files directly:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Or any static file server
```

### Content Management
- Add new posts as `.md` files in appropriate `posts/{type}/` directory
- Update corresponding JSON file in `assets/data/{type}.json` with metadata
- Follow existing JSON structure: `{"date": "YYYY-MM-DD", "title": "Title", "href": "post.html?type={type}&slug={slug}"}`

### CSS Framework
Uses a custom CSS framework with:
- Responsive grid system with breakpoints
- Typography scale
- Component classes for tables, buttons, navigation
- Utility classes for spacing, colors, display

### Deployment
This appears to be deployed as a GitHub Pages site (based on CNAME file and git history showing Jekyll workflow removal). The site is purely static with no server-side processing required.