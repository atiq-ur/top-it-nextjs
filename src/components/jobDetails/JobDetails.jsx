import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        const findJob = data.find((job) => job.id === parseInt(id));
        setJob(findJob);
      });
  }, []);
  const {
    title,
    description,
    deadline,
    department,
    employment_type,
    location,
    workplace_type,
    salary,
    key_responsibilities,
    skills,
    experience,
    about,
  } = job;
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* details start */}
        <div className="md:col-span-3 space-y-6">
          <h2 className="text-4xl md:text-6 font-bold">{title}</h2>
          <p>{description}</p>
          <div className="md:hidden">
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row">
                <div className="space-y-2 w-1/2">
                  <p className="text-primary font-bold">
                    Application Deadline:
                  </p>
                  <p className="text-gray1">{deadline}</p>
                </div>
                <div className="space-y-2 w-1/2">
                  <p className="text-primary font-bold">Department:</p>
                  <p className="text-gray1">{department}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="space-y-2 w-1/2">
                  <p className="text-primary font-bold">Employment Type:</p>
                  <p className="text-gray1">{employment_type}</p>
                </div>
                <div className="space-y-2 w-1/2">
                  <p className="text-primary font-bold">Location:</p>
                  <p className="text-gray1">{location}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="space-y-2 w-1/2">
                  <p className="text-primary font-bold">Workplace type:</p>
                  <p className="text-gray1">{workplace_type}</p>
                </div>
                <div className="space-y-2 w-1/2">
                  <p className="text-primary font-bold">Salary:</p>
                  <p className="text-gray1">{salary}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-xl font-semibold">Key Responsibilities</h4>
            <ul className="space-y-2">
              {key_responsibilities?.map((response) => (
                <li className="list-disc ml-8" key={response}>
                  {response}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-xl font-semibold">
              Skills, Knowledge and Expertise
            </h4>
            <ul className="space-y-2">
              {skills?.map((skill) => (
                <li className="list-disc ml-8" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-xl font-semibold">Experience Requirements</h4>
            <ul className="space-y-2">
              <li className="list-disc ml-8">{experience}</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-xl font-semibold">About Top It</h4>
            <p>{about}</p>
          </div>
        </div>
        {/* details end */}
        {/* apply card start */}
        <div className="bg-gray-100 hidden md:flex flex-col items-center py-6">
          <div>
            <button className="btn-primary mb-8">Apply Now</button>
          </div>
          <div className="space-y-3">
            <div className="space-y-2">
              <p className="text-primary font-bold">Application Deadline:</p>
              <p className="text-gray1">{deadline}</p>
            </div>
            <div className="space-y-2">
              <p className="text-primary font-bold">Department:</p>
              <p className="text-gray1">{department}</p>
            </div>
            <div className="space-y-2">
              <p className="text-primary font-bold">Employment Type:</p>
              <p className="text-gray1">{employment_type}</p>
            </div>
            <div className="space-y-2">
              <p className="text-primary font-bold">Location:</p>
              <p className="text-gray1">{location}</p>
            </div>
            <div className="space-y-2">
              <p className="text-primary font-bold">Workplace type:</p>
              <p className="text-gray1">{workplace_type}</p>
            </div>
            <div className="space-y-2">
              <p className="text-primary font-bold">Salary:</p>
              <p className="text-gray1">{salary}</p>
            </div>
          </div>
        </div>
        {/* apply card end */}
      </div>
      <div className="">
        <button className=" md:hidden w-full bg-primary hover:bg-red-500 border-2 py-4 fixed bottom-0 left-0 text-white">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
