import Image from "next/image";
import { CopyPrompt } from "@/components/chatgpt-workbook/copy-prompt";
import {
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
      Try the sample exercise
    </a>
  );
}

export function ChatgptWorkbookPage() {
  return (
    <div className="workbook-page min-h-screen overflow-x-clip bg-[#f6f3ec] text-[#172033]" style={{ colorScheme: "light" }}>
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
            <p className="truncate text-lg font-semibold tracking-tight text-[#141413]">{chatgptWorkbook.author}</p>
            <p className="truncate text-base text-[#172033]">{chatgptWorkbook.priceLabel}</p>
          </div>
          <SampleLink className="hidden min-h-12 shrink-0 items-center justify-center rounded-full bg-[#1B2B4B] px-5 text-base font-semibold text-white sm:inline-flex" />
        </div>
      </header>

      <main>
        <section className="px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-12">
          <div className="mx-auto w-full max-w-3xl">
            <h1 className="font-serif text-[2rem] font-medium leading-[1.12] tracking-tight text-balance text-[#1B2B4B] sm:text-5xl sm:leading-[1.08]">
              {chatgptWorkbook.name}
            </h1>
            <p className="mt-4 text-xl leading-relaxed text-[#172033]">
              Finish one useful task in your first sitting. A short PDF workbook for first-time
              users, with five everyday exercises.
            </p>
            <p className="mt-5 text-2xl font-semibold text-[#172033]">{chatgptWorkbook.priceLabel}</p>
            <p className="mt-1 text-lg leading-relaxed text-[#172033]">Checkout isn&apos;t open yet.</p>
            <SampleLink className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#1B2B4B] px-6 text-lg font-semibold text-white sm:w-auto" />
          </div>
        </section>

        <section id={chatgptWorkbook.sampleId} className="scroll-mt-28 px-5 pb-14 sm:px-8 sm:pb-20">
          <div className="mx-auto w-full min-w-0 max-w-3xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1B2B4B] sm:text-4xl">
              One message, before and after.
            </h2>
            <p className="mt-3 text-xl leading-relaxed text-[#172033]">
              You told your neighbor, Pat, that you would return a borrowed ladder on Saturday.
              Saturday is now full.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <figure className="min-w-0 rounded-2xl bg-[#f3e6c8] p-4 sm:p-5">
                <figcaption className="text-base font-semibold text-[#1B2B4B]">The awkward message</figcaption>
                <blockquote className="mt-3 whitespace-pre-wrap break-words text-xl leading-relaxed text-[#172033]">
                  Hey Pat — can&apos;t bring the ladder Saturday. Something came up. Maybe next week.
                </blockquote>
              </figure>
              <figure className="min-w-0 rounded-2xl bg-[#1B2B4B] p-4 text-white sm:p-5">
                <figcaption className="text-base font-semibold text-[#f3e6c8]">Illustrative example</figcaption>
                <blockquote className="mt-3 whitespace-pre-wrap break-words text-xl leading-relaxed">
                  Hi Pat — I still have your ladder. I can&apos;t return it Saturday because family
                  is visiting. I can bring it by Sunday afternoon. Does that time work for you?
                </blockquote>
                <p className="mt-3 text-base leading-relaxed text-white/90">
                  Written for this page. A live reply will use different words.
                </p>
              </figure>
            </div>

            <div className="mt-4 min-w-0 rounded-2xl border border-[#e4dccb] bg-white p-4 sm:p-5">
              <h3 className="text-xl font-semibold text-[#1B2B4B]">Prompt</h3>
              <div className="mt-4">
                <CopyPrompt text={samplePrompt} label="Copy prompt" />
              </div>
              <p className="whitespace-pre-wrap break-words text-xl leading-relaxed text-[#172033]">{samplePrompt}</p>
            </div>

            <div className="mt-3 min-w-0 rounded-2xl border border-[#e4dccb] bg-white p-4 sm:p-5">
              <h3 className="text-xl font-semibold text-[#1B2B4B]">Follow-up prompt</h3>
              <div className="mt-4">
                <CopyPrompt text={followUpPrompt} label="Copy follow-up" />
              </div>
              <p className="whitespace-pre-wrap break-words text-xl leading-relaxed text-[#172033]">{followUpPrompt}</p>
            </div>

            <p className="mt-4 text-xl leading-relaxed text-[#172033]">
              Paste the prompt into a new chat. The first reply is a draft. The follow-up is where
              you make it sound like you.
            </p>
          </div>
        </section>

        <section className="bg-[#1B2B4B] px-5 py-14 text-white sm:px-8 sm:py-16">
          <div className="mx-auto w-full max-w-3xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">Five everyday exercises</h2>
            <ol className="mt-8 space-y-6">
              {exercises.map((item) => (
                <li key={item.n} className="border-t border-white/25 pt-5">
                  <p className="font-mono text-sm tracking-[0.14em] text-[#f3e6c8]">{item.n}</p>
                  <h3 className="mt-2 text-2xl font-semibold leading-snug tracking-tight">{item.outcome}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-white/90">{item.detail}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              For a confusing notice, paste only the parts you are comfortable sharing.
            </p>
          </div>
        </section>

        <section className="bg-white px-5 py-14 sm:px-8 sm:py-16">
          <div className="mx-auto grid w-full max-w-3xl items-center gap-6 sm:grid-cols-[9.5rem_1fr] sm:gap-8">
            <Image
              src="/images/photography/portrait-standing.jpg"
              alt="Geoffrey R. Crawford"
              width={740}
              height={1024}
              className="h-auto w-36 rounded-2xl object-cover object-top sm:w-full"
            />
            <div>
              <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1B2B4B] sm:text-4xl">
                I&apos;m Geoffrey R. Crawford.
              </h2>
              <p className="mt-4 text-xl leading-relaxed text-[#172033]">
                For more than eight years I have written instructions that keep a job clear: who it
                is for, which facts matter, and what the finished piece should look like. This
                sample uses that habit on an ordinary note.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-16">
          <div className="mx-auto w-full max-w-3xl">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#1B2B4B] sm:text-4xl">
              Before you try it
            </h2>
            <div className="mt-6 divide-y divide-[#e4dccb] border-y border-[#e4dccb]">
              {faqs.map((item) => (
                <details key={item.q} className="group py-1">
                  <summary className="cursor-pointer list-none rounded-md py-4 text-xl font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B2B4B] [&::-webkit-details-marker]:hidden">
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
                  <p className="max-w-2xl pb-4 text-xl leading-relaxed text-[#172033]">{item.a}</p>
                </details>
              ))}
            </div>
            <p className="mt-4 text-lg leading-relaxed text-[#172033]">
              <a
                href="https://help.openai.com/en/articles/9275245-chatgpt-free-tier-faq"
                className="font-semibold text-[#1B2B4B] underline decoration-[#1B2B4B] underline-offset-4"
              >
                OpenAI&apos;s free-plan FAQ
              </a>
            </p>
          </div>
        </section>

        <section className="bg-[#1B2B4B] px-5 py-16 text-white sm:px-8 sm:py-20">
          <div className="mx-auto w-full max-w-3xl">
            <h2 className="font-serif text-4xl font-medium tracking-tight text-balance sm:text-5xl">
              Try the ladder note first.
            </h2>
            <p className="mt-4 max-w-xl text-xl leading-relaxed text-white/90">
              Copy the prompt, paste it into ChatGPT, and read the reply before you send anything.
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
              className="inline-flex min-h-12 items-center text-[#141413] underline decoration-[#141413] underline-offset-4"
            >
              Contact
            </a>
            <a
              href="https://www.geoffreyrcrawford.com"
              className="inline-flex min-h-12 items-center text-[#141413] underline decoration-[#141413] underline-offset-4"
            >
              Main site
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
