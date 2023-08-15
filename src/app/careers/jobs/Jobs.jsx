"use client";
import React, { useEffect, useState } from "react";
import Job from "./Job";
import { FiSearch } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

const Jobs = () => {
  const locations = ["All Locations", "dhaka", "india", "japan", "indonesia"];
  const departments = [
    "All departments",
    "Engineering",
    "Marketing",
    "Software",
    "Architecture",
  ];
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  useEffect(() => {
    Aos.init({ duration: 600, delay: 100 });
  }, []);
  return (
    <div className="container mx-auto px-6 py-16">
      <h3 className="text-3xl md:text-4xl font-bold uppercase text-center mb-8">
        CURRENT OPENINGS
      </h3>
      <div>
        {/* search and filter */}
        <div
          data-aos="fade-left"
          className="flex flex-col md:flex-row gap-12 my-8"
        >
          <div className="md:w-1/2 relative">
            <input
              className="border border-black w-full py-3 pl-9 pr-4 focus:border-primary focus:outline-none"
              type="search"
              name="search"
              placeholder="Search..."
              id=""
            />
            <FiSearch className="absolute h-5 w-5 left-2 top-4" />
          </div>
          <div className="md:w-1/2 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <select
                id="location"
                className="w-full py-3 border px-4 border-black focus:border-primary focus:outline-none"
              >
                {locations.map((location) => (
                  <option
                    key={location}
                    value={location}
                    className="rounded-none py-3"
                  >
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:w-1/2">
              <select
                id="department"
                className="w-full py-3 border border-black px-4 focus:border-primary focus:outline-none"
              >
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* table */}
        <div data-aos="fade-right" class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                >
                  SI
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                >
                  Job Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                >
                  Department
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                >
                  Employment Type
                </th>
                <th className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {jobs.map((job, index) => (
                <Job key={job.id} job={job} index={index}></Job>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
