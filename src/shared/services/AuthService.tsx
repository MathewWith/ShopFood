import axios from "axios";

import {API_URL} from "src/shared/consts/api-url";

export default class AuthService{
  public static async registration(email: string, firstName: string, lastName: string, password: string) {
    await axios.post(`${API_URL}/signUp`, { email, firstName, lastName, password })
  }

  public static async login(email: string, password: string) {
    await axios.post(`${API_URL}/auth/signIn`, { email, password })
  }
}

