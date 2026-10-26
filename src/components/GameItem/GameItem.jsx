import { Component } from "react";


class Item extends Component {
    render(){
        const {title, genre, rating, status, onDelete } = this.props
        return(
            <li>
                <h2>{title}</h2>
                <p>{genre}</p>
                <p>{rating}</p>
                <p>{status}</p>
                <button type="button" onClick={onDelete}>
                    Delete
                </button>
            </li>            
        )
    }
}

export default Item