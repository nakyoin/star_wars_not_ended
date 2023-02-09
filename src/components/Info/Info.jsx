import React from "react";
import "../Style.css";
import {Link } from "react-router-dom";
export default function Info() {
    return (
        <div>
        <h1>Звездные войны</h1>
        <p className="choose">Выберите свой раздел</p>
        <ul>
            <li>
        <Link to="/characters">Персонажи</Link>
        </li>
        <li>
        <Link to="/planets">Планеты</Link>
        </li>
        <li>
        <Link to="/">Фильмы</Link>
        </li>
        <li>
        <Link to="/species">Расы</Link>
        </li>
        <li>
        <Link to="/vehicles">Транспорт</Link>
        </li>
        <li>
        <Link to="/starships">Корабли</Link>
        </li>
        <li>
        <Link to="/">Главная</Link>
        </li>
        </ul>
        </div>
    );
    }