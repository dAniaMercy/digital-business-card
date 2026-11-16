const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  const data = {
    name: 'Беляков Даниил Игоревич',
    description: 'Backend-разработчик с коммерческим опытом более двух лет. Разрабатываю Telegram-ботов и Mini App, веб-сервисы и автоматизацию: от проектирования базы данных до развёртывания и сопровождения.',
    links: { create: [{ label: 'GitHub', url: 'https://github.com/dAniaMercy' }, { label: 'Telegram', url: 'https://t.me/Danya_manul' }] },
    skills: { create: ['Python', 'C#', 'SQL', 'JavaScript', 'PHP', 'PostgreSQL', 'MS SQL', 'Redis', 'ASP.NET Core', 'aiogram', 'SQLAlchemy', 'REST API', 'Docker', 'Docker Compose', 'Linux', 'Git'].map(name => ({ name })) },
    experience: { create: [
      { company: 'МЕХАНОТРОНИКА РА', position: 'Web-разработчик (ASP.NET Core)', period: 'май 2024 — август 2026', achievements: ['Разработал систему мониторинга серверов для Linux и Windows.', 'Реализовал сбор и кеширование метрик, обновление приложения и развёртывание как systemd-сервиса.', 'Проектировал структуру хранения и оптимизировал SQL-запросы.'] },
      { company: 'Sengin Agency', position: 'Разработчик, системный администратор', period: 'июнь 2026 — настоящее время', achievements: ['Самостоятельно разработал и запустил корпоративный сайт.', 'Реализовал форму обратной связи и уведомления; настроил хостинг и домен.'] },
    ] },
    projects: { create: [
      { name: 'Dota Plus', description: 'Telegram Mini App для игроков Dota 2; аудитория — 11 000 пользователей. Архитектура, backend, база данных и сопровождение.', url: 'https://t.me/mydotaplus_bot' },
      { name: 'P2P-платформа в Telegram', description: 'Два бота для сделок с эскроу-логикой и административного управления.', url: null },
      { name: 'MaskAdmin', description: 'Техническое задание и архитектурная документация административной панели веб-продукта.', url: null },
      { name: 'Sengin Agency', description: 'Корпоративный сайт и форма обратной связи.', url: 'https://senginagency.com' },
    ] },
  };
  await prisma.$transaction(async tx => {
    const existing = await tx.profile.findUnique({ where: { id: 1 } });
    if (!existing) await tx.profile.create({ data: { id: 1, ...data } });
  });
}
main().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => prisma.$disconnect());
