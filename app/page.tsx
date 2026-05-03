"use client";

import { motion } from "framer-motion";

const FADE_IN_UP = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#333D4B] font-sans overflow-x-hidden selection:bg-[#0050FF]/10 selection:text-[#0050FF]">
      {/* Navigation - Toss Style */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-[#0050FF]">
            박건령
          </span>
          <div className="flex gap-6 text-sm font-semibold text-[#4E5968]">
            <a href="#about" className="hover:text-[#0050FF] transition-colors">소개</a>
            <a href="#vision" className="hover:text-[#0050FF] transition-colors">비전</a>
          </div>
        </div>
      </nav>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-6 py-20 md:py-40">
          <div className="max-w-screen-xl mx-auto">
            <motion.div
              {...FADE_IN_UP}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-[80px] font-bold leading-[1.1] tracking-tight mb-12">
                안녕하세요,<br />
                <span className="text-[#0050FF]">박건령</span>입니다.
              </h1>
              <p className="text-2xl md:text-4xl text-[#4E5968] leading-snug font-semibold">
                바이브 코딩 처음이지만<br />
                열심히 해보겠습니다!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cards Section */}
        <section id="about" className="px-6 py-32 bg-[#F9FAFB]">
          <div className="max-w-screen-xl mx-auto">
            <motion.div
              {...FADE_IN_UP}
              className="mb-20 text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">나를 표현하는 키워드</h2>
              <p className="text-xl text-[#6B7684] font-medium">단순한 코드 그 이상의 가치를 고민합니다.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Mango Card */}
              <motion.div
                {...FADE_IN_UP}
                transition={{ ...FADE_IN_UP.transition, delay: 0.1 }}
                className="group bg-white p-12 rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.06)] transition-all duration-700 ease-[0.16, 1, 0.3, 1] cursor-default border border-gray-50"
              >
                <div className="w-20 h-20 bg-[#FFF9E6] rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700">
                  <span className="text-4xl">🥭</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">망고 (Mango)</h3>
                <p className="text-xl text-[#6B7684] leading-relaxed font-medium">
                  달콤하고 상큼한 망고처럼,<br />
                  <span className="text-[#333D4B] font-bold">톡톡 튀는 아이디어</span>를 가진 개발자 지망생입니다.<br />
                  익숙한 것에서 새로움을 발견하는 즐거움을 즐깁니다.
                </p>
              </motion.div>

              {/* Happiness Card */}
              <motion.div
                {...FADE_IN_UP}
                transition={{ ...FADE_IN_UP.transition, delay: 0.3 }}
                className="group bg-white p-12 rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgb(0,0,0,0.06)] transition-all duration-700 ease-[0.16, 1, 0.3, 1] cursor-default border border-gray-50"
              >
                <div className="w-20 h-20 bg-[#E6F0FF] rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700">
                  <span className="text-4xl">😊</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">행복 (Happiness)</h3>
                <p className="text-xl text-[#6B7684] leading-relaxed font-medium">
                  코딩을 통해 <span className="text-[#0050FF] font-bold">사용자에게 행복</span>을 전달하고 싶습니다.<br />
                  불편함을 해결하는 기술이 곧 삶의 기쁨이 되는<br />
                  순간을 만들기 위해 매일 성장하고 있습니다.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision/Quote Section */}
        <section id="vision" className="px-6 py-40 bg-white">
          <div className="max-w-screen-xl mx-auto text-center">
            <motion.div {...FADE_IN_UP}>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12">
                "기술은 사람을 향해야 한다고 믿습니다."
              </h2>
              <div className="inline-flex items-center justify-center px-8 py-4 bg-[#0050FF] text-white rounded-full font-bold text-lg hover:bg-[#0045DB] transition-colors cursor-pointer shadow-lg shadow-blue-200">
                함께 성장하기
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-24 bg-[#F9FAFB] border-t border-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <div className="text-2xl font-bold text-[#0050FF] mb-6">박건령</div>
              <p className="text-lg text-[#6B7684] font-medium leading-relaxed">
                진심을 다해 코딩하며,<br />
                더 나은 세상을 꿈꿉니다.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-sm font-semibold text-[#8B95A1]">
              <span>© 2024. Park Gun-ryeong.</span>
              <span>Designed with Toss Style Inspiration</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
