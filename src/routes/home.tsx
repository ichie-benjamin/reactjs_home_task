import {useState} from "react";
import axios from "axios";
import {HiOutlineChatAlt, HiOutlineSearch} from "react-icons/hi";

type Product = {
    id: number;
    title: string;
    brand: string;
    category: string;
    description: string;
};


export default function home(){

    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');

    const fetchData = async () => {
        try {
            setLoading(true)
            const res_data = await axios.get('https://dummyjson.com/products')
            if(res_data.data.products){
                setProducts(res_data.data.products)
            }
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    const handleSearch = async () => {
        try {
            setLoading(true)
            const res_data = await axios.get(`https://dummyjson.com/products/search?q=${searchQuery}`)
            if(res_data.data.products){
                setProducts(res_data.data.products)
            }
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
    }

    function notDataFound() {
        return (
            <div className="flex items-center flex-col justify-center h-screen ">
                <h2 className="text-lg font-bold text-blue-600">What are you looking for?</h2>
                <p className="mt-4  text-blue-800">Get started by searching & filtering a few</p>

                <button className="bg-blue-800 hover:bg-blue-500 mt-4 text-white font-bold py-2 px-4 rounded" onClick={fetchData}>
                    Fetch Data
                </button>

                <p className="mt-4">Or search for an item</p>
            </div>
        )
    }

    function renderData() {
        return (
            <div className="py-5 mb-40">
                <table className="table-auto">
                    <thead>
                    <tr>
                        <th className="border px-4 py-2">#</th>
                        <th className="border px-4 py-2">Title</th>
                        <th className="border px-4 py-2">Brand</th>
                        <th className="border px-4 py-2">Category</th>
                        <th className="border px-4 py-2">Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td className="border px-4 py-2">{product.id}</td>
                            <td className="border px-4 py-2">{product.title}</td>
                            <td className="border px-4 py-2">{product.brand}</td>
                            <td className="border px-4 py-2">{product.category}</td>
                            <td className="border px-4 py-2">{product.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }

    function renderLoading() {
        return(
            <div className="flex items-center justify-center h-screen">
                <div className="spinner-container">
                    <div className="loading-spinner">
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="bg-white h-16 p-4 flex justify-between items-center border-b border-gray-200">

                <div className="flex items-center- gap-2 mr-2">
                    <h2 className="text-xl text-blue-500 font-bold">Item search</h2>

                </div>

                <div className="relative">
                    <input type="text" value={searchQuery}
                           onChange={(event) => setSearchQuery(event.target.value)} placeholder="search by product name ....."  className="text-sm pl-11 pr-4 px-4 border border-gray-300 focus:outline-none active:outline-none h-10 w-[24rem]"/>
                    <HiOutlineSearch onClick={handleSearch} fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />
                </div>

            </div>

            <div className="flex- bg-neutral-100 h-screen overflow-hidden">
                { loading && renderLoading() }

                {!loading &&
                    <>
                        {products.length > 0 ? renderData() : notDataFound()}
                    </>
                }

            </div>

        </>

    )
}
