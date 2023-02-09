import React from "react";
import {Link } from "react-router-dom";
export default function Info() {
    return (
        <div>
        <h1>Звездные войны</h1>
        <p>Выберите свой раздел</p>
        <Link to="/characters">Персонажи</Link><br />
        <Link to="/planets">Планеты</Link><br />
        <Link to="/films">Фильмы</Link><br />
        <Link to="/species">Расы</Link><br />
        <Link to="/vehicles">Машины</Link><br />
        <Link to="/starships">Корабли</Link><br />
        <Link to="/">Главная</Link>
        </div>
    );
    }