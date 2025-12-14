# ⚡ Quick Reference Card

## 🚀 Common Commands

```bash
# Development
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:5173)
npm run build           # Build for production
npm run preview         # Preview production build

# Git
git add .               # Stage all changes
git commit -m "msg"     # Commit changes
git push                # Push to GitHub (triggers Vercel deploy)

# Testing
npm run build           # Verify build works
```

## 📂 Key Files

| File | Purpose |
|------|---------|
| `src/pages/Checkout.jsx` | WhatsApp number & order submission |
| `src/context/CartContext.jsx` | Cart logic |
| `api/create-order.js` | Backend order API |
| `vercel.json` | Deployment config |
| `.env` | Environment variables (create from `.env.example`) |

## 🔗 Important URLs

| Service | URL |
|---------|-----|
| Vercel Dashboard | https://vercel.com/dashboard |
| Supabase Dashboard | https://supabase.com/dashboard |
| Vercel Docs | https://vercel.com/docs |
| Supabase Docs | https://supabase.com/docs |

## 🎯 Quick Deploy

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# 2. Import to Vercel
# → Go to https://vercel.com
# → Click "Add New" → "Project"
# → Import your GitHub repo
# → Click "Deploy"

# Done! Your site is live in 2-3 minutes 🎉
```

## 🔧 Quick Fixes

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Cart not working?**
- Check browser console for errors
- Verify localStorage is enabled

**WhatsApp not opening?**
- Check phone number in `src/pages/Checkout.jsx`
- Allow pop-ups in browser

**Orders not saving to database?**
- Verify Supabase credentials in Vercel env vars
- Check `api/create-order.js` logs in Vercel

## 📱 WhatsApp Configuration

**Current number:** +96171873635

**To change:**
1. Open `src/pages/Checkout.jsx`
2. Find: `const whatsappNumber = "96171873635"`
3. Change to your number (without + or spaces)
4. Example: `96171234567` for +96171234567

## 🗄️ Database (Optional)

**Without Supabase:**
- Orders generate auto IDs
- No storage needed
- Everything works!

**With Supabase:**
1. Create project at https://supabase.com
2. Run `supabase/setup.sql` in SQL Editor
3. Get credentials from Settings → API
4. Add to Vercel env vars:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Redeploy

## 🎨 Customization

**Add products:**
- Edit product data in source code
- Update images (use Unsplash URLs)

**Change colors:**
- Edit `src/App.css`
- Modify gradient backgrounds
- Update button styles

**Modify categories:**
- Edit filter in `src/pages/Home.jsx`

## 📊 Monitoring

**Check deployment:**
- Vercel → Your Project → Deployments

**View logs:**
- Vercel → Functions → create-order → Logs

**Database usage:**
- Supabase → Settings → Usage (if enabled)

## ✅ Pre-Deploy Checklist

- [ ] `npm run build` succeeds
- [ ] No console errors
- [ ] Cart works
- [ ] Checkout submits
- [ ] WhatsApp opens
- [ ] All files committed
- [ ] Pushed to GitHub

## 📚 Full Documentation

- **Getting Started**: [README.md](./README.md)
- **Deploy Guide**: [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md)
- **Checklist**: [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)
- **All Docs**: [DOCS_INDEX.md](./DOCS_INDEX.md)

---

**Need help?** Check [DOCS_INDEX.md](./DOCS_INDEX.md) for complete documentation!
