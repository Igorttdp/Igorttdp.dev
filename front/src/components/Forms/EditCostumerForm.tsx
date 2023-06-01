import { useContext } from "react";
import {
  Costumer,
  IAddEditCostumerRequest,
} from "../../context/Costumers/interfaces";
import Button from "../Button";
import InputLabel from "../InputLabel";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import createEditCostumerSchema from "../../schemas/costumers.schemas";
import { CostumersContext } from "../../context/Costumers/Costumers.context";
import { SetOpen } from "../Modal/interfaces/interfaces";
import { toast } from "react-toastify";

interface EditCostumerForm extends Costumer, SetOpen {}

const EditCostumerForm = ({
  cod,
  name,
  fantasy,
  document,
  address,
  setOpen,
}: EditCostumerForm) => {
  const { setCostumers, editCostumer } = useContext(CostumersContext);

  const { handleSubmit, control } = useForm<IAddEditCostumerRequest>({
    resolver: zodResolver(createEditCostumerSchema),
    defaultValues: {
      name: undefined,
      fantasy: undefined,
      document: undefined,
      address: undefined,
    },
  });

  const handleEditCostumer = (data: IAddEditCostumerRequest) => {
    editCostumer(data, cod)
      .then((updatedCostumer) => {
        setCostumers((prevCostumers) => {
          const index = prevCostumers.findIndex(
            (costumer) => costumer.cod === updatedCostumer.cod
          );
          const updatedCostumers = [...prevCostumers];
          updatedCostumers[index] = updatedCostumer;

          return updatedCostumers;
        });
        setOpen(false);
      })
      .catch(() => {
        toast.error("Ops, Algo deu errado!");
      });
  };

  return (
    <form onSubmit={handleSubmit(handleEditCostumer)}>
      <Controller
        control={control}
        defaultValue={name}
        name="name"
        render={({ field: { onChange, onBlur, name: inputName } }) => {
          return (
            <InputLabel
              label="Nome"
              id="name"
              defaultValue={name}
              name={inputName}
              onBlur={onBlur}
              onChange={onChange}
            />
          );
        }}
      />

      <Controller
        control={control}
        name="fantasy"
        defaultValue={fantasy}
        render={({ field: { onChange, onBlur, name: inputName, ref } }) => {
          return (
            <InputLabel
              label="Fantasia"
              id="fantasy"
              defaultValue={fantasy}
              name={inputName}
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
            />
          );
        }}
      />

      <Controller
        control={control}
        name="document"
        defaultValue={document}
        render={({
          field: { onChange, onBlur, name: inputName, value, ref },
        }) => {
          return (
            <InputLabel
              label="Documento"
              id="document"
              defaultValue={document}
              name={inputName}
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
              mask="true"
              value={value}
            />
          );
        }}
      />

      <Controller
        control={control}
        name="address"
        defaultValue={address}
        render={({ field: { onChange, onBlur, name: inputName, ref } }) => {
          return (
            <InputLabel
              label="Endereço"
              id="address"
              defaultValue={address}
              name={inputName}
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
            />
          );
        }}
      />

      <Button type="submit">Salvar</Button>
    </form>
  );
};

export default EditCostumerForm;
