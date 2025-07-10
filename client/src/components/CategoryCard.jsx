export default function CategoryCard({ category }) {
  return (
    <div className="border p-4 rounded shadow bg-white text-gray-900 dark:bg-gray-800 dark:text-white">
      <h2 className="text-xl font-semibold">{category.name}</h2>
      <p>{category.description}</p>
    </div>
  );
}
