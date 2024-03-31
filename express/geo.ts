export async function parseIp(ip?: string|null) {
  if (!ip) {
    return null;
  }

  try {
    const geo = await fetch(`${process.env.GEO_IP_HOST}/${ip}`, {
      signal: AbortSignal.timeout(2000),
    });
    const res = (await geo.json())
    return res
  } catch (e) {
    return null
  }
}
