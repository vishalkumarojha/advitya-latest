import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import { Audio } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import GradientText from "../components/ui/GradientText";

const dummySongs = [
  {
    title: "Shugal Laga Le",
    albumImage:
      "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a4858d0000b1f9b75c/view?project=6756a8dc000c0d24754b&mode=admin",
    audioSrc:
      "https://cloud.appwrite.io/v1/storage/buckets/67a481a700068f90490a/files/67a481f1003401f95cf3/view?project=6756a8dc000c0d24754b&mode=admin",
  },
  {
    title: "Train Song",
    albumImage:
      "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a4bb8d0026c5e1f03c/view?project=6756a8dc000c0d24754b&mode=admin",
    audioSrc:
      "https://cloud.appwrite.io/v1/storage/buckets/67a481a700068f90490a/files/67a5924c002975366b2c/view?project=6756a8dc000c0d24754b&mode=admin",
  },
  {
    title: "Darmiyan",
    albumImage:
      "https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a48579000acee77ec6/view?project=6756a8dc000c0d24754b&mode=admin",
    audioSrc:
      "https://cloud.appwrite.io/v1/storage/buckets/67a481a700068f90490a/files/67a4866a00024aa4c010/view?project=6756a8dc000c0d24754b&mode=admin",
  },
];

export default function ProNight() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentSongIndex, isPlaying]);

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % dummySongs.length);
  };

  const previousSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? dummySongs.length - 1 : prevIndex - 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const selectSong = (index) => {
    if (index === currentSongIndex) {
      setIsPlaying((prev) => !prev);
    } else {
      setCurrentSongIndex(index);
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-primary-foreground relative w-full overflow-hidden mb-2 xl:mb-[-250]">
      <div className="flex items-center justify-start p-4">
        <button
          onClick={() => navigate("/events", { state: { from: "TechEvents" } })}
          className="text-white bg-purple-600 py-2 px-4 rounded-lg hover:scale-105 ease-in-out duration-300 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
      </div>
      {/* Band Section */}
      <section className="relative w-full min-h-screen bg-primary-foreground overflow-hidden py-16 md:py-24 lg:py-">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <img
              src="https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a466f60007f4bcd223/view?project=6756a8dc000c0d24754b&mode=admin"
              alt="Raghu Dixit"
              className="w-full max-w-[500px]  rounded-xl mb-8"
            />
            <h1 className="text-white text-4xl font-bold mb-4">Raghu Dixit</h1>
            <p className="text-white text-md max-w-2xl">
              Raghu Dixit, often regarded as the pioneer of independent music in
              India, has been captivating audiences worldwide for over two
              decades with his unique blend of traditional and contemporary
              sounds. His band, The Raghu Dixit Project, has performed over 2000
              concerts across 5 continents, creating an unforgettable experience
              that inspires a generation of artists to sing proudly in
              vernacular languages.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/theraghudixitproject/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 text-white hover:text-purple-600 transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/trdp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6 text-white hover:text-purple-600 transition-colors" />
              </a>
              <a
                href="https://x.com/Raghu_Dixit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-6 h-6 text-white hover:text-purple-600 transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/raghudixitmusic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-6 h-6 text-white hover:text-purple-600 transition-colors" />
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            {/* Rotating Vinyl with Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full lg:w-1/2 aspect-square max-w-[400px] lg:max-w-[600px] my-24 lg:mb-0"
            >
              <div
                className={`relative w-full h-full ${
                  isPlaying ? "animate-[spin_20s_linear_infinite]" : ""
                }`}
              >
                <img
                  src="https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a46621002b7b0fcd41/view?project=6756a8dc000c0d24754b&mode=admin"
                  alt="Vinyl record"
                  className="object-cover rounded-full"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 600px"
                />
                <div className="absolute left-1/2 top-1/2 h-[98%] w-[98%] -translate-x-1/2 -translate-y-1/2 transform rounded-full border-4 border-zinc-800">
                  <div className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-zinc-800 overflow-hidden">
                    <img
                      src={
                        dummySongs[currentSongIndex].albumImage ||
                        "/placeholder.svg"
                      }
                      alt={dummySongs[currentSongIndex].title}
                      className="rounded-full object-cover"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 600px"
                    />
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-black bg-opacity-80 px-6 py-3  rounded-full border-2 shadow-lg">
                <button
                  onClick={previousSong}
                  className="p-2 rounded-full hover:bg-gray-700 transition-colors group border-2"
                >
                  <SkipBack className="w-5 h-5 stroke-2 text-white group-hover:text-gray-200" />
                </button>
                <button
                  onClick={togglePlayPause}
                  className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors border-2 border-gray-400"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-current text-white" />
                  ) : (
                    <Play className="w-5 h-5 fill-current text-white" />
                  )}
                </button>
                <button
                  onClick={nextSong}
                  className="p-2 rounded-full hover:bg-gray-700 transition-colors group border-2 border-gray-400"
                >
                  <SkipForward className="w-5 h-5 stroke-2 text-white group-hover:text-gray-200" />
                </button>
              </div>
            </motion.div>

            {/* Song List */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4"
                >
                  <GradientText
                    animationSpeed={5}
                    showBorder={false}
                    className="text-xl"
                  >
                    POPULAR SONGS
                  </GradientText>
                  <ul className="text-white text-lg space-y-2">
                    {dummySongs.map((song, index) => (
                      <li
                        key={index}
                        className={`flex items-center p-2 rounded-lg ${
                          index === currentSongIndex
                            ? "bg-primary shadow-lg"
                            : "hover:bg-primary hover:shadow-lg"
                        } transition-all cursor-pointer`}
                        onClick={() => selectSong(index)}
                      >
                        <img
                          src={song.albumImage}
                          alt={song.title}
                          className="w-16 h-16 rounded-xl mr-4"
                        />
                        <span className="flex-1">{song.title}</span>
                        {index === currentSongIndex && isPlaying && (
                          <Audio
                            height="40"
                            width="40"
                            radius="9"
                            color="#9f7aea"
                            ariaLabel="audio-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                          />
                        )}
                        <button
                          className="p-2 rounded-full bg-primary-foreground text-background hover:bg-background hover:text-primary-foreground transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            selectSong(index);
                          }}
                        >
                          {index === currentSongIndex && isPlaying ? (
                            <Pause className="w-5 h-5 fill-current text-gray-200" />
                          ) : (
                            <Play className="w-5 h-5 fill-current text-gray-200" />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <audio
        ref={audioRef}
        src={dummySongs[currentSongIndex].audioSrc}
        onEnded={nextSong}
      />
    </div>
  );
}
