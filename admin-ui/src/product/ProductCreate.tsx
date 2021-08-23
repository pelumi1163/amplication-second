import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Age" source="age" />
        <TextInput label="Description" multiline source="description" />
        <NumberInput label="Item Price" source="itemPrice" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
