import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources:{
    en: {
        translation: {
            title: 'Essential Islamic Books',
            heroLabel: "Learn Islamic foundations with simple guide books.",
            getStarted: "Get Started",
            books: "My Books",
            booksCapital: "MY BOOKS",
            about: "About Me",
            contact: "Contact Me",
            CTA1: "Interested in any of these books?",
            CTA2: "Send an enquiry through the contact form.",
            enquire: "enquire",
            who: "Who am I?",
            contact1: "Contact Me",
            contact2: "Got a Question? Need more details? Want to make an order? Let us know.",
            name: "Your name",
            email: "Email",
            subject: "Subject",
            subjectDesc: "Let us know how we can help you",
            message: "Message",
            messageDesc: "Leave a comment...",
            sendMessage: "Send Message",
        }
    },
    tr: {
        translation: {
            title: 'Temel İslami Kitaplar',
            heroLabel: "Basit kitaplarla İslami temelleri öğrenin.",
            getStarted: "Başla",
            books: "Kitaplarim",
            booksCapital: "KITAPLARIM",
            about: "Benim Hakkımda",
            contact: "Bana Ulaşın",
            CTA1: "Bu kitaplardan herhangi biriyle ilgileniyor musunuz?",
            CTA2: "İletişim formu aracılığıyla bir soruşturma gönderin.",
            enquire: "e-posta gönder",
            who: "Ben kimim?",
            contact1: "Bana Ulaşın",
            contact2: "Bir sorunuz var mı? Daha fazla ayrıntıya mı ihtiyacınız var? Sipariş vermek ister misiniz? Yardımcınız olalım.",
            name: "İsminiz",
            email: "E-posta",
            subject: "Konu",
            subjectDesc: "Size nasıl yardımcı olabileceğimizi bize bildirin",
            message: "Mesaj",
            messageDesc: "Yorum bırakın...",
            sendMessage: "Mesaj Gönderin",
        }
    },
}
});

export default i18n;