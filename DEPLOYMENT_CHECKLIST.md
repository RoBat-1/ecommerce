# ✅ Deployment Checklist

## Pre-Deployment

- [ ] All code committed to Git
- [ ] Project builds successfully (`npm run build`)
- [ ] No console errors in browser
- [ ] Cart functionality works
- [ ] Checkout form validates properly
- [ ] WhatsApp link opens correctly

## GitHub Setup

- [ ] Create GitHub repository
- [ ] Push code to GitHub:
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  git remote add origin https://github.com/USERNAME/REPO.git
  git branch -M main
  git push -u origin main
  ```

## Vercel Deployment

### Basic Setup (Required)

- [ ] Sign up/login to Vercel: https://vercel.com
- [ ] Import GitHub repository
- [ ] Verify settings:
  - Framework: **Vite** ✓
  - Build Command: `npm run build` ✓
  - Output Directory: `dist` ✓
- [ ] Click **Deploy**
- [ ] Wait 2-3 minutes for deployment

### Test Deployment

- [ ] Visit deployment URL
- [ ] Test adding products to cart
- [ ] Test cart persistence (refresh page)
- [ ] Test checkout form
- [ ] Verify WhatsApp opens with order
- [ ] Check order includes product images

## Optional: Supabase Integration

Only if you want persistent order storage:

### Supabase Setup

- [ ] Create account: https://supabase.com
- [ ] Create new project
- [ ] Wait for project to initialize (~2 minutes)

### Database Setup

- [ ] Go to SQL Editor
- [ ] Copy contents of `supabase/setup.sql`
- [ ] Paste and run SQL
- [ ] Verify `orders` table created (Table Editor)

### Get Credentials

- [ ] Go to Settings → API
- [ ] Copy **Project URL**
- [ ] Copy **anon public** key

### Add to Vercel

- [ ] Go to Vercel project
- [ ] Settings → Environment Variables
- [ ] Add `VITE_SUPABASE_URL` = [your URL]
- [ ] Add `VITE_SUPABASE_ANON_KEY` = [your key]
- [ ] Go to Deployments
- [ ] Click **...** → **Redeploy**

### Test Supabase

- [ ] Place test order
- [ ] Check Supabase Table Editor
- [ ] Verify order appears in database

## Post-Deployment

### Verify Everything Works

- [ ] Homepage loads
- [ ] Products display with images
- [ ] Category filter works
- [ ] Add to cart works
- [ ] Cart page shows items
- [ ] Update quantities works
- [ ] Remove items works
- [ ] Checkout form works
- [ ] WhatsApp notification sends
- [ ] Order saved (if using Supabase)

### Performance Check

- [ ] Lighthouse score > 90
- [ ] Page loads in < 3 seconds
- [ ] Images load properly
- [ ] No console errors

## Continuous Deployment

Every push to `main` automatically deploys!

```bash
# Make changes
git add .
git commit -m "Add feature"
git push

# Vercel auto-deploys in 2-3 minutes
```

## Custom Domain (Optional)

- [ ] Buy domain
- [ ] Go to Vercel Settings → Domains
- [ ] Add domain
- [ ] Configure DNS records
- [ ] Wait for SSL certificate

## Troubleshooting

### Build Fails
1. Check Vercel build logs
2. Verify all dependencies in `package.json`
3. Test `npm run build` locally
4. Check for missing files

### Orders Not Working
1. Check Vercel Functions logs
2. Test API endpoint: `/api/create-order`
3. Verify Supabase credentials (if using)
4. Check browser console for errors

### WhatsApp Doesn't Open
1. Verify phone number in `Checkout.jsx`
2. Check browser allows pop-ups
3. Test on different device/browser

## Success! 🎉

Your store is now:
- ✅ Live on the internet
- ✅ Auto-deploying on push
- ✅ Taking orders via WhatsApp
- ✅ Production-ready

**Share your URL:**
```
https://your-project.vercel.app
```

---

Need help? Check [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md) for detailed instructions.
