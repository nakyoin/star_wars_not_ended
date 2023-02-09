import React from "react";
import {Link} from "react-router-dom";

export function Characters() {
return(
    <div><p className="sw">Персонажи звездных войн</p>
    <div className="peoples">
    <Link to="/characters/walker">Люк Скайуокер</Link><br />
    <Link to="/characters/wader">Дарт Вейдер</Link><br />
    <Link to="/characters/r2d2">Р2-Д2</Link><br />
    </div>
    </div>
)
}