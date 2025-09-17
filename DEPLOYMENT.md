# 🚀 Deployment till Railway

## Snabb deployment

1. **Gå till [Railway.app](https://railway.app)**
2. **Klicka "Deploy from GitHub repo"**
3. **Välj repository: `chgenberg/bredbandsval`**
4. **Railway kommer automatiskt:**
   - Känna igen Next.js projektet
   - Installera dependencies
   - Bygga applikationen
   - Deploya till produktion

## Miljövariabler på Railway

Efter deployment, lägg till dessa miljövariabler i Railway dashboard:

```env
NEXT_PUBLIC_USE_MOCK_DATA=true
NEXT_PUBLIC_API_BASE_URL=https://api.bredbandsval.se/v1
```

### När ni har riktiga API:er:
```env
NEXT_PUBLIC_USE_MOCK_DATA=false
NEXT_PUBLIC_API_BASE_URL=https://api.bredbandsval.se/v1
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your-actual-key
```

## Custom Domain

1. I Railway dashboard, gå till **Settings**
2. Under **Domains**, klicka **Generate Domain**
3. För custom domain (t.ex. ai.bredbandsval.se):
   - Lägg till custom domain i Railway
   - Uppdatera DNS CNAME record

## Monitoring

Railway ger automatiskt:
- ✅ HTTPS certificates
- ✅ Automatic deployments från GitHub
- ✅ Logs och metrics
- ✅ Zero-downtime deployments

## Kostnad

Railway kostar ~$5-20/månad beroende på trafik.
För produktionsanvändning rekommenderas Pro plan ($20/mån).

## Support

Railway har utmärkt dokumentation på: https://docs.railway.app/

---

🎉 **Din AI-agent kommer vara live inom 5 minuter!**
