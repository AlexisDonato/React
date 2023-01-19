import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

import axios from "axios";

const EditProduct = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);

    axios.post(("/api/products"), values)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
  };

  return (
    <Box m="20px">
      <Header title="EDIT PRODUCT" subtitle="Edit Product" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
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
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Supplier"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.supplier}
                name="supplier"
                error={!!touched.supplier && !!errors.supplier}
                helperText={touched.supplier && errors.supplier}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Discount Rate"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.discountRate}
                name="discountRate"
                error={!!touched.discountRate && !!errors.discountRate}
                helperText={touched.discountRate && errors.discountRate}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Quantity"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.quantity}
                name="quantity"
                error={!!touched.quantity && !!errors.quantity}
                helperText={touched.quantity && errors.quantity}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Content"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.content}
                name="content"
                error={!!touched.content && !!errors.content}
                helperText={touched.content && errors.content}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="file"
                label="Image"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.image}
                name="image"
                error={!!touched.image && !!errors.image}
                helperText={touched.image && errors.image}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="file"
                label="Image 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.image1}
                name="image1"
                error={!!touched.image1 && !!errors.image1}
                helperText={touched.image1 && errors.image1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="file"
                label="Image 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.image2}
                name="image2"
                error={!!touched.image2 && !!errors.image2}
                helperText={touched.image2 && errors.image2}
                sx={{ gridColumn: "span 2" }}
              />

            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Product
              </Button>
            </Box>
          </form>
        )}
      </Formik>
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

export default EditProduct;
