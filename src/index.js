import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import App2 from "./app2";
import ProductView from "./views/ProductView";

document.body.className=" bg-secondary";

ReactDOM.render(
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
            <App/>
        </>
    ,
  document.getElementById('root')
);
