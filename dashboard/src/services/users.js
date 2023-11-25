export default httpClient => ({
  getMe: async () => {
    const response = await httpClient.get("/users/me",{
      id: 'eab759f8-f238-4ff9-ae91-ee1558982329'
    })
    return {
      data: response.data,
    }
  }
})
