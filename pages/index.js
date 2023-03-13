import { useState } from 'react'

import { Dancing_Script, Crimson_Pro } from '@next/font/google'

import Image from 'next/image'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
})
const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro',
})

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faMap,
  faGift,
  faClose,
  faCopy,
  faVolumeMute,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons'

import {
  faClock,
} from '@fortawesome/free-regular-svg-icons'

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [copied1, setCopied1] = useState(false)
  const [copied2, setCopied2] = useState(false)
  const [playAudio, setPlayAudio] = useState(false)

  const handleClickCopy1 = () => {
    navigator.clipboard.writeText("327801036842531");
    setCopied1(true);
    setTimeout(() => setCopied1(false), 500)
  };

  const handleClickCopy2 = () => {
    navigator.clipboard.writeText("7152743728");
    setCopied2(true);
    setTimeout(() => setCopied2(false), 500)
  };
  const handleAudio = () => {
    if (playAudio) {
      document.querySelector('audio').pause();
    } else {
      document.querySelector('audio').play();
    }
    setPlayAudio(!playAudio)
  };

  return (
    <div className="relative">
      <audio autoPlay loop>
        <source
          src="/ost/murotal.aac"
          type="audio/aac"
        />
      </audio>
      <div
        className='fixed z-30 top-6 sm:top-4 left-4 rounded-full text-white px-1 py-4 bg-emerald-900 w-12 text-sm flex items-center justify-center cursor-pointer hover:bg-emerald-700'
        onClick={handleAudio}
      >
        <FontAwesomeIcon
          icon={!playAudio ? faVolumeMute : faVolumeUp}
        />
      </div>
      <section className="absolute w-full h-full bg-transparent bg-center bg-cover bg-home" />
      <section className='absolute w-full h-full bg-black/60' />
      <div className="relative container lg:max-w-screen-lg sm:max-w-screen-sm mx-auto w-full h-full lg:h-screen flex flex-col items-center justify-center py-8 md:py-0 px-4 sm:px-0">
        <div className="w-full p-8 bg-transparent bg-center bg-cover bg-content rounded-lg shadow flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="relative flex flex-col justify-center items-center border-4 border-teal-800 rounded-lg bg-green-100">
            <div className='absolute left-[-50px] top-[-70px]'>
              <Image
                src='/img/bingkai-1.png'
                alt="bingkai1"
                width={200}
                height={200}
              />
            </div>
            <div className='absolute right-[-50px] bottom-[-80px]'>
              <Image
                src='/img/bingkai-2.png'
                alt="bingkai2"
                width={170}
                height={170}
              />
            </div>
            <Image
              src="/img/fadlan-pipi.png"
              alt="fadlan-pipi-couple"
              width={500}
              height={500}
            />
          </div>
          <div className='p-2 flex flex-col justify-center items-center text-center'>
            <Image
              src="/img/bismillah.png"
              alt="arab-bismillah"
              width={190.81}
              height={30.16}
            />
            <h1 className={`${dancingScript.variable} font-sans text-2xl text-teal-900 font-bold mt-4 mb-2`}>
              Undangan Akad Pernikahan
            </h1>
            <div className='mt-4'>
              <h1 className={`${dancingScript.variable} font-sans text-2xl font-bold text-teal-900`}>
                Fadlan S.Pd
              </h1>
              <p className={`${crimsonPro.variable} font-serif text-base text-teal-900`}>
                Putra ke 2 dari Bapak Syahrul (Alm) & Ibu Nurmina
              </p>
              <div className='my-1 flex flex-row items-center justify-center gap-x-2'>
                <span class="h-[2px] w-[32px] bg-black" />
                <h4 className={`${dancingScript.variable} font-sans text-xl font-bold text-teal-900`}>
                  &
                </h4>
                <span class="h-[2px] w-[32px] bg-black" />
              </div>
              <h1 className={`${dancingScript.variable} font-sans text-2xl font-bold text-teal-900`}>
                Pipi Rahmadani S.Pd
              </h1>
              <p className={`${crimsonPro.variable} font-serif text-base text-teal-900`}>
                Putri ke 2 dari Bapak Erwin & Ibu Efnida
              </p>
            </div>
            <p className={`${crimsonPro.variable} font-serif text-base text-teal-900 my-2`}>
              Insyaa Allah akan diadakan acara akad pernikahan kami pada:
            </p>
            <div className='flex flex-row items-center gap-x-2 mt-2'>
              <div className='flex items-center justify-center'>
                <h2 className={`${crimsonPro.variable} font-serif text-xl text-teal-900 font-bold`}>
                  Jum`at
                </h2>
              </div>
              <div className='flex items-center justify-center border-x-2 border-teal-900 px-2'>
                <h2 className={`${crimsonPro.variable} font-serif text-xl text-teal-900 font-bold`}>
                  17 Maret
                </h2>
              </div>
              <div className='flex items-center justify-center'>
                <h2 className={`${crimsonPro.variable} font-serif text-xl text-teal-900 font-bold`}>
                  2023
                </h2>
              </div>
            </div>
            <div className='flex flex-row items-center gap-x-2 mt-2'>
              <FontAwesomeIcon icon={faClock} />
              <p className={`${crimsonPro.variable} font-serif text-sm text-teal-900`}>
                Pukul 14:00 WIB s/d selesai
              </p>
            </div>
            <div className='mt-2'>
              <p className={`${crimsonPro.variable} font-serif text-base text-teal-900 font-bold`}>
                Masjid Raya Koto Tinggi
              </p>
              <p className={`${crimsonPro.variable} font-serif text-base text-teal-900`}>
                Jorong Kampung Melayu Koto Tinggi, Kab. Lima Puluh Kota
              </p>
            </div>
            <div className='mt-4 flex flex-row items-center justify-center gap-x-4'>
              <a
                href="https://goo.gl/maps/rEA4xZPA3Mu7LavN6"
                target='_blank'
                className={`py-2 px-4 rounded bg-green-600 hover:bg-green-700 text-white font-bold text-base ${crimsonPro.variable} font-serif flex items-center cursor-pointer`}
              >
                <FontAwesomeIcon icon={faMap} className='mr-2' />
                Alamat Acara
              </a>
              <a
                onClick={() => setShowModal(true)}
                className={`py-2 px-4 rounded bg-emerald-900 hover:bg-emerald-700 text-white font-bold text-base ${crimsonPro.variable} font-serif flex items-center cursor-pointer`}
              >
                <FontAwesomeIcon icon={faGift} className='mr-2' />
                Kirim Hadiah
              </a>
            </div>
          </div>
        </div>
      </div>
      {
        showModal && (
          <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-4 sm:mx-0">
              <div className="relative w-auto my-6 mx-auto max-w-xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <div className='flex flex-row items-center'>
                      <FontAwesomeIcon icon={faGift} className='mr-2' />
                      <h3 className={`${dancingScript.variable} font-sans text-2xl font-bold text-black`}>
                        Kirim Hadiah
                      </h3>
                    </div>
                    <button
                      className="bg-transparent border-0 text-white float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-white opacity-7 h-6 w-6 text-xl bg-emerald-900 hover:bg-emerald-700 py-0 flex items-center justify-center rounded-full">
                        <FontAwesomeIcon icon={faClose} />
                      </span>
                    </button>
                  </div>
                  <div className='px-6 py-2 text-center'>
                    <p className={`${crimsonPro.variable} font-serif text-sm text-black`}>
                      Kehadiran dan doa restu dari kalian merupakan karunia yang sangat berarti bagi kami, namun apabila memberikan hadiah adalah ungkapan tanda kasih silahkan bisa mengirimkan melalui informasi berikut ini. Terimakasih.
                    </p>
                  </div>
                  <div className="relative px-6 flex-auto">
                    <div className='bg-gray-100 rounded px-6 py-4 w-full shadow-md flex flex-col items-center text-center'>
                      <Image
                        src="/img/bri.png"
                        alt="bank-bri"
                        width={80}
                        height={40}
                      />
                      <div className='mt-4'>
                        <p className={`${crimsonPro.variable} font-serif text-sm text-black font-bold`}>
                          a.n Fadlan
                          <br />
                          327801036842531
                        </p>
                      </div>
                      <div className='mt-2'>
                        <button
                          onClick={handleClickCopy1}
                          className='text-sm w-35 text-white bg-emerald-900 hover:bg-emerald-700 rounded px-2 py-1 transition cursor-pointer'
                        >
                          <FontAwesomeIcon icon={faCopy} className="mr-2" />
                          {copied1 ? 'Berhasil disalin!' : 'Salin No. Rekening'}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <div className='bg-gray-100 rounded px-6 py-4 w-full shadow-md flex flex-col items-center text-center'>
                      <Image
                        src="/img/bsi.png"
                        alt="bank-bsi"
                        width={80}
                        height={40}
                      />
                      <div className='mt-4'>
                        <p className={`${crimsonPro.variable} font-serif text-sm text-black font-bold`}>
                          a.n Pipi Rahmadani
                          <br />
                          7152743728
                        </p>
                      </div>
                      <div className='mt-2'>
                        <button
                          onClick={handleClickCopy2}
                          className='text-sm w-35 text-white bg-emerald-900 hover:bg-emerald-700 rounded px-2 py-1 transition cursor-pointer'
                        >
                          <FontAwesomeIcon icon={faCopy} className="mr-2" />
                          {copied2 ? 'Berhasil disalin!' : 'Salin No. Rekening'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}
