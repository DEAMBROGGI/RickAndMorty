import React, { useEffect } from 'react';
import './App.css';
import { actionTypes } from './core/reducer';
import { useStateValue } from './core/StateProvider';
import NavBar from './components/NavBar';
import Character from './components/characters'
import Episode from './components/episode'
import Location from './components/location'
import Compare from './components/compare'
import EpisodeDetalle from './components/episodeDetalle';
import Home from './components/home'
import Snack from './core/snackbar';
import { apiCall, episodeData, searchApi } from './core/apiCall';

function App() {
  const [{ typeData, pageNumber, search }, dispatch] = useStateValue()

  const querySearch = async () => {
    await searchApi(typeData, search, pageNumber)
      .then(response => {
        selectDispatch(response)
      })
  }

  const getData = async () => {

    await apiCall(typeData, pageNumber)
      .then(response => {
        selectDispatch(response)
      })
  }

  function getRandomEpisode(dataCharacter) {

    var result = []
    dataCharacter.map(async data => {

      var randomEpisode = Math.floor(Math.random() * data.episode.length);
      var randomResult = data.episode[randomEpisode]
      const response = await episodeData(randomResult);

      result.push({
        ...data,
        episodeRandom: response.data.name
      });
    })

    setTimeout(() => {
      dispatch({
        type: actionTypes.CHARACTER,
        apiData: result
      })
    }, 300)
  }

  function selectDispatch(response) {

    dispatch({
      type: actionTypes.TOTAL_PAGE,
      totalPages: response.data.info.pages
    });
    switch (typeData) {
      case "character":
        getRandomEpisode(response.data.results)
        break;
      case "location":
        dispatch({
          type: actionTypes.LOCATION,
          apiData: response.data.results
        })
        break;
      case "episode":
        dispatch({
          type: actionTypes.EPISODE,
          apiData: response.data.results
        })
        break;
      default:
        console.log("No typeData Selected")
    }
  }

  useEffect(() => {
    if (typeData !== "compare" && typeData !== "detail" && typeData !== "home") {
      if (search !== "") {
        querySearch()
      } else { getData() }
    }
    // eslint-disable-next-line
  }, [pageNumber, search, typeData])

  return (
    <div className="App">
      {typeData !== "home" && <NavBar />}
      <Snack />
      {typeData === "character" && <Character />}
      {typeData === "episode" && <Episode />}
      {typeData === "location" && <Location />}
      {typeData === "compare" && <Compare />}
      {typeData === "detail" && <EpisodeDetalle />}
      {typeData === "home" && <Home />}
    </div>
  );
}

export default App;
