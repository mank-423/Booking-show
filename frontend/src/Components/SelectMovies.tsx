import { useContext } from "react";
import { movieList } from "../data/Data"
import RadioComponent from "./RadioComponent"
import BookContext from "../Context/BookContext";


const SelectMovies = () => {

    const context = useContext(BookContext);

    const {movie, setMovie} = context;

    const handleChangeMovie = (val: string) => {
        setMovie(val);
        localStorage.setItem("movie", val);
    }

    return (
        <>
            <h1 className="text-xl font-bold">Select A Movie:</h1>
 
            <div className="flex gap-9 py-4">
                {movieList.map((el, index) => (
                    <RadioComponent text={el} data={movie} key={index} changeSelection={handleChangeMovie}/>
                ))}
            </div>
        </>
    )
}

export default SelectMovies