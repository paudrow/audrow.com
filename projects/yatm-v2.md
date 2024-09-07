---
name: "Yet Another Testcase Manager"
description: "A tool for generating test cases from requirements for manual testing, with GitHub integration."
url: "https://github.com/paudrow/yatm-v2"
status: "Used regularly for ROS 2 and Gazebo releases"
version: "2"
pastVersions: []
date: 2024-02-15
tags: ["Rust", "Testing", "GitHub", "CLI", "Automation"]
---

Yet Another Testcase Manager (YATM) is a powerful tool designed to streamline
the process of generating test cases from requirements for manual testing. It's
particularly useful for projects that rely on community contributors for
testing, as it integrates seamlessly with GitHub issues.

## Project Overview

I developed YATM from conception to completion, including problem
identification, solution design, implementation, and documentation. I also
created a migration tool to facilitate the transition from version 1 to 2.

## Impact and Usage

YATM is used annually for ROS 2 and Gazebo releases by Open Robotics, playing a
crucial role in engaging the community for release testing. You can find the
announcement post for the Jazzy release
[here](https://discourse.ros.org/t/jazzy-jalisco-testing-tutorial-kickoff-party-instructions/37501)
and the testing repository [here](https://github.com/osrf/ros2_test_cases/).

## Improvements from Previous Version

The new version incorporates feedback and addresses pain points observed over
two years of using the previous version. Key improvements include:

1. Switching from TypeScript to Rust, leveraging its powerful data structures
   and serialization tools.
2. Code reduction by approximately 70% in some areas.
3. Enhanced ease of use and maintainability.

## Key Features

1. **Requirement Specification**: Define requirements in YAML files for easy
   management and version control.
2. **Test Case Generation**: Utilize a test case builder to generate
   comprehensive test cases from requirements.
3. **GitHub Integration**: Seamlessly upload test cases as GitHub issues, with
   built-in deduplication.
4. **Local Preview**: Preview test cases locally in markdown format before
   uploading to GitHub.
5. **Project Initialization**: Quickly set up a new YATM project with sensible
   defaults using the CLI.
6. **Migration Support**: Easily migrate requirements from YATM v1 to v2.
7. **Validation Tools**: Verify the validity of requirements and test case
   builder files.
8. **Metrics and Analytics**: CLI tool for gathering metrics on test cases from
   GitHub.
9. **Versioning**: Tag versions of your YATM workspace for easier management of
   test case iterations.
10. **Extensibility**: Design allows for building custom requirements builders.
11. **Customizable Templates**: Templated file for GitHub issue templates,
    allowing easy customization for your project.

## Technology Stack

- **Language**: Rust
- **CLI Framework**: Clap
- **Async Runtime**: Tokio
- **GitHub API**: Octocrab
- **Serialization**: Serde with YAML support
- **Error Handling**: Anyhow
- **Template Engine**: Askama

## Development Highlights

1. **Rust Implementation**: Rewritten from the original TypeScript version,
   leveraging Rust's performance and safety features.

2. **CLI Design**: Implemented a comprehensive CLI interface using Clap,
   providing an intuitive user experience for managing test cases and
   interacting with GitHub.

3. **Asynchronous Operations**: Utilized Tokio for efficient handling of
   asynchronous operations, particularly for GitHub API interactions.

4. **Flexible Configuration**: Implemented a YAML-based configuration system for
   easy project setup and customization.

5. **GitHub Integration**: Developed robust GitHub integration features,
   including issue creation, label management, and metrics gathering.

## Challenges and Solutions

The main challenge was designing a flexible system for defining requirements and
generating test cases. To address this, I implemented a custom YAML-based format
for requirements and test case builders. This approach allows for:

1. **Hierarchical Structure**: Requirements can be organized in a tree-like
   structure, reflecting complex testing scenarios.
2. **Reusability**: Common elements can be defined once and reused across
   multiple test cases.
3. **Extensibility**: The format supports custom fields and attributes, enabling
   future enhancements without breaking existing configurations.

## Future Enhancements

Potential areas for future development include:

1. **Integration with CI/CD Pipelines**: Automating test case generation and
   GitHub issue creation as part of continuous integration workflows.
2. **Advanced Analytics**: Implementing more sophisticated metrics and reporting
   features for test case coverage and execution status.
3. **GUI Interface**: Developing a graphical user interface for easier
   management of requirements and test cases, especially for non-technical
   users.
