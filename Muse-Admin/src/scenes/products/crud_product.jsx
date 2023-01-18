import axios from "axios";
// ADD
const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    content: '',
    discountRate: '',
    image: '',
    image1: '',
    image2: '',
    supplier: '',
    category: ''
});

const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/products', product)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}

return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            value={product.name}
            onChange={e => setProduct({ ...product, name: e.target.value })}
            placeholder="Nom du produit"
        />
        <input
            type="text"
            name="price"
            value={product.price}
            onChange={e => setProduct({ ...product, price: e.target.value })}
            placeholder="Prix"
        />
        <button type="submit">Ajouter</button>
    </form>
)



// EDIT
const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    content: '',
    discountRate: '',
    image: '',
    image1: '',
    image2: '',
    supplier: '',
    category: ''
});

useEffect(() => {
    const fetchData = async () => {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
    };
    fetchData();
}, []);

const handleSubmit = e => {
    e.preventDefault();
    axios.put(`/api/products/${id}`, product)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}

return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            value={product.name}
            onChange={e => setProduct({ ...product, name: e.target.value })}
            placeholder="Nom du produit"
        />
        <input
            type="text"
            name="price"
            value={product.price}
            onChange={e => setProduct({ ...product, price: e.target.value })}
            placeholder="Prix"
        />
        <button type="submit">Enregistrer</button>

    </form>
)



// DELETE

const handleDelete = id => {
    axios.delete(`/api/products/${id}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}
return (
    <button onClick={() => handleDelete(product.id)}>Supprimer</button>
)