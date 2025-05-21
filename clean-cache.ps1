$projectPath = "c:\Users\Msi\BlogSite\blogsite"

# Önbellek ve derleme klasörlerini kaldır
Write-Host "Önbelleği temizleme..." -ForegroundColor Yellow
if (Test-Path -Path "$projectPath\.next") {
    Remove-Item -Path "$projectPath\.next" -Recurse -Force
}
if (Test-Path -Path "$projectPath\.turbo") {
    Remove-Item -Path "$projectPath\.turbo" -Recurse -Force
}
if (Test-Path -Path "$projectPath\node_modules\.cache") {
    Remove-Item -Path "$projectPath\node_modules\.cache" -Recurse -Force
}

# Tarayıcı önbelleğini temizleme talimatı
Write-Host @"
Tarayıcı önbelleğinizi temizleyin:
1. Chrome/Edge: CTRL+SHIFT+DELETE tuşlarına basın ve "önbelleği temizle" seçeneğini işaretleyin
2. Firefox: CTRL+SHIFT+DELETE tuşlarına basın ve "çerezler ve site verisi" seçeneğini işaretleyin

Sonra uygulamayı normal modda (Turbopack olmadan) başlatmak için:
cd $projectPath
npm run dev

"@ -ForegroundColor Green
