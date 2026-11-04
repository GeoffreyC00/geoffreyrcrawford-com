import { CopyPrompt } from "@/components/chatgpt-workbook/copy-prompt";
import {
  chatGptAndroidUrl,
  chatGptIosUrl,
  chatGptWebUrl,
  chatgptWorkbook,
  exercises,
  faqs,
  followUpPrompt,
  samplePrompt,
} from "@/lib/products/chatgpt-workbook";

const sampleHref = `#${chatgptWorkbook.sampleId}`;

function SampleLink({ className }: { className: string }) {
  return (
    <a href={sampleHref} className={className}>
      Try a free example
    </a>
  );
}

const linkClass =
  "font-semibold text-[#1B2B4B] underline decoration-[#1B2B4B] underline-offset-4";

export function ChatgptWorkbookPage() {
  return (
    <div
      className="workbook-page min-h-screen overflow-x-clip bg-[#f6f3ec] text-[#172033]"
      style={{ colorScheme: "light" }}
    >
      <style>{`
        .workbook-page a:focus-visible,
        .workbook-page button:focus-visible,
        .workbook-page summary:focus-visible {
          outline: 3px solid #1b2b4b;
          outline-offset: 3px;
          box-shadow: 0 0 0 3px #ffffff;
        }
      `}</style>

      <header className="sticky top-0 z-40 border-b border-[#e4e1db] bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-[4.25rem] w-full max-w-3xl items-center justify-between gap-4 px-5 py-2 sm:px-8">
          <div className="min-w-0">
            <p className="truncate text-lg font-semibold tracking-tight text-[#141413]">
              {chatgptWorkbook.author}
            </p>
            <p className="text-base text-[#172033]">{chatgptWorkbook.priceLabel}</p>
          </div>
          <SampleLink className="hidden min-h-12 shrink-0 items-center justify-center rounded-full bg-[#1B2B4B] px-5 text-base font-semibold text-white sm:inline-flex" />
        </div>
      </header>

      <main>
        <section className="px-5 pb-10 pt-6 sm:px-8 sm:pb-16 sm:pt-16">
          <div className="mx-auto w-full max-w-3xl">
            <p className="text-lg font-semibold leading-snug text-[#5c4318]">{chatgptWorkbook.name}</p>
            <h1 className="mt-3 font-serif text-[2.5rem] font-medium leading-[1.08] tracking-tight text-balance text-[#1B2B4B] sm:text-6xl">
              ChatGPT, step by step
            </h1>
            <p className="mt-4 max-w-2xl text-xl leading-snug text-[#172033] sm:text-2xl sm:leading-relaxed">
              Start with the basics. Learn how to open ChatGPT, ask your first question, and use it
              for five everyday tasks.
            </p>
            <p className="mt-4 max-w-2xl text-xl leading-snug text-[#172033] sm:leading-relaxed">
              ChatGPT is a place where you type a question and it writes a reply. You can ask it to
              rewrite a message so the note sounds clearer.
            </p>
            <p className="mt-5 text-2xl font-semibold text-[#172033]">{chatgptWorkbook.priceLabel}</p>
            <p className="mt-1 text-lg leading-snug text-[#172033]">Checkout isn&apos;t open yet.</p>
            <SampleLink className="mt-4 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#1B2B4B] px-6 text-lg font-semibold text-white sm:w-auto" />
          </div>
        </section>

        <section
          id={chatgptWorkbook.sampleId}
          className="scroll-mt-28 border-t border-[#e4dccb] px-5 py-14 sm:px-8 sm:py-20"
        >
          <div className="mx-auto w-full min-w-0 max-w-3xl">
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-[#1B2B4B] sm:text-5xl">
              A note, before and after
            </h2>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-[#172033]">
              You borrowed a neighbor&apos;s ladder. You cannot return it on Saturday, because family
              is visiting. Sunday afternoon works. The note you typed sounds abrupt.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
              <figure className="min-w-0">
                <figcaption className="text-lg font-semibold text-[#1B2B4B]">The note you typed</figcaption>
                <blockquote className="mt-4 whitespace-pre-wrap break-words text-2xl leading-relaxed text-[#172033]">
                  Hey Pat — can&apos;t bring the ladder Saturday. Something came up. Maybe next week.
                </blockquote>
              </figure>
              <figure className="min-w-0 rounded-3xl bg-[#1B2B4B] p-6 text-white sm:p-8">
                <figcaption className="text-lg font-semibold text-[#f3e6c8]">
                  An illustrative reply
                </figcaption>
                <blockquote className="mt-4 whitespace-pre-wrap break-words text-2xl leading-relaxed">
                  Hi Pat — I still have your ladder. I can&apos;t return it Saturday because family
                  is visiting. I can bring it by Sunday afternoon. Does that time work for you?
                </blockquote>
                <p className="mt-5 text-lg leading-relaxed text-white/90">
                  Written for this page. A live reply will use different words.
                </p>
              </figure>
            </div>

            <ol className="mt-14 space-y-12">
              <li>
                <p className="font-serif text-4xl font-medium text-[#5c4318]">1</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#1B2B4B]">Copy the example text.</h3>
                <p className="mt-3 max-w-2xl text-xl leading-relaxed text-[#172033]">
                  This is the text you will paste into ChatGPT. It includes your note and what you
                  want back.
                </p>
                <div className="mt-5">
                  <CopyPrompt text={samplePrompt} label="Copy the example text" />
                </div>
                <p className="whitespace-pre-wrap break-words text-xl leading-relaxed text-[#172033]">
                  {samplePrompt}
                </p>
              </li>

              <li>
                <p className="font-serif text-4xl font-medium text-[#5c4318]">2</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#1B2B4B]">Open ChatGPT.</h3>
                <p className="mt-3 max-w-2xl text-xl leading-relaxed text-[#172033]">
                  You can do this in the browser. You do not need the app for this example.
                </p>
                <a
                  href={chatGptWebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-14 w-full items-center justify-center rounded-full border-2 border-[#1B2B4B] bg-white px-6 text-lg font-semibold text-[#1B2B4B] sm:w-auto"
                >
                  Open ChatGPT
                </a>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#172033]">
                  If ChatGPT asks you to sign up or log in, create an account or sign in. OpenAI
                  says the free plan is for anyone who signs up, and that ChatGPT is free to use.
                </p>
              </li>

              <li>
                <p className="font-serif text-4xl font-medium text-[#5c4318]">3</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#1B2B4B]">
                  Tap the message box, paste the text, and send it.
                </h3>
                <p className="mt-3 max-w-2xl text-xl leading-relaxed text-[#172033]">
                  On a phone, tap the message box. Touch and hold in the box until Paste appears,
                  then tap Paste. Tap send. Read the reply before you use it.
                </p>
              </li>
            </ol>

            <div className="mt-16 border-t border-[#e4dccb] pt-12">
              <h3 className="font-serif text-3xl font-medium tracking-tight text-[#1B2B4B] sm:text-4xl">
                Want to try one more thing?
              </h3>
              <p className="mt-4 max-w-2xl text-xl leading-relaxed text-[#172033]">
                After you have a reply, paste this into the same chat and send it. You can skip
                this and still be done.
              </p>
              <div className="mt-5">
                <CopyPrompt text={followUpPrompt} label="Copy the next example" />
              </div>
              <p className="whitespace-pre-wrap break-words text-xl leading-relaxed text-[#172033]">
                {followUpPrompt}
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[#e4dccb] bg-white px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto w-full max-w-3xl">
            <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-[#1B2B4B] sm:text-5xl">
              Five everyday tasks
            </h2>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-[#172033]">
              The workbook opens with Start here: what ChatGPT is, how to open the official site or
              app, and this same first example. These five tasks come after that.
            </p>
            <ol className="mt-10 divide-y divide-[#e4dccb] border-y border-[#e4dccb]">
              {exercises.map((item) => (
                <li key={item.n} className="py-6">
                  <h3 className="text-2xl font-semibold leading-snug text-[#1B2B4B]">
                    <span className="mr-3 font-serif font-medium text-[#5c4318]">{item.n}</span>
                    {item.outcome}
                  </h3>
                  <p className="mt-2 text-xl leading-relaxed text-[#172033]">{item.detail}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#172033]">
              The official app is optional. On iPhone, the developer is OpenAI OpCo, LLC. On
              Android, the publisher is OpenAI.{" "}
              <a href={chatGptIosUrl} className={linkClass}>
                iPhone app
              </a>
              {" · "}
              <a href={chatGptAndroidUrl} className={linkClass}>
                Android app
              </a>
            </p>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto w-full max-w-3xl">
            <h2 className="font-serif text-4xl font-medium tracking-tight text-[#1B2B4B] sm:text-5xl">
              Before you try it
            </h2>
            <div className="mt-8 divide-y divide-[#e4dccb] border-y border-[#e4dccb]">
              {faqs.map((item) => (
                <details key={item.q} className="group py-1">
                  <summary className="cursor-pointer list-none rounded-md py-4 text-xl font-semibold [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-6">
                      {item.q}
                      <span aria-hidden className="text-[#1B2B4B] group-open:hidden">
                        +
                      </span>
                      <span aria-hidden className="hidden text-[#1B2B4B] group-open:inline">
                        –
                      </span>
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-4 text-lg leading-relaxed text-[#172033] sm:text-xl">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
            <p className="mt-6 text-lg leading-relaxed">
              <a
                href="https://help.openai.com/en/articles/9275245-chatgpt-free-tier-faq"
                className={linkClass}
              >
                OpenAI&apos;s free-plan FAQ
              </a>
            </p>
          </div>
        </section>

        <section className="bg-[#1B2B4B] px-5 py-16 text-white sm:px-8 sm:py-20">
          <div className="mx-auto w-full max-w-3xl">
            <p className="text-lg font-semibold text-[#f3e6c8]">{chatgptWorkbook.priceLabel}</p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-balance sm:text-5xl">
              Try the ladder note first.
            </h2>
            <p className="mt-5 max-w-xl text-xl leading-relaxed text-white/90">
              Copy the example text, open ChatGPT, and paste it into the message box.
            </p>
            <SampleLink className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-white px-6 text-lg font-semibold text-[#1B2B4B] sm:w-auto" />
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e4e1db] bg-white">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-lg text-[#172033]">
            © {new Date().getFullYear()} {chatgptWorkbook.author}
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-lg font-medium">
            <a
              href={`mailto:${chatgptWorkbook.email}`}
              className="inline-flex min-h-12 items-center underline decoration-[#141413] underline-offset-4"
            >
              Contact
            </a>
            <a
              href="https://www.geoffreyrcrawford.com"
              className="inline-flex min-h-12 items-center underline decoration-[#141413] underline-offset-4"
            >
              Main site
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
