# 📌 Project Deployment Notes – IDT

---

## 📌 Project Information

**Project Name:** IDT – India Destination Tours  
**Repository Name:** idt-world  
**GitHub Repository:** https://github.com/Ashik-ch/idt-world  
**Branch for Deployment:** main  
**Framework:** Angular (Standalone)  
**Angular Version:** 20  
**Hosting Platform:** GitHub Pages  
**Domain Provider:** GoDaddy  
**Custom Domain:** goidt.in  

---

## 🔧 Build Command

---

## 🚀 Deploy Steps

### 1️⃣ Commit & Push Code

git add .  
git commit -m "Production build update"  
git push origin main  

### 2️⃣ Sync Code (If Needed)

git pull origin main  

---

## 🌍 Custom Domain Setup

Set custom domain in GitHub Pages:

goidt.in  

⚠ Make sure:

## 🧩 GoDaddy DNS Configuration

### A Records (Root Domain)

185.199.108.153  
185.199.109.153  
185.199.110.153  
185.199.111.153  

### CNAME Record (www)

Host: www  
Points to: ashik-ch.github.io  

---

## ✅ Final Checklist Before Live

☐ Production build successful  
☐ No console errors  
☐ CNAME file present  
☐ HTTPS enabled in GitHub Pages  
☐ DNS propagated (24–48 hrs)  
☐ Hard refresh after deploy  