import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, message }: ContactEmailRequest = await req.json();
    
    const clientId = Deno.env.get('NOTIFICATIONAPI_CLIENT_ID');
    const clientSecret = Deno.env.get('NOTIFICATIONAPI_CLIENT_SECRET');
    
    if (!clientId || !clientSecret) {
      throw new Error('NotificationAPI credentials not configured');
    }

    // Send business notification
    const businessNotification = await fetch(`https://api.notificationapi.com/${clientId}/sender`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        notificationId: 'contact-form-business',
        user: {
          id: 'business',
          email: 'info@1024concepts.com'
        },
        mergeTags: {
          name,
          email,
          company: company || 'Not provided',
          message
        }
      })
    });

    // Send customer confirmation
    const customerNotification = await fetch(`https://api.notificationapi.com/${clientId}/sender`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        notificationId: 'contact-form-customer',
        user: {
          id: email,
          email: email
        },
        mergeTags: {
          name
        }
      })
    });

    console.log('Business notification status:', businessNotification.status);
    console.log('Customer notification status:', customerNotification.status);

    const businessResult = await businessNotification.json();
    const customerResult = await customerNotification.json();

    return new Response(JSON.stringify({
      success: true,
      businessNotification: businessResult,
      customerNotification: customerResult
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error('Error in send-contact-emails function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);