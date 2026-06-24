# BidForge AI Production DNS Configuration Package

**Domain:** bidforge.ai  
**Status:** Final - Ready for Deployment  
**Provider Recommendation:** Vercel (Frontend/Backend) + Google Workspace (Email)

---

## 1. Apex Domain (bidforge.ai)
| Type | Host | Value | TTL | Priority |
|------|------|-------|-----|----------|
| A    | @    | 76.76.21.21 | 3600 | - |
| TXT  | @    | v=spf1 include:_spf.google.com ~all | 3600 | - |

## 2. Subdomains & CNAMEs
| Type  | Host | Value | TTL |
|-------|------|-------|-----|
| CNAME | www  | cname.vercel-dns.com | 3600 |

## 3. Email Configuration (Google Workspace)
| Type | Host | Value | Priority |
|------|------|-------|----------|
| MX   | @    | SMTP.GOOGLE.COM | 1 |

## 4. Security & SSL
- **SSL Status:** Managed via Vercel (Auto-provisioning Let's Encrypt).
- **HSTS:** Enabled on Vercel dashboard.
- **Redirects:** 
  - `http://bidforge.ai` → `https://bidforge.ai` (Permanent 301)
  - `https://www.bidforge.ai` → `https://bidforge.ai` (Permanent 301)

## 5. Verification Records (Action Required)
> **Note:** The following records require tokens from the respective dashboards.
- **Vercel Verification:** Add a TXT record for `_vercel` with the token found in the Vercel Project Settings > Domains.
- **Google Site Verification:** Add a TXT record for `@` with the `google-site-verification` token from Google Admin Console.

---
**Instructions for Owner:**
1. Log in to your domain registrar (e.g., Namecheap, GoDaddy).
2. Navigate to "Advanced DNS" or "DNS Management".
3. Add the A, CNAME, and MX records as listed above.
4. Add the SPF TXT record to ensure email deliverability.
5. Once added, propagation may take up to 24 hours, but usually takes less than 1 hour.
