import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zipCode,
      items,
      subtotal,
      tax,
      total
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !address || !city || !state || !zipCode || !items) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // If Supabase is configured, save to database
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { data, error } = await supabase
        .from('orders')
        .insert([
          {
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            address,
            city,
            state,
            zip_code: zipCode,
            items,
            subtotal,
            tax,
            total,
            status: 'pending'
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        return res.status(500).json({ error: 'Failed to save order to database' });
      }

      return res.status(200).json({
        success: true,
        orderId: data[0].id,
        message: 'Order saved successfully'
      });
    }

    // If no Supabase, just return success with generated ID
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    
    // Log order details (in production, you might want to send to a logging service)
    console.log('Order received:', {
      orderId,
      customer: `${firstName} ${lastName}`,
      email,
      total,
      items: items.length
    });

    return res.status(200).json({
      success: true,
      orderId,
      message: 'Order received successfully'
    });

  } catch (error) {
    console.error('Error processing order:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
