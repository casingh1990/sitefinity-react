import React from "react";
import { WidgetContext } from "../../../framework/widgets/widget-context";
import { htmlAttributes } from "../../../framework/widgets/attributes";
import { store } from "../../../store/store";

export function ButtonElement(props: WidgetContext<InputElement>) {
    const dataAttributes = htmlAttributes(props);

    function activateLasers() {
        console.log('posting this data to some random api', store.getState());
    }

    return (
        <div {...dataAttributes}>
            <button type="button" onClick={activateLasers}>{ props.model.Properties.label }</button>
        </div>
    );
}

interface InputElement {
    label: string,
}