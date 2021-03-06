import axios from 'axios'
import Cookies from 'js-cookie'

 import { getCookieFromReq } from '../helpers/utils'

 const axiosInstance = axios.create({
   baseURL: 'http://localhost:3000/api/v1',
   timeout: 3000
 })


const setAuthHeader = (req) => {
  const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt')
  if(token) {
    return { headers: { 'authorization': `Bearer ${token}`}}
  }
  return undefined
}

const rejectPromise = err => {
  let error = {}

  if(err && err.response && err.response.data) {
    error = err.response.data
  } else {
    error = err
  }

  return Promise.reject(error)
}

export const getSecretData = async (req) => (
  await axiosInstance.get(`/secret`, setAuthHeader(req)).then(res => res.data)
)


// PORTFOLIO
export const getPortfolios = async() => (
  await axiosInstance.get(`/portfolios`).then(res => res.data)
)
export const getPortfolioById = async(id, req) => (
  await axiosInstance.get(`/portfolios/${id}`).then(res => res.data)
)

export const createPortfolio = async(portfolioData) => (
  await axiosInstance.post(`/portfolios`, portfolioData, setAuthHeader())
    .then(res => res.data)
    .catch(error => rejectPromise(error))
)

export const updatePortfolio = async(portfolioData) => (
  await axiosInstance.patch(`/portfolios/${portfolioData._id}`, portfolioData, setAuthHeader())
    .then(res => res.data)
    .catch(error => rejectPromise(error))
)

export const deletePortfolio = async(portfolioId) => (
  await axiosInstance.delete(`/portfolios/${portfolioId}`, setAuthHeader())
    .then(res => res.data)
    .catch(error => rejectPromise(error))
)
