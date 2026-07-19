import CasinoCompare from '@/components/CasinoCompare';

export const metadata = {
  title: "Casino Karşılaştırma - Senkazan.pro",
  description: "Seçtiğiniz güvenilir casino sitelerini bonus, çevrim şartı, ödeme hızı, lisans ve yatırım limitleri açısından kafa kafaya karşılaştırın.",
};

export default function ComparisonPage() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <CasinoCompare />
    </main>
  );
}
