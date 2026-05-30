import DepartmentCard from "@/components/DepartmentCard";
import SectionHeader from "@/components/SectionHeader";
import universityData from "@/data/university.json";

export default function DepartmentsPage() {
  const { departments } = universityData;

  return (
    <section className="space-y-6">
      <SectionHeader
        title="Departments"
        description="Browse departments once academic content is added."
      />
      {departments.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department) => (
            <DepartmentCard
              key={department.id || department.name}
              department={department}
            />
          ))}
        </div>
      ) : (
        <p className="rounded-lg bg-white p-6 text-slate-600 shadow-sm ring-1 ring-slate-200">
          Content will be added soon.
        </p>
      )}
    </section>
  );
}
