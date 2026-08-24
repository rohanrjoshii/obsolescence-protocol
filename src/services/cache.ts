interface CacheItem<T> {
  data: T;
  expiry: number;
}

class SimpleCache {
  private cache: Map<string, CacheItem<any>> = new Map();

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    if (!item) return null;
    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }
    return item.data as T;
  }

  set<T>(key: string, data: T, ttlMs: number = 5 * 60 * 1000): void {
    this.cache.set(key, {
      data,
      expiry: Date.now() + ttlMs,
    });
  }

  clear(): void {
    this.cache.clear();
  }
}

export const cache = new SimpleCache();
