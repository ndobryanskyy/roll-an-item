import * as React from "react";
import { render as reactRender } from "react-dom";
import { Application } from "./components/app";

reactRender(
    <Application name="Olga" version="1.0.0"/>,
    document.getElementById("app")
);