import axios from "axios";

const API_URL = "https://salty-oasis-36055.herokuapp.com";

export default class AuthService{
  public static async registration(email: string, firstName: string, lastName: string, password: string) {
    console.log(email, firstName, lastName, password)
    console.log(await axios.post(`${API_URL}/signUp`, { email, firstName, lastName, password }))
  }

  public static async login(email: string, password: string) {
    console.log(email, password)
    console.log(await axios.post(`${API_URL}/auth/signIn`, { email, password }))
  }
}

