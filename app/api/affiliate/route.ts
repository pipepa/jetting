import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Отримуємо дані, надіслані Impact.com
    const data = await request.json();
    console.log('Отримані дані від Impact.com:', data); // Логування даних

    // Визначаємо цільовий API (afficone.com)
    const targetUrl = 'https://afficone.com/';

    // Надсилаємо оброблені дані на цільовий API
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Передаємо отримані дані без змін
    });

    // Перевіряємо статус відповіді
    if (!response.ok) {
      throw new Error(`Помилка при надсиланні даних: ${response.statusText}`);
    }

    console.log('Дані успішно переслані на afficone.com');

    // Повертаємо відповідь Impact.com
    return NextResponse.json({ message: 'Webhook оброблено успішно' });
  } catch (error) {
    console.error('Помилка обробки вебхука:', error);

    // Повертаємо помилку
    return NextResponse.json(
      { error: 'Виникла помилка під час обробки вебхука' },
      { status: 500 }
    );
  }
}

