# 🚀 Quick Deployment Checklist

## ✅ Pre-Deployment Setup

### 1. Supabase Setup (5 minutes)
- [ ] Create account at https://supabase.com
- [ ] Create new project
- [ ] Run SQL from `supabase/setup.sql` in SQL Editor
- [ ] Copy Project URL from Settings → API
- [ ] Copy Anon Key from Settings → API
- [ ] Update `.env` file with your credentials

### 2. Test Locally (2 minutes)
- [ ] Restart dev server: `npm run dev`
- [ ] Place a test order
- [ ] Check Supabase Table Editor for the order
- [ ] Verify WhatsApp opens with order details

### 3. Git Setup (3 minutes)
```bash
git init
git add .
git commit -m "Initial commit"
```

- [ ] Create GitHub repo at https://github.com/new
- [ ] Push code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### 4. Vercel Deployment (5 minutes)
- [ ] Go to https://vercel.com
- [ ] Sign in with GitHub
- [ ] Click "Add New" → "Project"
- [ ] Import your GitHub repository
- [ ] Add Environment Variables:
  - `VITE_SUPABASE_URL` = your Supabase URL
  - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete

---

## 🎯 Your Credentials

### Supabase
```
Project URL: https://____________.supabase.co
Anon Key: eyJhbGci____________
```

### Vercel
```
Project URL: https://____________.vercel.app
```

---

## 🔄 Update & Redeploy

To update your live site:
```bash
# Make your changes
git add .
git commit -m "Description of changes"
git push
```

Vercel automatically deploys in 2-3 minutes!

---

## 📊 View Orders

**Supabase Dashboard:**
1. Go to https://app.supabase.com
2. Select your project
3. Click "Table Editor"
4. Click "orders" table
5. See all customer orders!

**Query recent orders:**
```sql
SELECT 
  id,
  first_name || ' ' || last_name as customer,
  email,
  total,
  status,
  created_at
FROM orders
ORDER BY created_at DESC
LIMIT 20;
```

---

## ⚡ Quick Commands

```bash
# Local development
npm run dev

# Build
npm run build

# Deploy to Vercel (after Git push)
# Automatic on push to main branch

# Or manual deploy
vercel --prod
```

---

## 🐛 Troubleshooting

**Orders not saving?**
- Check environment variables in Vercel dashboard
- Verify Supabase credentials are correct
- Check browser console for errors

**Build failing?**
- Check all dependencies are in package.json
- Verify environment variables are set
- Check Vercel build logs

**WhatsApp not opening?**
- Check phone number format: 96171873635
- Verify message is being generated correctly

---

## ✨ You're Done!

Your store is now:
- ✅ Live on the internet
- ✅ Saving orders to database
- ✅ Sending WhatsApp notifications
- ✅ Auto-deploying on updates

**Share your store!** 🎉
