import './App.css'
import { Component } from 'react'

import Form from './components/GameForm/GameForm'
import List from './components/GameList/GameList'

import { nanoid } from 'nanoid'


class App extends Component {
  state = {
    games: [],
    title: "",
    genre: "",
    rating: "",
    status: "planned",
    search: "",
  }

  componentDidMount(){
    const saveGames = window.localStorage.getItem("games")

    if(saveGames){
      this.setState({
        games: JSON.parse(saveGames)
      })
    }
  }

  componentDidUpdate(_, prev){
    if(prev.games !== this.state.games){
      window.localStorage.setItem("games", JSON.stringify(this.state.games))
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const {title, genre, rating, status} = this.state

    if(
      title.trim() === "" ||
      genre.trim() === "" ||
      rating.trim() === "" ||
      status.trim() === "" 
    ){
      return;
    }

    const newGame = {
      id: nanoid(),
      title,
      genre,
      rating: Number(rating),
      status,
    }

    this.setState((prev) => ({
      games: [...prev.games, newGame],
      title: "",
      genre: "",
      rating: "",
      status: "planned",
    }))



  }

  handleDelete = (gameId) => {
    this.setState((prev) => ({
      games: prev.games.filter((game) => game.id !== gameId)
    }))
  }


  render(){
    const {title, genre, rating, status, search, games} = this.state
    return(
      <>
      <Form
      title={title}
      genre={genre}
      rating={rating}
      status={status}
      search={search}
      onSubmit={this.handleSubmit}
      onChange={this.handleChange}
      />
      <List 
      games={games}
      onDelete={this.handleDelete}
      />
      </>
    )
  }
}

export default App
