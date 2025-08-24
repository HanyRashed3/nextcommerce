import Link from "next/link";
import styles from "./BrowseByCategory.module.css";

export default function BrowseByCategory({ categories = [] }) {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.headerRow}>
          <h2 className={styles.title}>Browse By Category</h2>
          <div aria-hidden>›</div>
        </div>

        <div className={styles.track}>
          {categories.map((cat) => (
            <Link key={cat} href={`/category/${encodeURIComponent(cat)}`}>
              <span className={styles.pill}>
                {/* ممكن تضيف أيقونات لاحقًا حسب النوع */}
                <span style={{ textTransform: "capitalize" }}>{cat}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
