import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHOTO_GONG_WOMAN =
  "https://cdn.poehali.dev/projects/be7eb5fc-8b1e-434c-8f14-80ee7e19ac4f/bucket/fba146fa-9223-4a86-8654-c2c16c4ca3d0.jpg";
const PHOTO_GONG =
  "https://cdn.poehali.dev/projects/be7eb5fc-8b1e-434c-8f14-80ee7e19ac4f/bucket/0200ec69-bfe6-447e-97e0-a4c0c4bab6fe.jpeg";
const LOGO =
  "https://cdn.poehali.dev/projects/be7eb5fc-8b1e-434c-8f14-80ee7e19ac4f/bucket/8e2a69e1-0276-4fc3-b14e-d79abb24fd27.jpeg";

/* ─── Modal ────────────────────────────────────────────────────────────── */
function BookingModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-md card-dark rounded-xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-cream-muted hover:text-cream transition-colors"
          onClick={onClose}
        >
          <Icon name="X" size={20} />
        </button>
        <p className="section-label mb-4">Запись на практику</p>
        <h3 className="font-display text-3xl text-cream font-light mb-6">
          Выберите дату и оставьте контакты
        </h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full bg-brown-mid border border-[var(--brown-border)] rounded px-4 py-3 text-cream placeholder-[var(--cream-muted)] font-body text-sm outline-none focus:border-[var(--gold-dim)] transition-colors"
          />
          <input
            type="tel"
            placeholder="Телефон"
            className="w-full bg-brown-mid border border-[var(--brown-border)] rounded px-4 py-3 text-cream placeholder-[var(--cream-muted)] font-body text-sm outline-none focus:border-[var(--gold-dim)] transition-colors"
          />
          <select className="w-full bg-brown-mid border border-[var(--brown-border)] rounded px-4 py-3 text-cream font-body text-sm outline-none focus:border-[var(--gold-dim)] transition-colors">
            <option value="">Выберите дату</option>
            <option>12 апреля, сб — 11:00</option>
            <option>19 апреля, сб — 11:00</option>
          </select>
          <button className="btn-gold w-full py-4">Записаться</button>
        </div>
        <p className="text-center text-xs text-cream-muted mt-4">
          Мы свяжемся с вами в течение часа для подтверждения
        </p>
      </div>
    </div>
  );
}

/* ─── FAQ Item ─────────────────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-[var(--brown-border)] py-5 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-cream font-body text-sm font-medium leading-relaxed">
          {q}
        </span>
        <Icon
          name={open ? "Minus" : "Plus"}
          size={16}
          className="text-gold flex-shrink-0 transition-transform duration-200"
        />
      </div>
      {open && (
        <p className="mt-4 text-cream-dim text-sm leading-relaxed font-body font-light pr-6">
          {a}
        </p>
      )}
    </div>
  );
}

/* ─── Main Page ────────────────────────────────────────────────────────── */
export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  return (
    <div className="min-h-screen bg-brown-dark text-cream font-body">
      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* ── Fixed CTA desktop ── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <button
          onClick={openModal}
          className="btn-gold shadow-2xl px-8 py-4 text-sm"
          style={{ boxShadow: "0 8px 32px rgba(201,168,76,0.25)" }}
        >
          <Icon name="Calendar" size={15} />
          Записаться на практику
        </button>
      </div>

      {/* ══════════════════════════════════════════════════════
          БЛОК 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{ backgroundColor: "#0e0a06" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${PHOTO_GONG_WOMAN})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(14,10,6,0.94) 45%, rgba(14,10,6,0.25) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(14,10,6,1) 0%, transparent 40%)",
          }}
        />

        {/* ripple rings */}
        <div
          className="gong-ring"
          style={{ width: 320, height: 320, right: "18%", top: "50%", marginTop: -160, animationDelay: "0s" }}
        />
        <div
          className="gong-ring"
          style={{ width: 320, height: 320, right: "18%", top: "50%", marginTop: -160, animationDelay: "1.8s" }}
        />

        {/* nav */}
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
          <img src={LOGO} alt="Sound & Care" className="h-10 object-contain" style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }} />
          <button onClick={openModal} className="btn-outline-gold text-xs px-5 py-2.5">
            Записаться
          </button>
        </nav>

        {/* content */}
        <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 pb-24 pt-8">
          <div className="max-w-xl">
            <p
              className="section-label mb-6 animate-fade-in opacity-0-init"
              style={{ animationFillMode: "forwards" }}
            >
              Москва · Гонг-медитация
            </p>
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl text-cream font-light leading-[1.1] mb-6 animate-fade-up opacity-0-init delay-100"
              style={{ animationFillMode: "forwards" }}
            >
              Перезагрузка
              <br />
              через звук
            </h1>
            <p
              className="text-cream-dim text-base md:text-lg leading-relaxed mb-3 max-w-md animate-fade-up opacity-0-init delay-200 font-light"
              style={{ animationFillMode: "forwards" }}
            >
              Живой звук планетарного гонга Paiste Sun 38″.
              <br />
              Глубокое расслабление через вибрацию.
            </p>
            <p
              className="text-cream-muted text-sm leading-relaxed mb-10 max-w-sm animate-fade-up opacity-0-init delay-300 font-light"
              style={{ animationFillMode: "forwards" }}
            >
              Уже после первой практики большинство участников
              <br className="hidden sm:block" />
              отмечают снижение напряжения и улучшение сна
            </p>
            <div
              className="animate-fade-up opacity-0-init delay-400"
              style={{ animationFillMode: "forwards" }}
            >
              <button onClick={openModal} className="btn-gold text-sm px-7 py-4">
                <Icon name="Calendar" size={15} />
                Записаться на ближайшую практику
              </button>
            </div>
            <p
              className="mt-5 text-cream-muted text-xs flex items-center gap-2 animate-fade-in opacity-0-init delay-500"
              style={{ animationFillMode: "forwards" }}
            >
              <Icon name="Users" size={13} className="text-gold" />
              Небольшие группы — до 15 человек
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 2 — ДЛЯ КОГО
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <p className="section-label mb-4">Для кого</p>
        <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4 leading-tight">
          Если вам знакомо
          <br />
          это состояние
        </h2>
        <div className="gold-divider mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            { icon: "Zap", text: "Постоянное внутреннее напряжение" },
            { icon: "Brain", text: "Невозможно «выключить» мысли" },
            { icon: "BatteryLow", text: "Усталость даже после сна" },
            { icon: "Briefcase", text: "Перегрузка от работы и ответственности" },
            { icon: "AlertCircle", text: "Раздражительность и тревожность" },
          ].map((item, i) => (
            <div key={i} className="card-dark rounded-lg px-6 py-5 flex items-center gap-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
              >
                <Icon name={item.icon} size={16} className="text-gold" />
              </div>
              <span className="text-cream-dim text-sm leading-relaxed font-light">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl p-8 border-l-2 border-[var(--gold)]"
          style={{ backgroundColor: "rgba(201,168,76,0.05)" }}
        >
          <p className="text-cream-dim text-base leading-relaxed font-light max-w-xl">
            В этом состоянии невозможно восстановиться через обычный отдых —
            телу нужен более глубокий уровень расслабления.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 3 — КАК РАБОТАЕТ ГОНГ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 relative" style={{ backgroundColor: "#100c07" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div
                className="absolute rounded-2xl"
                style={{
                  inset: 0,
                  background: "linear-gradient(135deg, var(--gold-dim), transparent)",
                  opacity: 0.12,
                  transform: "translate(8px, 8px)",
                }}
              />
              <img
                src={PHOTO_GONG}
                alt="Гонг Paiste Sun"
                className="relative rounded-2xl object-cover w-full"
                style={{ height: 440, objectPosition: "center" }}
              />
            </div>
            <div>
              <p className="section-label mb-4">Механика</p>
              <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-6 leading-tight">
                Почему это
                <br />
                работает
              </h2>
              <div className="gold-divider mb-8" />
              <div className="space-y-5 text-cream-dim text-sm leading-relaxed font-light">
                <p>
                  Гонг — это не просто звук, а мощная вибрация, которая работает
                  с нервной системой и телом на физическом уровне.
                </p>
                <p>
                  Во время практики мозг постепенно замедляется, а тело
                  переходит из режима напряжения в режим восстановления.
                </p>
                <p>
                  Снижается уровень стресса, уходят телесные зажимы, появляется
                  ощущение внутренней тишины.
                </p>
                <p className="text-cream text-sm font-medium">
                  Это естественный процесс, который не требует усилий — достаточно
                  просто присутствовать.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 4 — РЕЗУЛЬТАТ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <p className="section-label mb-4">Результат</p>
        <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4 leading-tight">
          Что вы почувствуете
          <br />
          после практики
        </h2>
        <div className="gold-divider mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "Heart", title: "Глубокое расслабление", desc: "Тело наконец отпускает хроническое напряжение" },
            { icon: "Shield", title: "Снижение тревоги", desc: "Уровень внутреннего беспокойства ощутимо падает" },
            { icon: "Moon", title: "Улучшение сна", desc: "Засыпать становится легче, сон становится глубже" },
            { icon: "RefreshCw", title: "Перезагрузка", desc: "Ощущение, будто побывал в отпуске" },
            { icon: "Wind", title: "Внутренняя тишина", desc: "Фоновый шум мыслей стихает" },
            { icon: "Sparkles", title: "Ясность", desc: "Голова становится чище, приходит спокойная ясность" },
          ].map((item, i) => (
            <div key={i} className="card-dark rounded-xl p-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
              >
                <Icon name={item.icon} size={18} className="text-gold" />
              </div>
              <h3 className="text-cream text-sm font-semibold mb-2">{item.title}</h3>
              <p className="text-cream-muted text-xs leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 5 — КАК ПРОХОДИТ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: "#100c07" }}>
        <div className="max-w-5xl mx-auto">
          <p className="section-label mb-4">Формат</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4 leading-tight">
            Как проходит практика
          </h2>
          <div className="gold-divider mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {[
              { step: "01", title: "Приходите", desc: "Вас встретят и расскажут, как подготовиться" },
              { step: "02", title: "Ложитесь", desc: "Удобно устраиваетесь на коврике с подушкой и пледом" },
              { step: "03", title: "Слушаете", desc: "60 минут гонг обволакивает вас звуком и вибрацией" },
              { step: "04", title: "Возвращаетесь", desc: "Мягкий выход, тихое завершение в своём темпе" },
            ].map((item, i) => (
              <div key={i}>
                <div className="font-display text-5xl font-light mb-4" style={{ color: "rgba(201,168,76,0.18)" }}>
                  {item.step}
                </div>
                <h3 className="text-cream text-sm font-semibold mb-2">{item.title}</h3>
                <p className="text-cream-muted text-xs leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded-xl p-6 flex items-start gap-4"
            style={{ backgroundColor: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.12)" }}
          >
            <Icon name="Info" size={16} className="text-gold mt-0.5 flex-shrink-0" />
            <p className="text-cream-dim text-sm leading-relaxed font-light">
              Вам не нужно ничего делать и ни к чему готовиться — практика
              подходит и тем, кто никогда не медитировал.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 6 — ВЕДУЩАЯ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <p className="section-label mb-4">Ведущая</p>
        <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4 leading-tight">
          Кто проводит практику
        </h2>
        <div className="gold-divider mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <img
            src={PHOTO_GONG_WOMAN}
            alt="Ведущая практики"
            className="rounded-2xl object-cover w-full"
            style={{ height: 500, objectPosition: "center top", border: "1px solid var(--brown-border)" }}
          />
          <div className="space-y-5">
            <div>
              <h3 className="font-display text-3xl text-cream font-light mb-1">Ваш мастер</h3>
              <p className="text-gold text-sm font-medium">Sound & Care</p>
            </div>
            <p className="text-cream-dim text-sm leading-relaxed font-light">
              Практикующий мастер звуковых практик. Прошла глубокое обучение
              работе с планетарными гонгами и поющими чашами.
            </p>
            <p className="text-cream-dim text-sm leading-relaxed font-light">
              Каждая сессия проводится с полным присутствием и вниманием к
              состоянию каждого участника. Небольшие группы позволяют создать
              по-настоящему личное пространство.
            </p>
            <p className="text-cream-dim text-sm leading-relaxed font-light">
              Инструмент: планетарный гонг Paiste Sun 38″ — один из лучших
              инструментов в мире для звуковых практик.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Сертифицированный мастер", "Paiste Sun 38″", "С 2020 года"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    color: "var(--gold)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 7 — ОТЗЫВЫ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: "#100c07" }}>
        <div className="max-w-5xl mx-auto">
          <p className="section-label mb-4">Отзывы</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4 leading-tight">
            Что говорят участники
          </h2>
          <div className="gold-divider mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "Анна",
                text: "После первой практики впервые за несколько месяцев нормально выспалась. Не ожидала такого эффекта — ушла с лёгкостью в теле и голове.",
              },
              {
                name: "Михаил",
                text: "Я скептически относился к медитациям, но это совсем другое. Звук буквально обволакивает. Вышел в состоянии, которого не было давно.",
              },
              {
                name: "Елена",
                text: "Хожу уже третий месяц. Это стало моим способом восстановления после напряжённых рабочих недель. Рекомендую всем, кто в стрессе.",
              },
            ].map((r, i) => (
              <div key={i} className="card-dark rounded-xl p-7">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Icon key={j} name="Star" size={12} className="text-gold" />
                  ))}
                </div>
                <p className="text-cream-dim text-sm leading-relaxed font-light mb-6">
                  «{r.text}»
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                    style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "var(--gold)" }}
                  >
                    {r.name[0]}
                  </div>
                  <span className="text-cream text-sm font-medium">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 8 — РАСПИСАНИЕ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <p className="section-label mb-4">Расписание</p>
        <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-2 leading-tight">
          Ближайшие практики
        </h2>
        <p className="text-cream-muted text-sm mb-2 font-light">Мест немного — группы небольшие</p>
        <p className="text-xs mb-10 flex items-center gap-2" style={{ color: "var(--gold)" }}>
          <Icon name="AlertCircle" size={13} />
          Запись закрывается, как только группа набрана
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {[
            { date: "12 апреля", day: "суббота", time: "11:00 — 12:30", location: "Москва, центр", price: "2 500 ₽", spots: "Осталось 5 мест", urgent: true },
            { date: "19 апреля", day: "суббота", time: "11:00 — 12:30", location: "Москва, центр", price: "2 500 ₽", spots: "Осталось 11 мест", urgent: false },
          ].map((session, i) => (
            <div key={i} className="card-dark rounded-xl p-7 flex flex-col gap-5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-display text-3xl text-cream font-light">{session.date}</span>
                    <span className="text-cream-muted text-sm">{session.day}</span>
                  </div>
                  <div className="flex items-center gap-2 text-cream-dim text-sm">
                    <Icon name="Clock" size={13} className="text-gold" />
                    {session.time}
                  </div>
                  <div className="flex items-center gap-2 text-cream-dim text-sm mt-1.5">
                    <Icon name="MapPin" size={13} className="text-gold" />
                    {session.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl text-gold font-light">{session.price}</div>
                  <div className="text-xs mt-1 font-medium" style={{ color: session.urgent ? "#e07070" : "var(--cream-muted)" }}>
                    {session.spots}
                  </div>
                </div>
              </div>
              <button onClick={openModal} className="btn-gold w-full py-3.5 text-sm">
                Записаться
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 9 — ЧТО ВЗЯТЬ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: "#100c07" }}>
        <div className="max-w-5xl mx-auto">
          <p className="section-label mb-4">Подготовка</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4 leading-tight">
            Что взять с собой
          </h2>
          <div className="gold-divider mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "Layers", label: "Коврик для йоги" },
              { icon: "Wind", label: "Лёгкая и удобная одежда" },
              { icon: "Footprints", label: "Носки или тёплые стопы" },
              { icon: "Eye", label: "Маску для сна (по желанию)" },
            ].map((item, i) => (
              <div key={i} className="card-dark rounded-xl p-6 flex flex-col items-center text-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
                >
                  <Icon name={item.icon} size={18} className="text-gold" fallback="Package" />
                </div>
                <span className="text-cream-dim text-xs leading-relaxed font-light">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-cream-muted text-sm mt-6 font-light text-center">
            Коврики, подушки и пледы предоставляются на месте
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 10 — FAQ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-12 max-w-3xl mx-auto">
        <p className="section-label mb-4">FAQ</p>
        <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4 leading-tight">
          Частые вопросы
        </h2>
        <div className="gold-divider mb-10" />

        <div>
          {[
            { q: "Нужен ли опыт медитации?", a: "Нет. Практика не требует никакого опыта — достаточно просто лечь и расслабиться. Гонг делает всё сам." },
            { q: "Что я почувствую во время практики?", a: "Чаще всего — постепенное расслабление, ощущение тепла, лёгкость. Некоторые дремлют, другие пребывают в состоянии тихого осознавания. Каждый раз по-разному." },
            { q: "Где проходит практика?", a: "В центре Москвы. Точный адрес и схема проезда приходят в сообщении после записи." },
            { q: "Как оплатить?", a: "После записи вы получите ссылку на оплату картой или по СБП." },
            { q: "Можно ли отменить запись?", a: "Да. Полный возврат возможен при отмене за 24 часа до начала." },
            { q: "Есть ли противопоказания?", a: "Если вы принимаете антидепрессанты, у вас бывают панические атаки или вы наблюдаетесь у психиатра — практика не рекомендована." },
            { q: "Можно ли во время беременности?", a: "Беременность не является противопоказанием, но важно заранее предупредить об этом перед началом практики." },
          ].map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 11 — ФИНАЛЬНЫЙ ДОЖИМ
      ══════════════════════════════════════════════════════ */}
      <section className="py-28 px-6 md:px-12 text-center relative overflow-hidden" style={{ backgroundColor: "#0e0a06" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${PHOTO_GONG_WOMAN})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.07,
          }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(14,10,6,0.75)" }} />

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="section-label mb-6">Последний шаг</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream font-light mb-4 leading-tight">
            Вы можете продолжать
            <br />
            жить в напряжении
          </h2>
          <p className="text-cream-dim text-xl font-display font-light italic mb-3">
            или попробовать восстановиться
          </p>
          <div className="gold-divider mx-auto mb-10" />
          <p className="text-cream-muted text-sm leading-relaxed mb-10 font-light">
            Практика длится всего 60 минут, но даёт состояние,
            <br />
            которого сложно достичь самостоятельно.
          </p>
          <button
            onClick={openModal}
            className="btn-gold text-sm px-8 py-4"
            style={{ boxShadow: "0 4px 32px rgba(201,168,76,0.25)" }}
          >
            <Icon name="Calendar" size={15} />
            Записаться на практику
          </button>
          <p className="mt-5 text-cream-muted text-xs flex items-center justify-center gap-2">
            <Icon name="Users" size={13} className="text-gold" />
            Небольшие группы — до 15 человек
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 12 — ФУТЕР
      ══════════════════════════════════════════════════════ */}
      <footer
        className="py-12 px-6 md:px-12 border-t"
        style={{ borderColor: "var(--brown-border)", backgroundColor: "#0a0704" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <img src={LOGO} alt="Sound & Care" className="h-9 mb-4 object-contain" />
              <p className="text-cream-muted text-xs leading-relaxed font-light max-w-xs">
                Гонг-медитация в Москве. Живой звук Paiste Sun 38″.
                <br />
                Практика для восстановления и перезагрузки.
              </p>
            </div>
            <div className="text-right text-xs text-cream-muted font-light space-y-1">
              <p>ИП Иванова А.В.</p>
              <p>ИНН 7701234567</p>
              <p className="mt-3">
                <a href="#" className="hover:text-gold transition-colors">Политика конфиденциальности</a>
              </p>
              <p>
                <a href="#" className="hover:text-gold transition-colors">Договор оферты</a>
              </p>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t flex items-center justify-between" style={{ borderColor: "var(--brown-border)" }}>
            <p className="text-xs text-cream-muted font-light">© 2025 Sound & Care. Все права защищены.</p>
            <button onClick={openModal} className="btn-outline-gold text-xs px-5 py-2.5 hidden md:inline-flex">
              Записаться
            </button>
          </div>
        </div>
      </footer>

      {/* Mobile fixed CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4"
        style={{ background: "linear-gradient(to top, rgba(14,10,6,0.98) 60%, transparent)" }}
      >
        <button onClick={openModal} className="btn-gold w-full py-4 text-sm">
          <Icon name="Calendar" size={15} />
          Записаться на практику
        </button>
      </div>
    </div>
  );
}
