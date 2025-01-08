import { useEffect, useState } from "react";
import { useAppContext } from "../../context"

const SearchLocation=()=>{
    const {location,search,searchresults,setSearchdata,searchdata} = useAppContext();
    const [searchinput, setSearchinput] = useState('')

    console.log("search: ",search)                   //location
    console.log("searchdata: ",searchdata)          //location wann search
    console.log("location: ",location)


    useEffect(()=>{
        if(!search.length){
            if(searchdata === "Enter Something"){
                <h2>Enter Something</h2>
            }
        }
        else{
            const foundLocation = location.find((eachloc)=>{
                return eachloc.LocationName === (searchdata)
            })
            if(foundLocation){
                setSearchinput(foundLocation);
                console.log("searchInput:", foundLocation)
            }
        }
    },[location, searchdata])
    return(
        <>
            <div>
                <h2>{searchdata}</h2>
                {/* <h2>{searchinput.BlockDetails}</h2> */}
            </div>
            {
                searchinput?
                (
                    <>
                        <h1>{searchinput.LocationName}</h1>
                        <h2>{searchinput.BlockDetails}</h2>
                        <h3>{searchinput.DetailedAddress}</h3>
                    </>
                ):(
                    location.length>0?(<>
                        <h1>Location not found</h1>
                        {
                        location.map((loceach)=>{
                            return(
                            <div key={loceach.id}>
                                <h1>{loceach.LocationName}</h1>
                                <h2>{loceach.BlockDetails}</h2>
                                <h3>{loceach.DetailedAddress}</h3>
                            </div>
                            )  
                        })}
                    </>):(
                        <></>
                    )
                )
                
            }
            
        </>
    )

}

export default SearchLocation;