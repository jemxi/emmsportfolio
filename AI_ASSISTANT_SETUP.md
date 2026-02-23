# AI Assistant "ME" - Setup Guide

## 🤖 What is ME?

"ME" is an AI-powered chatbot integrated into your portfolio that can answer questions about your experience, skills, and projects using Google's Gemini AI.

## 🚀 Quick Setup

### Step 1: Get Gemini API Key

1. Go to **Google AI Studio**: https://makersuite.google.com/app/apikey
2. Click **"Get API Key"**
3. Click **"Create API key"** 
4. Copy the generated API key

### Step 2: Add API Key to Project

1. Open the `.env` file in your portfolio folder
2. Replace `your_gemini_api_key_here` with your actual API key:

```
VITE_GEMINI_API_KEY=AIzaSyC...your_actual_key_here
```

⚠️ **IMPORTANT**: Never commit `.env` to GitHub! It's already in `.gitignore`

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start Development Server

```bash
npm run dev
```

That's it! The AI assistant button will appear in the bottom-right corner.

## ✨ Features

✅ **Chat Interface** - Floating chat bubble in bottom-right  
✅ **Smart Responses** - Answers questions about your portfolio  
✅ **Context-Aware** - Knows your skills, projects, and experience  
✅ **Responsive Design** - Works on mobile and desktop  
✅ **Smooth Animations** - Polished slide-in/out effects  
✅ **Typing Indicator** - Shows when AI is thinking  

## 💬 What ME Can Answer

The AI assistant can answer questions like:

- "What projects has John worked on?"
- "Tell me about John's skills"
- "What is WasteWise?"
- "Where did John work?"
- "What technologies does John know?"
- "Tell me about John's leadership experience"

## 🎨 Customization

### Change AI Name

In `AIAssistant.jsx`, find and replace:

```jsx
// Line 13
content: "Hi! I'm ME, John's AI assistant..."

// Line 33
You are ME, an AI assistant for John Emmanuel S. Menor's portfolio.

// Line 167
<span className="text-white font-bold text-lg">ME</span>

// Line 170
<h3 className="text-white font-bold">ME - AI Assistant</h3>
```

### Update Portfolio Context

In `AIAssistant.jsx`, edit the `portfolioContext` variable (lines 32-61) with your actual information:

```javascript
const portfolioContext = `
You are ME, an AI assistant for [Your Name]'s portfolio.

About [Your Name]:
- [Your role and background]
- Location: [Your location]
...
`;
```

### Change Colors

Replace `emerald` with your preferred color:

```jsx
// Button
from-emerald-500 to-teal-500  // Change to: from-blue-500 to-cyan-500

// Message bubbles
bg-emerald-500  // Change to: bg-blue-500

// Focus states
border-emerald-500  // Change to: border-blue-500
```

## 🔧 Advanced Configuration

### Adjust Response Length

In `AIAssistant.jsx`, line 90:

```javascript
generationConfig: {
  maxOutputTokens: 200,  // Increase for longer responses (max: 2048)
  temperature: 0.7,      // Higher = more creative (0.0 - 1.0)
},
```

### Add More Context

Add more details to `portfolioContext`:

```javascript
Education:
- [Your degree] from [University], [Year]

Certifications:
- [Certification name], [Year]

Awards:
- [Award name], [Year]
```

### Custom Greeting Message

In `AIAssistant.jsx`, line 13:

```javascript
{
  role: 'assistant',
  content: "Hi! I'm ME. Ask me anything about John's work! 👋"
}
```

## 🌐 Deployment

### Environment Variables on Vercel/Netlify

1. Go to your deployment settings
2. Add environment variable:
   - **Key**: `VITE_GEMINI_API_KEY`
   - **Value**: Your Gemini API key
3. Redeploy

### Security Best Practices

✅ Never expose API key in client code  
✅ Keep `.env` in `.gitignore`  
✅ Use server-side proxy in production (optional, for extra security)  
✅ Set API key restrictions in Google Cloud Console  

## 📊 Usage Limits

**Gemini Free Tier:**
- 60 requests per minute
- 1,500 requests per day
- Free forever

Perfect for a portfolio site!

## 🐛 Troubleshooting

### "API key not found"
- Check `.env` file exists in root folder
- Verify key starts with `VITE_`
- Restart dev server after adding key

### "AI not responding"
- Check browser console for errors
- Verify API key is valid
- Check internet connection
- Ensure quota not exceeded

### "Module not found"
- Run `npm install` again
- Clear `node_modules` and reinstall:
  ```bash
  rm -rf node_modules
  npm install
  ```

## 🎯 Tips

1. **Test locally first** before deploying
2. **Customize the context** with your real information
3. **Monitor API usage** in Google AI Studio
4. **Add rate limiting** if needed (check documentation)
5. **Update context** as you add new projects

## 🔗 Resources

- **Gemini API Docs**: https://ai.google.dev/docs
- **Get API Key**: https://makersuite.google.com/app/apikey
- **Pricing**: https://ai.google.dev/pricing

---

## 🎉 You're All Set!

Your AI assistant "ME" is now ready to answer questions about your portfolio!

Try asking:
- "What technologies does John use?"
- "Tell me about WasteWise"
- "What's John's experience?"

Enjoy! 🚀
