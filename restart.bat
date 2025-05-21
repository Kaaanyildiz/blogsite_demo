@echo off
echo Komut dosyasını çalıştırmadan önce emin olun ki:
echo 1. Tarayıcı önbelleğinizi temizlediniz
echo 2. Uygulama şu anda çalışmıyor
echo.
echo Uygulamayı başlatmak için herhangi bir tuşa basın...
pause > nul

cd c:\Users\Msi\BlogSite\blogsite

echo Eski önbellek klasörlerini temizleme
if exist .next rd /s /q .next
if exist .turbo rd /s /q .turbo
if exist node_modules\.cache rd /s /q node_modules\.cache

echo Uygulamayı başlatma
npm run dev

pause
