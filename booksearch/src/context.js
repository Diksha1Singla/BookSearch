import React , { useCallback, useEffect, useState } from "react";
const url = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    
    const [search,searchresults] = useState("")
    const [searchdata , setSearchdata] =useState("");
    
    //booksearch
    const [token,setToken] = useState(localStorage.getItem("token"))
    const [user,setUser] = useState("")

    const storetoken=(token)=>{
        setToken(token)
        return localStorage.setItem("token",token)
    }

    let isLoggedIn = !!token;

    const LogoutUser = ()=>{
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout == true){
            setToken("")
            return localStorage.removeItem("token")
        }
    }

    const [searchBook,setSearchBook] = useState("");        //title of book
    const [books,setBooks] = useState([]);                  //avail books
    const [Loading,setLoading] = useState(true);            
    const [resultTitle,setResultTitle] = useState("");      //output result

    const fetchBooks =  useCallback(async () => {
        setLoading(true);
        
        try {
            const response = await fetch(`${url}${searchBook}`)    //json string
            const data = await response.json()                      //json object
           // console.log("book", searchBook, url, data);
            const {docs} = data;
            // console.log("docs = ",docs);

            if(docs){
                const bookdata = docs.slice(0,20).map((book) => {
                    
                    // console.log("book.author_name = ",book.author_name)
                    // console.log("book= ",book)
                    // console.log("key",book.key)
                    // console.log("author_name",book.author_name)
                    // console.log("cover_i",book.cover_i)
                    // console.log("title",book.title)
                    // console.log("first_publish_year",book.first_publish_year)
                    // console.log("edition_count",book.edition_count)
                    return {
                        id: book.key,
                        author: book.author_name,
                        cover_id:book.cover_i,
                        title: book.title,
                        first_publish_year: book.first_publish_year,
                        edition_count: book.edition_count
                    }
                })

                setBooks(bookdata)

                if(bookdata.length>1){
                    setResultTitle((searchBook))
                }
                else{
                    setResultTitle("Book Not Found")
                    // alert("Book Not Found")
                    // navigate("/")
                }
            }
            else{
                setBooks([])
                setResultTitle("Book Not Found")
            }
            setLoading(false)
        } catch (error) {
            // console.log("error: ",error);
            setLoading(false);
        }
    },[searchBook])

    useEffect(()=>{
        fetchBooks();
    },[searchBook,books,fetchBooks])

    return(
        <AppContext.Provider value={{setLoading,searchBook,setSearchBook,books,setBooks,Loading,fetch,resultTitle,setResultTitle,user,setUser,storetoken,isLoggedIn,LogoutUser,search,searchresults,searchdata,setSearchdata}}>
             {children}
        </AppContext.Provider>
    )

}

export const useAppContext = () => React.useContext(AppContext);

export {AppContext,AppProvider}
