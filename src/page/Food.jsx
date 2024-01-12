import React, { useContext, useEffect, useState } from 'react';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { AuthContext } from '../Context/AuthContext';
import { db } from '../firebaseCofig';

const Food = () => {
    const { currentUser } = useContext(AuthContext);
    const userID = currentUser ? currentUser.uid : null; // Set userID to null if there is no current user
    const [data, setData] = useState([]);
    const [orders, setOrders] = useState([]);
    const [orderInfo, setOrderInfo] = useState({
        Number: " ",
        name: " ",
        quantity: 0,
    });

    const handleAddToOrder = async (selectedItem) => {
        try {
            if (userID) {
                const orderRef = await addDoc(collection(db, "Cart"), {
                    userId: userID,
                    item: selectedItem,
                    orderInfo: orderInfo,
                    timestamp: new Date(),
                });
                setOrders([...orders, { id: orderRef.id, ...selectedItem, orderInfo: orderInfo }]);
            } else {
                // Handle the case when there is no current user
                console.log("User not logged in. Unable to add to the order.");
                // You may choose to redirect the user to the login page or show a message
            }
        } catch (error) {
            console.error('Error adding order to Firestore: ', error);
        }
    }

    const handleInputChange = (e) => {
        setOrderInfo({
            ...orderInfo,
            [e.target.name]: e.target.value,
        });
    }

    const getData = async () => {
        const q = query(collection(db, 'CRUD'), where('id', '==', userID));
        const dataDb = await getDocs(q)

        const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }))
        setData(allData)
    }

    useEffect(() => {
        getData();
    }, [currentUser]);

    return (
        <div className="-z-40">
            <h1 className="text-2xl text-center font-bold mt-3">Enjoy Your Order</h1>
            <div className="flex flex-wrap justify-center">
                {
                    data.map(results =>
                        <div key={results.id} className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md p-2">
                            <div className="relative pt-10 px-10 flex items-center justify-center">
                                <img className="relative w-40 " src={results.imgUrl} alt={results.txtVal} />
                            </div>
                            <div className="relative text-black px-6 pb-6 mt-6">
                                <div className="flex justify-between">
                                    <span className="block font-semibold text-xl">{results.txtVal}</span>
                                    <span className="bg-white rounded-full text-xl font-bold px-3 py-2 leading-none flex items-center">{results.txtPrice}</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                {/* Additional input fields for user information */}
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Number</label>
                                <input
                                    type="text"
                                    id="Number"
                                    name="Number"
                                    value={orderInfo.Number}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={orderInfo.name}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    value={orderInfo.quantity}
                                    onChange={handleInputChange}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                />
                            </div>
                            <button onClick={() => handleAddToOrder(results)} className="bg-blue-500 p-2 text-center text-white w-full hover:bg-blue-900">
                                Order
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Food;
