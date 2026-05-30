"use client";

import { useMemo, useState } from "react";
import DepartmentCard from "@/components/DepartmentCard";
import EmptyState from "@/components/EmptyState";

export default function DepartmentDirectory({ departments }) {
  const colleges = useMemo(() => {
    const uniqueColleges = departments
      .map((department) => department.college)
      .filter(Boolean);

    return ["All Colleges", ...Array.from(new Set(uniqueColleges))];
  }, [departments]);

  const [selectedCollege, setSelectedCollege] = useState("All Colleges");

  const filteredDepartments = useMemo(() => {
    if (selectedCollege === "All Colleges") {
      return departments;
    }

    return departments.filter((department) => department.college === selectedCollege);
  }, [departments, selectedCollege]);

  if (departments.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {colleges.map((college) => (
          <button
            className={selectedCollege === college
              ? "rounded bg-university-burgundy px-4 py-2 text-sm font-bold text-white"
              : "rounded border border-university-blueGray bg-white px-4 py-2 text-sm font-bold text-university-navy transition hover:border-university-royal"}
            key={college}
            onClick={() => setSelectedCollege(college)}
            type="button"
          >
            {college}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredDepartments.map((department) => (
          <DepartmentCard
            department={department}
            key={department.id || department.name}
          />
        ))}
      </div>
    </div>
  );
}
