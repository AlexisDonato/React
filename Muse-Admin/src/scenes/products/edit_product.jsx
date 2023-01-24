import { Box, Button, TextField } from "@mui/material";

import { useParams, useNavigate } from 'react-router-dom';

import * as yup from "yup";

import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

import axios from "axios";

import { useState, useEffect } from "react";

// import { handleDelete } from "./delete_product";

const AddNewProduct = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const { id } = useParams();

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

  const [supplierOptions, setSupplierOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);

  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const values =
    {
      name: name,
      price: parseInt(price),
      description: description,
      content: content,
      discountRate: discountRate,
      quantity: parseInt(quantity),
      // image: image,
      // image1: image1,
      // image2: image2,
      // supplier: supplier,
      // category: category,
    }


    console.log(values);
    axios.put("/api/products/" + id, values, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }

    })
      .then(response => {
        console.log(response);
        console.log(values)
        navigate("/products")
      })
      .catch(error => {
        console.log(error)
      })
  };


  const handleInput = (event, setState) => {
    setState(event.currentTarget.value);
  }

  const handleFile = (event, setState) => {
    setState(event.currentTarget.files[0]);
  }

  useEffect(() => {
    axios.get("/api/products/" + id).then((response) => {
      setName(response.data.name);
      setSupplier(response.data.supplier);
      setCategory(response.data.category);
      setDiscountRate(response.data.discountRate);
      setPrice(response.data.price);
      setQuantity(response.data.quantity);
      setDescription(response.data.description);
      setContent(response.data.content);
      setImage(response.data.image);
      setImage1(response.data.image1);
      setImage2(response.data.image2);
    })
    axios
      .get("/api/suppliers", {
        headers: {
          "Accept": "application/json"
        }
      })
      .then((response) => {
        console.log(response.data);
        setSupplierOptions(response.data)
      });
    axios.get("/api/categories", {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(response => setCategoryOptions(response.data));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/products/` + id, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(res => {
        console.log(res.data)
        navigate("/products")
      })
      .catch(err => console.log(err))
  };
  return (
    <Box m="20px">
      <Header title="EDIT PRODUCT" subtitle="Edit Product" />

      <form onSubmit={handleFormSubmit} encType="multipart/form-data" validationschema={validationSchema}>
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
            style={{ backgroundColor: '#333333' }}
            sx={{ gridColumn: "span 2", bg: 'grey', borderRadius: '2px' }}
          />
          <TextField 
            name="Supplier" 
            defaultValue={supplier}   
            SelectProps={{
              native: true,
            }} 
            helperText="Supplier"
            style={{ borderRadius: '3px', backgroundColor: '#333333' }}
            sx={{ gridColumn: "span 1" }}
            select 
              onChange={(event) => handleInput(event, setSupplier)}>
                  {supplierOptions.map((supplier) => (
                    <option
                      key={supplier.id}
                      value={supplier.id}
                    >
                      {supplier.name}
                    </option>
                  ))}
            </TextField>
          <TextField 
            name="category" 
            defaultValue={category}   
            SelectProps={{
              native: true,
            }} 
            helperText="Category"
            style={{ borderRadius: '3px', backgroundColor: '#333333' }}
            sx={{ gridColumn: "span 1" }}
            select 
              onChange={(event) => handleInput(event, setCategory)}>
                  {categoryOptions.map((category) => (
                    <option
                      key={category.id}
                      value={category.id}
                    >
                      {category.name}
                    </option>
                  ))}
            </TextField>
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Discount Rate"
            onChange={(event) => { handleInput(event, setDiscountRate) }}
            value={discountRate}
            name="discountRate"
            style={{ backgroundColor: '#333333' }}
            sx={{ gridColumn: "span 1", bg: 'grey', borderRadius: '2px' }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Price"
            onChange={(event) => { handleInput(event, setPrice) }}
            value={price}
            name="price"
            style={{ backgroundColor: '#333333' }}
            sx={{ gridColumn: "span 1", bg: 'grey', borderRadius: '2px' }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Quantity"
            onChange={(event) => { handleInput(event, setQuantity) }}
            value={quantity}
            name="quantity"
            style={{ backgroundColor: '#333333' }}
            sx={{ gridColumn: "span 1", bg: 'grey', borderRadius: '2px' }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Description"
            onChange={(event) => { handleInput(event, setDescription) }}
            value={description}
            name="description"
            style={{ backgroundColor: '#333333' }}
            sx={{ gridColumn: "span 2", bg: 'grey', borderRadius: '2px' }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Content"
            onChange={(event) => { handleInput(event, setContent) }}
            value={content}
            name="content"
            style={{ backgroundColor: '#333333' }}
            sx={{ gridColumn: "span 2", bg: 'grey', borderRadius: '2px', color: 'white' }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="file"
            label="Image"
            name="image"
            style={{ backgroundColor: '#333333' }}
            onChange={(event) => { handleFile(event, setImage) }}
            sx={{ gridColumn: "span 2", bg: 'grey', borderRadius: '2px' }}
            accept="image/*"
          />
          <TextField
            fullWidth
            variant="filled"
            type="file"
            label="Image 1"
            name="image1"
            style={{ backgroundColor: '#333333' }}
            onChange={(event) => { handleFile(event, setImage1) }}
            sx={{ gridColumn: "span 2", bg: 'grey', borderRadius: '2px' }}
            accept="image/*"
          />
          <TextField
            fullWidth
            variant="filled"
            type="file"
            label="Image 2"
            name="image2"
            style={{ backgroundColor: '#333333' }}
            onChange={(event) => { handleFile(event, setImage2) }}
            sx={{ gridColumn: "span 2", bg: 'grey', borderRadius: '2px' }}
            accept="image/*"
          />

        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained" onClick={handleFormSubmit}>
            Edit Product
          </Button>
        </Box>
      </form>

      <Box display="flex" justifyContent="end" mt="20px">
        <Button
          onClick={() => handleDelete(id)}
          color="secondary" variant="contained">
          Delete Product
        </Button>
      </Box>
    </Box>
  );
};

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const validationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  supplier: yup.string().required("Required"),
  price: yup.string().required("Required"),
  description: yup
    .string()
    // .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  content: yup.string().required("Required"),
  quantity: yup.string().required("Required"),
  // image: yup.mixed().required("Required"),
  // image1: yup.mixed().required("Required"),
  // image2: yup.mixed().required("Required"),
});

export default AddNewProduct;
