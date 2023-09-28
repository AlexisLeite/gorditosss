export const server = new (class Server {
  async get<T extends object>(url: string): Promise<T> {
    //return await fetch(url).then((res) => res.json());

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ gordito: "elPepe" } as unknown as T);
      }, 1200);
    });
  }
})();
