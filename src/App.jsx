import React, { useState, useEffect } from "react";
import FIRSTPIC from "./assets/FIRSTPIC.jpeg";
import SecondImg from "./assets/SecondImg.jpeg";
import three from "./assets/three.jpeg";
import four from "./assets/four.jpeg";
import five from "./assets/five.jpeg";
import six from "./assets/six.jpeg";
import seven from "./assets/seven.jpeg";
import eight from "./assets/eight.jpeg";
import nine from "./assets/nine.jpeg";
import ten from "./assets/ten.jpeg";
import eleven from "./assets/eleven.jpeg";
import twelve from "./assets/tweleve.jpeg";
import thirteen from "./assets/thirteen.jpeg";
import fourteen from "./assets/fourteen.jpeg";
import fifteen from "./assets/fifteen.jpeg";
import sixteen from "./assets/sixteen.jpeg";
import seventeen from "./assets/seventeen.jpeg";
import eighteen from "./assets/eighteen.jpeg";
import nineteen from "./assets/nineteen.jpeg";
import twenty from "./assets/twenty.jpeg";
import twentyone from "./assets/twentyone.jpeg";
import twentytwo from "./assets/twentytwo.jpeg";
import twentythree from "./assets/twentythree.jpeg";
import twentyfour from "./assets/twentyfour.jpeg";
import twentyfive from "./assets/twentyfive.jpeg";
import twentysix from "./assets/twentysix.jpeg";
import twentyseven from "./assets/twentyseven.jpeg";
import twentyeight from "./assets/twentyeight.jpeg";
import twentynine from "./assets/twentynine.jpeg";
import thirty from "./assets/thirty.jpeg";




function FloatingHearts() {
  const [hearts] = useState(
    Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 20 + 20,
    }))
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart, i) => (
        <span
          key={i}
          className="absolute text-pink-400 opacity-70 animate-bounce"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
const getAnniversaryDisplay = () => {
  const startDate = new Date(2019, 1, 19); // Feb 19, 2019
  const today = new Date();

  const currentYear = today.getFullYear();
  const anniversaryThisYear = new Date(currentYear, 1, 19);

  let yearsTogether = currentYear - 2019;

  // If anniversary hasn't come yet this year
  if (today < anniversaryThisYear) {
    yearsTogether -= 1;
  }

  const isAnniversaryToday = today.getDate() === 19 && today.getMonth() === 1;

  return {
    yearsTogether,
    isAnniversaryToday,
  };
};

export default function AnniversaryPage() {
  const DEFAULT_PASSWORD = "Dhaya Shree";
  const SECRET_ANSWER = "chittu";
  const startDate = new Date("2019-02-19T00:00:00");

  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [showMemories, setShowMemories] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentReason, setCurrentReason] = useState(0);
  const [timeTogether, setTimeTogether] = useState({});
  const [letterPassword, setLetterPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [opened, setOpened] = useState(false);

  const memories = [FIRSTPIC, SecondImg,three,four,five,six];


  const PASSWORD = "websketchs";

  const handleOpenLetter = () => {
    if (letterPassword === PASSWORD) {
      setIsOpen(true);
      setError("");
    } else {
      setError("Wrong password 💔 Try again");
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();
      let hours = now.getHours() - startDate.getHours();
      let minutes = now.getMinutes() - startDate.getMinutes();
      let seconds = now.getSeconds() - startDate.getSeconds();

      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const prevMonth = new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        ).getDate();
        days += prevMonth;
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      setTimeTogether({ years, months, days, hours, minutes, seconds });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReason((prev) => (prev === reasons.length - 1 ? 0 : prev + 1));
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  function useMarriageTimer() {
    const [marriageTime, setMarriageTime] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    useEffect(() => {
      const updateMarriageTimer = () => {
        const now = new Date();

        // 🎯 Fixed target date: Feb 19, 2027
        const targetDate = new Date(2027, 1, 19); // Month is 0-based (1 = February)

        const diff = targetDate - now;

        // Prevent negative countdown after date passes
        if (diff <= 0) {
          setMarriageTime({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          });
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setMarriageTime({
          days,
          hours,
          minutes,
          seconds,
        });
      };

      updateMarriageTimer();
      const interval = setInterval(updateMarriageTimer, 1000);

      return () => clearInterval(interval);
    }, []);

    return marriageTime;
  }
  const marriageTime = useMarriageTimer();

  const getCurrentAnniversary = () => {
    const startDate = new Date(2019, 1, 19);
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();

    // Check if anniversary has occurred this year
    const thisYearAnniversary = new Date(today.getFullYear(), 1, 19);

    if (today < thisYearAnniversary) {
      years -= 1;
    }

    return years;
  };

  const anniversaryYear = getCurrentAnniversary();
  const { yearsTogether, isAnniversaryToday } = getAnniversaryDisplay();

  const loveLanguages = [
    { text: "I Love You ❤️", lang: "English" },
    { text: "நான் உன்னை காதலிக்கிறேன்", lang: "Tamil" },
    { text: "నిన్ను ప్రేమిస్తున్నాను", lang: "Telugu (Short Form)" },
    { text: "𓀀𓂋𓂝𓀜 𓅓𓂋𓏏", lang: "Ancient Egyptian (Hieroglyphic)" },
    { text: "ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ", lang: "Kannada" },
    { text: "ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു", lang: "Malayalam" },
    { text: "હું તને પ્રેમ કરું છું", lang: "Gujarati" },
    { text: "ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ/ਕਰਦੀ ਹਾਂ", lang: "Punjabi" },
    { text: "मी तुझ्यावर प्रेम करतो/करते", lang: "Marathi" },
    { text: "ମୁଁ ତୁମକୁ ଭଲ ପାଏ", lang: "Odia" },
    { text: "میں تم سے محبت کرتا/کرتی ہوں", lang: "Urdu" },
    { text: "मैं तिमीलाई माया गर्छु", lang: "Nepali" },
    { text: "ꯑꯩꯅ ꯅꯪꯕꯨ ꯅꯨꯡꯁꯤ", lang: "Manipuri (Meitei)" },
    { text: "মই তোমাক ভাল পাওঁ", lang: "Assamese" },
    { text: "Ami tumak bhal pau", lang: "Bodo" },
    { text: "ᱟᱢ ᱠᱚ ᱢᱟᱨᱟᱝ ᱟᱢᱟᱜ", lang: "Santali" },
    { text: "Main tumse pyar karta/karti hoon", lang: "Hindi (Romanized)" },
    { text: "بہٕ چھُس تُہٕنٛدۍ محبت", lang: "Kashmiri" },
    { text: "हांव तुजो मोग करता", lang: "Konkani (Devanagari)" },
    { text: "مان توسان محبت ڪريان ٿو", lang: "Sindhi" },
    { text: "𑀅𑀳𑀁 𑀢𑁆𑀯𑀸𑀁 𑀧𑁆𑀭𑁂𑀫𑀸𑀫𑀺", lang: "Brahmi (Ancient Indian Script)" },
    { text: "𒆠𒀉𒈬", lang: "Sumerian (Cuneiform)" },
    { text: "𒊏𒀀𒈬", lang: "Akkadian (Cuneiform approximation)" },
    { text: "𐀁𐀩𐀀 𐀺𐀰", lang: "Mycenaean Greek (Linear B)" },
    { text: "אני אוהב אותך", lang: "Hebrew (Male speaking to Female)" },
    { text: "𐤀𐤍𐤊 𐤀𐤄𐤁 𐤊", lang: "Phoenician" },
    { text: "Aš tave myliu", lang: "Lithuanian" },
    { text: "मैं तुमसे प्यार करता हूँ", lang: "Hindi" },
    { text: "Je t’aime", lang: "French" },
    { text: "Te amo", lang: "Spanish" },
    { text: "Ti amo", lang: "Italian" },
    { text: "Ich liebe dich", lang: "German" },
    { text: "我爱你", lang: "Chinese (Simplified)" },
    { text: "我愛你", lang: "Chinese (Traditional)" },
    { text: "愛してる", lang: "Japanese" },
    { text: "사랑해", lang: "Korean" },
    { text: "Eu te amo", lang: "Portuguese" },
    { text: "Я тебя люблю", lang: "Russian" },
    { text: "Seni seviyorum", lang: "Turkish" },
    { text: "Σ’ αγαπώ", lang: "Greek" },
    { text: "Nakupenda", lang: "Swahili" },
    { text: "Ik hou van jou", lang: "Dutch" },
    { text: "Jag älskar dig", lang: "Swedish" },
    { text: "Jeg elsker dig", lang: "Danish" },
    { text: "Jeg elsker deg", lang: "Norwegian" },
    { text: "Kocham Cię", lang: "Polish" },
    { text: "Te iubesc", lang: "Romanian" },
    { text: "Mahal kita", lang: "Filipino (Tagalog)" },
    { text: "Saya cinta kamu", lang: "Indonesian" },
    { text: "Aku cinta kamu", lang: "Malay" },
    { text: "Volim te", lang: "Croatian" },
    { text: "Volim te", lang: "Bosnian" },
    { text: "Ljubim te", lang: "Serbian" },
    { text: "Milujem ťa", lang: "Slovak" },
    { text: "Szeretlek", lang: "Hungarian" },
    { text: "Anh yêu em", lang: "Vietnamese" },
    { text: "Mo ni fe re", lang: "Yoruba" },
    { text: "Ndagukunda", lang: "Kinyarwanda" },
    { text: "Ta gra agam ort", lang: "Irish" },
    { text: "Is breá liom tú", lang: "Irish (Variation)" },
    { text: "אני אוהב אותך", lang: "Hebrew" },
    { text: "මම ඔයාට ආදරෙයි", lang: "Sinhala" },
    { text: "ကျွန်တော် မင်းကို ချစ်တယ်", lang: "Burmese" },
    { text: "ខ្ញុំស្រលាញ់អ្នក", lang: "Khmer" },
    { text: "ຂ້ອຍຮັກເຈົ້າ", lang: "Lao" },
    { text: "S'agapo", lang: "Greek (Romanized)" },
    { text: "Ek het jou lief", lang: "Afrikaans" },
    { text: "Ndiyakuthanda", lang: "Xhosa" },
    { text: "Ngiyakuthanda", lang: "Zulu" },
    { text: "Te amo", lang: "Galician" },
    { text: "T'estimo", lang: "Catalan" },
    { text: "Mi amas vin", lang: "Esperanto" },
    { text: "Aloha wau ia ʻoe", lang: "Hawaiian" },
    { text: "Ke a go rata", lang: "Tswana" },
    { text: "Love You Forever", lang: "Dhaya" },
  ];

  const timelineData = [
    {
      date: "Feb 19, 2019",
      title: "Starting Days Video Call 💕",
      description: "The day we became 'us'. The best decision of my life.",
      img: seven,
    },
    {
      date: "Our First Date ☕",
      title: "Aparam Face kamichaa",
      description: "I still remember how nervous and excited I was that day.",
      img: eight,
    },
    {
      date: "First Trip Together ✈️",
      title: "Seataigal ahh Start Panna",
      description:
        "Laughing, exploring, and making memories that last forever.",
      img: nine,
    },
    {
      date: "Today ❤️",
      title: "Aprom Getting comfertable",
      description: "Every single day, I would choose you all over again.",
      img:ten,
    },
     {
    date: "Today ❤️",
    title: "Una Pathu Rachika Arambichan",
    description: "Every single day, I would choose you all over again.",
    img: eleven,
  },
  {
    date: "Today ❤️",
    title: "First Outing to Yercard",
    description: "Every single day, I would choose you all over again.",
    img: twelve,
  },
  {
    date: "Today ❤️",
    title: "Still remember the Days",
    description: "Every single day, I would choose you all over again.",
    img: thirteen,
  },
  {
    date: "Today ❤️",
    title: "VR Mall la unga appa kuda vandhu irrundha",
    description: "Every single day, I would choose you all over again.",
    img: fourteen,
  },
  {
    date: "Today ❤️",
    title: "CAR",
    description: "Every single day, I would choose you all over again.",
    img: fifteen,
  },
  {
    date: "Today ❤️",
    title: "Edho oru Hotel(Restarent)",
    description: "Every single day, I would choose you all over again.",
    img: sixteen,
  },
  {
    date: "Today ❤️",
    title: "Hakeem Kalyana Biriyani",
    description: "Every single day, I would choose you all over again.",
    img: seventeen,
  },
  {
    date: "Today ❤️",
    title: "Pallavaram(Green Onion)",
    description: "Every single day, I would choose you all over again.",
    img: eighteen,
  },
  {
    date: "Today ❤️",
    title: "EA nu naikaran Ring Gift",
    description: "Every single day, I would choose you all over again.",
    img: nineteen,
  },
  {
    date: "Today ❤️",
    title: "Nungambakkam Park",
    description: "Every single day, I would choose you all over again.",
    img: twenty,
  },
  {
    date: "Today ❤️",
    title: "Melonge",
    description: "Every single day, I would choose you all over again.",
    img: twentyone,
  },
  {
    date: "Today ❤️",
    title: "T-nagar Saravana stores unga mama kud avandhu irrundha apo",
    description: "Every single day, I would choose you all over again.",
    img: twentytwo,
  },
  {
    date: "Today ❤️",
    title: "Pheonix ",
    description: "Every single day, I would choose you all over again.",
    img: twentythree,
  },
  {
    date: "Today ❤️",
    title: "EA Gokul edutha photo",
    description: "Every single day, I would choose you all over again.",
    img: twentyfour,
  },
  {
    date: "Today ❤️",
    title: "Morning Beach",
    description: "Every single day, I would choose you all over again.",
    img: twentyfive,
  },
  {
    date: "Today ❤️",
    title: "Enga porom nu thrlaa",
    description: "Every single day, I would choose you all over again.",
    img: twentysix,
  },
  {
    date: "Today ❤️",
    title: "Happy Days",
    description: "Every single day, I would choose you all over again.",
    img: twentyseven,
  },
  {
    date: "Today ❤️",
    title: "Chain Gift",
    description: "Every single day, I would choose you all over again.",
    img: twentyeight,
  },
  {
    date: "Today ❤️",
    title: "Saree ❤️ ",
    description: "Every single day, I would choose you all over again.",
    img: twentynine,
  },
  {
    date: "Today ❤️",
    title: "Dollar ❤️",
    description: "Every single day, I would choose you all over again.",
    img: thirty,
  },
  ];

  const reasons = [
    {
      title: "Your Beautiful Smile 😍",
      text: "🐦…… Na edha unkitta naaraya vaati sonnadhu ella ana ipo sollaran  nee sircha romba azhaga irrupa. nee siricha enaku romba pidikum. enaku unkitta sollanum nu thonunadhu ella ana nee sirikakulla naa enaya maarandhu una paathutu irrupann  d 🐦 enku avlo pidikum un siripu… LOVE YOU.",
    },
    {
      title: "Your Kind Heart 💕",
      text: "🐦  enaku edhalam sollanum naalea konjam koochama dha irruku…ana sollaran. naa paathadhulaya nalla ponnuna adhu nee dha d 🐦  na en edha sollaran na edhu naaraya pearuku  edhu theriyadhu ana enaku theriyum d 🐦 yaaru ena venna sollatum nee epadi irrukayo apadiya iru.. enaku theriyum d 🐦 una pathi…LOVE YOU.",
    },
    {
      title: "Your Support 🤝",
      text: "Namba rendu Pearum Made For Each Other d 🐦. Nee Enaya Endha Oru Kastamana Situation Layum Vittu Kudakavum Maatta Vittu tu Pogavum Maatta…Odanea Epo Patha nu Keakadha….Nanea Adha Over the Time Fell panna…Naanum Poga Mattan…LOVE YOU.",
    },
    {
      title: "Your Strength 💪",
      text: "🐦 Naa Edha Solliyaa Aganum Nee Avlo Strong Ana ponnu…Una Maari vera Yaarachi Irruka Mudiyum ahh nu Kuda thrlaa….Vazalkai La prechana vaaralam Prechanaya VazalKai irrundhu una mattum dha paakaran….endha last 5 years laya nee naaraya paathuta d 🐦 analum nee eno oditu dha d 🐦 irruka kandipa nee periya all ah vaaru va d 🐦…STAY STRONG",
    },
    {
      title: "Just Being You ❤️",
      text: "Yaaru ena venna sollatu nee neeya irru ena vandhalum paathukalam d 🐦 nee ena pannalum naa irrukan d 🐦 LOVE YOU",
    },
  ];

  const dreams = [
    "International Trip Before Marriage",
    "Getting Married Before Next Aniversary",
    "Late night Outing in My Bike Or Car",
    "Growing old but staying young at heart ❤️",
  ];

  const handleLogin = () => {
    if (
      password === DEFAULT_PASSWORD &&
      answer.toLowerCase() === SECRET_ANSWER
    ) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Wrong password or answer 💔 Try again");
    }
  };

  useEffect(() => {
    if (isAuthenticated && index < loveLanguages.length - 1) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }

    if (isAuthenticated && index === loveLanguages.length - 1) {
      const finalTimer = setTimeout(() => {
        setShowMemories(true);
      }, 2000);
      return () => clearTimeout(finalTimer);
    }
  }, [index, isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-100 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">
            Secreat message for you ❤️
          </h1>

          <input
            type="text"
            placeholder="Enter My Name"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="text"
            placeholder="Whats Your Name?"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
          >
            Unlock My Heart 💘
          </button>
        </div>
      </div>
    );
  }

  if (!showMemories) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white relative">
        <FloatingHearts />
        <div className="text-center">
          <h2 className="text-7xl font-bold text-pink-600">
            {loveLanguages[index].text}
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            {loveLanguages[index].lang}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 py-16  text-center relative">
      <FloatingHearts />

      <div className="relative z-10 py-12 flex justify-center">
        <div className="bg-white/90 backdrop-blur-md w-full sm:w-11/12 md:w-3/4 lg:w-2/3 p-8 sm:p-10 rounded-3xl shadow-2xl border border-pink-200 text-center">
          <h2 className="mb-10">🍼 A Secret Message for You</h2>

          {!opened ? (
            <div
              onClick={() => setOpened(true)}
              className="cursor-pointer animate-bounce hover:scale-110 transition-all duration-300"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                alt="Bottle"
                className="w-24 sm:w-32 mx-auto"
              />
              <p className="mt-3 sm:mt-4 text-gray-700">
                Click Me to read your secret note 💌
              </p>
            </div>
          ) : (
            <div className="mt-6 text-gray-700 text-lg sm:text-xl leading-relaxed space-y-4">
              <div
                className="absolute inset-0 animate-pulse opacity-20 text-6xl flex 
                   items-center"
              >
                 💕
              </div>
              <div
                className="absolute inset-0 animate-pulse opacity-20 text-6xl flex justify-end
                   items-center"
              >
                💕 
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4">
                {isAnniversaryToday
                  ? `HAPPY ${yearsTogether}ᵗʰ ANNIVERSARY ❤️`
                  : `Celebrating ${yearsTogether} Years of Togetherness ❤️`}
              </h2>

              <p className="font-semibold text-pink-600">
                Love you, today, tomorrow, and always. 💖
              </p>
            </div>
          )}
        </div>
      </div>
      {opened ? (
        <>
          <div className="bg-white relative z-10 p-5 mb-10">
            <div
              className="absolute inset-0 animate-pulse opacity-20 text-6xl flex 
                   items-center"
            >
              ❤️ 🥰 😘
            </div>
            <div
              className="absolute inset-0 animate-pulse opacity-20 text-6xl flex justify-end
                   items-center"
            >
              😘 🥰 ❤️
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-6 relative z-10">
              ❤️ Our Beautiful Memories ❤️
            </h1>

            <p className="max-w-2xl mx-auto text-lg mb-10 relative z-10">
              From strangers to soulmates… from laughs to late-night talks…
              every moment with you is my favorite chapter of life. You are my
              peace, my happiness, my forever.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto relative z-10">
           {memories.map((image, index) => (
  <img
    key={index}
    src={image}
    alt={`memory${index + 1}`}
    className="w-64 h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
  />
))}


          </div>

          <div className="py-20 bg-white relative z-10 mt-10">
            <h2 className="text-4xl font-bold text-center text-pink-600 mb-16">
              Our Journey Together ⏳
            </h2>

            <div className="relative max-w-5xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-pink-300 h-full"></div>

              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`mb-16 flex justify-between items-center w-full ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty Space */}
                  <div className="w-1/2"></div>

                  {/* Timeline Card */}
                  <div className="w-1/2 px-8">
                    <div className="bg-pink-50 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
                      {/* <p className="text-sm text-pink-500 mb-2">{item.date}</p> */}
                      <h3 className="text-xl font-semibold mb-3">
                        {item.title}
                      </h3>
                      {/* <p className="text-gray-600 mb-4">{item.description}</p> */}

                     <div className="w-64 h-64 overflow-hidden rounded-xl shadow-md">
  <img
    src={item.img}
    alt={item.title}
    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
  />
</div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 to-pink-100  ">
            <div className="bg-white max-w-2xl w-full p-12 rounded-3xl shadow-2xl text-center transition-all duration-700 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6">
                Reasons I Love You 💖
              </h2>

              <h3 className="text-2xl font-semibold mb-4">
                {reasons[currentReason].title}
              </h3>

              <p className="text-lg text-gray-600">
                {reasons[currentReason].text}
              </p>

              <div className="mt-8 text-sm text-pink-400">
                {currentReason + 1} / {reasons.length}
              </div>
            </div>
          </div>
          <div className="py-20 bg-gradient-to-r from-pink-500 to-red-400 text-white text-center relative z-10">
            <h2 className="text-4xl font-bold mb-8 ">❤️ Our Love Counter ❤️</h2>

            <p className="text-xl mb-12">We've been together for</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-2xl font-semibold">
              <div>
                {timeTogether.years}
                <div className="text-sm mt-2">Years</div>
              </div>

              <div>
                {timeTogether.months}
                <div className="text-sm mt-2">Months</div>
              </div>

              <div>
                {timeTogether.days}
                <div className="text-sm mt-2">Days</div>
              </div>

              <div>
                {timeTogether.hours}
                <div className="text-sm mt-2">Hours</div>
              </div>

              <div>
                {timeTogether.minutes}
                <div className="text-sm mt-2">Minutes</div>
              </div>

              <div>
                {timeTogether.seconds}
                <div className="text-sm mt-2">Seconds</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 py-20 px-6 flex justify-center">
            <div className="bg-white/90 backdrop-blur-md max-w-3xl p-10 rounded-3xl shadow-2xl border border-pink-200">
              <h2 className="text-4xl md:text-5xl font-bold text-pink-600 text-center mb-8">
                💌 A Letter For You
              </h2>

              {!isOpen && (
                <>
                  <input
                    type="password"
                    placeholder="Enter password to read 💖"
                    value={letterPassword}
                    onChange={(e) => setLetterPassword(e.target.value)}
                    className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-center"
                  />
                  {error && (
                    <p className="text-red-500 text-sm mb-4 text-center">
                      {error}
                    </p>
                  )}
                  <div className="flex justify-center">
                    <button
                      onClick={handleOpenLetter}
                      className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-all duration-300"
                    >
                      Unlock My Heart 💖
                    </button>
                  </div>
                </>
              )}

              {isOpen && (
                <div className="mt-6 text-gray-700 text-lg leading-relaxed space-y-4 text-center">
                  <p>
                    From the moment you came into my life, everything felt
                    different… brighter… warmer… more meaningful.
                  </p>

                  <p>
                    Loving you has been the easiest and most beautiful thing I
                    have ever done. You are my comfort, my strength, and my
                    happiness.
                  </p>

                  <p>
                    Through every laugh, every tear, every late-night talk, you
                    stayed by my side — and that means everything to me.
                  </p>

                  <p className="font-semibold text-pink-600">
                    If I had to choose again, in every lifetime, it would still
                    be you. ❤️
                  </p>

                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition-all duration-300"
                    >
                      Close Letter 💕
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-5 bg-gradient-to-br from-purple-900 via-pink-800 to-rose-600 text-white px-6 overflow-hidden">
            <h2 className="text-5xl font-bold mb-16 text-center">
              🌙 Our Future Dreams
            </h2>

            <div className="space-y-10">
              {dreams.map((dream, index) => (
                <div
                  key={index}
                  className="backdrop-blur-lg bg-white/10 border border-white/20 px-12 py-8 rounded-3xl shadow-2xl hover:scale-110 transition-all duration-500"
                >
                  <p className="text-2xl text-center">{dream}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 
                text-white text-center relative z-10 overflow-hidden my-10"
          >
            <h2 className="text-4xl font-bold mb-8 animate-pulse">
              💍 Marriage Countdown 💍
            </h2>

            <p className="text-xl mb-12">Counting down to February 19 ❤️</p>

            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 
                  max-w-4xl mx-auto text-3xl font-bold"
            >
              <div className="transform hover:scale-110 transition duration-500">
                <div className="animate-bounce">{marriageTime.days}</div>
                <div className="text-sm mt-2 font-medium">Days</div>
              </div>

              <div className="transform hover:scale-110 transition duration-500">
                <div className="animate-bounce delay-100">
                  {marriageTime.hours}
                </div>
                <div className="text-sm mt-2 font-medium">Hours</div>
              </div>

              <div className="transform hover:scale-110 transition duration-500">
                <div className="animate-bounce delay-200">
                  {marriageTime.minutes}
                </div>
                <div className="text-sm mt-2 font-medium">Minutes</div>
              </div>

              <div className="transform hover:scale-110 transition duration-500">
                <div className="animate-bounce delay-300 text-yellow-200">
                  {marriageTime.seconds}
                </div>
                <div className="text-sm mt-2 font-medium">Seconds</div>
              </div>
            </div>

            <p className="mt-12 text-lg font-semibold animate-pulse">
              Every second brings us closer to forever 💖
            </p>
          </div>

          <div
            className="relative py-24 bg-gradient-to-r from-pink-600 via-rose-500 to-red-500 
                text-white text-center overflow-hidden"
          >
            {/* Floating Soft Glow */}
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

            {/* Animated Hearts Background */}
            <div
              className="absolute inset-0 animate-pulse opacity-20 text-6xl flex 
                  justify-around items-center"
            >
              ❤️ 💕 💖 💗 💓
            </div>

            {/* Main Footer Text */}
            <div className="relative z-10">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold 
                   animate-fadeIn tracking-wide"
              >
                Forever Isn’t Long Enough With You ❤️
              </h2>

              <p className="mt-6 text-lg sm:text-xl opacity-90 animate-bounce">
                My today. My tomorrow. My always.
              </p>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
