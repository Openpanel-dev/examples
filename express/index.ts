import express from 'express'
import createMiddleware from '@openpanel/express';
import { getClientIp } from 'request-ip';
import { parseIp } from './geo';

const PORT = Number(process.env.PORT || 3000)
const app = express()

app.use(
  createMiddleware({
    clientId: 'ef38d50e-7d8e-4041-9c62-46d4c3b3bb01',
    clientSecret: 'f0607566-791a-4b20-b42e-cadafcced4e0',
    trackRequest: (url) => {
      return true
    },
  })
)

app.get('/', (req, res) => {
  res.json({
    message: 'Home',
  })
})
app.get('/foo', (req, res) => {
  req.op.event('foo')
  res.json({
    message: 'Foo',
  })
})
app.get('/bar/:id', (req, res) => {
  req.op.event('bar', {
    params: req.params,
  })
  res.json({
    message: 'Foo',
    params: req.params,
  })
})
app.get('/ip', async (req, res) => {
  res.json({
    headers: req.op.api.headers,
    ip: {ip: req.ip,geo: await parseIp(req.ip) },
    getClientIp: {ip: getClientIp(req),geo: await parseIp(getClientIp(req)) },
    xForwardedFor: {ip: req.headers['x-forwarded-for'],geo: await parseIp(req.headers['x-forwarded-for'] as string) },
    cfConnectingIp: {ip: req.headers['cf-connecting-ip'],geo: await parseIp(req.headers['cf-connecting-ip'] as string) },
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})
