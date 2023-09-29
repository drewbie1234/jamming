import React, { useState } from "react";
import styles from './App.module.css'

import Playlist from './Playlist';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Tracklist from '.Tracklist/Tracklist'
import Track from './Track/Track'


function App () {
    return (
        <>
            <SearchBar />
            <SearchResults />
            <Playlist />
            <Tracklist />
            <Track />
        </>
     );
}

export default App ;