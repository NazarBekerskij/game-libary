
import { Component } from "react";
import styles from "./GameItem.module.css";

class Item extends Component {
  render() {
    const { title, genre, rating, status, onDelete } = this.props;

    return (
      <li className={styles.card}>
        <h2 className={styles.title}>{title}</h2>

        <p className={styles.genre}>{genre}</p>

        <span className={styles.rating}>
          ⭐ {rating}/10
        </span>

        <span className={`${styles.status} ${styles[status]}`}>
          {status}
        </span>

        <button
          className={styles.deleteButton}
          type="button"
          onClick={onDelete}
        >
          Delete Game
        </button>
      </li>
    );
  }
}

export default Item;
