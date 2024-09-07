import { useState } from "preact/hooks";
import { Project } from "../types.ts";
import { ChevronRightIcon } from "../components/Icons.tsx";

const statusColorClasses = {
  "Actively used":
    "bg-green-300 text-green-800 dark:bg-green-600 dark:text-white",
  "Used occasionally":
    "bg-blue-300 text-blue-800 dark:bg-blue-600 dark:text-white",
  "Inactive":
    "bg-yellow-200 text-yellow-800 dark:bg-yellow-600 dark:text-white",
  "Deprecated": "bg-red-300 text-red-800 dark:bg-red-600 dark:text-white",
};

function FilterToggle(
  { isOpen, onClick }: { isOpen: boolean; onClick: () => void },
) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full px-4 py-2 text-lg font-semibold text-left text-lightmode-text dark:text-darkmode-text bg-zinc-100 dark:bg-zinc-800 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-accent-light dark:focus-visible:ring-accent-dark"
    >
      <span>Filter projects</span>
      <ChevronRightIcon
        className={`w-6 h-6 transition-transform duration-200 ${
          isOpen ? "transform rotate-90" : ""
        }`}
      />
    </button>
  );
}

function StatusFilter({ availableStatuses, selectedStatus, toggleStatus }: {
  availableStatuses: string[];
  selectedStatus: string | null;
  toggleStatus: (status: string) => void;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3 text-lightmode-text dark:text-darkmode-text">
        By Status
      </h3>
      <div className="flex flex-wrap gap-2">
        {availableStatuses.map((status) => (
          <button
            key={status}
            onClick={() => toggleStatus(status)}
            className={`px-3 py-1 rounded-md text-sm ${
              statusColorClasses[status as keyof typeof statusColorClasses] ||
              "bg-zinc-300 text-zinc-800 dark:bg-zinc-600 dark:text-white"
            } ${
              selectedStatus === status.toLowerCase()
                ? "ring-2 ring-offset-2 ring-accent-light dark:ring-accent-dark"
                : ""
            }`}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
}

function TagFilter({ availableTags, selectedTags, toggleTag }: {
  availableTags: string[];
  selectedTags: string[];
  toggleTag: (tag: string) => void;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3 text-lightmode-text dark:text-darkmode-text">
        By Tags
      </h3>
      <div className="flex flex-wrap gap-2">
        {availableTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded-md text-sm ${
              selectedTags.includes(tag.toLowerCase())
                ? "bg-accent-light dark:bg-accent-dark text-white"
                : "bg-zinc-200 dark:bg-zinc-700 text-lightmode-text dark:text-darkmode-text hover:bg-zinc-300 dark:hover:bg-zinc-600"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, selectedTags, toggleTag }: {
  project: Project;
  selectedTags: string[];
  toggleTag: (tag: string) => void;
}) {
  return (
    <a
      href={`/project/${project.slug}`}
      className="bg-zinc-100 dark:bg-zinc-800 p-8 rounded-lg shadow-md flex flex-col hover:shadow-lg transition-shadow duration-300 relative"
    >
      <h3 className="text-2xl font-semibold mb-4 text-accent-light dark:text-accent-dark">
        {project.name}
      </h3>
      <p className="text-lightmode-text dark:text-darkmode-text mb-6 flex-grow">
        {project.description}
      </p>
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-zinc-200 dark:bg-zinc-700 px-3 py-1 rounded-md text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="flex justify-between items-center">
        <span
          className={`text-sm px-3 py-1 rounded-md cursor-pointer ${
            statusColorClasses[
              project.status as keyof typeof statusColorClasses
            ] || "bg-zinc-500 text-white"
          } ${
            selectedTags.includes(project.status.toLowerCase())
              ? "ring-2 ring-offset-2 ring-accent-light dark:ring-accent-dark"
              : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            toggleTag(project.status);
          }}
        >
          {project.status}
        </span>
        {project.version && (
          <span className="text-sm font-semibold text-accent-light dark:text-accent-dark bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded-md">
            v{project.version}
          </span>
        )}
      </div>
    </a>
  );
}

export function ProjectList(
  { projects, tags }: { projects: Project[]; tags: string[] },
) {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleStatus = (status: string) => {
    setSelectedStatus((prev) =>
      prev === status.toLowerCase() ? null : status.toLowerCase()
    );
  };

  const toggleTag = (tag: string) => {
    const lowercaseTag = tag.toLowerCase();
    setSelectedTags((prev) =>
      prev.includes(lowercaseTag)
        ? prev.filter((t) => t !== lowercaseTag)
        : [...prev, lowercaseTag]
    );
  };

  const filteredProjects = projects.filter((project) =>
    (selectedStatus === null ||
      project.status.toLowerCase() === selectedStatus) &&
    (selectedTags.length === 0 ||
      selectedTags.every((tag) =>
        project.tags?.some((projectTag) => projectTag.toLowerCase() === tag)
      ))
  );

  const availableStatuses = [
    ...new Set(projects.map((project) => project.status)),
  ].sort();
  const availableTags = [...new Set(tags)]
    .filter((tag) =>
      filteredProjects.some((project) =>
        project.tags?.some((projectTag) =>
          projectTag.toLowerCase() === tag.toLowerCase()
        )
      )
    )
    .sort((a, b) => a.localeCompare(b));

  return (
    <>
      <div className="mb-8">
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
          <FilterToggle
            isOpen={isFilterOpen}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          />
          {isFilterOpen && (
            <div className="mt-4 space-y-4 p-4 border-t border-zinc-200 dark:border-zinc-700">
              <StatusFilter
                availableStatuses={availableStatuses}
                selectedStatus={selectedStatus}
                toggleStatus={toggleStatus}
              />
              <TagFilter
                availableTags={availableTags}
                selectedTags={selectedTags}
                toggleTag={toggleTag}
              />
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {filteredProjects.map((project: Project) => (
            <ProjectCard
              project={project}
              selectedTags={selectedTags}
              toggleTag={toggleTag}
            />
          ))}
        </div>
      </div>
    </>
  );
}
