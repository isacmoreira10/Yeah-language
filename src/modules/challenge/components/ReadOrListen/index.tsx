"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SpeakerSimpleHigh } from "@phosphor-icons/react/dist/ssr";

import { Tag } from "../Tag";
import { Chat } from "../models/chat";

const words = [
  "apple",
  "banana",
  "car",
  "dog",
  "elephant",
  "flower",
  "guitar",
  "house",
  "island",
  "jungle",
  "kangaroo",
];

interface ReadOrListenProps {
  chat: Chat;
  shouldCleanValues: boolean;
  speak: (text: string, rate?: number) => void;
  handleSelectedSentence: (selectedSentence: string) => void;
}

interface RandomWords {
  id: string;
  word: string;
}

interface Sentence extends Chat {
  randomWords: RandomWords[];
}

interface AddStartProps {
  wordRefPosition: DOMRect;
  containerRefPosition: DOMRect;
  wordRef: HTMLDivElement;
  wordItem: RandomWords;
}

interface AddEndProps {
  wordRefPosition: DOMRect;
  wordRef: HTMLDivElement;
  wordItem: RandomWords;
  lastWordSelected: HTMLDivElement;
}

export function ReadOrListen({
  chat,
  shouldCleanValues,
  speak,
  handleSelectedSentence,
}: ReadOrListenProps) {
  const [selectedWords, setSelectedWords] = useState<RandomWords[]>([]);
  const [sentence, setSentence] = useState<Sentence>({} as Sentence);
  const containerRef = useRef<HTMLHRElement | null>(null);
  const wordsRef = useRef<(HTMLDivElement | null)[]>([]);
  const wordsSelectedRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!chat.id) return;
    const randomWords = generateRandomWords(
      chat?.portuguese + " " + chat?.randomPortuguese
    );

    const sentenceGenerated = {
      ...chat,
      randomWords,
    };

    setSentence(sentenceGenerated);
  }, [chat]);

  useEffect(() => {
    if (!shouldCleanValues) return;

    setSelectedWords([]);
    setSentence({} as Sentence);
    wordsRef.current = [];
    wordsSelectedRef.current = [];
  }, [shouldCleanValues]);

  function generateSelectedWordsToSentence(value: RandomWords[]): string {
    return value.map((value) => value.word).join(" ");
  }

  function generateRandomWords(sentenceValue: string): RandomWords[] {
    if (!sentenceValue) return [];

    const words = sentenceValue
      .split(" ")
      .sort(() => Math.random() - 0.5)
      .map((word) => {
        return {
          id: crypto.randomUUID(),
          word,
        };
      });

    return words;
  }

  function updateSelectedWord(wordItem: RandomWords, wordRef: HTMLDivElement) {
    setTimeout(() => {
      const wordsSelected = [...selectedWords, wordItem];
      wordRef.style.display = "none";

      setSelectedWords(wordsSelected);
      handleSelectedSentence(generateSelectedWordsToSentence(wordsSelected));
    }, 300);
  }

  function addStart({
    containerRefPosition,
    wordRefPosition,
    wordRef,
    wordItem,
  }: AddStartProps) {
    const y =
      wordRefPosition.y - containerRefPosition.y + wordRefPosition.height + 6;

    const x = wordRefPosition.x - containerRefPosition.x;

    wordRef.style.transform = `translate(-${x}px, -${y}px)`;
    updateSelectedWord(wordItem, wordRef);
  }

  function addEnd({
    wordItem,
    wordRef,
    wordRefPosition,
    lastWordSelected,
  }: AddEndProps) {
    const lastWordSelectedPosition = lastWordSelected.getBoundingClientRect();

    const x =
      wordRefPosition.x -
      lastWordSelectedPosition.x -
      (lastWordSelectedPosition.width + 8);

    const y = wordRefPosition.y - lastWordSelectedPosition.y;

    let translate = `translate(-${x}px, -${y}px)`;

    if (x < 0) {
      translate = `translate(${-1 * x}px, ${-1 * y}px)`;
    }

    wordRef.style.transform = translate;
    updateSelectedWord(wordItem, wordRef);
  }

  function handleSelectedWord(wordItem: RandomWords, index: number) {
    if (!containerRef.current) return;
    if (!wordsRef.current) return;

    const containerRefPosition = containerRef.current.getBoundingClientRect();

    const wordRef = wordsRef.current[index];

    if (!wordRef) return;

    const wordRefPosition = wordRef.getBoundingClientRect();

    if (selectedWords.length === 0) {
      addStart({ containerRefPosition, wordRefPosition, wordRef, wordItem });
      return;
    }

    const lastWordSelected =
      wordsSelectedRef.current[wordsSelectedRef.current.length - 1];

    if (!lastWordSelected) return;

    addEnd({
      wordRefPosition,
      wordRef,
      wordItem,
      lastWordSelected,
    });
  }

  function verifyWordSelected(id: string): boolean {
    return selectedWords.filter((item) => item.id === id).length > 0;
  }

  function removeWordSelected(wordItem: RandomWords) {
    const selectedWordsFiltered = selectedWords.filter(
      (item) => item.id !== wordItem.id
    );

    const wordIndex = sentence.randomWords.findIndex(
      (word) => word.id === wordItem.id
    );

    const wordRef = wordsRef.current[wordIndex];

    if (!wordRef) return;

    wordRef.style.display = "block";
    wordRef.style.transform = `translate(0px, 0px)`;

    handleSelectedSentence(
      generateSelectedWordsToSentence(selectedWordsFiltered)
    );
    setSelectedWords(selectedWordsFiltered);
  }

  return (
    <div className="min-h-full h-full w-full flex justify-center">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold text-[#3c3c3c]">
          Write this in English
        </h1>

        <div className="flex items-center gap-2">
          <Image src="/ana.png" alt="Ana piture" height={169} width={114} />
          <div className="flex items-center gap-2 border-2 border-gray-300 py-[14px] px-[26px] rounded-2xl">
            <button onClick={() => speak(sentence.english)}>
              <SpeakerSimpleHigh
                size={32}
                className="text-blue-primary focus:text-gray-600"
                weight="fill"
              />
            </button>
            <span>{sentence.english}</span>
          </div>
        </div>
        <hr className="border-2" />

        <div className="mt-1 flex flex-wrap gap-2 min-h-12">
          {selectedWords.map((word) => (
            <div
              key={word.id}
              ref={(element) => {
                if (!element || wordsSelectedRef.current.includes(element))
                  return;

                wordsSelectedRef.current.push(element);
              }}
            >
              <Tag handleClick={() => removeWordSelected(word)}>
                {word.word}
              </Tag>
            </div>
          ))}
        </div>

        <hr className="border-2 mt-1" ref={containerRef} />

        <div className="flex flex-wrap gap-2 mt-7 ">
          {sentence.randomWords &&
            sentence?.randomWords?.map((randomWord, index) => (
              <div key={randomWord.id}>
                <div
                  ref={(element) => {
                    if (!element || wordsRef.current.includes(element)) return;

                    wordsRef.current.push(element);
                  }}
                  className="transition-all duration-300"
                >
                  <Tag
                    handleClick={() => handleSelectedWord(randomWord, index)}
                  >
                    {randomWord.word}
                  </Tag>
                </div>

                <div
                  data-disabled={verifyWordSelected(randomWord.id)}
                  className="data-[disabled=true]:block data-[disabled=false]:hidden"
                >
                  <Tag
                    selected={true}
                    handleClick={() => handleSelectedWord(randomWord, index)}
                  >
                    {randomWord.word}
                  </Tag>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
