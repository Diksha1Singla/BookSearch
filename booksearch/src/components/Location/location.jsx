import { useRef, useState } from "react";
import {FaSearch} from  'react-icons/fa'
import { useAppContext } from "../../context"
import { useNavigate } from "react-router-dom";
const Location = () => {

    const navigate = useNavigate()

    const { location, searchresults,setSearchdata } = useAppContext();
    console.log("location: ", location);
    const SearchText = useRef("")
    if (!Array.isArray(location)) {
        return <h2>Location data is not available or is in an incorrect format.</h2>;
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        let tempSearchBook = SearchText.current.value.trim()
        if((tempSearchBook.replace(/[^\w\s]/gi,"")).length === 0){
            searchresults("");
            setSearchdata("Enter Something")
            console.log("Nothing to print")            
        }
        else{
            searchresults(location)
            setSearchdata(tempSearchBook)
            console.log("Data available")
        }
        navigate("/searchlocation");
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>

                <div>
                    <input type="text" ref={SearchText} />
                    <button type="submit" onClick={handleSubmit}>
                        <FaSearch className="text-purple" size={30}></FaSearch>

                    </button>
                </div>

                <div>
                    {
                        location.map((singleLoc, index) => (
                            <div key={index}>
                            <h2>{singleLoc.LocationName}</h2><br/>
                            <h2>{singleLoc.BlockDetails}</h2><br/>
                            <h2>{singleLoc.DetailedAddress}</h2><br/>
                        </div>
                    ))
                    }
                </div>
            </form>
        </>
    );
};

export default Location