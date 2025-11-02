import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OrderHistory.css'; // Assuming you have a CSS file for styling

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/orders'); // Adjust the API endpoint as needed
                setOrders(response.data);
            } catch (err) {
                setError('Failed to fetch orders');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="order-history">
            <h1>Order History</h1>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>
                            <h2>Order #{order.id}</h2>
                            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                            <p>Total: ${order.total}</p>
                            <p>Status: {order.status}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrderHistory;