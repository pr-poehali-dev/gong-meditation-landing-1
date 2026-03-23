import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHOTO_GONG_WOMAN =
  "https://cdn.poehali.dev/projects/be7eb5fc-8b1e-434c-8f14-80ee7e19ac4f/bucket/fba146fa-9223-4a86-8654-c2c16c4ca3d0.jpg";
const PHOTO_GONG =
  "https://cdn.poehali.dev/projects/be7eb5fc-8b1e-434c-8f14-80ee7e19ac4f/bucket/c9eb46a6-9031-453b-9aed-8146c4c0e2f4.jpeg";

const CONSENT_TEXT =
  "Я даю согласие на обработку персональных данных, согласен с политикой конфиденциальности и договором оферты";

const TG_BOT_URL =
  "https://api.telegram.org/bot8605419338:AAEGr95oWWYRJ7vPXYs41qbFKEuITeaVPCQ/sendMessage";
const TG_CHAT_ID = "339670772";

/* ─── Consent checkbox ────────────────────────────────────────────────── */
function ConsentCheckbox({
  agreed,
  onChange,
}: {
  agreed: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <div
        className="w-4 h-4 mt-0.5 flex-shrink-0 rounded-sm border flex items-center justify-center transition-colors"
        style={{
          borderColor: agreed ? "var(--gold)" : "var(--brown-border)",
          backgroundColor: agreed ? "var(--gold)" : "transparent",
        }}
        onClick={() => onChange(!agreed)}
      >
        {agreed && <Icon name="Check" size={10} className="text-[#120e08]" />}
      </div>
      <span className="text-cream-muted text-xs leading-relaxed font-light">
        {CONSENT_TEXT}
      </span>
    </label>
  );
}

/* ─── Application Modal ───────────────────────────────────────────────── */
function ApplicationModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const canSubmit = name.trim() && phone.trim();

  const handleSubmit = async () => {
    if (!canSubmit || sending) return;
    setSending(true);
    try {
      const text = `Новая заявка с сайта:\n\nИмя: ${name}\nТелефон: ${phone}\nTelegram: ${telegram || "—"}`;
      await fetch(TG_BOT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TG_CHAT_ID, text }),
      });
    } catch {
      // silent
    }
    setSending(false);
    setSent(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setName("");
      setPhone("");
      setTelegram("");
      setSent(false);
      setSending(false);
    }, 300);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md rounded-xl p-8"
        style={{
          backgroundColor: "var(--brown-card)",
          border: "1px solid var(--brown-border)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-cream-muted hover:text-cream transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        {sent ? (
          <div className="text-center py-6">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ backgroundColor: "rgba(201,168,76,0.15)" }}
            >
              <Icon name="Check" size={28} className="text-gold" />
            </div>
            <p className="text-cream text-sm leading-relaxed font-light">
              Благодарю за заявку, я свяжусь с Вами в течение 15 мин для
              уточнения деталей.
            </p>
            <button
              onClick={handleClose}
              className="btn-outline-gold text-sm px-6 py-3 mt-6"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <h3 className="font-display text-3xl text-cream font-light mb-6">
              Записаться на практику
            </h3>
            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md px-4 py-3 text-sm text-cream font-light outline-none placeholder:text-cream-muted"
                style={{
                  backgroundColor: "var(--brown-mid)",
                  border: "1px solid var(--brown-border)",
                }}
              />
              <input
                type="tel"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-md px-4 py-3 text-sm text-cream font-light outline-none placeholder:text-cream-muted"
                style={{
                  backgroundColor: "var(--brown-mid)",
                  border: "1px solid var(--brown-border)",
                }}
              />
              <input
                type="text"
                placeholder="@username"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                className="w-full rounded-md px-4 py-3 text-sm text-cream font-light outline-none placeholder:text-cream-muted"
                style={{
                  backgroundColor: "var(--brown-mid)",
                  border: "1px solid var(--brown-border)",
                }}
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!canSubmit || sending}
              className="btn-gold w-full py-3.5 text-sm"
              style={!canSubmit ? { opacity: 0.5, cursor: "not-allowed" } : {}}
            >
              {sending ? "Отправка..." : "Отправить"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ─── Schedule Card ────────────────────────────────────────────────────── */
function SessionCard({
  weekday,
  address,
  spots,
  total,
  onBook,
}: {
  weekday: string;
  address: string;
  spots: number;
  total: number;
  onBook: () => void;
}) {
  const [agreed, setAgreed] = useState(false);
  const isFull = spots === 0;

  return (
    <div className="card-dark rounded-xl p-7 flex flex-col gap-5">
      <div>
        <div className="mb-1">
          <span className="font-display text-3xl text-cream font-light">
            {weekday}
          </span>
        </div>
        <div className="flex items-start gap-2 text-cream-dim text-sm mt-1.5">
          <Icon name="MapPin" size={13} className="text-gold mt-0.5 flex-shrink-0" />
          <span>{address}</span>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-sm font-medium"
            style={{ color: spots <= 5 ? "#e07070" : "var(--cream-muted)" }}
          >
            Осталось мест: {spots} из {total}
          </span>
          <span className="font-display text-2xl text-gold font-light">2 500 ₽</span>
        </div>
        <p className="text-cream-muted text-xs font-light">
          Бронь места осуществляется только по 100% предоплате
        </p>
      </div>

      {!isFull && (
        <ConsentCheckbox agreed={agreed} onChange={setAgreed} />
      )}

      <button
        className={isFull ? "btn-outline-gold w-full py-3.5 text-sm" : "btn-gold w-full py-3.5 text-sm"}
        disabled={isFull || (!isFull && !agreed)}
        style={!isFull && !agreed ? { opacity: 0.5, cursor: "not-allowed" } : {}}
        onClick={() => { if (!isFull && agreed) onBook(); }}
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
  const [modalOpen, setModalOpen] = useState(false);
  const [heroAgreed, setHeroAgreed] = useState(false);
  const [gongAgreed, setGongAgreed] = useState(false);
  const [hostAgreed, setHostAgreed] = useState(false);
  const [finalAgreed, setFinalAgreed] = useState(false);

  const openModal = () => setModalOpen(true);

  return (
    <div className="min-h-screen bg-brown-dark text-cream font-body">
      <ApplicationModal open={modalOpen} onClose={() => setModalOpen(false)} />

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
              className="animate-fade-up opacity-0-init delay-300 space-y-4"
              style={{ animationFillMode: "forwards" }}
            >
              <button
                onClick={() => { if (heroAgreed) openModal(); }}
                disabled={!heroAgreed}
                className="btn-gold text-sm px-8 py-4"
                style={!heroAgreed ? { opacity: 0.5, cursor: "not-allowed" } : {}}
              >
                Записаться на ближайшую практику
              </button>
              <ConsentCheckbox agreed={heroAgreed} onChange={setHeroAgreed} />
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
          БЛОК 2 — ДЛЯ КОГО
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4 leading-tight">
          Для кого подходит практика
        </h2>
        <div className="gold-divider mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Постоянное напряжение",
            "Усталость даже после сна",
            "Раздражительность и тревожность",
            "Не получается расслабиться",
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
                  Гонг — это не просто звук, это вибрация, которая воздействует
                  на нервную систему и тело.
                </p>
                <p>
                  Во время практики снижается уровень стресса, замедляется поток
                  мыслей, уходят блоки и зажимы в теле.
                </p>
                <p>
                  При регулярных практиках улучшается эмоциональный фон,
                  улучшается качество сна, уходит постоянное напряжение.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <button
                  onClick={() => { if (gongAgreed) openModal(); }}
                  disabled={!gongAgreed}
                  className="btn-gold text-sm px-8 py-4"
                  style={!gongAgreed ? { opacity: 0.5, cursor: "not-allowed" } : {}}
                >
                  Записаться на практику
                </button>
                <ConsentCheckbox agreed={gongAgreed} onChange={setGongAgreed} />
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
          После практики Вы почувствуете
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
          БЛОК 6 — ВЕДУЩАЯ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-cream font-light mb-4 leading-tight">
          Ведущая практики Анастасия Горшенёва
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
            <div
              className="text-cream-dim text-sm leading-relaxed font-light"
              style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1.25rem" }}
            >
              <p className="mb-4">
                «Я работаю со звуком как с инструментом глубокого расслабления и
                восстановления. Я играю на планетарном гонге Paiste Sun, который
                настроен в соответствии с естественными гармоническими рядами,
                основанными на орбитальном движении солнца. Каждая практика —
                уникальная и никогда не похожа на предыдущую.
              </p>
              <p>
                Я верю: чтобы заботиться о других, нужно сначала позаботиться о
                себе. Поэтому создаю пространство, в котором вам будет безопасно
                и легко расслабиться»
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <button
                onClick={() => { if (hostAgreed) openModal(); }}
                disabled={!hostAgreed}
                className="btn-gold text-sm px-8 py-4"
                style={!hostAgreed ? { opacity: 0.5, cursor: "not-allowed" } : {}}
              >
                Записаться на практику
              </button>
              <ConsentCheckbox agreed={hostAgreed} onChange={setHostAgreed} />
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
            address='Москва, студия растяжки "НУГА", ул. Амурская 1Ак5'
            spots={7}
            total={15}
            onBook={openModal}
          />
          <SessionCard
            weekday="Воскресенье"
            address='Москва, студия растяжки "НУГА", ул. Амурская 1Ак5'
            spots={7}
            total={15}
            onBook={openModal}
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
          <div className="inline-flex flex-col items-center gap-4">
            <button
              onClick={() => { if (finalAgreed) openModal(); }}
              disabled={!finalAgreed}
              className="btn-gold text-sm px-8 py-4"
              style={!finalAgreed ? { opacity: 0.5, cursor: "not-allowed" } : {}}
            >
              Записаться на практику
            </button>
            <ConsentCheckbox agreed={finalAgreed} onChange={setFinalAgreed} />
          </div>
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
              <div className="flex flex-col gap-1.5">
                <a href="#" className="text-cream-muted text-xs hover:text-gold transition-colors underline">
                  Согласие на обработку персональных данных
                </a>
                <a href="#" className="text-cream-muted text-xs hover:text-gold transition-colors underline">
                  Политика конфиденциальности
                </a>
                <a href="#" className="text-cream-muted text-xs hover:text-gold transition-colors underline">
                  Договор оферты
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
