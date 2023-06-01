import { useContext } from "react";
import { IAddEditProductRequest } from "../../context/Products/interfaces";
import Button from "../Button";
import Input from "../Input";
import TextArea from "../TextArea";
import { Controller, useForm } from "react-hook-form";
import { ProductsContext } from "../../context/Products/Products.context";
import { zodResolver } from "@hookform/resolvers/zod";
import addEditProductSchema from "../../schemas/products.schema";
import { SetOpen } from "../Modal/interfaces/interfaces";
import { toast } from "react-toastify";

const AddProductForm = ({ setOpen }: SetOpen) => {
  const { products, setProducts, addNewProduct } = useContext(ProductsContext);

  const { handleSubmit, control } = useForm<IAddEditProductRequest>({
    resolver: zodResolver(addEditProductSchema),
    defaultValues: {
      bar_code: undefined,
      description: undefined,
      gross_weight: undefined,
      net_weight: undefined,
      value: undefined,
    },
  });

  const handleAdd = (data: IAddEditProductRequest) => {
    addNewProduct(data)
      .then((res) => {
        setProducts([...products, res]);
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
    <form onSubmit={handleSubmit(handleAdd)}>
      <Controller
        control={control}
        name="bar_code"
        render={({ field: { onChange, onBlur, name, ref } }) => {
          return (
            <Input
              placeholder="Código de Barras"
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
              name={name}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="value"
        render={({ field: { onChange, onBlur, name, ref } }) => {
          return (
            <Input
              placeholder="Valor"
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
              name={name}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="gross_weight"
        render={({ field: { onChange, onBlur, name, ref } }) => {
          return (
            <Input
              placeholder="Peso Bruto"
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
              name={name}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="net_weight"
        render={({ field: { onChange, onBlur, name, ref } }) => {
          return (
            <Input
              placeholder="Peso Líquido"
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
              name={name}
            />
          );
        }}
      />

      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, onBlur, name, ref } }) => {
          return (
            <TextArea
              placeholder="Descrição do produto"
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
              name={name}
            />
          );
        }}
      />

      <Button type="submit">Adicionar</Button>
    </form>
  );
};

export default AddProductForm;
