import React from "react";

interface IListFormProps {
  textField: string,
  onAddListItem: any,
  onChangeInputText: Function,
}

export default function ListForm(props:IListFormProps) {
  const { onAddListItem, textField, onChangeInputText } = props;
  return (
    <div className="input-group my-3">
      <input
        type="text"
        onChange={event => onChangeInputText(event, "textField")}
        value={textField}
        className="form-control"
        placeholder="Add text here..."
        aria-label="Add text here..."
      />
      <button className="btn btn-primary ml-2" onClick={onAddListItem}>
        Submit
      </button>
    </div>
  );
}
