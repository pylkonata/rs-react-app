function getFromLS(key: string): string | null {
  const itemInLS = localStorage.getItem(key);
  if (itemInLS) {
    return itemInLS;
  }
  return null;
}

export default getFromLS;
