import axios from 'axios'
import Cookies from 'js-cookie'

 import { getCookieFromReq } from '../helpers/utils'

const BASE_URL = 'http://localhost:3000/api/v1'

const setAuthHeader = (req) => {
  const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt')
  if(token) {
    return { headers: { 'authorization': `Bearer ${token}`}}
  }
  return undefined
}

export const getSecretData = async (req) => (
  await axios.get(`${BASE_URL}/secret`, setAuthHeader(req)).then(res => res.data)
)


export const getPortfolios = async(req) => (
  await axios.get(`${BASE_URL}/portfolios`, setAuthHeader(req)).then(res => res.data)
)
