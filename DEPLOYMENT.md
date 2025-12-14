# 🚀 Deployment Guide - Vercel + Supabase

## Overview
This guide will help you deploy your e-commerce store with:
- **Frontend**: Vercel (hosting)
- **Backend**: Supabase (database)

---

## Part 1: Setting Up Supabase Backend

### Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click **"New Project"**
4. Fill in:
   - Project name: `ecommerce-store` (or your preferred name)
   - Database password: Create a strong password (save it!)
   - Region: Choose closest to your users
5. Click **"Create new project"**
6. Wait 2-3 minutes for setup to complete

### Step 2: Set Up Database

1. In your Supabase project dashboard, click **"SQL Editor"** in the left sidebar
2. Click **"New Query"**
3. Copy the entire contents of `supabase/setup.sql` file
4. Paste it into the SQL editor
5. Click **"Run"** or press `Ctrl+Enter`
6. You should see "Success. No rows returned" message

This creates:
- `orders` table to store customer orders
- Proper indexes for fast queries
- Row Level Security policies
- Helper functions

### Step 3: Get API Credentials

1. In Supabase dashboard, click **"Settings"** (gear icon) in the left sidebar
2. Click **"API"** under Project Settings
3. You'll see two important values:

   **Project URL:**
   ```
   https://your-project-id.supabase.co
   ```

   **Anon (public) key:**
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

4. **Copy these values** - you'll need them next!

### Step 4: Configure Local Environment

1. Open the `.env` file in your project root
2. Replace the placeholder values:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

3. Save the file

### Step 5: Test Locally

1. Restart your dev server:
```bash
npm run dev
```

2. Test the order flow:
   - Add products to cart
   - Go to checkout
   - Fill in the form
   - Click "Place Order"
   - Order should save to Supabase!

3. Verify in Supabase:
   - Go to Supabase dashboard
   - Click **"Table Editor"**
   - Click **"orders"** table
   - You should see your test order!

---

## Part 2: Deploying to Vercel

### Step 1: Prepare for Deployment

1. Make sure all changes are committed:
```bash
git init
git add .
git commit -m "Prepare for deployment"
```

2. Create a GitHub repository:
   - Go to [https://github.com/new](https://github.com/new)
   - Name: `ecommerce-store` (or your preferred name)
   - Click **"Create repository"**

3. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/ecommerce-store.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [https://vercel.com](https://vercel.com)
2. Sign up or log in (can use GitHub account)
3. Click **"Add New"** → **"Project"**
4. Import your GitHub repository
5. Configure project:
   - Framework Preset: **Vite** (should auto-detect)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`

6. **Add Environment Variables** (IMPORTANT!):
   Click **"Environment Variables"**
   
   Add these two variables:
   ```
   Name: VITE_SUPABASE_URL
   Value: https://your-project-id.supabase.co
   
   Name: VITE_SUPABASE_ANON_KEY
   Value: your-actual-anon-key-here
   ```

7. Click **"Deploy"**

8. Wait 2-3 minutes for deployment

9. Your site will be live at: `https://your-project.vercel.app`

#### Option B: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? **Your account**
   - Link to existing project? **N**
   - Project name? **ecommerce-store**
   - Directory? **./  (press Enter)**
   - Override settings? **N**

5. Add environment variables:
```bash
vercel env add VITE_SUPABASE_URL
# Paste your Supabase URL

vercel env add VITE_SUPABASE_ANON_KEY
# Paste your Supabase anon key
```

6. Deploy to production:
```bash
vercel --prod
```

---

## Part 3: Post-Deployment

### Verify Everything Works

1. Visit your Vercel URL: `https://your-project.vercel.app`
2. Browse products
3. Add items to cart
4. Complete a test order
5. Check Supabase to see if order was saved
6. Verify WhatsApp message opens correctly

### Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take 24-48 hours)

---

## Part 4: Viewing Orders in Supabase

### View All Orders

1. Go to Supabase dashboard
2. Click **"Table Editor"**
3. Click **"orders"** table
4. See all customer orders with:
   - Order ID
   - Customer details
   - Items ordered (click to expand JSON)
   - Order totals
   - Status
   - Timestamp

### Query Recent Orders

1. Click **"SQL Editor"**
2. Run this query:
```sql
SELECT * FROM get_recent_orders(20);
```

This shows the 20 most recent orders.

### Update Order Status

```sql
UPDATE orders 
SET status = 'completed' 
WHERE id = 'order-id-here';
```

Possible status values:
- `pending` - New order
- `processing` - Being prepared
- `shipped` - On the way
- `completed` - Delivered
- `cancelled` - Cancelled

---

## Troubleshooting

### Frontend Issues

**Build fails on Vercel:**
- Check environment variables are set correctly
- Make sure all dependencies are in package.json
- Check build logs for specific errors

**App loads but can't save orders:**
- Verify environment variables on Vercel
- Check browser console for errors
- Verify Supabase URL and key are correct

### Backend Issues

**Orders not saving to Supabase:**
- Check SQL setup ran successfully
- Verify Row Level Security policies
- Check Supabase logs in dashboard
- Verify API credentials are correct

**"relation orders does not exist":**
- Run the setup.sql script again
- Make sure you're in the correct project

---

## Environment Variables Reference

### Local Development (.env)
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Vercel Production
Set these in Vercel dashboard under Settings → Environment Variables:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

---

## Important Security Notes

1. ✅ **DO** commit `.env.example` to Git
2. ❌ **DON'T** commit `.env` to Git (already in .gitignore)
3. ✅ **DO** use environment variables in Vercel
4. ❌ **DON'T** expose your Supabase service role key (only use anon key)
5. ✅ **DO** use Row Level Security policies in Supabase

---

## Continuous Deployment

Once set up, every time you push to GitHub:
1. Vercel automatically detects the change
2. Builds your project
3. Deploys the new version
4. Your site is updated in 2-3 minutes!

To deploy:
```bash
git add .
git commit -m "Your update message"
git push
```

---

## Useful Links

- **Your Vercel Project**: https://vercel.com/dashboard
- **Your Supabase Project**: https://app.supabase.com
- **Vercel Documentation**: https://vercel.com/docs
- **Supabase Documentation**: https://supabase.com/docs

---

## Quick Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel --prod

# View Vercel logs
vercel logs
```

---

## Success! 🎉

Your e-commerce store is now:
- ✅ Deployed on Vercel (globally distributed CDN)
- ✅ Connected to Supabase database
- ✅ Saving orders to database
- ✅ Sending WhatsApp notifications
- ✅ Auto-deploying on every push

**Share your store:** `https://your-project.vercel.app`

Need help? Check the troubleshooting section above!
