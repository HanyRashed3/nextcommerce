// components/ProductCard.jsx
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <Link href={`/product/${product.id}`}>
        <div className={styles.thumbWrap}>
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </div>
      </Link>
      <h3 className={styles.title}>{product.title}</h3>
      <div className={styles.priceRow}>
        <div className={styles.price}>${product.price}</div>
        <AddToCartButton
          product={{ id: product.id, title: product.title, price: product.price, image: product.image }}
          className={styles.btn}
        >
          Add to Cart
        </AddToCartButton>
      </div>
    </article>
  );
}
