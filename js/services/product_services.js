
const apiUrl = "http://localhost:3000/products"

// Funciones de la página web

// Listar los productos 
const fetchProductList = async () => {
    try {
        const res = await fetch(apiUrl);
        return await res.json();
    } catch (err) {
        console.log(err);
        return null;
    }
};

// Crear productos
const createProducts = async (nombre, precio, imagen) => {
    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre,
                precio,
                imagen,
            }),
        });
        const data = await res.json();
        // Después de crear el producto, recarga la página
        location.reload();
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
};

// Eliminación de un producto por id
const deleteProduct = async (id) => {
    try {
        const res = await fetch(`${apiUrl}/${id}`, {
            method: "DELETE"
        });
        return await res.json();
    } catch (err) {
        console.log(err);
        return null;
    }
};

// Exportamos las funciones
export const servicesProducts = {
    fetchProductList,
    createProducts,
    deleteProduct,
};
