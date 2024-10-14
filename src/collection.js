export class Collection {
    constructor(items = []) {
      this.items = items;
    }
  
    // Get all items in the collection
    all() {
      return this.items;
    }
  
    // Filter items based on a callback
    filter(callback) {
      return new Collection(this.items.filter(callback));
    }
  
    // Map over items
    map(callback) {
      return new Collection(this.items.map(callback));
    }
  
    // Sort items by key
    sortBy(key) {
      const sorted = [...this.items].sort((a, b) => a[key] > b[key] ? 1 : -1);
      return new Collection(sorted);
    }
  
    // Paginate items
    paginate(page = 1, perPage = 10) {
      const offset = (page - 1) * perPage;
      const paginatedItems = this.items.slice(offset, offset + perPage);
      return new Collection(paginatedItems);
    }
  
    // Get the first item in the collection
    first() {
      return this.items[0] || null;
    }
  
    // Get the last item in the collection
    last() {
      return this.items[this.items.length - 1] || null;
    }
  
    // Convert collection to an array
    toArray() {
      return this.items;
    }
  }
  