
import { Component } from "react";
import styles from "./GameForm.module.css";

class Form extends Component {
  render() {
    const {
      onSubmit,
      onChange,
      title,
      genre,
      rating,
      status
    } = this.props;

    return (
      <form className={styles.form} onSubmit={onSubmit}>
        <h2 className={styles.title}>Add a New Game</h2>

        <div className={styles.fields}>
          <label className={styles.label}>
            Title
            <input
              className={styles.input}
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              placeholder="Enter game title"
            />
          </label>

          <label className={styles.label}>
            Genre
            <input
              className={styles.input}
              type="text"
              name="genre"
              value={genre}
              onChange={onChange}
              placeholder="Enter genre"
            />
          </label>

          <label className={styles.label}>
            Rating
            <input
              className={styles.input}
              type="number"
              min="1"
              max="10"
              step="1"
              name="rating"
              value={rating}
              onChange={onChange}
              placeholder="1 - 10"
            />
          </label>

          <label className={styles.label}>
            Status
            <select
              className={styles.input}
              name="status"
              value={status}
              onChange={onChange}
            >
              <option value="planned">Planned</option>
              <option value="playing">Playing</option>
              <option value="completed">Completed</option>
            </select>
          </label>
        </div>

        <button className={styles.button} type="submit">
          + Add Game
        </button>
      </form>
    );
  }
}

export default Form;
