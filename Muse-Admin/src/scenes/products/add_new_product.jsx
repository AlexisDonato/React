import { Box, Button, TextField, Typography } from "@mui/material";

import { useNavigate } from 'react-router-dom';

import * as yup from "yup";

import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

import axios from "axios";

import { useState, useEffect } from "react";


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
		axios.post("/api/products", values, {
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

	return (
		<Box m="20px">
			<Header title="CREATE PRODUCT" subtitle="Create a New Product" />

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
						label="name*"
						onChange={(event) => handleInput(event, setName)}
						value={name}
						name="name"
						style={{ borderRadius: '3px', backgroundColor: '#333333' }}
						sx={{ gridColumn: "span 2" }}
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
								value={"/api/suppliers/"+supplier.id}
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
								value={"/api/categories/"+category.id}
							>
								{category.name}
							</option>
						))}
					</TextField>
					<TextField
						fullWidth
						variant="filled"
						type="text"
						label="Discount Rate*"
						onChange={(event) => { handleInput(event, setDiscountRate) }}
						value={discountRate}
						name="discountRate"
						style={{ borderRadius: '3px', backgroundColor: '#333333' }}
						sx={{ gridColumn: "span 1" }}
					/>
					<TextField
						fullWidth
						variant="filled"
						type="text"
						label="Price*"
						onChange={(event) => { handleInput(event, setPrice) }}
						value={price}
						name="price"
						style={{ borderRadius: '3px', backgroundColor: '#333333' }}
						sx={{ gridColumn: "span 1" }}
					/>
					<TextField
						fullWidth
						variant="filled"
						type="text"
						label="Quantity*"
						onChange={(event) => { handleInput(event, setQuantity) }}
						value={quantity}
						name="quantity"
						style={{ borderRadius: '3px', backgroundColor: '#333333' }}
						sx={{ gridColumn: "span 1" }}
					/>
					<TextField
						fullWidth
						variant="filled"
						type="text"
						label="Description*"
						onChange={(event) => { handleInput(event, setDescription) }}
						value={description}
						name="description"
						style={{ borderRadius: '3px', backgroundColor: '#333333' }}
						sx={{ gridColumn: "span 2" }}
					/>
					<TextField
						fullWidth
						variant="filled"
						type="text"
						label="Content*"
						onChange={(event) => { handleInput(event, setContent) }}
						value={content}
						name="content"
						style={{ borderRadius: '3px', backgroundColor: '#333333' }}
						sx={{ gridColumn: "span 2" }}
					/>
					{/* <TextField
						fullWidth
						variant="filled"
						type="file"
						label="Image"
						name="image"
						onChange={(event) => { handleFile(event, setImage) }}
						style={{ borderRadius: '3px', backgroundColor: '#333333' }}
						sx={{ gridColumn: "span 2" }}
						accept="image/*"
					/>
					<TextField
						fullWidth
						variant="filled"
						type="file"
						label="Image 1"
						name="image1"
						onChange={(event) => { handleFile(event, setImage1) }}
						style={{ borderRadius: '3px', backgroundColor: '#333333' }}
						sx={{ gridColumn: "span 2" }}
						accept="image/*"
					/>
					<TextField
						fullWidth
						variant="filled"
						type="file"
						label="Image 2"
						name="image2"
						onChange={(event) => { handleFile(event, setImage2) }}
						style={{ borderRadius: '3px', backgroundColor: '#333333' }}
						sx={{ gridColumn: "span 2" }}
						accept="image/*"
					/> */}
					<Button
						variant="contained"
						component="label"
						style={{ border:"1px solid grey"}}
					>
						Image upload
						<input
							type="file"
							hidden
							accept="image/*"
							onChange={(event) => { handleFile(event, setImage) }}
						/>
					</Button>
					<Typography> Image</Typography>
					<Button
						variant="contained"
						component="label"
						style={{ border:"1px solid grey"}}
					>
						Image 1 upload
						<input
							type="file"
							hidden
							accept="image/*"
							onChange={(event) => { handleFile(event, setImage1) }}
						/>
					</Button>
					<Typography> Image 1</Typography>
					<Button
						variant="contained"
						component="label"
						style={{ border:"1px solid grey"}}
					>
						Image 2 upload
						<input
							type="file"
							hidden
							accept="image/*"
							onChange={(event) => { handleFile(event, setImage2) }}
						/>
					</Button>
					<Typography> Image 2</Typography>
					
				</Box>
				<Box display="flex" justifyContent="end" mt="20px">
					<Button type="submit" color="secondary" variant="contained" onClick={handleFormSubmit}>
						Create New Product
					</Button>
				</Box>
			</form>

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
