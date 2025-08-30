import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const Form = ({ setAllData }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    bio: "",
    email: "",
    linkedin: "",
    github: "",
    profileImage: null,
  });

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [projects, setProjects] = useState([]);

  // Handles changes for all standard form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handles file input for the profile image
  // const handleFileChange = (e) => {
  //   setFormData({ ...formData, profileImage: e.target.files[0] });
  // };

  // Handles adding a new skill to the list
  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  // Handles removing a skill from the list
  const handleRemoveSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  // Handles changes for a specific project
  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], [name]: value };
    setProjects(newProjects);
  };

  // Handles adding a new project block to the form
  const handleAddProject = () => {
    setProjects([
      ...projects,
      { projectName: "", projectDescription: "", projectLink: "" },
    ]);
  };

  // Handles removing a project block
  const handleRemoveProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  // Handles the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const combinedData = {
      ...formData,
      skills,
      projects,
    };

    setAllData(combinedData); // update state
    console.log("Form data to be submitted:", combinedData);
    alert("Form submitted! Check the console for the data.");
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen p-8 flex flex-col items-center">
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Create Your Portfolio
          </h1>
          <form onSubmit={handleSubmit}>
            {/* Section: Personal Information */}
            <div className="mb-6 p-4 border rounded-lg bg-gray-50">
              <h2 className="text-xl font-semibold mb-4">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                  />
                </div>
                <div className="col-span-1">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Professional Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Software Engineer"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="bio"
                >
                  Biography
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="A brief description about yourself."
                ></textarea>
              </div>
            </div>

            {/* Section: Contact Information & Profile Image */}
            <div className="mb-6 p-4 border rounded-lg bg-gray-50">
              <h2 className="text-xl font-semibold mb-4">Contact & Profile</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                  />
                </div>
                <div className="col-span-1">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="linkedin"
                  >
                    LinkedIn URL
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="linkedin"
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/johndoe"
                  />
                </div>
                <div className="col-span-1">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="github"
                  >
                    GitHub URL
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="github"
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleInputChange}
                    placeholder="https://github.com/johndoe"
                  />
                </div>
                <div className="col-span-1">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="profileImage"
                  >
                    Profile Image URL
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="profileImage"
                    type="text"
                    name="profileImage"
                    placeholder="Provide image url"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Section: Skills */}
            <div className="mb-6 p-4 border rounded-lg bg-gray-50">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <div className="flex items-center mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddSkill();
                    }
                  }}
                  placeholder="e.g., JavaScript"
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(index)}
                      className="ml-2 text-white hover:text-red-300 transition-colors duration-200"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Section: Projects (Dynamic) */}
            <div className="mb-6 p-4 border rounded-lg bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Projects</h2>
                <button
                  type="button"
                  onClick={handleAddProject}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
                >
                  Add Project
                </button>
              </div>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="mb-6 p-4 border rounded-lg bg-white relative"
                >
                  <button
                    type="button"
                    onClick={() => handleRemoveProject(index)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-xl transition-colors duration-200"
                  >
                    &times;
                  </button>
                  <h3 className="text-lg font-medium mb-2">
                    Project {index + 1}
                  </h3>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor={`project-name-${index}`}
                    >
                      Project Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`project-name-${index}`}
                      type="text"
                      name="projectName"
                      value={project.projectName}
                      onChange={(e) => handleProjectChange(index, e)}
                      placeholder="e.g., My Awesome App"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor={`project-description-${index}`}
                    >
                      Description
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                      id={`project-description-${index}`}
                      name="projectDescription"
                      value={project.projectDescription}
                      onChange={(e) => handleProjectChange(index, e)}
                      placeholder="A brief description of the project."
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor={`project-link-${index}`}
                    >
                      Project Link
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id={`project-link-${index}`}
                      type="url"
                      name="projectLink"
                      value={project.projectLink}
                      onChange={(e) => handleProjectChange(index, e)}
                      placeholder="https://example.com/project"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 transform hover:scale-105"
                type="submit"
              >
                Generate Portfolio
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
