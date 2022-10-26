// import React from "react";
// import  ReactDOM  from "react";
// import App from './components/App';

// ReactDOM.render(<App/>, document.getElementById('app'));
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import './styles/global.scss';

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />)