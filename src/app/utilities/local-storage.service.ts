import { Injectable } from '@angular/core';

type StorageKey = string;

@Injectable()
export class LocalStorageService {
  setItem(key: StorageKey, value: any): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error setting item in LocalStorage: ${error}`);
    }
  }

  getItem<T = any>(key: StorageKey): T | null {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) {
        return null;
      }
      return JSON.parse(serializedValue) as T;
    } catch (error) {
      console.error(`Error getting item from LocalStorage: ${error}`);
      return null;
    }
  }

  removeItem(key: StorageKey): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from LocalStorage: ${error}`);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(`Error clearing LocalStorage: ${error}`);
    }
  }
}
