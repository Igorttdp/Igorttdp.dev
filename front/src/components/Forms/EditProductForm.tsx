import { Product } from "../../context/Products/interfaces";
import Button from "../Button";
import InputLabel from "../InputLabel";
import TextArea from "../TextArea";
import addEditProductSchema from "../../schemas/products.schema";
import { IAddEditProductRequest } from "../../context/Products/interfaces";
import { SetOpen } from "../Modal/interfaces/interfaces";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ProductsContext } from "../../context/Products/Products.context";
import { toast } from "react-toastify";

interface EditProductForm extends Product, SetOpen {}

const EditProductForm = ({
  cod,
  bar_code,
  description,
  gross_weight,
  net_weight,
  value,
  setOpen,
}: EditProductForm) => {
  const { setProducts, editProduct } = useContext(ProductsContext);

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

  const handleProductEdit = (data: IAddEditProductRequest) => {
    editProduct(data, cod)
      .then((updatedProduct) => {
        setProducts((prevProducts) => {
          const index = prevProducts.findIndex(
            (product) => product.cod === updatedProduct.cod
          );

          const updatedProducts = [...prevProducts];
          updatedProducts[index] = updatedProduct;

          return updatedProducts;
        });

        setOpen(false);
      })
      .catch(() => {
        toast.error("Ops, Algo deu errado!");
      });
  };

  return (
    <form onSubmit={handleSubmit(handleProductEdit)}>
      <Controller
        control={control}
        name="bar_code"
        defaultValue={bar_code}
        render={({ field: { onChange, onBlur, name: inputName, ref } }) => {
          return (
            <InputLabel
              id="cod"
              label="Código de Barras"
              defaultValue={bar_code}
              measure="COD:"
              name={inputName}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
            />
          );
        }}
      />

      <Controller
        control={control}
        name="value"
        defaultValue={value}
        render={({
          field: { onChange, onBlur, name: inputName, value, ref },
        }) => {
          return (
            <InputLabel
              id="val"
              label="Valor"
              defaultValue={value}
              measure="R$"
              name={inputName}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
            />
          );
        }}
      />

      <Controller
        control={control}
        name="gross_weight"
        defaultValue={gross_weight}
        render={({ field: { onChange, onBlur, name: inputName, ref } }) => {
          return (
            <InputLabel
              id="pb"
              label="Peso Bruto"
              defaultValue={gross_weight}
              measure="KG"
              name={inputName}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
            />
          );
        }}
      />

      <Controller
        control={control}
        name="net_weight"
        defaultValue={net_weight}
        render={({ field: { onChange, onBlur, name: inputName, ref } }) => {
          return (
            <InputLabel
              id="pl"
              label="Peso Líquido"
              defaultValue={net_weight}
              measure="KG"
              name={inputName}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
            />
          );
        }}
      />

      <Controller
        control={control}
        name="description"
        defaultValue={description}
        render={({ field: { onChange, onBlur, name: inputName, ref } }) => {
          return (
            <TextArea
              placeholder="Descrição do produto"
              defaultValue={description}
              onChange={onChange}
              onBlur={onBlur}
              name={inputName}
              ref={ref}
            />
          );
        }}
      />

      <Button type="submit">Editar</Button>
    </form>
  );
};

export default EditProductForm;
