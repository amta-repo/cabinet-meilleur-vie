import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";
import headerBg from "@/assets/header-contact.jpg";

const DOMAIN = "https://cabinetmeilleurvie.com";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Bonjour, je m'appelle ${form.name}. Service souhaité: ${form.service}. ${form.message}`);
    window.open(`https://wa.me/22994390295?text=${msg}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Contact | Cabinet Meilleure Vie Abomey-Calavi, Benin - Prendre Rendez-vous</title>
        <meta name="description" content="Contactez Cabinet Meilleure Vie à Abomey-Calavi pour prendre rendez-vous. Téléphone, WhatsApp ou formulaire. Psychologue et éducation au Bénin." />
        <link rel="canonical" href={`${DOMAIN}/contact`} />
      </Helmet>

      <Navbar />
      <main>
        <PageHeader
          badge="Contact"
          title="Prenez rendez-vous"
          subtitle="Contactez Cabinet Meilleure Vie à Abomey-Calavi pour une consultation confidentielle et bienveillante."
          bgImage={headerBg}
        />

        <section className="section-padding relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-violet-50/30">
  <div className="container mx-auto relative z-10">

    <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="text-xs font-semibold tracking-widest uppercase text-accent">
        Contact
      </span>
      <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
        Nos coordonnées
      </h2>
      <p className="mt-3 text-muted-foreground">
        Plusieurs moyens simples pour nous joindre rapidement
      </p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          icon: Phone,
          title: "Téléphone",
          value: "+229 01 94 39 02 95 / +229 01 67 61 80 21",
          href: "tel:+2290194390295",
          desc: "Appelez-nous directement",
        },
        {
          icon: MessageCircle,
          title: "WhatsApp",
          value: "+229 94 39 02 95",
          href: "https://wa.me/22994390295",
          desc: "Réponse rapide garantie",
        },
        {
          icon: Mail,
          title: "Email",
          value: "contact.cmv.benin@gmail.com",
          href: "mailto:contact.cmv.benin@gmail.com",
          desc: "Envoyez-nous un email",
        },
        {
          icon: Clock,
          title: "Horaires",
          value: "Lun - Sam : 8h - 21h, Dim: 9h - 13h sur rendez-vous",
          href: null,
          desc: "Disponibles 7j/7",
        },
      ].map((c, i) => {
        const bgVariants = [
          "from-blue-500/10 to-blue-600/5 text-blue-700",
          "from-emerald-500/10 to-emerald-600/5 text-emerald-700",
          "from-amber-500/10 to-amber-600/5 text-amber-700",
          "from-rose-500/10 to-rose-600/5 text-rose-700",
        ];

        const bg = bgVariants[i % bgVariants.length];

        return (
          <div
            key={c.title}
            className="group relative rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-md p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* SAME hover glow */}
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${bg}`} />

            <div className="relative z-10">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <c.icon className="h-6 w-6" />
              </div>

              <h3 className="text-base font-semibold text-foreground">
                {c.title}
              </h3>

              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block mt-2 text-sm font-medium text-accent hover:underline"
                >
                  {c.value}
                </a>
              ) : (
                <p className="mt-2 text-sm font-medium text-foreground">
                  {c.value}
                </p>
              )}

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {c.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

        <section className="section-padding">
          <div className="container mx-auto grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Prendre rendez-vous</h2>
              <p className="text-muted-foreground mb-6">Remplissez le formulaire et nous vous répondons sous 24h.</p>

              <form onSubmit={handleSubmit} className="space-y-5 rounded-xl bg-card p-6 sm:p-8" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Nom complet *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Votre nom complet" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="votre@email.com" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Téléphone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="+229 ..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Service souhaité</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                      <option value="">Sélectionnez un service</option>
                      <option value="Services Psychologique">Consultation Psychologique</option>
                      <option value="Consultation Psychiatrique">Consultation Psychiatrique</option>
                      <option value="Consultation Pedopsychiatrique">Consultation Pédopsychiatrique</option>
                      <option value="Passe un test">Passe un test</option>
                      <option value="Faire une Formation">Faire une Formation</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Votre message *</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Décrivez brièvement votre besoin ou votre situation..." />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]">
                  <Send className="h-4 w-4" />
                  Envoyer via WhatsApp
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Notre emplacement</h2>
                <p className="text-muted-foreground mb-6">Rendez-nous visite à notre cabinet de Abomey-Calavi.</p>
              </div>

              <div className="rounded-xl bg-card p-5" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Cabinet Meilleure Vie</h3>
                    <p className="text-sm text-muted-foreground mt-1">Atrokpocodji, 4ème rue après le séminaire Jean-Eude, première rue à droite et deuxième maison, Abomey-Calavi, Bénin</p>
                    <p className="text-sm text-muted-foreground mt-1">Tél : <a href="tel:+22967618021" className="text-accent hover:underline">+229 67 618 021</a></p>
                    <p className="text-sm text-muted-foreground">Tél 2 : <a href="tel:+2290194390295" className="text-accent hover:underline">+229 01 94 39 02 95</a></p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl" style={{ boxShadow: "var(--card-shadow)" }}>
                <iframe
                  title="Localisation Cabinet Meilleure Vie Abomey-Calavi Bénin"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5!2d2.3170377!3d6.3893166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a900069c7c45%3A0x4a8ee7e8d7c75af3!2sCABINET%20MEILLEURE%20VIE!5e0!3m2!1sfr!2sbj!4v1700000000000"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href="https://wa.me/22994390295?text=Bonjour%2C%20je%20viens%20de%20visiter%20votre%20site%20et%20je%20souhaite%20prendre%20rendez-vous."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl p-5 transition-colors hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="h-8 w-8 text-primary-foreground shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">Préférez WhatsApp ?</p>
                  <p className="text-xs text-primary-foreground/80">Cliquez ici pour nous écrire directement. Réponse sous 1h.</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ContactPage;
