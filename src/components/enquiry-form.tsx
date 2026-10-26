import { useState } from "react";
import { nights, venue } from "@/lib/site";

const categories = [
  "Wedding",
  "Birthday / occasion",
  "Engagement",
  "Christening",
  "Baby shower",
  "Gender reveal",
  "Wake / celebration of life",
  "Party night",
  "Corporate / conference",
  "Other",
];

type Props = {
  id?: string;
  heading?: string;
  intro?: string;
  event?: string;
  packages?: string[];
  showPartyNights?: boolean;
  dark?: boolean;
};

type Fields = {
  first: string;
  last: string;
  email: string;
  phone: string;
  event: string;
  packageType: string;
  partyNight: string;
  date: string;
  guests: string;
  message: string;
};

const empty = (event = ""): Fields => ({
  first: "",
  last: "",
  email: "",
  phone: "",
  event,
  packageType: "",
  partyNight: "",
  date: "",
  guests: "",
  message: "",
});

export function EnquiryForm({
  id = "enquire",
  heading = "General enquiry",
  intro = "Tell us the date, the numbers and the feeling you want. We reply by email or WhatsApp. A booking is not confirmed until we write back.",
  event = "",
  packages = [],
  showPartyNights = false,
}: Props) {
  const [fields, setFields] = useState<Fields>(() => empty(event));
  const [ready, setReady] = useState<string | null>(null);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function compose(values: Fields) {
    const lines = [
      "Enquiry for Ohana's",
      `${values.first} ${values.last}`.trim(),
      values.email,
      values.phone,
    ];
    if (values.event) lines.push(`Event: ${values.event}`);
    if (values.packageType) lines.push(`Package: ${values.packageType}`);
    if (values.partyNight) lines.push(`Party night: ${values.partyNight}`);
    if (values.date) lines.push(`Ideal date: ${values.date}`);
    if (values.guests) lines.push(`Guests: ${values.guests}`);
    lines.push("");
    lines.push(values.message);
    return lines.join("\n");
  }

  function onSubmit(eventObject: React.FormEvent) {
    eventObject.preventDefault();
    const text = compose(fields);
    const saved = { ...fields, text, at: new Date().toISOString() };
    try {
      const previous = JSON.parse(localStorage.getItem("ohanas-enquiries") || "[]") as unknown[];
      previous.unshift(saved);
      localStorage.setItem("ohanas-enquiries", JSON.stringify(previous.slice(0, 20)));
    } catch {
      /* private mode */
    }
    setReady(text);
  }

  const mail = ready
    ? `mailto:${venue.email}?subject=${encodeURIComponent(`Enquiry from ${fields.first} ${fields.last}`.trim())}&body=${encodeURIComponent(ready)}`
    : venue.email;
  const whats = ready
    ? `${venue.whatsapp}?text=${encodeURIComponent(ready)}`
    : venue.whatsapp;

  return (
    <section id={id} className="scroll-mt-28 bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-sm tracking-widest text-gold uppercase">Enquire</p>
          <h2 className="mt-2 text-4xl">{heading}</h2>
          <p className="mt-4 text-muted">{intro}</p>
          <p className="mt-6 text-sm">
            Prefer to talk? WhatsApp or call{" "}
            <a className="underline" href={`tel:${venue.phoneTel}`}>
              {venue.phoneDisplay}
            </a>{" "}
            or email{" "}
            <a className="underline" href={`mailto:${venue.email}`}>
              {venue.email}
            </a>
            .
          </p>
        </div>
        {ready ? (
          <div className="border border-line bg-ivory p-6 lg:col-span-3">
            <h3 className="text-3xl">Your enquiry is ready to send</h3>
            <p className="mt-3 text-muted">
              We do not send this from the website automatically. Open WhatsApp or email and it will
              be filled in for you. A date is held only once we confirm by email.
            </p>
            <pre className="mt-4 max-h-64 overflow-auto whitespace-pre-wrap bg-paper p-4 text-sm">
              {ready}
            </pre>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="bg-ink px-5 py-3 text-sm text-ivory hover:bg-gold" href={whats}>
                Send on WhatsApp
              </a>
              <a className="border border-ink px-5 py-3 text-sm hover:bg-ink hover:text-ivory" href={mail}>
                Send by email
              </a>
              <button
                type="button"
                className="px-5 py-3 text-sm underline"
                onClick={() => setReady(null)}
              >
                Edit details
              </button>
            </div>
          </div>
        ) : (
          <form className="grid gap-4 sm:grid-cols-2 lg:col-span-3" onSubmit={onSubmit}>
            <Field label="First name" value={fields.first} onChange={(value) => update("first", value)} required />
            <Field label="Last name" value={fields.last} onChange={(value) => update("last", value)} required />
            <Field
              label="Email"
              type="email"
              value={fields.email}
              onChange={(value) => update("email", value)}
              required
            />
            <Field
              label="Phone number"
              type="tel"
              value={fields.phone}
              onChange={(value) => update("phone", value)}
              required
            />
            <Select
              label="Type of event"
              value={fields.event}
              onChange={(value) => update("event", value)}
              options={categories}
            />
            {packages.length > 0 ? (
              <Select
                label="Package type"
                value={fields.packageType}
                onChange={(value) => update("packageType", value)}
                options={packages}
              />
            ) : (
              <Field
                label="Package type"
                value={fields.packageType}
                onChange={(value) => update("packageType", value)}
              />
            )}
            {showPartyNights ? (
              <Select
                label="Choose your party night"
                value={fields.partyNight}
                onChange={(value) => update("partyNight", value)}
                options={nights.map((night) => night.option)}
              />
            ) : null}
            <Field label="Ideal date" type="date" value={fields.date} onChange={(value) => update("date", value)} />
            <Field label="How many guests" value={fields.guests} onChange={(value) => update("guests", value)} />
            <label className="block text-sm sm:col-span-2">
              Your requirements
              <textarea
                className="mt-1 min-h-32 w-full border border-line bg-ivory px-3 py-3"
                value={fields.message}
                onChange={(input) => update("message", input.target.value)}
                required
              />
            </label>
            <div className="sm:col-span-2">
              <button type="submit" className="min-h-11 bg-ink px-6 py-3 text-sm tracking-wide text-ivory hover:bg-gold">
                Prepare enquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      {label}
      <input
        className="mt-1 min-h-11 w-full border border-line bg-ivory px-3"
        type={type}
        value={value}
        required={required}
        onChange={(input) => onChange(input.target.value)}
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="block text-sm">
      {label}
      <select
        className="mt-1 min-h-11 w-full border border-line bg-ivory px-3"
        value={value}
        onChange={(input) => onChange(input.target.value)}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
