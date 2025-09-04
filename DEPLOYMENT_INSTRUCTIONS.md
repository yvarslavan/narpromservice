# Инструкция по развертыванию проекта NAR Prom Service

## 🚀 Быстрый деплой после обновления файлов

### 1. **Подключение к серверу**
```bash
ssh root@your-server-ip
cd /var/www/narpromservice
```

### 2. **Остановка текущих процессов**
```bash
# Проверяем, что запущено на порту 3000
netstat -tulpn | grep :3000

# Останавливаем все процессы на порту 3000
sudo kill -9 $(lsof -t -i:3000)

# Или останавливаем все node процессы
pkill -f node

# Если используешь PM2
pm2 stop all
pm2 delete all
```

### 3. **Очистка кэша Next.js**
```bash
# Удаляем папку сборки
rm -rf .next

# Очищаем npm кэш (опционально)
npm cache clean --force
```

### 4. **Установка зависимостей**
```bash
# Устанавливаем/обновляем зависимости
npm install

# Проверяем, что все установилось
npm list --depth=0
```

### 5. **Сборка проекта**
```bash
# Создаем production сборку
npm run build

# Проверяем успешность сборки
echo "Build completed successfully!"
```

### 6. **Запуск сервера**

#### **Вариант A: Прямой запуск**
```bash
# Запускаем в production режиме
npm start

# Проверяем, что сервер запустился
curl http://localhost:3000
```

#### **Вариант B: Через PM2 (рекомендуется)**
```bash
# Устанавливаем PM2 глобально (ТОЛЬКО ПРИ ПЕРВОЙ УСТАНОВКЕ!)
npm install -g pm2

# Запускаем приложение через PM2
pm2 start npm --name "narpromservice" -- start

# Сохраняем конфигурацию PM2
pm2 save

# Проверяем статус
pm2 status
pm2 logs narpromservice
```

## 🔧 Управление через PM2

### **Установка PM2 (только один раз):**
```bash
# Устанавливаем PM2 глобально на сервере
npm install -g pm2

# Настраиваем автозапуск при перезагрузке сервера
pm2 startup
pm2 save
```

### **Основные команды PM2 (после установки):**
```bash
# Запуск
pm2 start narpromservice

# Остановка
pm2 stop narpromservice

# Перезапуск
pm2 restart narpromservice

# Перезагрузка
pm2 reload narpromservice

# Просмотр логов
pm2 logs narpromservice

# Мониторинг
pm2 monit

# Статус всех процессов
pm2 status
```

### 7. **Проверка работоспособности**
```bash
# Проверяем, что сервер отвечает
curl -I http://localhost:3000

# Проверяем логи (если используешь PM2)
pm2 logs narpromservice --lines 50

# Проверяем использование портов
netstat -tulpn | grep :3000
```

## 🚨 Решение проблем

### **Проблема: Порт 3000 занят**
```bash
# Находим процесс
lsof -i :3000

# Убиваем процесс
sudo kill -9 <PID>

# Или перезапускаем через PM2
pm2 restart narpromservice
```

### **Проблема: Ошибки сборки**
```bash
# Очищаем кэш и пересобираем
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### **Проблема: Зависимости не установились**
```bash
# Очищаем npm кэш
npm cache clean --force

# Переустанавливаем зависимости
rm -rf node_modules package-lock.json
npm install
```

## 📁 Структура файлов для обновления

### **Основные компоненты:**
```
/var/www/narpromservice/
├── components/sections/NewsSection.tsx
├── components/ui/Card.tsx
├── components/ui/ImageModal.tsx
├── app/news/fountain-construction/page.tsx
└── public/videos/
    ├── fountain-construction-1.mp4
    ├── fountain-construction-2.mp4
    ├── fountain-construction-3.mp4
    ├── fountain-construction-4.mp4
    └── fountain-construction-5.mp4
```

## 🎯 Полный скрипт деплоя

Создайте файл `deploy.sh` на сервере:

```bash
#!/bin/bash
echo "🚀 Starting deployment..."

# Проверяем, установлен ли PM2
if ! command -v pm2 &> /dev/null; then
    echo "⚠️  PM2 не установлен. Устанавливаем..."
    npm install -g pm2
    pm2 startup
fi

# Остановка процессов
echo "🛑 Stopping processes..."
pkill -f node
sleep 2

# Очистка кэша
echo "🧹 Cleaning cache..."
rm -rf .next

# Установка зависимостей
echo "📦 Installing dependencies..."
npm install

# Сборка
echo "🔨 Building project..."
npm run build

# Запуск через PM2
echo "🚀 Starting with PM2..."
pm2 start npm --name "narpromservice" -- start
pm2 save

echo "✅ Deployment completed!"
pm2 status
```

### **Использование скрипта:**
```bash
chmod +x deploy.sh
./deploy.sh
```

## 🔍 Мониторинг после деплоя

### **Проверка логов:**
```bash
# Логи PM2
pm2 logs narpromservice --lines 100

# Системные логи
journalctl -u narpromservice -f

# Проверка доступности
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
```

### **Проверка производительности:**
```bash
# Использование памяти
pm2 monit

# Системные ресурсы
htop
free -h
df -h
```

## 📝 Чек-лист деплоя

- [ ] Подключился к серверу
- [ ] Остановил старые процессы
- [ ] Очистил кэш Next.js
- [ ] Установил зависимости
- [ ] Успешно собрал проект
- [ ] Запустил сервер
- [ ] Проверил работоспособность
- [ ] Проверил логи на ошибки
- [ ] Убедился, что новости отображаются
- [ ] Проверил работу модального окна для видео

## 🆘 Экстренное восстановление

Если что-то пошло не так:

```bash
# Откат к предыдущей версии (если используешь Git)
git reset --hard HEAD~1

# Или восстановление из бэкапа
cp -r backup/narpromservice /var/www/

# Перезапуск сервера
reboot
```

---

**Примечание:** Всегда делайте бэкап перед деплоем!
```bash
cp -r /var/www/narpromservice /var/www/narpromservice.backup.$(date +%Y%m%d_%H%M%S)
```
