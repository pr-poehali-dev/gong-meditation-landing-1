import { useState } from "react";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/be7eb5fc-8b1e-434c-8f14-80ee7e19ac4f/files/5d8c86b2-e9bc-49dd-9b1e-9b90efe11c8b.jpg";
const ANASTASIA_IMAGE = "https://cdn.poehali.dev/projects/be7eb5fc-8b1e-434c-8f14-80ee7e19ac4f/files/b9b4d9e9-7dd4-4942-9112-ff3336d63ab1.jpg";

const sessions = [
  {
    id: 1,
    weekday: "Суббота",
    date: "28 марта",
    time: "20:00 — 21:30",
    location: "Студия растяжки «НУГА», ул. Амурская 1Ак5 (ЖК Level Амурская)",
    total: 15,
    remaining: 7,
    price: "2 500 ₽",
  },
  {
    id: 2,
    weekday: "Воскресенье",
    date: "29 марта",
    time: "13:00 — 14:30",
    location: "Студия растяжки «НУГА», ул. Амурская 1Ак5 (ЖК Level Амурская)",
    total: 15,
    remaining: 7,
    price: "2 500 ₽",
  },
];

const reviews = [
  {
    text: "Настя, спасибо тебе огромное за этот невероятный новый для меня опыт. Удивительно спокойно внутри. Тихо и умиротворённо. Видимо сейчас мне было нужно именно это. Звук у твоего гонга просто волшебный. Обязательно повторю с тобой эту практику.",
    author: "Участница практики",
  },
  {
    text: "Настя, привет! Спал как младенец после гонг-медитации. Обычно если столько часов сна, то голова болит, а сегодня прям чудно всё.",
    author: "Участник практики",
  },
  {
    text: "Я благодарю тебя за твою энергию, которую ты вкладываешь в каждую практику, за внимательность, чуткость к каждому участнику. Энергетика, организованность и комфорт — когда ты приходишь на практику, быстро расслабляешься. Мне в кайф — знаю, то что делаешь ты, будет на наивысшем уровне.",
    author: "Постоянная участница",
  },
];

const faqs = [
  {
    q: "Нужен ли опыт медитации?",
    a: "Нет. Приходи как есть — всё, что нужно делать, это лечь и слушать.",
  },
  {
    q: "Что если я опоздаю?",
    a: "После начала практики войти нельзя — это нарушает пространство для других. Пожалуйста, приходи за 10–15 минут до начала. Заранее построй маршрут с учётом пробок, поиска парковки, заказа такси.",
  },
  {
    q: "Есть ли возврат?",
    a: "Да, если ты отменила за 24 часа до начала — полный возврат. Позже — возможно перенести на другую дату.",
  },
];

export default function Index() {
  const [agreed, setAgreed] = useState<{ [key: number]: boolean }>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToSchedule = () => {
    document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#120E08", color: "#F0E6D0" }}>

      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#0D0905" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            filter: "brightness(0.22) saturate(0.8)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(30,18,5,0.4) 0%, rgba(10,7,2,0.85) 100%)",
          }}
        />

        {/* Ripple rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 pointer-events-none">
          <div className="gong-ring w-full h-full" style={{ animationDelay: "0s" }} />
          <div className="gong-ring w-full h-full" style={{ animationDelay: "2s" }} />
          <div className="gong-ring w-full h-full" style={{ animationDelay: "4s" }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p
            className="font-montserrat text-xs tracking-[0.35em] uppercase mb-8 animate-fade-in delay-200"
            style={{ color: "var(--gold)", opacity: 0 }}
          >
            Sound & Care
          </p>
          <h1
            className="section-title text-6xl md:text-8xl mb-6 animate-fade-up delay-400"
            style={{ opacity: 0 }}
          >
            Гонг-медитация<br />
            <em style={{ color: "var(--gold-light)" }}>в Москве</em>
          </h1>
          <p
            className="font-montserrat font-light text-sm md:text-base leading-relaxed mb-12 animate-fade-up delay-600"
            style={{ color: "var(--cream-dim)", opacity: 0, letterSpacing: "0.03em" }}
          >
            Глубокое расслабление. Перезагрузка нервной системы.<br />
            Живой звук Paiste Sun 38˝
          </p>
          <div className="animate-fade-up" style={{ opacity: 0, animationDelay: "1s" }}>
            <button
              onClick={scrollToSchedule}
              className="btn-gold px-10 py-4 rounded-sm"
            >
              → Записаться на ближайшую практику
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in delay-600" style={{ opacity: 0 }}>
          <div className="w-px h-16 mx-auto" style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
        </div>
      </section>

      {/* ЧТО ПРОИСХОДИТ */}
      <section className="py-28 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-montserrat text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold-dim)" }}>
            Практика
          </p>
          <h2 className="section-title text-5xl md:text-6xl mb-6">
            Что происходит<br />
            <em style={{ color: "var(--gold-light)" }}>на практике</em>
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="max-w-2xl mx-auto text-center mb-16 space-y-5">
          <p className="font-cormorant text-xl md:text-2xl leading-relaxed" style={{ color: "var(--cream-dim)", fontStyle: "italic", fontWeight: 300 }}>
            Ты приходишь, ложишься на коврик, закрываешь глаза. Живой звук и вибрация гонга Paiste начинает работу — без усилий с твоей стороны.
          </p>
          <p className="font-cormorant text-xl md:text-2xl leading-relaxed" style={{ color: "var(--cream-dim)", fontStyle: "italic", fontWeight: 300 }}>
            60 минут звукового путешествия. Тело расслабляется, голова замолкает, нервная система перезагружается и восстанавливается. Это терапия звуком, которая позволяет психике и телу бороться со стрессом.
          </p>
          <p className="font-cormorant text-xl md:text-2xl leading-relaxed" style={{ color: "var(--cream-dim)", fontStyle: "italic", fontWeight: 300 }}>
            После — нетворкинг: знакомства за чаем, обмен впечатлениями.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { emoji: "🎵", title: "Мощная вибрация", desc: "Планетарный гонг Paiste Sun — живой инструмент с уникальным звуком" },
            { emoji: "🛏", title: "Лёжа, в полном расслаблении", desc: "Ничего делать не нужно. Просто позвольте себе быть" },
            { emoji: "🤝", title: "Небольшая группа", desc: "Максимум 15 человек — камерная и безопасная атмосфера" },
          ].map((item) => (
            <div key={item.title} className="card-dark p-8 rounded-sm text-center">
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="font-cormorant text-xl mb-3" style={{ color: "var(--gold-light)", fontWeight: 500 }}>
                {item.title}
              </h3>
              <p className="font-montserrat text-xs leading-relaxed" style={{ color: "var(--cream-dim)", fontWeight: 300, letterSpacing: "0.02em" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ВЕДУЩАЯ */}
      <section className="py-28 px-6" style={{ backgroundColor: "rgba(26,18,8,0.6)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-sm"
                style={{ background: "linear-gradient(135deg, var(--gold-dim), transparent)", opacity: 0.3 }}
              />
              <img
                src={ANASTASIA_IMAGE}
                alt="Анастасия Горшенёва"
                className="relative w-full aspect-[4/5] object-cover rounded-sm"
                style={{ filter: "sepia(0.2) brightness(0.9)" }}
              />
              <div
                className="absolute -bottom-4 -right-4 px-6 py-3"
                style={{ backgroundColor: "var(--brown-card)", border: "1px solid rgba(201,168,76,0.3)" }}
              >
                <p className="font-cormorant text-lg" style={{ color: "var(--gold-light)" }}>
                  Анастасия Горшенёва
                </p>
                <p className="font-montserrat text-xs" style={{ color: "var(--cream-dim)", letterSpacing: "0.05em" }}>
                  Мастер звуковых практик
                </p>
              </div>
            </div>

            <div>
              <p className="font-montserrat text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold-dim)" }}>
                Ведущая
              </p>
              <h2 className="section-title text-4xl md:text-5xl mb-8">
                Меня зовут<br />
                <em style={{ color: "var(--gold-light)" }}>Анастасия</em>
              </h2>
              <div className="gold-divider mb-8" />
              <div className="space-y-5">
                {[
                  { text: "Я работаю со звуком как инструментом глубокого расслабления и восстановления.", italic: false },
                  { text: "Я играю на планетарном гонге Paiste Sun, который настроен в соответствии с естественными гармоническими рядами, основанными на орбитальном движении солнца.", italic: false },
                  { text: "Каждая практика — уникальная, и никогда не похожа на предыдущую.", italic: false },
                  { text: "Я верю: чтобы заботиться о других, нужно сначала позаботиться о себе.", italic: true },
                ].map((item, i) => (
                  <p
                    key={i}
                    className="font-cormorant text-lg leading-relaxed"
                    style={{ color: "var(--cream-dim)", fontWeight: 300, fontStyle: item.italic ? "italic" : "normal" }}
                  >
                    {item.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section className="py-28 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-montserrat text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold-dim)" }}>
            Отклики
          </p>
          <h2 className="section-title text-5xl md:text-6xl mb-6">
            Вот что говорят те,<br />
            <em style={{ color: "var(--gold-light)" }}>кто уже был</em>
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="card-dark p-8 rounded-sm">
              <div className="font-cormorant text-6xl leading-none mb-4" style={{ color: "var(--gold-dim)", opacity: 0.4 }}>
                "
              </div>
              <p className="font-cormorant text-lg leading-relaxed mb-6" style={{ color: "var(--cream-dim)", fontStyle: "italic", fontWeight: 300 }}>
                {review.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="gold-divider" style={{ width: "20px" }} />
                <p className="font-montserrat text-xs" style={{ color: "var(--gold)", letterSpacing: "0.05em" }}>
                  {review.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* РАСПИСАНИЕ */}
      <section id="schedule" className="py-28 px-6" style={{ backgroundColor: "rgba(26,18,8,0.5)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <p className="font-montserrat text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold-dim)" }}>
              Запись
            </p>
            <h2 className="section-title text-5xl md:text-6xl mb-4">
              Ближайшие<br />
              <em style={{ color: "var(--gold-light)" }}>практики</em>
            </h2>
            <div className="gold-divider mx-auto mb-6" />
            <p className="font-montserrat text-xs" style={{ color: "var(--cream-dim)", letterSpacing: "0.02em" }}>
              Группы небольшие — максимум 15 мест. Набор закрывается автоматически, когда группа собрана.
            </p>
          </div>

          <div className="space-y-6 mt-12">
            {sessions.map((session) => {
              const isFull = session.remaining === 0;
              return (
                <div key={session.id} className="card-dark rounded-sm p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div>
                      <p className="font-cormorant text-3xl mb-1" style={{ color: "var(--gold-light)", fontWeight: 400 }}>
                        {session.weekday}, {session.date}
                      </p>
                      <div className="space-y-3 mt-4">
                        <div className="flex items-center gap-3">
                          <span className="text-base">🕖</span>
                          <span className="font-montserrat text-sm" style={{ color: "var(--cream-dim)", letterSpacing: "0.02em" }}>
                            {session.time}
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-base mt-0.5">📍</span>
                          <span className="font-montserrat text-xs leading-relaxed" style={{ color: "var(--cream-dim)", letterSpacing: "0.02em" }}>
                            Москва, {session.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-base">👥</span>
                          <span className="font-montserrat text-sm" style={{ color: isFull ? "#777" : "var(--gold)", letterSpacing: "0.02em" }}>
                            {isFull ? "Мест нет" : `Осталось мест: ${session.remaining} из ${session.total}`}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="font-cormorant text-4xl mb-6" style={{ color: "var(--cream)", fontWeight: 300 }}>
                        {session.price}
                      </p>

                      {isFull ? (
                        <button className="btn-outline-gold w-full py-4 rounded-sm text-center">
                          Запись закрыта. Следующая неделя — в понедельник →
                        </button>
                      ) : (
                        <>
                          <label className="flex items-start gap-3 mb-5 cursor-pointer">
                            <input
                              type="checkbox"
                              className="mt-0.5 shrink-0"
                              style={{ accentColor: "var(--gold)" }}
                              checked={agreed[session.id] || false}
                              onChange={(e) => setAgreed((prev) => ({ ...prev, [session.id]: e.target.checked }))}
                            />
                            <span className="font-montserrat text-xs leading-relaxed" style={{ color: "var(--cream-dim)", letterSpacing: "0.01em" }}>
                              Я даю согласие на обработку персональных данных и согласен с{" "}
                              <a href="#" style={{ color: "var(--gold)", textDecoration: "underline" }}>политикой конфиденциальности</a>
                              {" "}и{" "}
                              <a href="#" style={{ color: "var(--gold)", textDecoration: "underline" }}>договором оферты</a>
                            </span>
                          </label>
                          <button
                            disabled={!agreed[session.id]}
                            className="btn-gold w-full py-4 rounded-sm"
                          >
                            Записаться →
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="font-montserrat text-xs text-center mt-8" style={{ color: "var(--cream-dim)", letterSpacing: "0.02em" }}>
            После оплаты вы сразу получите сообщение с деталями и напоминание за день до практики.
          </p>
        </div>
      </section>

      {/* ЧТО ВЗЯТЬ */}
      <section className="py-28 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-montserrat text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold-dim)" }}>
            Подготовка
          </p>
          <h2 className="section-title text-5xl md:text-6xl mb-6">
            Что нужно<br />
            <em style={{ color: "var(--gold-light)" }}>взять с собой</em>
          </h2>
          <div className="gold-divider mx-auto" />
        </div>

        <div className="space-y-4">
          {[
            { emoji: "👕", text: "Удобную одежду — вы будете лежать на коврике" },
            { emoji: "🧦", text: "Носки — в зале может быть прохладно" },
            { emoji: "😴", text: "Маску для сна — по желанию" },
          ].map((item, i) => (
            <div key={i} className="card-dark flex items-center gap-6 px-8 py-6 rounded-sm">
              <span className="text-3xl">{item.emoji}</span>
              <p className="font-cormorant text-xl" style={{ color: "var(--cream-dim)", fontWeight: 300 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-6" style={{ backgroundColor: "rgba(26,18,8,0.5)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-montserrat text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold-dim)" }}>
              FAQ
            </p>
            <h2 className="section-title text-5xl md:text-6xl mb-6">
              Вопросы<br />
              <em style={{ color: "var(--gold-light)" }}>и ответы</em>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="card-dark rounded-sm overflow-hidden"
                style={{
                  borderColor: openFaq === i ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.1)",
                  transition: "border-color 0.3s ease",
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-8 py-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-cormorant text-xl" style={{ color: "var(--cream)", fontWeight: 400 }}>
                    {faq.q}
                  </span>
                  <span style={{ color: "var(--gold)", fontSize: "1.4rem", marginLeft: "1rem", lineHeight: 1 }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-6">
                    <p className="font-montserrat text-sm leading-relaxed" style={{ color: "var(--cream-dim)", fontWeight: 300, letterSpacing: "0.02em" }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФУТЕР */}
      <footer className="py-16 px-6" style={{ backgroundColor: "#0A0704", borderTop: "1px solid rgba(201,168,76,0.12)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-3xl mb-1" style={{ color: "var(--gold-light)", fontWeight: 300 }}>
              Sound & Care
            </p>
            <p className="font-montserrat text-xs tracking-[0.2em] uppercase" style={{ color: "var(--gold-dim)" }}>
              by Noproblem
            </p>
          </div>

          <div className="gold-divider mx-auto mb-12" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div className="space-y-2">
              <p className="font-montserrat text-xs" style={{ color: "var(--cream-dim)", letterSpacing: "0.02em" }}>ИП Горшенёва Анастасия Юрьевна</p>
              <p className="font-montserrat text-xs" style={{ color: "var(--cream-dim)", letterSpacing: "0.02em" }}>ОГРНИП 325774600458353</p>
              <p className="font-montserrat text-xs" style={{ color: "var(--cream-dim)", letterSpacing: "0.02em" }}>ИНН 773774314704</p>
              <p className="font-montserrat text-xs" style={{ color: "var(--cream-dim)", letterSpacing: "0.02em" }}>+7 (965) 448-21-20</p>
            </div>

            <div className="flex flex-col gap-3">
              <a href="#" className="font-montserrat text-xs tracking-widest uppercase" style={{ color: "var(--gold-dim)", textDecoration: "underline", letterSpacing: "0.1em" }}>
                Политика конфиденциальности
              </a>
              <a href="#" className="font-montserrat text-xs tracking-widest uppercase" style={{ color: "var(--gold-dim)", textDecoration: "underline", letterSpacing: "0.1em" }}>
                Договор оферты
              </a>
            </div>
          </div>

          <p className="font-montserrat text-xs text-center" style={{ color: "rgba(201,168,76,0.25)", letterSpacing: "0.05em" }}>
            © 2026 Sound & Care. Все права защищены.
          </p>
        </div>
      </footer>

    </div>
  );
}
