import React from "react";
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


/*
https://lmgtfy.com/?q=react+loading+spinner+components
There are many more on the web use one of these or create your own!
*/

export const LoaderComponent = () => {
    return (<>

<Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
      />

    </>)
};
