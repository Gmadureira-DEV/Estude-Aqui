import { useState, useEffect, useCallback } from "react";

export interface UserData {
  name: string;
  loginDate: string;
}

export interface HistoryItem {
  contentSlug: string;
  title: string;
  subjectName: string;
  subjectSlug: string;
  timestamp: number;
}

const STORAGE_KEYS = {
  USER: "estude-aqui-user",
  FAVORITES: "estude-aqui-favorites",
  HISTORY: "estude-aqui-history",
};

export function useUser() {
  const [user, setUser] = useState<UserData | null>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.USER);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [history, setHistory] = useState<HistoryItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.HISTORY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const login = useCallback((name: string) => {
    const userData: UserData = { name, loginDate: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEYS.USER);
    setUser(null);
  }, []);

  const toggleFavorite = useCallback((slug: string) => {
    setFavorites(prev => {
      const newFavs = prev.includes(slug)
        ? prev.filter(f => f !== slug)
        : [...prev, slug];
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(newFavs));
      return newFavs;
    });
  }, []);

  const isFavorite = useCallback((slug: string) => favorites.includes(slug), [favorites]);

  const addToHistory = useCallback((item: Omit<HistoryItem, "timestamp">) => {
    setHistory(prev => {
      const filtered = prev.filter(h => h.contentSlug !== item.contentSlug);
      const newHistory = [{ ...item, timestamp: Date.now() }, ...filtered].slice(0, 50);
      localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(newHistory));
      return newHistory;
    });
  }, []);

  const clearHistory = useCallback(() => {
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
    setHistory([]);
  }, []);

  return {
    user,
    login,
    logout,
    favorites,
    toggleFavorite,
    isFavorite,
    history,
    addToHistory,
    clearHistory,
  };
}
