//context creation = accumulating data
// provider 
// consumer lengthy (removed) 
//useContext hook
//contextApi includes useContext

import React, { useContext, useReducer, useEffect} from "react";
import reducer from "./reducer";

let API="https://hn.algolia.com/api/v1/search?";

const initialState={
    isLoading:true,
    query:"CSS",
    nbPages:0,
    page:0,
    hits:[],
};

const AppContext=React.createContext();

//provider function

const AppProvider=({children})=>{
const [state,dispatch]=useReducer(reducer,initialState);

    const fetchApiData = async (url) => {
       dispatch({type:"SET_LOADING"}); 
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            //isLoading=false;
            dispatch({
            type:"GET_STORIES",
            payload:{
            hits:data.hits,
            nbPages:data.nbPages,
        },
    });
        }catch(error){
            console.log("error");
        }
};


//search
const searchPost=(searchQuery)=>{
    dispatch(
        {
            type:"SEARCH_QUERY",
            payload:searchQuery,
        }
    );
};

//pagination
const getNextPage=()=>{
    dispatch({
        type:"NEXT_PAGE",
    });
};

const getPrevPage=()=>{
    dispatch({
        type:"PREV_PAGE",
    });
};

//to call API function
    useEffect(()=>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    },[state.query,state.page]);
    return (
    <AppContext.Provider value={{...state,searchPost,getNextPage,getPrevPage}}>
        {children}
        </AppContext.Provider>
    );
};

//custom hook creation
const useGlobalContext =()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext};
