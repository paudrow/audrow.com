import { PageLayout } from "../components/PageLayout.tsx";

export default function Home() {
  return (
    <PageLayout currentPage="home">
      <div className="space-y-8">
        <img
          src="/profile-square.jpeg"
          alt="Profile Picture"
          className="w-24 h-24 rounded-full mr-6"
        />
        <h1 className="text-4xl font-bold">
          Welcome to My Portfolio
        </h1>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            I'm a passionate developer with expertise in web technologies and
            robotics. I love creating innovative solutions and contributing to
            open-source projects.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Featured Projects
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>ROS 2 Podcast</li>
            <li>Open Robotics Contributions</li>
            <li>Personal Portfolio Website</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Python", "C++", "ROS/ROS 2", "JavaScript", "TypeScript", "React"]
              .map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Get in Touch
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Interested in collaborating or have a question? Feel free to reach
            out!
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent-light dark:bg-accent-dark text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Contact Me
          </a>
        </section>
      </div>
    </PageLayout>
  );
}
