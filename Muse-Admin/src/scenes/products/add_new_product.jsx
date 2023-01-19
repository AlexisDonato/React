import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

import axios from "axios";
import { useEffect, useState } from "react";

const handleInput = (event, setState) => {
  setState(event.currentTarget.value);
}

const handleFile = (event, setState) => {
  setState(event.currentTarget.files[0]);
}

const AddNewProduct = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [name, setName] = useState("");
  const [supplier, setSupplier] = useState("");
  const [category, setCategory] = useState("");
  const [discountRate, setDiscountRate] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();



  const handleFormSubmit = (event) => {
    event.preventDefault();

    const name = event.currentTarget.name.value;
    const supplier = event.currentTarget.supplier.value;
    const category = event.currentTarget.category.value;
    const discountRate = event.currentTarget.discountRate.value;
    const price = event.currentTarget.price.value;
    const quantity = event.currentTarget.quantity.value;
    const description = event.currentTarget.description.value;
    const content = event.currentTarget.content.value;

    return post =
      {
        name: name,
        price: price,
        description: description,
        content: content,
        discount: discount,
        discountRate: discountRate,
        quantity: quantity,
        image: image,
        image1: image1,
        image2: image2,
        supplier: supplier,
        category: category,
      }
    
 
    // axios.post(("/api/products"), values)
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  };

  return (
    <Box m="20px">
      <Header title="CREATE PRODUCT" subtitle="Create a New Product" />

      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="name"
            onChange={(event) => handleInput(event, setName)}
            value={name}
            name="name"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Supplier"
            onChange={(event) => {handleInput(event, setSupplier)}}
            value={supplier}
            name="supplier"
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Category"
            onChange={(event) => {handleInput(event, setCategory)}}
            value={category}
            name="category"
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Discount Rate"
            onChange={(event) => {handleInput(event, setDiscountRate)}}
            value={discountRate}
            name="discountRate"
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Price"
            onChange={(event) => {handleInput(event, setPrice)}}
            value={price}
            name="price"
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Quantity"
            onChange={(event) => {handleInput(event, setQuantity)}}
            value={quantity}
            name="quantity"
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Description"
            onChange={(event) => {handleInput(event, setDescription)}}
            value={description}
            name="description"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Content"
            onChange={(event) => {handleInput(event, setContent)}}
            value={content}
            name="content"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="file"
            label="Image"
            name="image"
            onChange={(event) => {handleFile(event, setImage)}}
            sx={{ gridColumn: "span 2" }}
            accept="image/*"
          />
          <TextField
            fullWidth
            variant="filled"
            type="file"
            label="Image 1"
            name="image1"
            onChange={(event) => {handleFile(event, setImage1)}}
            sx={{ gridColumn: "span 2" }}
            accept="image/*"
          />
          <TextField
            fullWidth
            variant="filled"
            type="file"
            label="Image 2"
            name="image2"
            onChange={(event) => {handleFile(event, setImage2)}}
            sx={{ gridColumn: "span 2" }}
            accept="image/*"
          />

        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Create New Product
          </Button>
        </Box>
      </form>

    </Box>
  );
};

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  name: yup.string().required("Required"),
  supplier: yup.string().required("Required"),
  price: yup.string().required("Required"),
  description: yup
    .string()
    // .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  content: yup.string().required("Required"),
  quantity: yup.string().required("Required"),
  // image: yup.string().required("Required"),
  // image1: yup.string().required("Required"),
  // image2: yup.string().required("Required"),
});
const initialValues = {
  name: "",
  supplier: "",
  price: "",
  description: "",
  content: "",
  quantity: "",
  image: "",
  image1: "",
  image2: "",
};

export default AddNewProduct;