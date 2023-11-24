export default httpClient => ({
  getMe: async function () {
    const response = await httpClient.get("/users/me")
    return {
      data: response.data,
    }
  }
})
