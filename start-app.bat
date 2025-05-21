@echo off
echo Uygulamayı başlatmak için önbellek temizleniyor...

:: Önbelleği temizle
if exist .next (
  echo .next klasörünü siliniyor...
  rmdir /s /q .next
)

if exist .turbo (
  echo .turbo klasörünü siliniyor...
  rmdir /s /q .turbo
)

echo Önbellek temizlendi!
echo Uygulamayı başlatma...

:: Uygulamayı başlat
npm run dev

pause
