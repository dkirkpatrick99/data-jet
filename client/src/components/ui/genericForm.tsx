import { Controller, DefaultValues, FieldValues, Path, useForm } from "react-hook-form";
import InputWithErrors from "./inputWithErrors";
import { camelCaseToTitleCase } from "../../utils/camelCaseToTitleCase";
import ActionButton from "../ui/actionButton";

interface IGenericForm<T> {
  defaultValues: T;
  onSubmit: (data: T) => void;
}

function GenericForm<T extends FieldValues>({ defaultValues, onSubmit }: IGenericForm<T>) {
  const { handleSubmit, control, formState: { errors } } = useForm<T>({
    defaultValues: defaultValues as DefaultValues<T>
  });
  const fieldNames = Object.keys(control._formValues) as (Path<T>)[];

  return (
    <>
      <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
        {
          fieldNames.map((fieldName) => {
            return (
              <div key={fieldName} className="mb-8">
                <Controller
                  name={fieldName}
                  control={control}
                  rules={{ required: `${camelCaseToTitleCase(fieldName)} is required`, maxLength: 32 }}
                  render={({ field }) =>
                    <InputWithErrors<T> field={field} errors={errors} fieldName={camelCaseToTitleCase(fieldName)} />}
                />
              </div>
            )
          })}

        <ActionButton>Submit</ActionButton>
      </form>

    </>
  );
}

export default GenericForm;