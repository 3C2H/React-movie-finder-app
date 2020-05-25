import React, {useState} from 'react';

function SearchMovies() {
  const [query, setQuery] = useState('')

  const handleSearch = async(e) => {
    e.preventDefault()

    const apiKey = "5dcf7f28a88be0edc01bbbde06f024ab"// your API key
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
    }catch(err) {
      console.error(err)
    }

  }

  return(
    <form className= 'form' onSubmit={handleSearch}>
      <label className='label' htmlFor='query'>Movie Name</label>
      <input 
        className='input'
        type='text'
        name='query'
        placeholder='exemple: Tron'
        value={query}
        onChange={(e) => setQuery(e.target.value)}>
      </input>
      <button className='button' type='submit'>Search</button>
    </form>
  )
}

export default SearchMovies