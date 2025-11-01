# Contact Form Email Setup Guide

This guide will help you set up email functionality for your contact form. You have two options:

## Option 1: EmailJS (Recommended for beginners)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new service (Gmail, Outlook, etc.)

### Step 2: Create Email Template
1. In EmailJS dashboard, go to "Email Templates"
2. Create a new template with these variables:
   - `{{contact_name}}` - User's name
   - `{{contact_email}}` - User's email
   - `{{contact_phone}}` - User's phone
   - `{{contact_message}}` - User's message

### Step 3: Get Your Credentials
1. Service ID: Found in "Email Services" section
2. Template ID: Found in "Email Templates" section
3. Public Key: Found in "Account" section

### Step 4: Set Environment Variables
Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Step 5: Update Contact Form
The contact form is already configured to use EmailJS. Just update the environment variables.

---

## Option 2: Nodemailer API Route (More control)

### Step 1: Set Up Email Service
Choose one of these email services:

#### Gmail Setup:
1. Enable 2-factor authentication on your Gmail account
2. Generate an "App Password" for your application
3. Use these settings in your `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=your_email@gmail.com
SMTP_TO=contact@haizomstudio.com
```

#### Other Email Services:
- **Outlook/Hotmail**: `smtp-mail.outlook.com:587`
- **Yahoo**: `smtp.mail.yahoo.com:587`
- **Custom SMTP**: Use your hosting provider's SMTP settings

### Step 2: Update Contact Form
Replace `FormTwo` with `FormTwoAPI` in your contact page:

```tsx
// In src/app/contact-us/page.tsx
import FormTwoAPI from "@/components/contact/FormTwoAPI";

// Replace <FormTwo /> with <FormTwoAPI />
```

### Step 3: Test the Setup
1. Start your development server: `npm run dev`
2. Go to `/contact-us`
3. Fill out and submit the form
4. Check your email for the contact form submission

---

## Email Template Examples

### EmailJS Template:
```
Subject: New Contact Form Submission from {{contact_name}}

Name: {{contact_name}}
Email: {{contact_email}}
Phone: {{contact_phone}}

Message:
{{contact_message}}

Reply to: {{contact_email}}
```

### Nodemailer Template:
The API route already includes a professional HTML template with:
- Styled layout
- Contact details section
- Message content
- Reply-to information

---

## Troubleshooting

### Common Issues:

1. **EmailJS not working:**
   - Check your credentials in `.env.local`
   - Verify the template variables match exactly
   - Check browser console for errors

2. **Nodemailer not working:**
   - Verify SMTP credentials
   - Check if 2FA is enabled (for Gmail)
   - Ensure app password is correct
   - Check server logs for errors

3. **Emails going to spam:**
   - Add SPF, DKIM, and DMARC records to your domain
   - Use a professional email address
   - Avoid spam trigger words

### Testing:
- Use a test email address first
- Check both inbox and spam folder
- Verify all form fields are being captured

---

## Security Notes

1. **Never commit `.env.local` to version control**
2. **Use environment variables for all sensitive data**
3. **Consider rate limiting for production**
4. **Add CAPTCHA for spam protection**

---

## Production Deployment

### Vercel:
- Add environment variables in Vercel dashboard
- No additional configuration needed

### Other Platforms:
- Set environment variables in your hosting platform
- Ensure SMTP ports are not blocked
- Consider using a dedicated email service for high volume

---

## Support

If you need help with the setup:
1. Check the console for error messages
2. Verify all credentials are correct
3. Test with a simple email first
4. Contact support if issues persist
