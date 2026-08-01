import Reveal from "@/components/shared/Reveal";
import SectionLabel from "@/components/shared/SectionLabel";
import PageHero from "@/components/shared/PageHero";

export default function Privacy() {
  return (
    <>
      <PageHero
        label="Pravna obavještenja"
        title="Politika privatnosti"
        subtitle="Vaše povjerenje nam je važno. Ovdje objašnjavamo kako postupamo sa podacima koje nam dostavite."
      />
      <section className="bg-lemon-dark py-20 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <div className="space-y-10 text-lemon-gray-light text-base leading-relaxed">
              <div>
                <h2 className="text-white text-2xl font-heading font-black tracking-tight">1. Obrada podataka</h2>
                <p className="mt-4">
                  Lemon Logistics prikuplja i obrađuje lične podatke koje nam dostavite putem kontakt forme, telefonski ili email-om, isključivo u svrhu odgovora na vaš upit i organizacije logističkih usluga.
                </p>
              </div>
              <div>
                <h2 className="text-white text-2xl font-heading font-black tracking-tight">2. Koje podatke prikupljamo</h2>
                <p className="mt-4">
                  Prikupljamo ime i prezime, naziv kompanije, telefonski broj, email adresu i podatke o usluzi koja vas zanima (polazište, odredište, poruka).
                </p>
              </div>
              <div>
                <h2 className="text-white text-2xl font-heading font-black tracking-tight">3. Svrha obrade</h2>
                <p className="mt-4">
                  Podatke koristimo isključivo za komunikaciju sa vama, pripremu ponude i realizaciju dogovorenih usluga. Ne dijelimo vaše podatke sa trećim licima bez vaše saglasnosti, osim u slučajevima predviđenim zakonom.
                </p>
              </div>
              <div>
                <h2 className="text-white text-2xl font-heading font-black tracking-tight">4. Čuvanje podataka</h2>
                <p className="mt-4">
                  Podatke čuvamo onoliko dugo koliko je potrebno za ostvarivanje svrhe obrade, ili u skladu sa zakonskim obavezama.
                </p>
              </div>
              <div>
                <h2 className="text-white text-2xl font-heading font-black tracking-tight">5. Vaša prava</h2>
                <p className="mt-4">
                  Imate pravo na pristup svojim podacima, ispravku, brisanje i prigovor na obradu. Za ostvarivanje ovih prava kontaktirajte nas na info@lemonlogistic.com.
                </p>
              </div>
              <div>
                <h2 className="text-white text-2xl font-heading font-black tracking-tight">6. Kontakt</h2>
                <p className="mt-4">
                  Za sva pitanja u vezi sa obradom podataka možete nas kontaktirati na email: info@lemonlogistic.com ili telefon: 020/66-22-66.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}