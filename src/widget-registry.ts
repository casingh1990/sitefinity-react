import { WidgetRegistry } from "./framework/widgets/widget-registry";
import { ContentBlock } from "./components/content-block/content-block";
import { ContentList } from "./components/content-list/content-list";
import { Section } from "./components/section/section";

import helloWorldJson from './components/hello-world/designer-metadata.json';
import { HelloWorldComponent } from "./components/hello-world/hello-world";

import inputElementJson from './components/form-components/input-element/designer-metadata.json';
import { InputElement  } from "./components/form-components/input-element/input-element";

import buttonElementJson from './components/form-components/button-element/designer-metadata.json';
import { ButtonElement } from "./components/form-components/button-element/button-element";

import sitefinityContentBlockJson from './components/content-block/designer-metadata.json'
import sitefinitySectionJson from './components/section/designer-metadata.json';
import sitefinityContentListJson from './components/content-list/designer-metadata.json';

export const widgetRegistry: WidgetRegistry = {
    widgets: {
        "SitefinityContentBlock":  {
            designerMetadata: sitefinityContentBlockJson,
            componentType: ContentBlock,
            editorMetadata: {
                Title: "Content block"
            }
        },
        "SitefinitySection": {
            designerMetadata: sitefinitySectionJson,
            componentType: Section,
            selectorCategory: 'Layout',
            editorMetadata: {
                Title: "Section"
            }
        },
        "SitefinityContentList": {
            designerMetadata: sitefinityContentListJson,
            componentType: ContentList,
            editorMetadata: {
                Title: "Content list",
                EmptyIconText: "Select content",
                EmptyIcon: "plus-circle",
            },
        },
        "HelloWorld":  {
            designerMetadata: helloWorldJson,
            componentType: HelloWorldComponent,
            editorMetadata: {
                Title: "Hello World"
            }
        },
        "InputElement":  {
            designerMetadata: inputElementJson,
            componentType: InputElement,
            editorMetadata: {
                Title: "Input Element"
            }
        },
        "ButtonElement":  {
            designerMetadata: buttonElementJson,
            componentType: ButtonElement,
            editorMetadata: {
                Title: "Button Element"
            }
        },
    }
}
