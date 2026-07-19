import BonusCalculator from '@/components/BonusCalculator';

export const metadata = {
  title: "Bonus Hesaplayıcı - Senkazan.pro",
  description: "Yatırım tutarınıza ve bonus oranlarına göre ne kadar nakit kazanacağınızı ve tamamlamanız gereken çevrim şartlarını akıllı hesaplayıcımız ile anında görün.",
};

export default function CalculatorPage() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <BonusCalculator />
    </main>
  );
}
