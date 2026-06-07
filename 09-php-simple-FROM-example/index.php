<?php require_once __DIR__ . '/config.php'; ?>
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Quotation Form</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <script>
        window.FORM_CONFIG = {
            validateCaptcha: <?php echo VALIDATE_CAPTCHA ? 'true' : 'false'; ?>
        };
    </script>
</head>

<body>
    <div class="container">
        <main>
            <div class="header">
                <h1>PROJECT QUOTATION<span class="dot">.</span></h1>
            </div>

            <p class="description">
                Interested in our services? Fill out this short form and tell us about your expectations -
                we'll prepare a custom quote tailored to your requirements
            </p>

            <form id="contactForm" action="submit.php" method="POST">
                <div class="form-row">
                    <div class="form-group">
                        <input type="text" name="full_name" placeholder="Full name:" maxlength="100" required>
                    </div>
                    <div class="form-group">
                        <input type="text" name="company_name" placeholder="Company:" maxlength="100">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <input type="tel" name="phone_number" placeholder="Phone number:" maxlength="20">
                    </div>
                    <div class="form-group">
                        <input type="email" name="email_address" placeholder="E-mail:" maxlength="100" required>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Project Type<span class="dot">.</span></h2>
                    <div class="checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" name="project_type[]" value="B2B">
                            <span>B2B</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="project_type[]" value="B2C">
                            <span>B2C</span>
                        </label>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Integrations<span class="dot">.</span></h2>
                    <div class="checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" name="integrations[]" value="Marketplace">
                            <span>Marketplace</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="integrations[]" value="Shipping">
                            <span>Shipping</span>
                        </label>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">ERP Integration<span class="dot">.</span></h2>
                    <div class="checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" name="erp_systems[]" value="SAP">
                            <span>SAP</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="erp_systems[]" value="Oracle">
                            <span>Oracle</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="erp_systems[]" value="Microsoft Dynamics">
                            <span>Microsoft Dynamics</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="erp_systems[]" value="NetSuite">
                            <span>NetSuite</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="erp_systems[]" value="Other">
                            <span>Other</span>
                        </label>
                    </div>
                </div>

                <div class="section">
                    <h2 class="section-title">Additional Features<span class="dot">.</span></h2>
                    <div class="checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" name="additional_features[]" value="WMS">
                            <span>WMS</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="additional_features[]" value="Data Migration">
                            <span>Data Migration</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="additional_features[]" value="International Sales">
                            <span>International Sales</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="additional_features[]" value="Omnichannel">
                            <span>Omnichannel</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="additional_features[]" value="Multistore">
                            <span>Multistore</span>
                        </label>
                        <label class="checkbox-label">
                            <input type="checkbox" name="additional_features[]" value="Mobile App for Sales">
                            <span>Mobile App for Sales</span>
                        </label>
                    </div>
                </div>

                <div class="form-group full-width">
                    <label class="textarea-label">Message:</label>
                    <textarea name="project_description" rows="8" placeholder="Enter your message" maxlength="2000"></textarea>
                </div>

                <div class="recaptcha-container">
                    <div class="g-recaptcha" data-sitekey="<?php echo RECAPTCHA_SITE_KEY; ?>"></div>
                </div>

                <div class="consent-container">
                    <label class="consent-label">
                        <input type="checkbox" name="privacy_consent" required>
                        <span>I agree to the processing of my personal data provided in this form. The data will be used solely for the purpose of responding to this inquiry and preparing a custom quote. You have the right to access, correct, and delete your data at any time.</span>
                    </label>
                </div>

                <div class="submit-container">
                    <button type="submit" class="submit-btn" id="submitBtn">SEND</button>
                    <svg id="formLoader" class="form-loader" style="display: none;" width="40" height="40" viewBox="0 0 40 40">
                        <circle cx="20" cy="20" r="16" stroke="#1e3a5f" stroke-width="4" fill="none" stroke-dasharray="80" stroke-dashoffset="20" stroke-linecap="round" />
                    </svg>
                </div>
            </form>

            <div id="formMessage" style="display: none;"></div>
        </main>
    </div>

    <script src="https://code.jquery.com/jquery-4.0.0.min.js"></script>
    <script src="script.js"></script>
</body>

</html>