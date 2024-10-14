# **LocalStorage ORM**  
_A lightweight, Laravel-inspired ORM for the browser using `localStorage`._

![License](https://img.shields.io/badge/license-MIT-green)  
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-blue)  
![LocalStorage](https://img.shields.io/badge/localStorage-supported-brightgreen)

## 🚀 **Introduction**

**LocalStorage ORM** is a simple yet powerful JavaScript library designed to mimic the functionality of Laravel’s ORM, but it saves and retrieves data from the browser’s `localStorage`. With a familiar, model-based approach, this library helps developers manage client-side data efficiently. It even supports **Collections** with methods for filtering, sorting, and pagination—just like Laravel’s collections!  

## ✨ **Features**
- **Model-based data management**: Define models and interact with your data.
- **CRUD operations**: Create, Read, Update, Delete directly from `localStorage`.
- **Collections with chaining support**: Filter, sort, map, and paginate data.
- **Lightweight and framework-agnostic**: Works with any front-end framework.
- **Easy to extend**: Add relationships, validations, or custom methods.

---

## 📦 **Installation**

You can use it directly by importing the JavaScript files or installing it via **npm**.

### Using NPM (coming soon)
```bash
npm install local-storage-orm
```

### Manual Import (ES6)
```javascript
import ORM from './path-to-local-storage-orm/index.js';
```

---

## 📚 **Usage Guide**

### 1. Create a Model  
Define your model by extending the `Model` class.

```javascript
import ORM from './index.js';

class User extends ORM.Model {
  static storageKey = 'users'; // Required to specify storage key
}
```

---

### 2. Create and Save Data  

```javascript
const user = new User({ name: 'John Doe', email: 'john@example.com' });
user.save(); // Saves the user to localStorage
```

---

### 3. Retrieve Data  

```javascript
const users = User.all(); // Returns a Collection of User objects
console.log(users.toArray()); // Converts collection to an array
```

---

### 4. Find a Specific Record  

```javascript
const user = User.find('some-user-id');
if (user) {
  console.log(user.attributes);
}
```

---

### 5. Update a Record  

```javascript
const user = User.find('some-user-id');
if (user) {
  user.attributes.email = 'new-email@example.com';
  user.save(); // Updates the record in localStorage
}
```

---

### 6. Delete a Record  

```javascript
const user = User.find('some-user-id');
if (user) {
  user.delete(); // Removes the user from localStorage
}
```

---

### 7. Use Collection Methods  

```javascript
const users = User.all();

// Filter users by name
const filteredUsers = users.filter(u => u.attributes.name.includes('John'));
console.log(filteredUsers.toArray());

// Sort users by email
const sortedUsers = users.sortBy('email');
console.log(sortedUsers.toArray());

// Paginate users (page 1, 2 per page)
const paginatedUsers = users.paginate(1, 2);
console.log(paginatedUsers.toArray());
```

---

## 📂 **Folder Structure**  

```
/local-storage-orm
│
├── index.js         # Entry point
├── model.js         # ORM Model logic
├── collection.js    # Collection handling logic
└── utils.js         # Helper functions for storage & serialization
```

---

## ⚙️ **API Documentation**

### **Model Methods**  
| Method               | Description                              |
|----------------------|------------------------------------------|
| `save()`             | Save or update the model in `localStorage`. |
| `static find(id)`    | Find a specific model by ID.              |
| `static all()`       | Get all models as a collection.           |
| `delete()`           | Delete the model from `localStorage`.     |

---

### **Collection Methods**  
| Method               | Description                              |
|----------------------|------------------------------------------|
| `all()`              | Get all items in the collection.          |
| `filter(callback)`   | Filter items using a callback function.   |
| `map(callback)`      | Map over items and return a new collection. |
| `sortBy(key)`        | Sort items by a specific key.             |
| `paginate(page, perPage)` | Paginate the collection.             |
| `first()`            | Get the first item in the collection.     |
| `last()`             | Get the last item in the collection.      |
| `toArray()`          | Convert the collection to an array.       |

---

## 🛠️ **Utilities**
- **UUID Generation**: Automatically generates unique IDs for new models.
- **Storage Utilities**: Handles serialization and deserialization of `localStorage` data.

---

## 🧪 **Example Use Case**

Here’s an example where we store and manage products in a local e-commerce app.

```javascript
class Product extends ORM.Model {
  static storageKey = 'products';
}

const product = new Product({ name: 'Laptop', price: 1500 });
product.save();

const products = Product.all().filter(p => p.attributes.price > 1000);
console.log(products.toArray());
```

---

## 🎨 **Extending the Library**

You can extend the library by adding:
- **Relationships**: E.g., `User` has many `Posts`.
- **Custom Methods**: Add logic specific to your app.
- **Validations**: Enforce rules before saving data.

---

## ⚖️ **License**

This library is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use it in your personal or commercial projects.

---

## 🤝 **Contributing**

Contributions are welcome! If you find a bug or want to enhance the library, feel free to open an issue or submit a pull request.

---

## 💬 **Support**

For any questions or help, please open an issue in the repository. Let's make this library even better together!

---

## 🌟 **Acknowledgements**

Inspired by Laravel’s Eloquent ORM and JavaScript's lightweight data handling.

---

Enjoy using **LocalStorage ORM**? Don’t forget to ⭐ star this project!

---
