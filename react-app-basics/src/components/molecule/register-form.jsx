import React from "react";
import TextInput from "../atoms/forms/text-input";
import Select from "../atoms/forms/select";
import Checkbox from "../atoms/forms/checkbox";
import TextArea from "../atoms/forms/textarea";

function RegisterForm() {
  function handleSubmit(event) {
    //this is done to not reload page, send request to server, via
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="flex-column">
      <TextInput
        ariaLabel="username"
        labelName="Username"
        tooltip="username"
      ></TextInput>
      <Select tooltip="select a option" labelName=" select a fruit"
       ariaLabel="select a fruit" ></Select>
       <Checkbox labelName="agree to terms" ariaLabel="terms" tooltip="terms and agreement"></Checkbox>
        <TextArea tooltip="Add a comment" labelName="Comment" ariaLabel="Add a commment"></TextArea>
        <input type="submit" value="Submit" />
    </form>
  );
}

export default RegisterForm;
