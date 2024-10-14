// Generate a simple UUID for unique IDs
export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  // Get data from localStorage
  export function storageGet(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  
  // Set data to localStorage
  export function storageSet(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  