import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { Paths } from "../paths";
import Characters from "../pages/characters/Characters";
import CharacterDetails from "../pages/character-details/CharacterDetails";

const RouteProvider = () => {
    return (
        <Routes>
            <Route path={ Paths.home } element={ <Characters /> }/>
            <Route path={ `${ Paths.character }/:id` } element={ <CharacterDetails /> }/>
            <Route path='/*' element={ <Navigate replace to={ Paths.home } /> } />
        </Routes>
    );
};

export default RouteProvider;