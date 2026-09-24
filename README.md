# Order Tracking — Task 1

A modern, mobile-first e-commerce Order Tracking screen built as part of a Frontend Developer Practical Assessment.

## Project Overview

This project provides a clean and responsive order tracking experience for an e-commerce application. Users can view their order status, follow delivery progress through a visual timeline, check estimated delivery information, review product details, and take appropriate actions based on the current delivery state.

The interface is designed primarily for mobile e-commerce experiences, with layouts optimized for common mobile widths.

## Features

* Visual delivery progress and timeline
* Current order status with contextual messaging
* Estimated delivery date and time
* Product and order summary
* View Order Details
* Contact Support
* Report Delivery Issue
* Loading state
* Empty / Order Not Found state
* Error state
* Responsive mobile design
* State-specific actions and messaging

## Supported Order States

The application supports the three required order tracking scenarios:

### 1. Delayed

Displays that the delivery is taking longer than expected and provides updated delivery information.

Available actions:

* View Order Details
* Contact Support
* Report Delivery Issue

### 2. Delivered but Not Received

Displays that the carrier has marked the package as delivered, while the customer has not received it.

Available actions:

* View Order Details
* Contact Support
* Report Delivery Issue

The issue form provides relevant options such as package not received, wrong delivery location, possible theft, and other issues.

### 3. Tracking Not Available Yet

Displays that the order has been confirmed but tracking information is not available yet.

Available actions:

* View Order Details
* Contact Support

The Report Delivery Issue action is not displayed for this state because the package has not yet reached the tracking stage.

## Interactions

### View Order Details

Opens a modal containing:

* Product information
* Current delivery status
* Estimated delivery information
* Order ID
* Item quantity
* Product total

The modal can be closed using the close button, Done button, or Escape key.

### Contact Support

Opens a support modal with contextual information based on the current order state.

The interface provides options for:

* Chat with support
* Email support

### Report Delivery Issue

Available for:

* Delayed orders
* Delivered but not received orders

Users can select an issue, optionally provide additional details, and submit the report.

The form validates that an issue is selected before submission and displays a success confirmation after submission.

### Order State Switching

A demo state selector allows switching between the three supported order tracking states. The interface updates the status, timeline, delivery information, product information, and available actions accordingly.

Open modals are also closed when switching between states.

### Tracking Unavailable Actions

For orders where tracking information is not available yet, users can view order details or contact support. The delivery issue action is intentionally hidden for this state.

## Tech Stack

* **Next.js** — App Router
* **JavaScript / JSX**
* **Tailwind CSS**
* **Lucide React**

## Project Structure

```text
order-tracking/
├── app/
│   ├── globals.css
│   ├── layout.js
│   ├── loading.jsx
│   ├── not-found.jsx
│   └── order-tracking/
│       └── page.js
│
├── components/
│   └── order-tracking/
│       ├── OrderTracking.jsx
│       ├── TrackingHeader.jsx
│       ├── StatusBanner.jsx
│       ├── OrderTimeline.jsx
│       ├── TimelineItem.jsx
│       ├── OrderSummary.jsx
│       ├── SupportCard.jsx
│       ├── OrderDetailsModal.jsx
│       ├── SupportModal.jsx
│       └── DeliveryIssueModal.jsx
│
├── data/
│   └── orders.js
│
├── public/
│   └── products/
│       ├── headphones.jpg
│       ├── smart-watch.jpg
│       └── backpack.jpg
│
├── package.json
├── jsconfig.json
├── next.config.mjs
└── postcss.config.mjs
```

## Responsive Design

The interface follows a mobile-first approach and is designed for approximately:

* 360px
* 375px
* 390px
* 430px

The layout uses responsive spacing, typography, flexible content areas, and scrollable modal content to provide a comfortable experience across these mobile widths.

## Accessibility

Accessibility considerations include:

* Semantic HTML elements
* Proper heading hierarchy
* Descriptive labels for form controls
* Accessible dialog attributes
* Keyboard-accessible buttons and controls
* Visible focus states
* Escape-key support for modals
* Readable text and sufficient visual hierarchy
* Touch-friendly controls with appropriate minimum heights
* Loading status communicated through accessible markup rather than relying only on the visual spinner

## Getting Started

### 1. Clone the repository

```bash
git clone [GitHub Repository URL]
```

### 2. Navigate to the project directory

```bash
cd order-tracking
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit:

```text
http://localhost:3000/order-tracking
```

## Deployment

**Live Demo:** [Live Demo URL](https://order-tracking-screen-fas.vercel.app/order-tracking)

**GitHub Repository:** [GitHub Repository URL](https://github.com/FahmidaAkterShimu/Vecosoft-Order-Tracking-Screen)

## Assessment Coverage

| Task 1 Requirement                         | Status |
| ------------------------------------------ | ------ |
| Modern mobile e-commerce Order Tracking UI | ✓      |
| Visual delivery progress/timeline          | ✓      |
| Current order status                       | ✓      |
| Estimated delivery date/time               | ✓      |
| Product/order summary                      | ✓      |
| Contact Support                            | ✓      |
| View Order Details                         | ✓      |
| Report Delivery Issue                      | ✓      |
| Delayed state                              | ✓      |
| Delivered but Not Received state           | ✓      |
| Tracking Not Available Yet state           | ✓      |
| Loading state                              | ✓      |
| Empty / Order Not Found state              | ✓      |
| Error state                                | ✓      |
| Responsive mobile design                   | ✓      |
| Meaningful user interactions               | ✓      |
| Accessible controls and markup             | ✓      |
| Mock/static order data                     | ✓      |
| Clean component-based implementation       | ✓      |
