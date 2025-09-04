import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности - ООО «Нарпромсервис»',
  description: 'Политика обработки персональных данных ООО «Нарпромсервис». Узнайте о том, как мы обрабатываем и защищаем ваши персональные данные.',
  keywords: 'политика конфиденциальности, персональные данные, обработка данных, защита информации, ООО Нарпромсервис',
  openGraph: {
    title: 'Политика конфиденциальности - ООО «Нарпромсервис»',
    description: 'Политика обработки персональных данных ООО «Нарпромсервис»',
    type: 'website',
    url: 'https://narpromservice.ru/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
