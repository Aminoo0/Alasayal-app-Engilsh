import { createContext, useState } from "react";
import { dataCars } from "../Components/OurCarsDetails/OurCarsDetails";

export let category = createContext('')

export default function CategoryContextProvider(props) {
    const [ourCars, setOurCars] = useState(dataCars)
    let filterByPhoto = (term) => {
        console.log(dataCars);
        let busCategory = dataCars.filter((car) => car.category == term)
        setOurCars(busCategory)
    }
    return <category.Provider value={{ filterByPhoto, ourCars, setOurCars }}>
        {props.children}
    </category.Provider>
}