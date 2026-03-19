import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHOTO_GONG_WOMAN =
  "https://cdn.poehali.dev/projects/be7eb5fc-8b1e-434c-8f14-80ee7e19ac4f/bucket/fba146fa-9223-4a86-8654-c2c16c4ca3d0.jpg";
const PHOTO_GONG =
  "https://cdn.poehali.dev/projects/be7eb5fc-8b1e-434c-8f14-80ee7e19ac4f/bucket/0200ec69-bfe6-447e-97e0-a4c0c4bab6fe.jpeg";

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
          className="text-gold flex-shrink-0"
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

/* ─── Schedule Card ────────────────────────────────────────────────────── */
function SessionCard({
  weekday,
  date,
  time,
  address,
  spots,
  total,
}: {
  weekday: string;
  date: string;
  time: string;
  address: string;
  spots: number;
  total: number;
}) {
  const [agreed, setAgreed] = useState(false);
  const isFull = spots === 0;

  return (
    <div className="card-dark rounded-xl p-7 flex flex-col gap-5">
      <div>
        <div className="mb-1">
          <span className="font-display text-3xl text-cream font-light">
            {weekday}, {date}
          </span>
        </div>
        <div className="flex items-center gap-2 text-cream-dim text-sm mt-2">
          <Icon name="Clock" size={13} className="text-gold" />
          {time}
        </div>
        <div className="flex items-start gap-2 text-cream-dim text-sm mt-1.5">
          <Icon name="MapPin" size={13} className="text-gold mt-0.5 flex-shrink-0" />
          <span>{address}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span
          className="text-sm font-medium"
          style={{ color: spots <= 5 ? "#e07070" : "var(--cream-muted)" }}
        >
          Осталось мест: {spots} из {total}
        </span>
        <span className="font-display text-2xl text-gold font-light">2 500 ₽</span>
      </div>

      {!isFull && (
        <label className="flex items-start gap-3 cursor-pointer">
          <div
            className="w-4 h-4 mt-0.5 flex-shrink-0 rounded-sm border flex items-center justify-center transition-colors"
            style={{
              borderColor: agreed ? "var(--gold)" : "var(--brown-border)",
              backgroundColor: agreed ? "var(--gold)" : "transparent",
            }}
            onClick={() => setAgreed(!agreed)}
          >
            {agreed && <Icon name="Check" size={10} className="text-[#120e08]" />}
          </div>
          <span className="text-cream-muted text-xs leading-relaxed font-light">
            Я даю согласие на обработку персональных данных и согласен с{" "}
            <a href="#" className="underline hover:text-gold transition-colors">
              политикой конфиденциальности
            </a>{" "}
            и{" "}
            <a href="#" className="underline hover:text-gold transition-colors">
              договором оферты
            </a>
          </span>
        </label>
      )}

      <button
        className={isFull ? "btn-outline-gold w-full py-3.5 text-sm" : "btn-gold w-full py-3.5 text-sm"}
        disabled={isFull || (!isFull && !agreed)}
        style={!isFull && !agreed ? { opacity: 0.5, cursor: "not-allowed" } : {}}
      >
        {isFull
          ? "Запись закрыта. Новая запись откроется в понедельник"
          : "Записаться"}
      </button>
    </div>
  );
}

/* ─── Main ─────────────────────────────────────────────────────────────── */
export default function Index() {
  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-brown-dark text-cream font-body">

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

        <div className="relative z-10 flex-1 flex items-center px-6 md:px-16 pb-24 pt-20">
          <div className="max-w-2xl">
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl text-cream font-light leading-[1.1] mb-6 animate-fade-up opacity-0-init"
              style={{ animationFillMode: "forwards" }}
            >
              Гонг-медитация в Москве
              <br />
              <span style={{ color: "var(--gold-light)" }}>Практика для глубокой перезагрузки</span>
            </h1>

            <p
              className="text-cream-dim text-lg leading-relaxed mb-3 max-w-lg animate-fade-up opacity-0-init delay-100 font-light"
              style={{ animationFillMode: "forwards" }}
            >
              Живой звук планетарного гонга Paiste Sun 38″
              <br />
              Глубокое расслабление через вибрацию и звук
            </p>

            <p
              className="text-cream-muted text-sm leading-relaxed mb-10 max-w-md animate-fade-up opacity-0-init delay-200 font-light"
              style={{ animationFillMode: "forwards" }}
            >
              Уже после первой практики большинство участников отмечают снижение
              напряжения и улучшение сна
            </p>

            <div
              className="animate-fade-up opacity-0-init delay-300"
              style={{ animationFillMode: "forwards" }}
            >
              <button onClick={scrollToForm} className="btn-gold text-sm px-8 py-4">
                Записаться на ближайшую практику
              </button>
            </div>

            <p
              className="mt-5 text-cream-muted text-xs animate-fade-in opacity-0-init delay-400"
              style={{ animationFillMode: "forwards" }}
            >
              Небольшие группы — до 15 человек
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 2 — СОСТОЯНИЕ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4 leading-tight">
          Если вам знакомо это состояние
        </h2>
        <div className="gold-divider mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            "Постоянное внутреннее напряжение",
            "Невозможно остановить поток мыслей",
            "Усталость даже после сна",
            "Перегрузка от работы и ответственности",
            "Раздражительность и тревожность",
          ].map((text, i) => (
            <div
              key={i}
              className="card-dark rounded-lg px-6 py-5 flex items-center gap-4"
            >
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <span className="text-cream-dim text-sm leading-relaxed font-light">
                {text}
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
            телу нужен более глубокий уровень расслабления
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 3 — КАК РАБОТАЕТ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16" style={{ backgroundColor: "#100c07" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={PHOTO_GONG}
                alt="Гонг"
                className="rounded-2xl object-cover w-full"
                style={{
                  height: 440,
                  objectPosition: "center",
                  border: "1px solid var(--brown-border)",
                }}
              />
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-6 leading-tight">
                Как работает гонг
              </h2>
              <div className="gold-divider mb-8" />
              <div className="space-y-5 text-cream-dim text-sm leading-relaxed font-light">
                <p>
                  Гонг — это не просто звук, а вибрация, которая воздействует
                  на нервную систему и тело.
                </p>
                <p>
                  Во время практики снижается уровень стресса, замедляется
                  поток мыслей, уходят зажимы в теле.
                </p>
                <p>
                  Это естественный процесс — вам не нужно ничего делать,
                  только лежать и слушать.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 4 — РЕЗУЛЬТАТ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4 leading-tight">
          Что вы почувствуете после практики
        </h2>
        <div className="gold-divider mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "Heart", title: "Глубокое расслабление" },
            { icon: "Shield", title: "Снижение тревожности" },
            { icon: "Moon", title: "Улучшение сна" },
            { icon: "RefreshCw", title: "Ощущение перезагрузки" },
            { icon: "Wind", title: "Внутренняя тишина" },
            { icon: "Sparkles", title: "Ясность в голове" },
          ].map((item, i) => (
            <div key={i} className="card-dark rounded-xl p-6 flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
              >
                <Icon name={item.icon} size={18} className="text-gold" />
              </div>
              <span className="text-cream text-sm font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 5 — КАК ПРОХОДИТ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16" style={{ backgroundColor: "#100c07" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4 leading-tight">
            Как проходит практика
          </h2>
          <div className="gold-divider mb-12" />

          <div className="space-y-5 mb-10">
            {[
              "Вы располагаетесь лёжа",
              "Закрываете глаза",
              "В течение 60 минут звучит гонг",
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-6">
                <span
                  className="font-display text-4xl font-light flex-shrink-0 w-12 text-right"
                  style={{ color: "rgba(201,168,76,0.25)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-cream-dim text-base font-light">{step}</span>
              </div>
            ))}
          </div>

          <div
            className="rounded-xl p-8 border-l-2 border-[var(--gold)]"
            style={{ backgroundColor: "rgba(201,168,76,0.05)" }}
          >
            <p className="text-cream-dim text-base leading-relaxed font-light mb-3">
              Без разговоров и действий — только звук и работа с состоянием.
            </p>
            <p className="text-cream-dim text-base leading-relaxed font-light">
              Подходит даже тем, кто никогда не медитировал.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 6 — ВЕДУЩАЯ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4 leading-tight">
          Кто проводит практику
        </h2>
        <div className="gold-divider mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <img
            src={PHOTO_GONG_WOMAN}
            alt="Анастасия Горшенёва"
            className="rounded-2xl object-cover w-full"
            style={{
              height: 500,
              objectPosition: "center top",
              border: "1px solid var(--brown-border)",
            }}
          />
          <div className="space-y-5">
            <h3 className="font-display text-3xl text-cream font-light">
              Анастасия Горшенёва
            </h3>
            <div className="space-y-4 text-cream-dim text-sm leading-relaxed font-light">
              <p>
                Я работаю со звуком как инструментом восстановления и работы
                с состоянием.
              </p>
              <p>
                У меня музыкальный бэкграунд — я ощущаю звук как среду, в
                которой происходит изменение состояния.
              </p>
              <p>
                Во время практики я внимательно держу пространство группы,
                чтобы вы могли действительно расслабиться.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 7 — ОТЗЫВЫ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16" style={{ backgroundColor: "#100c07" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4 leading-tight">
            Что говорят участники
          </h2>
          <div className="gold-divider mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: "Маша",
                text: "Пришла с диким стрессом после рабочей недели — ушла будто другой человек. Первые пять минут мозг ещё сопротивлялся, потом просто отпустило. Даже не знаю, как это описать — просто стало хорошо.",
              },
              {
                name: "Антон",
                text: "Честно скажу — шёл с недоверием. Думал, буду лежать и скучать. Но где-то на двадцатой минуте поймал состояние, которого давно не было. Спал в эту ночь как убитый.",
              },
              {
                name: "Лена",
                text: "Хожу уже третий раз. Каждый раз по-разному, но всегда выхожу с ощущением, что голова стала чище. Это мой способ перезагрузки — без телефона, без разговоров, просто звук.",
              },
            ].map((r, i) => (
              <div key={i} className="card-dark rounded-xl p-7">
                <p className="text-cream-dim text-sm leading-relaxed font-light mb-6">
                  «{r.text}»
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                    style={{
                      backgroundColor: "rgba(201,168,76,0.15)",
                      color: "var(--gold)",
                    }}
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
      <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-3 leading-tight">
          Ближайшие практики
        </h2>
        <p className="text-cream-muted text-sm font-light mb-1">
          Группы небольшие — максимум 15 мест.
        </p>
        <p className="text-cream-muted text-sm font-light mb-12">
          Набор закрывается автоматически, когда группа собрана.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <SessionCard
            weekday="Суббота"
            date="28 марта"
            time="20:00 — 21:30"
            address='Москва, студия растяжки "НУГА", ул. Амурская 1Ак5 (ЖК Level Амурская)'
            spots={7}
            total={15}
          />
          <SessionCard
            weekday="Воскресенье"
            date="29 марта"
            time="13:00 — 14:30"
            address='Москва, студия растяжки "НУГА", ул. Амурская 1Ак5 (ЖК Level Амурская)'
            spots={7}
            total={15}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 9 — ЧТО ВЗЯТЬ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16" style={{ backgroundColor: "#100c07" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4 leading-tight">
            Что взять с собой
          </h2>
          <div className="gold-divider mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "Shirt", label: "Удобную одежду" },
              { icon: "Footprints", label: "Носки" },
              { icon: "Eye", label: "Маску для сна (по желанию)" },
            ].map((item, i) => (
              <div
                key={i}
                className="card-dark rounded-xl p-6 flex items-center gap-4"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
                >
                  <Icon name={item.icon} size={18} className="text-gold" fallback="Package" />
                </div>
                <span className="text-cream-dim text-sm font-light">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 10 — FAQ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4 leading-tight">
          Вопросы
        </h2>
        <div className="gold-divider mb-10" />
        <div>
          <FaqItem
            q="Нужен ли опыт медитации?"
            a="Нет. Достаточно просто прийти и лечь."
          />
          <FaqItem
            q="Можно ли опоздать?"
            a="После начала практики вход невозможен. Приходите заранее."
          />
          <FaqItem
            q="Можно ли отменить запись?"
            a="Да. При отмене за 24 часа — полный возврат. Позже — перенос."
          />
          <FaqItem
            q="Есть ли противопоказания?"
            a="Если вы принимаете антидепрессанты или есть панические атаки — практика не рекомендована."
          />
          <FaqItem
            q="Беременность?"
            a="Можно, но важно предупредить заранее."
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 11 — ФИНАЛ
      ══════════════════════════════════════════════════════ */}
      <section
        className="py-28 px-6 md:px-16 text-center relative overflow-hidden"
        style={{ backgroundColor: "#0e0a06" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${PHOTO_GONG_WOMAN})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.07,
          }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(14,10,6,0.78)" }} />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-tight mb-4">
            Вы можете продолжать жить в напряжении
          </h2>
          <p className="font-display text-3xl md:text-4xl font-light mb-8" style={{ color: "var(--cream-dim)" }}>
            или попробовать восстановиться
          </p>
          <div className="gold-divider mx-auto mb-10" />
          <p className="text-cream-muted text-sm leading-relaxed mb-10 font-light">
            Практика длится 60 минут, но даёт состояние, которого сложно
            достичь самостоятельно.
          </p>
          <button onClick={scrollToForm} className="btn-gold text-sm px-8 py-4">
            Записаться на практику
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 12 — ФОРМА
      ══════════════════════════════════════════════════════ */}
      <section
        id="form"
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: "#100c07" }}
      >
        <div className="max-w-md mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4 leading-tight">
            Запись на практику
          </h2>
          <div className="gold-divider mb-10" />

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Имя"
              className="w-full bg-brown-mid border border-[var(--brown-border)] rounded px-4 py-3.5 text-cream placeholder-[var(--cream-muted)] font-body text-sm outline-none focus:border-[var(--gold-dim)] transition-colors"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full bg-brown-mid border border-[var(--brown-border)] rounded px-4 py-3.5 text-cream placeholder-[var(--cream-muted)] font-body text-sm outline-none focus:border-[var(--gold-dim)] transition-colors"
            />
            <button className="btn-gold w-full py-4">Записаться</button>
          </div>

          <p className="text-center text-xs text-cream-muted mt-5 font-light leading-relaxed">
            После отправки вы перейдёте в Telegram-бот для подтверждения записи
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          БЛОК 13 — ФУТЕР
      ══════════════════════════════════════════════════════ */}
      <footer
        className="py-12 px-6 md:px-16 border-t"
        style={{ borderColor: "var(--brown-border)", backgroundColor: "#0a0704" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div>
              <p className="text-cream text-sm font-semibold mb-3">
                Sound & Care by Noproblem
              </p>
              <div className="flex flex-col gap-1.5">
                <a href="#" className="text-cream-muted text-xs hover:text-gold transition-colors underline">
                  Политика конфиденциальности
                </a>
                <a href="#" className="text-cream-muted text-xs hover:text-gold transition-colors underline">
                  Оферта
                </a>
              </div>
            </div>
            <div className="text-xs text-cream-muted font-light space-y-1">
              <p>ИП Горшенёва Анастасия Юрьевна</p>
              <p>ОГРНИП 325774600458353</p>
              <p>ИНН 773774314704</p>
              <p className="mt-2">
                <a href="tel:+79654482120" className="hover:text-gold transition-colors">
                  +7 965 448-21-20
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
