function fetchDog() {
    return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
      response
        .json()
        .then(json =>
          response.ok ? Promise.resolve(json) : Promise.reject(json)
        )
    );
  }

describe("testando a requisição", () => {
  fetchDog = jest.fn();
  afterEach(fetchDog.mockReset);

  test("testando requisição caso a promisse resolva", async () => {
    fetchDog.mockResolvedValue("request sucess");

    fetchDog();
    expect(fetchDog).toHaveBeenCalled();
    expect(fetchDog).toHaveBeenCalledTimes(1);
    await expect(fetchDog()).resolves.toBe("request sucess");
    expect(fetchDog).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    fetchDog.mockRejectedValue("request failed");

    expect(fetchDog).toHaveBeenCalledTimes(0);
    await expect(fetchDog()).rejects.toMatch("request failed");
    expect(fetchDog).toHaveBeenCalledTimes(1);
  });
});
