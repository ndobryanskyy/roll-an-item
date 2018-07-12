import * as React from "react";
import { render as reactRender } from "react-dom";
import { Application } from "./components/app";

reactRender(
    <Application name="Roll an item" version="0.0.1"/>,
    document.getElementById("app")
);