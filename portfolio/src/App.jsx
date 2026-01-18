function App() {
  return (
    <div className="min-h-screen flex relative bg-white">
      {/* 왼쪽 1/6 파란색 영역 */}
      <div className="w-1/6 bg-blue-500" />

      {/* 오른쪽 5/6 흰색 영역 */}
      <div className="w-5/6 bg-white px-12 pt-40 pb-16">
        {/* 상단 가운데 프로필 (둥근 사진 + 이름 + 설명) */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          {/* 프로필 이미지 둥근 원 */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-200">
            <img
              src="/images/my-photo.jpg" // public/images/my-photo.jpg 에 본인 사진 파일을 두면 됩니다.
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 이름 */}
          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            채교준
          </h1>

          {/* 간단 소개 */}
          <p className="mt-1 text-sm text-gray-600 text-center">
            프론트엔드와 백엔드를 모두 다루는 개발자입니다. <br />
            사용자 경험과 깔끔한 코드를 중요하게 생각합니다.
          </p>
        </div>

        {/* 오른쪽 메인 내용 (기술 스택, 소개 등) */}
        <section className="max-w-3xl ml-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            기술 스택
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>JavaScript / TypeScript</li>
            <li>React, Vite</li>
            <li>Tailwind CSS</li>
            <li>Node.js, Spring Boot</li>
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-gray-900 mb-4">
            소개
          </h2>
          <p className="text-gray-700 leading-relaxed">
            사용자가 편하게 느끼는 UI와 유지보수하기 쉬운 구조를 고민하며 개발합니다.
            새로운 기술을 익히는 것을 좋아하고, 팀과의 협업을 중요하게 생각합니다.
          </p>
        </section>
      </div>
    </div>
  )
}

export default App
