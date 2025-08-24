import ProductsSection from "@/components/ProductsSection";

export const dynamic = "force-dynamic";

export default async function CategoryPage({ params }) {
  const slug = decodeURIComponent(params.slug);
  const res = await fetch(`https://fakestoreapi.com/products/category/${slug}`);
  if (!res.ok) throw new Error("Failed to fetch category products");
  const products = await res.json();

  return (
    <main style={{ padding: "20px 0" }}>
      <div className="container">
        <h1 style={{ textTransform: "capitalize" }}>{slug}</h1>
      </div>
      <ProductsSection title="Products" products={products} />
    </main>
  );
}
