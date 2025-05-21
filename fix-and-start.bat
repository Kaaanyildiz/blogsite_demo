@echo off
echo "Eksik bağımlılıkları yüklüyorum..."
cd c:\Users\Msi\BlogSite\blogsite
npm install --save-dev autoprefixer postcss
echo "Bağımlılıklar yüklendi."
echo "Şimdi Uygulamayı başlatmak için herhangi bir tuşa basın..."
pause > nul

echo Eski önbellek klasörlerini temizleme
if exist .next rd /s /q .next
if exist .turbo rd /s /q .turbo
if exist node_modules\.cache rd /s /q node_modules\.cache

echo Uygulamayı başlatma
npm run dev

pause
