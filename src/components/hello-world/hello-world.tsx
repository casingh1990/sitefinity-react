import React from "react";
import { WidgetContext } from "../../framework/widgets/widget-context";
import { htmlAttributes } from "../../framework/widgets/attributes";

export function HelloWorldComponent(props: WidgetContext<HelloWorldEntity>) {
    const dataAttributes = htmlAttributes(props);
    return (
        <div>
            <h1 {...dataAttributes}>{props.model.Properties.Message}</h1>
            <div className={`d-flex ${flexDirection(props.model.Properties.position)}`}>
                <p {...dataAttributes}>{props.model.Properties.Second}</p>
            </div>
        </div>
    );
}

function flexDirection(position: string) {
    return position === 'left' ? 'flex-row' : 'flex-row-reverse';
}

interface HelloWorldEntity {
    Message: string,
    Second: string,
    position: string,
}