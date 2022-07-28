import React from "react";
import { capitalizeFirstLetter } from "../utils/helpers";

import PhotoList from "./PhotoList";


const Gallery = ({currentCategory}) => {

    return(
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList currentCategory={currentCategory.name}/>
        </section>
    )
}

export default Gallery;