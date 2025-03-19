# 📌 Dokumentation for Din Mægler  

**Forfatter:** Mansoureh Safarian Toosi, WU11  

Jeg har valgt at lægge min opgave på nettet. Se den her:  
🔗 [https://briansmaegler.onrender.com](https://briansmaegler.onrender.com)  

---

## 🔑 Brugere til systemet  

| Brugernavn  | Adgangskode |
|-------------|------------|
| minnyebruger | 1234       |

---

## 🚀 Tech-stack  

### **Frontend**  
- **[Next.js](https://nextjs.org)**  
  Jeg har valgt Next.js, fordi det giver server-side rendering (SSR) og statisk site generation (SSG), hvilket forbedrer ydeevnen (performance)og SEO. Det har også en god filbaseret routing og support for API-routes, hvilket gør det til et godt valg for både små og store projekter.
  ### **1. Ydeevne (performance)** 
  ### **2 Sikkerhed** 🔐 
  ### **3. SEO** 🔍
### 
- **Next.js API Routes** 
  Next.js giver mulighed for at bygge API'er direkte i projektet, hvilket reducerer behovet for en separat backend.

## ❌ **Ulemper ved Next.js**  

### **1. Kompleksitet i Store Projekter** 🏗  
- Next.js kan være komplekst at arbejde med i store applikationer, især hvis SSR og SSG kombineres forkert.  

### **2. Hosting Begrænsninger** ☁  
- Selvom Vercel er den anbefalede hostingplatform, kan det være dyrt for større projekter. Alternative platforme som Netlify og AWS kan kræve ekstra konfiguration.  

### **3. Byggetid på Store Applikationer** ⏳  
- SSG kan føre til lange byggetider, hvis der er mange sider, især med dynamiske data.  

---

- **[Tailwind CSS](https://tailwindcss.com/)**  
  Tailwind er valgt for dets utility-first tilgang, som gør styling fleksibel og effektiv uden behov for eksterne CSS-filer.  

- **[React Icons](https://react-icons.github.io)**  
  Dette bibliotek bruges til at inkludere ikoner på en enkel og skalerbar måde.  

  

---

## 📂 Projektstruktur  

Nedenfor er en oversigt over de vigtigste sider, komponenter og API-routes i projektet.  

### **📄 Sider** (`/src/pages/`)  
- **`index.tsx` (Forside)** – Viser hovedlisten over ejendomme og søgefiltre.  
- **`dashboard.tsx` (Dashboard)** – Viser brugerens specifikke data og giver mulighed for ejendomsadministration.  
- **`login.tsx` (Login-side)** – Håndterer brugergodkendelse via Firebase.  
- **`profile.tsx` (Profilside)** – Viser og redigerer brugerens oplysninger.  

### **🧩 Komponenter** (`/src/components/`)  
- **`PropertyCard.tsx` (Ejendomskort)** – En genanvendelig komponent, der viser oplysninger om en ejendom.  
- **`Navbar.tsx` (Navigationsmenu)** – Indeholder navigation og håndterer brugerens login-status.  
- **`Footer.tsx` (Footer)** – Viser oplysninger og links i bunden af siden.  
- **`SearchBar.tsx` (Søgefelt)** – En søgekomponent, der filtrerer ejendomme baseret på brugerinput.  

### **🌐 API-routes** (`/src/pages/api/`)  
- **`auth.ts` (Autentifikation)** – Håndterer bruger-login og logout.  
- **`properties.ts` (Ejendomsdata)** – Henter ejendomsoplysninger fra databasen.  
- **`user.ts` (Brugeroplysninger)** – Returnerer brugerens oplysninger og opdaterer data.  
- **`contact.ts` (Kontaktformular API)** – Håndterer kontaktformularens forespørgsler og sender dem til databasen.  

---

## Kode-eksempel
Jeg har valgt et eksempel fra login 

[Login action](/src/actions/login.js)
```js
const schema = z.object({
	identifier: z.string().min(1, { message: "Du skal udfylde en email" }).email({ message: "Ugyldig email" }),
	password: z.string().min(1, { message: "Du skal udfylde et password" })
})

const validate = schema.safeParse({
	identifier,
	password
})

if (!validate.success) {
	return {
		formData: {
			identifier,
			password
		},
		errors: validate.error.format()
	}
}
```

Jeg bruger biblioteket `Zod` til at lave et schema, så jeg kan validere email og password fra login-formularen.

Først laver jeg et skema som indeholder reglerne for hvordan felterne i formularen skal se ud.  
Derefter parser jeg et objekt med felterne fra formularen op mod schemaet.  
Hvis valideringen ikke lykkes returnerer funktionen et fejl-objekt.

