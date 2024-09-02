# Audrow Nash's Personal Website

This is the repository for Audrow Nash's personal website, built using Fresh, a
next-generation web framework for Deno.

## Project Overview

This website serves as a portfolio and personal blog for Audrow Nash, showcasing
his work in robotics, software engineering, and podcasting. The site includes
the following main sections:

- Home
- About
- Resume
- Projects
- Contact

## Technologies Used

- [Fresh](https://fresh.deno.dev/): A next-generation web framework for Deno
- [Deno](https://deno.land/): A secure runtime for JavaScript and TypeScript
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework
- [Preact](https://preactjs.com/): A fast 3kB alternative to React with the same
  modern API

## Getting Started

### Prerequisites

Make sure you have Deno installed on your system. If not, you can install it by
following the instructions at
https://deno.land/manual/getting_started/installation

### Running the Project

1. Clone this repository:
   ```
   git clone https://github.com/your-username/audrow-nash-website.git
   cd audrow-nash-website
   ```

2. Start the development server:
   ```
   deno task start
   ```

3. Open your browser and navigate to `http://localhost:8000` to view the
   website.

## Project Structure

- `routes/`: Contains the main page components and routing logic
- `islands/`: Contains interactive components that are hydrated on the
  client-side
- `components/`: Contains reusable UI components
- `static/`: Contains static assets like images and stylesheets
- `fresh.gen.ts`: Auto-generated file mapping routes and islands

## Customization

To customize the content of the website, you can modify the following files:

- `routes/index.tsx`: Update the content of the home page
- `routes/about.tsx`: Modify the about page content
- `routes/resume.tsx`: Update the resume information
- `routes/projects.tsx`: Add or modify project information
- `routes/contact.tsx`: Update contact form or contact information

## Resume Saving and Testing

This project includes functionality to save the resume as a PDF and run tests to ensure the saved resume is up-to-date.

### Saving the Resume

The resume can be saved as a PDF using the following command:

```
deno task update-resume
```

This command uses Puppeteer to render the resume page and save it as a PDF in the `static/` directory.

### Testing the Resume

To ensure that the saved resume is up-to-date with the current version on the website, you can run the following test:

```
deno task check-resume
```

This test compares the text content of the saved PDF with the current version of the resume page. If there are any differences, the test will fail, indicating that the saved resume needs to be updated.

## Continuous Integration

This project uses GitHub Actions for continuous integration. The CI pipeline includes the following checks:

1. Formatting check
2. Linting
3. Type checking
4. Running tests, including the resume up-to-date check

You can find the CI configuration in the `.github/workflows/ci.yml` file.

## Deployment

This project can be deployed to any platform that supports Deno, such as Deno
Deploy. For more information on deploying Fresh projects, refer to the
[Fresh documentation](https://fresh.deno.dev/docs/concepts/deploying).

## Contributing

If you'd like to contribute to this project, please fork the repository and
create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
