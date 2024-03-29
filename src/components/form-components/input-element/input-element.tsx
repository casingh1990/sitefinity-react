import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {changeInputValue} from './action-file';
import {selectInputValue} from './selector-file';
import { WidgetContext } from "../../../framework/widgets/widget-context";
import { htmlAttributes } from "../../../framework/widgets/attributes";

export function InputElement(props: WidgetContext<InputInterface>) {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectInputValue)

  const handleChange = (e: any) => {
    dispatch(changeInputValue('setFirstName', e.target.value))
  }

  const dataAttributes = htmlAttributes(props);

  return(
    <span {...dataAttributes}>
        <label>{ props.model.Properties.label }
            <input type='text' value={inputValue} onChange={handleChange} />
        </label>
    </span>
  )
}

export interface InputInterface {
    name: string,
    model: string,
    label: string
}