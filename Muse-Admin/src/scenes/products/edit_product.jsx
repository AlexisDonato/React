import { Box, Button, TextField, Typography } from "@mui/material";

import { useParams, useNavigate } from 'react-router-dom';

import * as yup from "yup";

import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

import axios from "axios";

import { useState, useEffect } from "react";
import { red } from "@mui/material/colors";

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
  const [fileName, setFileName] = useState("");
  const [fileName1, setFileName1] = useState("");
  const [fileName2, setFileName2] = useState("");

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
      supplier: supplier,
      category: category,
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
    const file = event.currentTarget.files[0];
    setState(file);
    setFileName(file.name);
  }

  const handleFile1 = (event, setState, setFileName1) => {
    const file = event.currentTarget.files[0];
    setState(file);
    setFileName1(file.name);
  }
  const handleFile2 = (event, setState, setFileName2) => {
    const file = event.currentTarget.files[0];
    setState(file);
    setFileName2(file.name);
  }

  useEffect(() => {
    axios.get("/api/products/" + id).then((response) => {
      setName(response.data.name);
      setSupplier(response.data.supplier);
      setCategory(response.data.category);
      console.log(response.data.category);
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
                value={"/api/suppliers/" + supplier.id}
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
                value={"/api/categories/" + category.id}
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
            sx={{ gridColumn: "span 4", bg: 'grey', borderRadius: '2px' }}
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
            sx={{ gridColumn: "span 4", bg: 'grey', borderRadius: '2px', color: 'white' }}
          />
          {/* <TextField
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
          /> */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "10px" }}>
            <Button
              variant="contained"
              component="label"
              style={{ border: fileName ? "1px solid green" : "1px solid grey", color: fileName ? 'lightgreen' : 'white' }}
            >
              {fileName ? fileName : "Image upload"}
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(event) => { handleFile(event, setImage, setFileName) }}
              />
            </Button>
            {image && <img src={URL.createObjectURL(image)} style={{ width: '200px', height: '200px', objectFit: 'cover', display: "inline-block", margin: "10px" }} />}
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "10px" }}>
            <Button
              variant="contained"
              component="label"
              style={{ border: fileName1 ? "1px solid green" : "1px solid grey", color: fileName1 ? 'lightgreen' : 'white' }}
            >
              {fileName1 ? fileName1 : "Image 1 upload"}
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(event) => { handleFile1(event, setImage1, setFileName1) }}
              />
            </Button>
            {image1 && <img src={URL.createObjectURL(image1)} style={{ width: '200px', height: '200px', objectFit: 'cover', display: "inline-block", margin: "10px" }} />}
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "10px" }}>
            <Button
              variant="contained"
              component="label"
              style={{ border: fileName2 ? "1px solid green" : "1px solid grey", color: fileName2 ? 'lightgreen' : 'white' }}
            >
              {fileName2 ? fileName2 : "Image 2 upload"}
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(event) => { handleFile2(event, setImage2, setFileName2) }}
              />
            </Button>
            {image2 && <img src={URL.createObjectURL(image2)} style={{ width: '200px', height: '200px', objectFit: 'cover', display: "inline-block", margin: "10px" }} />}
          </div>
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
          color="secondary" variant="contained"
          style={{ background: "#BF1B1B", ":hover": { background: "#8B0000" } }}>
          Delete Product
        </Button>
      </Box>
      <Box display="flex" justifyContent="end" mt="20px">
        <Button
          onClick={() => navigate(-1)}
          color="secondary" variant="contained">
          Back
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
