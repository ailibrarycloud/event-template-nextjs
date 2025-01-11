"use client";

import AIChatbot from "@/components/ai-library-chatbot";
import { useEffect, useState } from "react";
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

export default function Home() {
  const [boxOpen, setBoxOpen] = useState(false);
  // const fileName = process.env["NEXT_PUBLIC_DATAFILE_URL"];
  const fileName = "data.json";
  const [meta, setMeta] = useState({});
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(fileName)
      .then((res) => res.json())
      .then((data) => {
        setMeta(data);
        setLoader(false);
      });
  }, []);
  const [people, setPeople] = useState([]);
  useEffect(() => {
    if (meta.people) {
      setPeople(meta.people);
    }
  }, [meta]);
  return (
    <>
      {loader ? (
        <div className="h-screen w-screen flex justify-center items-center">
          Loading...
        </div>
      ) : (
        <>
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-10 py-4 lg:px-8 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img src={meta.primary_logo.href} className="w-auto h-20" />
              </div>
              <div className="flex flex-col items-end">
                <p className="text-sm text-gray-500">
                  {meta.secondary_logo.title}
                </p>
                <img src={meta.secondary_logo.href} className="w-auto h-12" />
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
                <p className="text-lg">
                  {meta.date} {meta.time}{" "}
                </p>
                <p className="text-lg">{meta.location}</p>
              </div>
              <div className="mt-10">
                <div
                  onClick={() => setBoxOpen(true)}
                  className="p-4 bg-amber-600 w-32 rounded text-white font-semibold inline-block text-center hover:bg-amber-700 cursor-pointer transition duration-200"
                >
                  RSVP
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-gray-900">
                {meta.sections.map((section) => (
                  <>
                    <h2 className="text-3xl  tracking-tight sm:text-3xl mb-6">
                      {section.title}
                    </h2>
                    <Markdown
                      className="prose prose-sm text-xl mb-12"
                      rehypePlugins={[rehypeRaw]}
                      remarkPlugins={[remarkGfm]}
                    >
                      {section.body}
                    </Markdown>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl  tracking-tight text-white sm:text-3xl">
                  {meta.speaker_section_title || "Speakers"}
                </h2>
              </div>
              <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
              >
                {meta.people.map((person) => (
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
        </>
      )}
      <AIChatbot boxOpen={boxOpen} setBoxOpen={setBoxOpen} />

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
