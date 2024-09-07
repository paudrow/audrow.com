---
name: "Limited HTML Converter"
description: "A web application that converts plain text with basic formatting into limited HTML, providing a safe way to allow user-generated content with some formatting options."
url: "https://github.com/audrow-nash-podcast/text-to-limited-html"
deploymentUrl: "https://text-to-limited-html.deno.dev/"
status: "Active"
version: "1"
pastVersions: []
date: 2024-07-20
tags: ["Typescript", "Deno", "Fresh", "Preact", "Tailwind CSS", "HTML", "Text Conversion", "API"]
---

The Limited HTML Converter is a web application designed to convert plain text
with basic formatting into limited HTML. This project addresses the need for a
safe way to allow user-generated content with some formatting options without
exposing the system to the risks associated with full HTML input.

## Project Overview

I developed this application primarily to streamline the process of publishing
show notes for the Audrow Nash Podcast across various podcasting platforms. The
motivation behind this project was to ensure consistency in markdown formatting
across different podcasting apps, where controlling links, bullets, and spacing
can be challenging.

## Key Features

1. **Text Input Area**: Users can enter their content with basic formatting.
2. **Real-time Conversion**: The input text is converted to limited HTML in
   real-time.
3. **HTML Display**: A separate area shows the converted HTML output.
4. **Copy to Clipboard**: Users can easily copy the converted HTML.
5. **URL Parameter Support**: Allows sharing of converted text via URL.
6. **API Endpoint**: Enables programmatic conversion of text to limited HTML.

## Technology Stack

- **Runtime**: Deno
- **Framework**: Fresh
- **UI Library**: Preact
- **Styling**: Tailwind CSS
- **Testing**: Deno's built-in testing framework

## Development Highlights

1. **Security-First Approach**: Implemented HTML character escaping to prevent
   XSS attacks.

2. **Custom Text Parsing**: Developed a custom parser to convert specific text
   patterns (e.g., _bold_, _italic_) into their HTML equivalents.

3. **Real-time Updates**: Utilized Preact's state management to provide instant
   feedback as users type.

4. **API Design**: Created a simple yet effective API endpoint for programmatic
   text conversion.

5. **URL Parameter Handling**: Implemented functionality to parse and apply text
   from URL parameters, enabling easy sharing of converted content.

## Challenges and Solutions

One of the main challenges was balancing user flexibility with security
concerns. To address this, I implemented a limited set of allowed HTML tags and
attributes, ensuring that the converted content remains safe while still
providing essential formatting options.

Another challenge was ensuring consistent rendering across different podcasting
platforms. I conducted extensive testing with various popular podcasting apps to
fine-tune the HTML output for optimal display across platforms.

## Impact and Usage

The Limited HTML Converter has significantly improved the workflow for
publishing show notes for the Audrow Nash Podcast. It allows for:

1. **Consistent Formatting**: Ensures that show notes appear uniformly across
   different podcasting platforms.
2. **Time Savings**: Reduces the time spent on formatting and reformatting
   content for different platforms.
3. **Error Reduction**: Minimizes the risk of formatting errors that could lead
   to poor readability or broken links.

## Future Enhancements

1. **Custom Formatting Rules**: Allow users to define their own formatting rules
   for specific podcasting platforms.
2. **Markdown Support**: Add the ability to input Markdown and convert it to
   limited HTML.
3. **Preview Functionality**: Implement a preview feature that simulates how the
   converted HTML will appear on different podcasting platforms.
4. **Batch Processing**: Add support for converting multiple text inputs at
   once, useful for processing multiple episodes' show notes.

## Conclusion

The Limited HTML Converter has proven to be an invaluable tool in maintaining
consistency and efficiency in publishing podcast show notes. By addressing the
specific needs of podcast content creation, it demonstrates how targeted web
applications can significantly improve content management workflows in niche
areas.
