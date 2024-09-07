---
name: "Audrow Nash's Personal Website"
description: "A modern, responsive personal website built with Fresh, Deno, and TypeScript, showcasing projects, resume, and contact information."
url: "https://github.com/audrow/audrow.github.io"
deploymentUrl: "https://audrow.com"
status: "Actively used"
version: "1"
pastVersions: []
date: 2024-09-01
tags: ["TypeScript", "Deno", "Fresh", "Preact", "Website"]
---

Audrow Nash's Personal Website is a modern, responsive web application designed
to showcase professional information, projects, and contact details. Built using
cutting-edge technologies, this project demonstrates a commitment to
performance, maintainability, and developer experience.

## Project Overview

I developed this website to create a central hub for my professional online
presence, leveraging the latest web technologies to ensure a fast, secure, and
maintainable codebase. The project encompasses everything from content
management to responsive design, providing a comprehensive solution for personal
branding and project showcasing.

## Key Features

1. **Dynamic Content Management**: Utilizes markdown files for easy content
   creation and management of projects and resume information.
2. **Responsive Design**: Fully responsive layout using Tailwind CSS, ensuring a
   great user experience across all devices.
3. **Dark Mode Support**: Implements a dark mode toggle for improved user
   experience in different lighting conditions.
4. **SEO Optimization**: Built-in SEO features to improve discoverability and
   search engine rankings.
5. **Project Showcase**: Dedicated project pages with filtering capabilities by
   tags and status.
6. **Resume Page**: A comprehensive resume page with downloadable PDF option.
7. **Contact Information**: Easy-to-access contact details and social media
   links.
8. **Integration Tests**: Ensures the reliability of key website functions.

## Technology Stack

- **Runtime**: Deno
- **Framework**: Fresh
- **UI Library**: Preact
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Markdown Processing**: Marked
- **Testing**: Deno's built-in testing framework with Puppeteer for integration
  tests
- **Deployment**: GitHub Pages

## Development Highlights

1. **Fresh Framework Utilization**: Leveraged Fresh's file-based routing and
   island architecture for optimal performance and developer experience.

2. **Markdown-based Content**: Implemented a system for managing projects and
   resume information using markdown files, allowing for easy content creation
   and version control.

3. **Responsive Design**: Utilized Tailwind CSS to create a fully responsive
   design that works seamlessly across various device sizes.

4. **Dark Mode Implementation**: Developed a dark mode toggle that respects user
   preferences and persists across sessions.

5. **Project Filtering**: Created a dynamic project list with filtering
   capabilities based on tags and project status.

6. **SEO Optimization**: Implemented SEO best practices, including dynamic meta
   tags and structured data, to improve the website's search engine visibility.

7. **Integration Testing**: Incorporated integration tests using Puppeteer to
   ensure the website functions correctly across different scenarios and user
   interactions.

## Challenges and Solutions

One of the main challenges was implementing a flexible content management system
that could handle various types of content (projects, resume, etc.) while
maintaining type safety and ease of use. To address this, I developed a custom
markdown processing system that:

1. Uses Zod for schema validation of frontmatter data.
2. Processes markdown content into HTML.
3. Integrates seamlessly with Fresh's routing system for dynamic page
   generation.

This solution allows for a streamlined workflow from content creation to page
rendering, all managed through version-controlled markdown files.

## Future Enhancements

1. **Blog Integration**: Add a blog section to share articles and updates.
2. **Internationalization**: Implement multi-language support for a global
   audience.
3. **Performance Optimization**: Further optimize asset loading and implement
   lazy loading for images.
4. **Analytics Integration**: Implement a privacy-focused analytics solution to
   gain insights into user behavior and content performance.
5. **Automated Deployment**: Set up a CI/CD pipeline for automated testing and
   deployment.

## Impact and Usage

The website serves as the primary platform for my professional online presence,
providing visitors with easy access to my projects, resume, and contact
information. It has streamlined the process of updating and sharing my
professional information, allowing for more focus on creating and showcasing
high-quality projects.
