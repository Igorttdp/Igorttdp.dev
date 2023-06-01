import { useForm, Controller } from "react-hook-form";
import Button from "../Button";
import Input from "../Input";
import { IAddEditCostumerRequest } from "../../context/Costumers/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { CostumersContext } from "../../context/Costumers/Costumers.context";
import createEditCostumerSchema from "../../schemas/costumers.schemas";
import { SetOpen } from "../Modal/interfaces/interfaces";
import { mask, onKeyPressMaskChange } from "../../utils/utils";
import InputMaskContainer from "../InputMaskContainer";
import { toast } from "react-toastify";

const AddCostumerForm = ({ setOpen }: SetOpen) => {
  const { costumers, setCostumers, addNewCostumer } =
    useContext(CostumersContext);

  const { handleSubmit, control } = useForm<IAddEditCostumerRequest>({
    resolver: zodResolver(createEditCostumerSchema),
    defaultValues: {
      name: undefined,
      fantasy: undefined,
      document: undefined,
      address: undefined,
    },
  });

  const handleAddCostumer = async (data: IAddEditCostumerRequest) => {
    addNewCostumer(data)
      .then((costumer) => {
        setCostumers([...costumers, costumer]);
        setOpen(false);
      })
      .catch((e) => {
        if (e.response.status) {
          toast.error("Produto já consta nos servidores");
        } else {
          toast.error("Ops, Algo deu errado!");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(handleAddCostumer)}>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, name, ref } }) => {
          return (
            <Input
              placeholder="Nome"
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              ref={ref}
            />
          );
        }}
      />

      <Controller
        control={control}
        name="fantasy"
        render={({ field: { onChange, onBlur, name, ref } }) => {
          return (
            <Input
              placeholder="Fantasia"
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              ref={ref}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="document"
        render={({ field: { onChange, onBlur, value, name, ref } }) => {
          return (
            <InputMaskContainer>
              <span>
                {mask(value)} <span></span>
              </span>
              <Input
                mask="true"
                placeholder="Documento (CPF)"
                maxLength={11}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                ref={ref}
                onKeyDown={onKeyPressMaskChange}
                filled={value}
              />
            </InputMaskContainer>
          );
        }}
      />
      <Controller
        control={control}
        name="address"
        render={({ field: { onChange, onBlur, name, ref } }) => {
          return (
            <Input
              placeholder="Endereço"
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              ref={ref}
            />
          );
        }}
      />

      <Button type="submit">Adicionar</Button>
    </form>
  );
};

export default AddCostumerForm;
