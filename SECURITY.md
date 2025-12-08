# Security Policy

## Supported Versions
We release patches and updates as needed. Only the latest version of this repository is actively supported.

| Version | Supported          |
| ------- | ------------------ |
| latest  | ✅                 |
| older   | ❌ (please update) |

## Reporting a Vulnerability
If you discover a security issue in this project:

1. **Do not open a public issue.**
2. Instead, please report it responsibly:
   - Email: [biswasasit14@gmail.com]
   - Or use GitHub’s [Private Vulnerability Reporting](https://docs.github.com/en/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories).

We will investigate promptly and work to resolve the issue.

## Security Best Practices
When using or extending this project:
- Always keep dependencies up to date.
- Do not expose our **Google reCAPTCHA secret key** in client-side code.
- Use HTTPS when deploying publicly.
- Validate CAPTCHA and passkey responses **server-side** before granting access.
- Avoid hardcoding sensitive credentials in source files.

## Disclosure Policy
- We aim to acknowledge reports within **48 hours**.
- Fixes or mitigations will be released as soon as possible.
- Credit will be given to reporters who follow responsible disclosure practices.

---
