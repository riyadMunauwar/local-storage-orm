import { Collection } from './collection.js';
import { uuid, storageGet, storageSet } from './utils.js';

export class Model {
  static storageKey = ''; // Must be overridden by subclass

  constructor(attributes = {}) {
    this.attributes = { ...attributes };
    this.id = this.attributes.id || uuid();
  }

  // Save the model to localStorage
  save() {
    const all = Model.getAll();
    const existing = all.find(item => item.id === this.id);

    if (existing) {
      Object.assign(existing, this.attributes);
    } else {
      all.push(this.attributes);
    }
    storageSet(Model.storageKey, all);
    return this;
  }

  // Find a model by ID
  static find(id) {
    const all = this.getAll();
    const item = all.find(entry => entry.id === id);
    return item ? new this(item) : null;
  }

  // Get all records as a Collection
  static all() {
    const all = this.getAll();
    return new Collection(all.map(item => new this(item)));
  }

  // Remove model from storage
  delete() {
    const all = Model.getAll().filter(item => item.id !== this.id);
    storageSet(Model.storageKey, all);
  }

  // Static helper to retrieve all items from localStorage
  static getAll() {
    return storageGet(this.storageKey) || [];
  }
}
