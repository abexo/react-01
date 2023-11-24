import { Fragment } from "react";

export default function Tabs(props) {
    return(
        <Fragment>   
            <menu>
                {props.buttons}
            </menu>
            {props.children}
        </Fragment>     
    )
}