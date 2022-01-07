import { useState } from "react";
import "../CSS/Button.css"

export default function Button(status) {

    //console.log(status.handler);

    return (
        <button className="btn btn-primary" onClick={() => status.handler()}>Change</button>
    );
}