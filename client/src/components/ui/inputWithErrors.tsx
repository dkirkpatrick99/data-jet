import { TextField } from "@mui/material";
import { ControllerRenderProps, FieldErrors, FieldValues, Path } from "react-hook-form";

type IInputWithErrors<T extends FieldValues> = {
  field: ControllerRenderProps<T, Path<T>>;
  errors: FieldErrors;
  fieldName: String;
};

function InputWithErrors<T extends FieldValues>({ field, errors, fieldName }: IInputWithErrors<T>) {

  return (
    <>
      <TextField
      className="w-full"
        {...field}
        label={fieldName}
        error={!!errors[field.name]?.message}
        helperText={errors[field.name]?.message?.toString()}
      />
    </>
  );
};

export default InputWithErrors;