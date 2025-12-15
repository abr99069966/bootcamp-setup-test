import React, { useEffect, useState } from "react";

// Бүтээгдэхүүний мэдээллийг харуулах Component
const ProductCard = ({ product }) => (
    <div className="bg-white rounded-xl shadow-md p-5 text-center hover:-translate-y-1 transition duration-300">
        <img 
            src={product.image}
            alt={product.title}
            className="w-32 h-32 mx-auto object-contain mb-3" // w32 h32-г зөв болгосон
        /> 
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2" >{product.title}</h3>
        <p className="text-blue-600 font-bold text-xl mt-2">${product.price}</p>
        <p className="text-gray-500 text-sm">{product.category}</p>
    </div>
);

export default function Products() {
    // 1. Төлөвийг удирдах (State)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // 2. Өгөгдөл татах функц
    const fetchProducts = async () => {
        setLoading(true); // Ачааллаж эхлэх
        setError(null);
        setProducts([]);

        try {
            // URL-ийн алдааг засварлав.
            const res = await fetch("https://fakestoreapi.com/products"); 
            
            if (!res.ok) {
                throw new Error("Сүлжээний алдаа гарлаа.");
            }
            
            const data = await res.json();
            setProducts(data); // Төлөвт бүтээгдэхүүнийг хийх

        } catch (err) {
            console.error(err);
            setError("Барааны мэдээлэл ачаалж чадсангүй."); // Алдааг төлөвт хийх
        } finally {
            setLoading(false); // Ачаалж дуусах
        }
    };

    // 3. Компонент ачаалагдахад нэг удаа дуудах (useEffect)
    useEffect(() => {
        fetchProducts();
    }, []); // Хоосон array нь зөвхөн нэг удаа ачаална

    // 4. JSX-ийг Рендерлэх
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Бүтээгдэхүүний жагсаалт
            </h1>
            
            {/* Ачааллах болон алдааны мэдээлэл */}
            <div className="text-center text-gray-600 mb-4">
                {loading && "Мэдээлэл ачааллаж байна..."}
                {error && <p className="text-red-500 font-bold">{error}</p>}
            </div>
            
            {/* Бүтээгдэхүүний жагсаалт */}
            <div
                className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                id="product-container"
            >
                {/* Төлөв (products) дээр map хийж, элементүүдийг үүсгэх */}
                {!loading && !error && products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="text-center mt-6">
                <button 
                    onClick={fetchProducts} // Дахин ачааллах функц
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    disabled={loading} // Ачаалж байх үед товчлуурыг идэвхгүй болгох
                >
                    {loading ? "Ачааллаж байна..." : "Дахин ачаалах"}
                </button>
            </div>
        </div>
    );
}