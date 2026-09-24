export const orders = {
    delayed: {
        id: "VF-10248",
        status: "delayed",
        statusLabel: "Delivery delayed",
        statusDescription:
            "Your order is taking a little longer than expected. We apologize for the delay.",
        estimatedDelivery: "September 27, 2026",
        estimatedTime: "6:00 PM – 9:00 PM",

        product: {
            name: "Wireless Headphones",
            quantity: 1,
            price: "$79.99",
            image: "/products/headphones.jpg",
        },

        timeline: [
            {
                id: 1,
                title: "Order placed",
                description: "Your order has been confirmed.",
                timestamp: "Sep 24 · 10:32 AM",
                status: "completed",
            },
            {
                id: 2,
                title: "Processing",
                description: "Your order is being prepared.",
                timestamp: "Sep 24 · 11:15 AM",
                status: "completed",
            },
            {
                id: 3,
                title: "Shipped",
                description: "Your package has left the warehouse.",
                timestamp: "Sep 25 · 08:20 AM",
                status: "completed",
            },
            {
                id: 4,
                title: "Delivery delayed",
                description: "The carrier reported an unexpected delay.",
                timestamp: "Sep 26 · 02:45 PM",
                status: "delayed",
            },
            {
                id: 5,
                title: "Delivered",
                description: "Waiting for delivery.",
                timestamp: null,
                status: "pending",
            },
        ],
    },

    delivered_not_received: {
        id: "VF-10251",
        status: "delivered_not_received",
        statusLabel: "Marked as delivered",
        statusDescription:
            "The carrier marked this package as delivered, but you haven't received it.",

        estimatedDelivery: "Delivered",
        estimatedTime: "Today · 3:42 PM",

        product: {
            name: "Smart Fitness Watch",
            quantity: 1,
            price: "$129.99",
            image: "/products/smart-watch.jpg",
        },

        timeline: [
            {
                id: 1,
                title: "Order placed",
                description: "Your order has been confirmed.",
                timestamp: "Sep 20 · 09:15 AM",
                status: "completed",
            },
            {
                id: 2,
                title: "Processing",
                description: "Your order was prepared for shipment.",
                timestamp: "Sep 20 · 01:20 PM",
                status: "completed",
            },
            {
                id: 3,
                title: "Shipped",
                description: "Your package was handed to the carrier.",
                timestamp: "Sep 21 · 08:10 AM",
                status: "completed",
            },
            {
                id: 4,
                title: "Out for delivery",
                description: "Your package was on its way to you.",
                timestamp: "Sep 24 · 09:05 AM",
                status: "completed",
            },
            {
                id: 5,
                title: "Delivered",
                description: "Package marked as delivered.",
                timestamp: "Sep 24 · 03:42 PM",
                status: "completed",
            },
        ],
    },

    tracking_unavailable: {
        id: "VF-10263",
        status: "tracking_unavailable",
        statusLabel: "Tracking not available yet",
        statusDescription:
            "Your order has been confirmed. Tracking information will appear once your package is handed to the carrier.",

        estimatedDelivery: "September 29, 2026",
        estimatedTime: "By 9:00 PM",

        product: {
            name: "Minimal Leather Backpack",
            quantity: 1,
            price: "$89.99",
            image: "/products/backpack.jpg",
        },

        timeline: [
            {
                id: 1,
                title: "Order placed",
                description: "Your order has been confirmed.",
                timestamp: "Sep 24 · 04:18 PM",
                status: "completed",
            },
            {
                id: 2,
                title: "Processing",
                description: "Your order is being prepared.",
                timestamp: null,
                status: "current",
            },
            {
                id: 3,
                title: "Shipped",
                description: "Tracking information will appear after shipment.",
                timestamp: null,
                status: "pending",
            },
            {
                id: 4,
                title: "Out for delivery",
                description: "Your package will be delivered soon.",
                timestamp: null,
                status: "pending",
            },
            {
                id: 5,
                title: "Delivered",
                description: "Package delivered to your address.",
                timestamp: null,
                status: "pending",
            },
        ],
    },
};