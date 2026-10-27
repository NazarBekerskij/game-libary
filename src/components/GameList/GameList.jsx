
import { Component } from "react";
import Item from "../GameItem/GameItem";
import styles from "./GameList.module.css";

class List extends Component {
  render() {
    const { games, onDelete } = this.props;

    return (
      <ul className={styles.list}>
        {games.map(({ id, title, genre, rating, status }) => (
          <Item
            key={id}
            title={title}
            genre={genre}
            rating={rating}
            status={status}
            onDelete={() => onDelete(id)}
          />
        ))}
      </ul>
    );
  }
}

export default List;
