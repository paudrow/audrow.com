import { PageLayout } from "../components/PageLayout.tsx";

export default function About() {
  return (
    <PageLayout currentPage="about">
      <h1 className="text-4xl font-bold mb-6">
        About Audrow Nash
      </h1>
      <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
        Audrow Nash is a passionate developer and technology enthusiast. With a
        background in robotics and software engineering, Audrow has made
        significant contributions to the field of autonomous systems and
        open-source software.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
        Professional Experience
      </h2>
      <ul className="list-disc list-inside mb-8 text-gray-600 dark:text-gray-300">
        <li>Software Engineer at a leading robotics company</li>
        <li>Open-source contributor to various robotics projects</li>
        <li>Host of a popular robotics podcast</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
        Skills
      </h2>
      <ul className="list-disc list-inside mb-8 text-gray-600 dark:text-gray-300">
        <li>Robotics Software Development</li>
        <li>Machine Learning and AI</li>
        <li>Full-Stack Web Development</li>
        <li>Technical Writing and Communication</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
        Get in Touch
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        If you'd like to collaborate or have any questions, feel free to reach
        out to Audrow at{" "}
        <a
          href="mailto:audrow@example.com"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          audrow@example.com
        </a>.
      </p>
    </PageLayout>
  );
}
