<?php
session_start();

// Generate CSRF token
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

$success = $error = '';
$errorCode = '';

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verify CSRF token
    if (!hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'])) {
        $error = "Security verification failed. Please try again.";
        $errorCode = "securityError";
    } else {
        // Collect and sanitize form data
        $name = htmlspecialchars(trim($_POST['name']));
        $email = htmlspecialchars(trim($_POST['email']));
        $subject = htmlspecialchars(trim($_POST['subject']));
        $message = htmlspecialchars(trim($_POST['message']));

        // Validate email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $error = "Invalid email format";
        } else {
            // Prepare email content
            $to = "kylian.brault@gmail.com"; // Replace with your email
            $email_subject = "Portfolio Contact: $subject";
            $body = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";
            $headers = "From: $email";

            // Send email
            if (mail($to, $email_subject, $body, $headers)) {
                $success = "successMessage";
                // Clear form data on success
                $name = $email = $subject = $message = '';
            } else {
                $error = "errorMessage";
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio Kylian - Contact">
    <meta name="keyword" content="Contact, Kylian">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <title>Portfolio - Contact</title>
    <link rel="stylesheet" href="assets/css/common.css">
    <link rel="stylesheet" href="assets/css/contact.css"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="icon" href="assets/image/iconLogo.png" type="image/png">
</head>

<body>
    <header>
        <nav>
            <div id="logo">
                <a href="index.html">
                    <img src="assets/image/Kylian_Logo.png" alt="Logo Kylian">
                </a>
            </div>
            <ul>
                <li><a href="index.html" data-i18n="nav.home">Home</a></li>
                <li><a href="projects.html" data-i18n="nav.projects">Projects</a></li>
                <li><a href="assets/pdf/CV_2025-02-08_Kylian_BRAULT.pdf" data-i18n="nav.resume">Resume</a></li>
                <li><a href="contact.php" data-i18n="nav.contact">Contact</a></li>
            </ul>
            <div class="lang-switch-container">
                <button class="lang-switch" data-lang="en">EN</button>
                <button class="lang-switch" data-lang="fr">FR</button>
            </div>
            <div class="Menu">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    </header>

    <main>
        <section class="contact-section">
            <div class="fade-in">
                <div class="contact-container">
                    <div class="contact-form">
                        <h2 class="form-title" data-i18n="contact.title">Contact me</h2>
                        
                        <?php if (!empty($success)): ?>
                        <div class="success-message">
                            <i class="fas fa-check-circle"></i> <span data-i18n="contact.<?php echo $success; ?>"></span>
                        </div>
                        <?php endif; ?>
                        
                        <?php if (!empty($error)): ?>
                        <div class="error-message">
                            <i class="fas fa-exclamation-circle"></i> <span data-i18n="contact.<?php echo $errorCode ? $errorCode : 'errorMessage'; ?>"></span>
                        </div>
                        <?php endif; ?>
                        
                        <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
                            <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>">
                            
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="name" data-i18n="contact.nameLabel">Name</label>
                                    <input type="text" id="name" name="name" data-i18n-placeholder="contact.namePlaceholder" placeholder="Your name" value="<?php echo isset($name) ? $name : ''; ?>" required>
                                </div>
                                <div class="form-group">
                                    <label for="email" data-i18n="contact.emailLabel">Email</label>
                                    <input type="email" id="email" name="email" data-i18n-placeholder="contact.emailPlaceholder" placeholder="Your email address" value="<?php echo isset($email) ? $email : ''; ?>" required>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="subject" data-i18n="contact.subjectLabel">Subject</label>
                                <input type="text" id="subject" name="subject" data-i18n-placeholder="contact.subjectPlaceholder" placeholder="What is this regarding?" value="<?php echo isset($subject) ? $subject : ''; ?>" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="message" data-i18n="contact.messageLabel">Message</label>
                                <textarea id="message" name="message" data-i18n-placeholder="contact.messagePlaceholder" placeholder="Your message here..." rows="4" required><?php echo isset($message) ? $message : ''; ?></textarea>
                            </div>
                            
                            <button type="submit" data-i18n="contact.sendButton">Send Message <i class="fas fa-paper-plane"></i></button>
                        </form>
                    </div>
                    
                    <div class="section-separator"></div>
                    
                    <div class="media">
                        <a href="https://github.com/KylianBrlt"><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/kylianbrault/"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p data-i18n="footer.copyright">© 2025 Kylian BRAULT - All rights reserved.</p>
    </footer>
    
    <script src="assets/js/i18n/en.js"></script>
    <script src="assets/js/i18n/fr.js"></script>
    <script src="assets/js/i18n/translations.js"></script>
    <script src="assets/js/script.js"></script> 
</body>
</html>
