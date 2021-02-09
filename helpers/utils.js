export const getCookieFromReq = (req, cookie) => {
  const cookieVal = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${cookie}=`))
  if(!cookieVal) { return undefined }

  return cookieVal.split('=')[1]
}