import Link from "next/link";
import React from "react";

const Job = ({ job, index }) => {
  const { id, title, location, employment_type, department } = job;
  return (
    <>
      <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-800">
          {index + 1}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800">{title}</td>
        <td className="px-6 py-4 text-sm text-gray-800">{location}</td>
        <td className="px-6 py-4 text-sm font-medium text-right">
          {department}
        </td>
        <td className="px-6 py-4 text-sm font-medium text-right">
          {employment_type}
        </td>
        <td className="px-6 py-4 text-sm text-center">
          <Link href={`/careers/${id}`}>
            <button className="btn-primary">Details</button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Job;
