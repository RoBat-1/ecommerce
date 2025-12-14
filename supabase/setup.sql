-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  
  -- Customer information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  
  -- Shipping address
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  
  -- Order details
  items JSONB NOT NULL,
  subtotal DECIMAL(10, 2) NOT NULL,
  tax DECIMAL(10, 2) NOT NULL,
  total DECIMAL(10, 2) NOT NULL,
  
  -- Status
  status TEXT DEFAULT 'pending',
  notes TEXT
);

-- Create an index on created_at for faster queries
CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders(created_at DESC);

-- Create an index on email for customer lookup
CREATE INDEX IF NOT EXISTS orders_email_idx ON orders(email);

-- Enable Row Level Security
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert orders (for new orders)
CREATE POLICY "Anyone can create orders" ON orders
  FOR INSERT
  WITH CHECK (true);

-- Create a policy for reading orders (you can customize this based on your needs)
-- For now, we'll allow reading all orders, but you might want to restrict this
CREATE POLICY "Anyone can view orders" ON orders
  FOR SELECT
  USING (true);

-- Optional: Create a function to get recent orders
CREATE OR REPLACE FUNCTION get_recent_orders(limit_count INT DEFAULT 10)
RETURNS TABLE (
  id UUID,
  created_at TIMESTAMP WITH TIME ZONE,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  total DECIMAL,
  status TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    o.id,
    o.created_at,
    o.first_name,
    o.last_name,
    o.email,
    o.total,
    o.status
  FROM orders o
  ORDER BY o.created_at DESC
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql;
