import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export const formatMarkdown = (markdown) => {
  return markdown
    ? markdown
        .replace(/\\n/g, "\n")
        .replace("\u2018", "'")
        .replace("u2019", "\u2019")
        .replace("u2013", "\u2013")
        .replace("u2013", "\u2014")
    : "";
};

const meta = {
  title: "Round Table: AI for Good – Shaping a Smarter, Sustainable Tomorrow",
  image: "shutterstock_2370039435.jpg",
  objectives:
    "This roundtable aims to bring together leaders and experts to explore AI-driven solutions for the public good. Focused on healthcare, education, agriculture, and governance, its further objective is to craft a collaborative roadmap for impactful, scalable initiatives.",
  location:
    "21 Jan 2025 | 12:45 – 13:30 Hrs | Andhra Pradesh Lounge at Atlantis (Ground Floor), Grandhotel Belvedere, 89 Promenade",
  description:
    "Andhra Pradesh is leveraging AI to address its growing needs and drive sectoral transformation: \n 1. Partnering with Google, the state aims to harness AI to boost economic prosperity, creating market-ready solutions and new revenue streams. \n  With a 67% literacy rate, AI can enhance learning outcomes, improving youth employability and skill development. \n - AI-driven diagnostics and solutions can improve maternal and child nutrition, risk assessments, and affordable healthcare delivery, particularly in rural areas. \n - AI can optimize crop yield predictions, enhance food security, and strengthen market linkages for the state’s farmers, contributing over 29% to GSDP. \n - Data-driven AI can improve public services, decision-making, and transparency, positioning Andhra Pradesh as a leader in AI innovation. \n - It will be key to explore how AI can transform key sectors in Andhra Pradesh, by highlighting specific uses cases such as urban mobility, precision agriculture, predictive healthcare, and renewable energy management.",
};

const people = [
  {
    name: "Nara Lokesh",
    role: "Hon’ble Minister for Human Resource Development, IT, Electronics & Communications, and Real Time Governance",
    organisation: "Government of Andhra Pradesh",
    imageUrl: "/nara-lokesh.jpg",
    extra_info: "",
    twitter: "",
    linkedin: "",
    description: "",
    extra_info: "Led by",
  },
  {
    name: "Vishnu",
    role: "Group Executive Editor and Senior Anchor",
    organisation: "NDTV",
    description: "",
    href: "#",
    imageUrl: "/vishnu.jpg",
    extra_info: "Moderator",
  },
  {
    name: "Matt Renner",
    role: "President - Global Revenue",
    organisation: "Google Cloud",
    description: "",
    href: "#",
    imageUrl: "/matt-renner.jpeg",
  },
  {
    name: "Farnam Jahanian",
    role: "President",
    organisation: "Carnegie Mellon University, USA",
    imageUrl: "/farnam-jahanian.jpg",
  },
  {
    name: "Stéphane Bancel",
    role: "Chief Executive Officer",
    organisation: "Moderna, USA",
    imageUrl: "/stephane-bancel.jpg",
  },
  {
    name: "Albert Bourla",
    role: "Chief Executive Officer",
    organisation: "Pfizer, USA",
    imageUrl: "/albert-bourla.jpg",
  },
  {
    name: "Rajiv Shah",
    role: "President",
    organisation: "Rockefeller Foundation",
    imageUrl: "/rajiv-shah.webp",
  },
  {
    name: "Chuck Robbins",
    role: "Chair and Chief Executive Officer",
    organisation: "Cisco, USA",
    imageUrl: "/chuck-robbins.jpeg",
  },
  {
    name: "Matthias Berninger",
    role: "Executive Vice-President; Head,Public Affairs, Science and Sustainability",
    organisation: "Bayer, Germany",
    imageUrl: "/matthias-berninger.png",
  },
];

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-10 py-4 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* <img src="/AP-logo.png" className="w-auto h-20" /> */}
            <img src="/EDB-logo.png" className="w-auto h-20" />
          </div>
          <div className="flex flex-col items-end">
            <p className="text-sm text-gray-500">In association with</p>
            <img src="/google.png" className="w-auto h-12" />
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-gray-900">
        <img
          src={meta.image}
          className="absolute inset-0 -z-10 w-full h-full object-cover"
        />
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-3xl lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl shadow shadow-lg">
              {meta.title}
            </h1>
          </div>
          <div className="max-w-2xl mt-6 text-white">
            <p className="text-lg">{meta.location}</p>
          </div>
          <div className="mt-10">
            <div className="p-4 bg-amber-600 w-32 rounded text-white font-semibold inline-block text-center hover:bg-amber-700 cursor-pointer transition duration-200">
              RSVP
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-gray-900">
            <h2 className="text-3xl  tracking-tight sm:text-3xl mb-6">
              Objectives{" "}
            </h2>
            <Markdown
              className="prose text-xl mb-12"
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
            >
              {meta.objectives}
            </Markdown>
            <h2 className="text-3xl tracking-tight sm:text-3xl mb-6">Needs</h2>
            {/* <Markdown
              className="text-xl list-disc ml-6 mt-4 leading-8"
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
            > 
            {formatMarkdown(meta.description)}

            </Markdown> */}
            <div className=" text-xl">
              Andhra Pradesh is leveraging AI to address its growing needs and
              drive sectoral transformation:
              <ul className="list-disc ml-6 mt-4 leading-8">
                <li>
                  Partnering with Google, the state aims to harness AI to boost
                  economic prosperity, creating market-ready solutions and new
                  revenue streams.
                </li>
                <li>
                  With a 67% literacy rate, AI can enhance learning outcomes,
                  improving youth employability and skill development.
                </li>
                <li>
                  AI-driven diagnostics and solutions can improve maternal and
                  child nutrition, risk assessments, and affordable healthcare
                  delivery, particularly in rural areas.
                </li>
                <li>
                  AI can optimize crop yield predictions, enhance food security,
                  and strengthen market linkages for the state’s farmers,
                  contributing over 29% to GSDP.
                </li>
                <li>
                  Data-driven AI can improve public services, decision-making,
                  and transparency, positioning Andhra Pradesh as a leader in AI
                  innovation.
                </li>
                <li>
                  It will be key to explore how AI can transform key sectors in
                  Andhra Pradesh, by highlighting specific uses cases such as
                  urban mobility, precision agriculture, predictive healthcare,
                  and renewable energy management.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl  tracking-tight text-white sm:text-3xl">
              Speakers @ Davos 2019
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {people.map((person) => (
              <li key={person.name} className="relative">
                <p className="text-sm leading-6 text-gray-100 font-semibold mb-3 absolute  -top-8">
                  {person.extra_info}
                </p>
                <img
                  alt=""
                  src={person.imageUrl}
                  className="aspect-[14/13] w-full rounded-2xl object-cover"
                />

                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                  {person.name}
                </h3>

                <p className="text-base leading-7 text-gray-400">
                  {person.role}
                </p>
                <p className="text-base leading-7 text-gray-300  font-semibold">
                  {person.organisation}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-zinc-900 text-white py-8">
        <div className="flex justify-end items-center gap-2 px-6 lg:px-8 text-sm">
          Powered by{" "}
          <a
            href="https://www.ailibrary.ai"
            target="_blank"
            className="flex items-center gap-2"
          >
            {" "}
            <img src="/ailibrary.svg" className="w-auto h-6" /> AI Library
          </a>
        </div>
      </div>
    </>
  );
}
