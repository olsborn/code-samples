# Project Quotation Form - Sample Code

Contact form with reCAPTCHA v2 integration, AJAX validation, and test mode

## Requirements

- PHP 7.4+
- Apache/XAMPP
- jQuery 4.0.0 (loaded from CDN)
- Google reCAPTCHA v2 (optional in test mode)

## 🎬 Demo

![Demo](demo.gif)

---

## Installation

1. Copy files to your server directory (e.g., `htdocs/project-form`)
2. Start Apache server
3. Open `http://localhost/project-form/index.php`

## Configuration

### Test Mode (VALIDATE_CAPTCHA = false)

By default, the form runs in **test mode** with reCAPTCHA validation disabled. This is useful for:

- Development and testing
- Demo purposes
- GitHub portfolio samples

The `config.php` file contains:

```php
const VALIDATE_CAPTCHA = false;  // Set to true to enable reCAPTCHA validation
const RECAPTCHA_SITE_KEY = 'your_site_key_here';
const RECAPTCHA_SECRET_KEY = 'your_secret_key_here';
```

When `VALIDATE_CAPTCHA` is set to `false`, the form will:

- Skip reCAPTCHA verification on submit
- Still display the reCAPTCHA widget (but not validate it)
- Process form submissions without checking the captcha response

### Production Mode (VALIDATE_CAPTCHA = true)

To enable full reCAPTCHA validation for production use:

1. Get your reCAPTCHA keys at: `https://www.google.com/recaptcha/admin/create`
2. Log in with your Google account
3. Fill out the form:
   - **Label**: project name (e.g., "My Contact Form")
   - **reCAPTCHA type**: select **reCAPTCHA v2** → "I'm not a robot" Checkbox
   - **Domains**: add your domain (e.g., `yourdomain.com`, `localhost`)
4. After creation, you'll receive:
   - **Site Key** (public key)
   - **Secret Key** (private key)

5. Open `config.php` and update:

```php
const VALIDATE_CAPTCHA = true;  // Enable validation
const RECAPTCHA_SITE_KEY = 'YOUR_SITE_KEY';
const RECAPTCHA_SECRET_KEY = 'YOUR_SECRET_KEY';
```

## Form Fields

The form includes the following fields (all with generic names suitable for portfolio samples):

- `full_name` - Full name (required)
- `company_name` - Company name (optional)
- `phone_number` - Phone number (optional)
- `email_address` - Email address (required)
- `project_type[]` - Project type checkboxes (B2B, B2C)
- `integrations[]` - Integration options (Marketplace, Shipping)
- `erp_systems[]` - ERP systems (SAP, Oracle, Microsoft Dynamics, NetSuite, Other)
- `additional_features[]` - Additional features (WMS, Data Migration, International Sales, Omnichannel, Multistore, Mobile App)
- `project_description` - Project description textarea
- `privacy_consent` - Privacy policy agreement (required)

## Features

- AJAX form submission with jQuery
- Loading spinner during processing
- Success/error message display
- Client-side and server-side validation
- Optional reCAPTCHA v2 integration
- Test mode for development
- Responsive design
