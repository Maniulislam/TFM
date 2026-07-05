# Mosque Finance & Collection System

একটি আধুনিক ওয়েব-ভিত্তিক সিস্টেম যা মসজিদের আর্থিক ব্যবস্থাপনা এবং চাদা সংগ্রহ পরিচালনা করে।

## প্রজেক্ট তথ্য

- **প্রজেক্ট নাম:** Mosque Finance & Collection System
- **বিবরণ:** মসজিদের সদস্য, চাদা এবং আর্থিক ব্যবস্থাপনা
- **প্রযুক্তি:** React + TypeScript + Node.js + MongoDB
- **ভার্সন:** 1.0.0

## মূল উদ্দেশ্য

✅ সদস্য তথ্য সংরক্ষণ
✅ মাসিক চাদা আদায়
✅ অগ্রিম পেমেন্ট গ্রহণ
✅ বকেয়া হিসাব স্বয়ংক্রিয়ভাবে নির্ধারণ
✅ আয়-ব্যয় রিপোর্ট
✅ বাংলা ও ইংরেজি ভাষা সমর্থন

## ব্যবহারকারী ভূমিকা (User Roles)

1. **Admin** - সম্পূর্ণ সিস্টেম অ্যাক্সেস এবং ব্যবস্থাপনা
2. **Collector** - চাদা সংগ্রহ এবং পেমেন্ট রেকর্ড
3. **Viewer** - শুধুমাত্র রিপোর্ট দেখা
4. **Auditor** - আর্থিক অডিট এবং রিপোর্ট বিশ্লেষণ

## দ্রুত শুরু করুন

### প্রয়োজনীয় সফটওয়্যার
- Node.js (v16+)
- npm বা yarn

### ফ্রন্টএন্ড সেটআপ

```bash
cd frontend
npm install
npm run dev
```

সার্ভার চলবে: http://localhost:5173

### ব্যাকএন্ড সেটআপ

```bash
cd backend
npm install
npm run dev
```

সার্ভার চলবে: http://localhost:3000

## প্রযুক্তিগত স্ট্যাক

### ফ্রন্টএন্ড
- React 18+ with TypeScript
- Tailwind CSS
- React Router
- i18n (বাংলা ও ইংরেজি)
- Recharts (রিপোর্ট)

### ব্যাকএন্ড
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- CORS সাপোর্ট

## পরিবেশ ভেরিয়েবল

`.env` ফাইল তৈরি করুন:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

## লাইসেন্স

MIT License
