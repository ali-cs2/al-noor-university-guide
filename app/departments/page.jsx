import DepartmentDirectory from "@/components/DepartmentDirectory";
import PageHero from "@/components/PageHero";
import universityData from "@/data/university.json";

export default function DepartmentsPage() {
  const { departments } = universityData;

  return (
    <div>
      <PageHero
        title="Departments"
        description="Browse departments once academic content is added."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        <DepartmentDirectory departments={departments} />
      </section>
    </div>
  );
}
