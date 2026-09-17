import "./Category.css";
import categories from "../data/categories";

function Categoty() {
  return (
    <section className="categoty">
      <div className="categoty-heading">
        <h2 className="font-bold">Shop by Category</h2>
        <span className="categoty-rule" />
      </div>
      <div className="categoty-grid">
        {categories.map((category, index) => (
          <a
            key={category.id}
            href="#"
            className="categoty-card"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <img src={category.image} alt={category.alt} loading="lazy" />
            <span className="categoty-name">{category.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Categoty;