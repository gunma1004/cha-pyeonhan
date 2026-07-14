'use client';

import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 장기렌터카 인기 차종 및 월 렌트료 데이터
  const cars = [
    { 
      id: 1, 
      category: '세단/베스트셀링',
      name: '디 올 뉴 그랜저', 
      condition: '48개월 / 무보증 기준',
      price: '월 480,000원~',
      imageUrl: 'diornewgranger.jpg' 
    },
    { 
      id: 2, 
      category: 'SUV/패밀리카',
      name: '쏘렌토 하이브리드', 
      condition: '48개월 / 무보증 기준',
      price: '월 520,000원~',
      imageUrl: 'sorantohybrid.jpg'
    },
    { 
      id: 3, 
      category: '프리미엄',
      name: '제네시스 G80', 
      condition: '48개월 / 선납금 30%',
      price: '월 590,000원~',
      imageUrl: 'genesisg80.jpg'
    },
    { 
      id: 4, 
      category: '가성비/사회초년생',
      name: '더 뉴 아반떼', 
      condition: '48개월 / 무보증 기준',
      price: '월 280,000원~',
      imageUrl: 'thenewaba1.jpg'
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-20 md:pb-0">
      {/* 1. 상단 네비게이션 */}
      <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md border-b-4 border-[#1e3a8a]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-[#1e3a8a] tracking-tight">
              차편한 장기렌터카
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6 text-base font-bold text-gray-700">
              <a href="#" className="hover:text-[#1e3a8a]">특가 차량</a>
              <a href="#" className="hover:text-[#1e3a8a]">장기렌트 혜택</a>
              <a href="#" className="hover:text-[#1e3a8a]">출고 후기</a>
            </nav>
            <a href="tel:1588-0000" className="bg-[#1e3a8a] text-white px-5 py-2 rounded-full font-bold flex items-center gap-2" title="전화 상담 연결">
              📞 1588-0000
            </a>
          </div>

          <button className="md:hidden text-[#1e3a8a]" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="메뉴 열기">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4 text-base font-bold shadow-lg">
            <a href="#" className="text-gray-800 p-2 bg-gray-50 rounded">특가 차량 안내</a>
            <a href="#" className="text-gray-800 p-2 bg-gray-50 rounded">장기렌트 혜택 알아보기</a>
            <a href="tel:1588-0000" className="bg-[#1e3a8a] text-white p-3 rounded text-center">📞 1588-0000 무료 상담</a>
          </div>
        )}
      </header>

      {/* 2. 장기렌트 특화 메인 히어로 배너 */}
      <section className="mt-16 relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/id/1070/1200/800" alt="차편한 장기렌터카 메인 배경 - 무보증 신차 장기렌트" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 px-4 py-24 md:py-32 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="inline-block bg-[#1e3a8a] text-white font-bold px-4 py-1 rounded-full mb-4 md:text-lg border border-blue-400">
            신용 심사 완화! 누구나 초기비용 0원 가능
          </div>
          {/* 네이버 SEO 핵심: 사이트의 가장 중요한 제목을 <h1>으로 변경 */}
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4 drop-shadow-lg">
            초기비용 부담 없는<br/>
            <span className="text-yellow-400">신차 장기렌터카</span>
          </h1>
          <p className="text-lg md:text-2xl font-medium text-gray-200 mb-8 drop-shadow">
            취등록세·보험료 ZERO / 사업자 100% 비용처리 / 로켓 당일출고
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#quote-form" className="w-full sm:w-auto bg-[#1e3a8a] hover:bg-blue-800 text-white text-xl font-bold py-4 px-8 rounded-lg shadow-xl text-center border-2 border-[#1e3a8a] transition">
              1분 최저가 견적받기
            </a>
          </div>
        </div>
      </section>

      {/* 3. 장기렌트의 4가지 핵심 혜택 */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-10 text-gray-900">왜 신차 장기렌트인가요?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition">
              <span className="block text-4xl mb-4">💰</span>
              <h3 className="font-bold text-lg text-gray-900 mb-2">초기비용 0원</h3>
              <p className="text-sm text-gray-600 break-keep">취등록세, 자동차세, 보험료 등 목돈 부담 없이 월 렌트료만 내세요.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition">
              <span className="block text-4xl mb-4">🛡️</span>
              <h3 className="font-bold text-lg text-gray-900 mb-2">사고 할증 無</h3>
              <p className="text-sm text-gray-600 break-keep">렌터카 전용 보험 가입으로 사고가 나도 개인 보험료 할증이 없습니다.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition">
              <span className="block text-4xl mb-4">💼</span>
              <h3 className="font-bold text-lg text-gray-900 mb-2">탁월한 절세 효과</h3>
              <p className="text-sm text-gray-600 break-keep">개인/법인 사업자는 매월 납부하는 렌트료 전액 비용 처리가 가능합니다.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition">
              <span className="block text-4xl mb-4">🛠️</span>
              <h3 className="font-bold text-lg text-gray-900 mb-2">편리한 차량 관리</h3>
              <p className="text-sm text-gray-600 break-keep">정비 옵션 선택 시, 주기적인 방문 점검 및 소모품 교체를 지원합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 장기렌트 인기 특가 차량 */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 mb-3">이달의 장기렌트 특가 차량</h2>
          <p className="text-gray-500">20여 개 금융사 렌트 조건을 실시간으로 비교해 최저가를 안내해 드립니다.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:-translate-y-1 transition duration-300">
              <div className="relative h-52 bg-gray-200">
                <img src={car.imageUrl} alt={`${car.name} 장기렌트 특가`} className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 bg-[#1e3a8a] text-white px-3 py-1 m-3 rounded font-bold text-sm shadow">
                  {car.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1 text-gray-900">{car.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{car.condition}</p>
                <div className="text-[#1e3a8a] font-black text-2xl mb-5">{car.price}</div>
                <a href="#quote-form" className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition">
                  무료 견적 확인
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 장기렌트 맞춤형 상담 폼 */}
      <section id="quote-form" className="bg-slate-100 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-200">
            <h2 className="text-3xl font-black text-center mb-3 text-[#1e3a8a]">장기렌트 1:1 맞춤 견적 신청</h2>
            <p className="text-center text-gray-600 mb-10">간단한 정보만 남겨주시면, 담당 매니저가 전국 최저가 견적을 산출해 드립니다.</p>
            
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
  <input type="hidden" name="access_key" value="50577aa5-eb51-4449-a684-21eb81db3918" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label htmlFor="customer_name" className="font-bold text-gray-700 text-sm">고객명 / 회사명</label>
                  <input type="text" id="customer_name" name="customer_name" required placeholder="홍길동" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 outline-none transition" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone_number" className="font-bold text-gray-700 text-sm">연락처</label>
                  <input type="tel" id="phone_number" name="phone_number" required placeholder="010-1234-5678" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 outline-none transition" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="car_model" className="font-bold text-gray-700 text-sm">관심 차종</label>
                  <input type="text" id="car_model" name="car_model" required placeholder="예: 그랜저 하이브리드" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 outline-none transition" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <label htmlFor="rent_period" className="font-bold text-gray-700 text-sm">희망 렌트 기간</label>
                  <select id="rent_period" name="rent_period" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 outline-none text-gray-700">
                    <option value="48개월">48개월 (가장 인기)</option>
                    <option value="60개월">60개월</option>
                    <option value="36개월">36개월</option>
                    <option value="24개월">24개월</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="initial_cost" className="font-bold text-gray-700 text-sm">초기비용 조건</label>
                  <select id="initial_cost" name="initial_cost" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-[#1e3a8a] focus:ring-2 focus:ring-blue-100 outline-none text-gray-700">
                    <option value="무보증">무보증 (초기비용 0원)</option>
                    <option value="보증금">보증금 (계약 만료 시 반환)</option>
                    <option value="선납금">선납금 (월 렌트료 낮춤)</option>
                    <option value="상담 후 결정">상담 후 결정</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="w-full bg-[#1e3a8a] text-white font-black text-xl py-5 rounded-lg hover:bg-blue-900 transition mt-6 shadow-lg">
                최저가 비교 견적 받기
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. 모바일 하단 고정 전화 버튼 */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 flex text-center font-bold">
        <a href="#" className="flex-1 bg-yellow-400 text-gray-900 py-4 flex justify-center items-center gap-2">
          카톡 상담
        </a>
        <a href="tel:1588-0000" className="flex-1 bg-[#1e3a8a] text-white py-4 flex justify-center items-center gap-2">
          📞 1588-0000
        </a>
      </div>

      {/* 7. 푸터 */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm mb-14 md:mb-0">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-2 font-bold text-gray-300">차편한 장기렌터카</p>
          <p className="mb-2">상호명: 차편한 | 대표: 최이정 | 사업자등록번호: 803-81-00107</p>
          <p className="mb-6">주소: 서울특별시 양천구 신월로 170 3층 304호 | 고객센터: 1588-0000 (평일 09:00 ~ 18:00)</p>
          <p>© 2026 차편한 장기렌터카. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}