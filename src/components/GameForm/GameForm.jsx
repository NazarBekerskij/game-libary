import { Component } from "react";

class Form extends Component {
    render(){
        const {onSubmit, onChange, title, genre, rating, status} = this.props
        return(
            <form onSubmit={onSubmit}>
                <label>
                    Title
                    <input
                     onChange={onChange}
                     type="text"
                     name="title"
                     value={title}
                      />
                </label>
                 <label>
                    Genre
                    <input
                     onChange={onChange}
                     name="genre"
                     type="text"
                     value={genre}
                      />
                </label>
                 <label>
                    Rating
                    <input
                     onChange={onChange}
                     name="rating"
                     type="number"
                     min="1"
                     max="10"
                     step="1"
                     value={rating}
                      />
                </label>
                 <label>
                    Status
                    <input
                     onChange={onChange}
                     name="status"
                     type="text" 
                     value={status}
                     />
                </label>
                <button type="submit">Add Game</button>
            </form>
        )
    }
}


export default Form