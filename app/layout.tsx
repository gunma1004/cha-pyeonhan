import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// 네이버 SEO (검색 최적화) 세팅
export const metadata: Metadata = {
  title: "차편한 장기렌터카 | 초기비용 0원 무보증 전국 최저가 비교",
  description: "신용 심사 완화! 그랜저, 쏘렌토 등 신차 장기렌터카 20개 금융사 실시간 비교 견적. 취등록세, 보험료 0원. 로켓 당일출고 및 맞춤 상담 제공.",
  keywords: "장기렌터카, 신차장기렌트, 무보증장기렌트, 장기렌트카비교, 장기렌트카견적, 차편한",
  openGraph: {
    title: "차편한 장기렌터카 - 무보증 0원 장기렌트",
    description: "초기비용 부담 없는 신차 장기렌터카. 1분 만에 전국 최저가 맞춤 견적을 받아보세요.",
    url: "https://https://cha-pyeonhan.netlify.app/", // 여기에 실제 Netlify 주소를 넣으세요!
    siteName: "차편한 장기렌터카",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}