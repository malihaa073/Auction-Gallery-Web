# 🖼️ Auction Gallery - React Project

A React-based auction web app that allows users to view, bid on, and favorite auction items. This project is ideal for practicing React fundamentals, props, state management, JSON handling, and UI/UX replication from Figma.

---
##  netlify live link:https://helpful-faun-4c6140.netlify.app/

## 📌 Main Requirements

### ✅ Navbar
- Built to match the provided Figma design
- Includes brand name, navigation links, notification icon, and profile dropdown

### 🖼️ Banner
- Designed exactly according to Figma specifications

### 🗂️ JSON for Bid Items
- JSON file includes at least 6 auction items with the following fields:
  - `id`
  - `title`
  - `description`
  - `currentBidPrice`
  - `timeLeft`
  - `bidsCount`
  - `image`

### 🏷️ Active Auctions Section
- Displays section title and subtitle (matching Figma)
- Shows 6 auction items, each with:
  - 🖼️ Image
  - 🏷️ Item Title
  - 💰 Current Bid Price
  - ⏳ Time Left
  - ❤️ “Bid Now” (heart icon for favorite)

### ❤️ Favorite Items Section
- Initially shows:
  - Title
  - Message: “No items”
  - Total bid amount = $0.00
- After clicking ❤️ icon:
  - Shows item title, price, and bid count
  - Adds item to favorites list
  - Total price updates accordingly
  - Includes ❌ button to remove item

### 📦 React-Toastify Integration
- Toast notification appears when:
  - Item is added to favorites
  - Item already exists in favorites

### 🦶 Footer
- Built to match Figma design

---

## ⚔️ Challenge Requirements

### 🧾 Show Data Using Table
- Active auction items are displayed inside a responsive table

### 🔒 Disable ❤️ Button After Click
- After favoriting:
  - Button is disabled
  - Cursor changes to `not-allowed`
  - Icon becomes red

### ❌ Remove from Favorites
- Clicking ❌ removes the item from the favorite list
- Total price is recalculated correctly

---

## ✅ Final Checklist

- [x] Navbar matches Figma
- [x] Banner matches Figma
- [x] JSON created with 6 auction items
- [x] Active auctions section complete
- [x] Favorite items functionality works as expected
- [x] React-Toastify integrated for notifications
- [x] Footer added
- [x] Challenge parts implemented (table, disabling buttons, remove feature)
- [x] At least 8 Git commits done

---

## 📁 Technologies Used

- React JS
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify

---
