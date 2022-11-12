export type LocalStorageItem = {
  key: string;
  value: string;
};

class LocalStorage {
  private _items: LocalStorageItem[] = [];

  get items(): LocalStorageItem[] {
    return this._items;
  }

  set items(items: LocalStorageItem[]) {
    this._items = items;
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    this.items.push({ key, value });

    return localStorage.setItem(key, value);
  }
}

export default LocalStorage;
