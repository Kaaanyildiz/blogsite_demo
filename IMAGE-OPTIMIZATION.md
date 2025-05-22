# Next.js Görüntü Optimizasyonu Kılavuzu

Bu kılavuz, Next.js projenizdeki görüntüleri optimize etmek için gereken adımları ve en iyi uygulamaları içerir. Görüntü optimizasyonu, site hızını artırmanın ve Core Web Vitals skorlarınızı iyileştirmenin en etkili yollarından biridir.

## `next/image` Bileşeni Kullanımı

Next.js'nin dahili `Image` bileşeni, otomatik olarak görüntüleri optimize eder:

```tsx
import Image from 'next/image';

// Görüntü boyutu bilinen sabit görüntü
<Image 
  src="/images/profile.jpg" 
  alt="Profil resmi"
  width={640}
  height={480}
  quality={85} // Opsiyonel - 75 varsayılan değer
/>

// Fill modu ile kapsayıcı boyutuna uyan dinamik görüntü
<div style={{ position: 'relative', width: '100%', height: '300px' }}>
  <Image 
    src="/images/hero-image.jpg" 
    alt="Hero görüntüsü" 
    fill
    sizes="100vw" // Responsive görüntü için önemli
    style={{ objectFit: 'cover' }} // Görüntünün nasıl sığdırılacağını belirtir
  />
</div>
```

### `sizes` Özelliğini Doğru Kullanma

`sizes` özelliği, tarayıcıya farklı ekran boyutlarında görüntünün genişliğini bildirir, böylece en uygun kaynak seçilebilir:

```tsx
// Responsive layout için
<Image 
  src="/images/product.jpg" 
  alt="Ürün resmi" 
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

Bu, şu anlama gelir:
- Mobil cihazlarda (768px'e kadar): Görüntü viewport genişliğinin %100'ünü kaplar
- Tablet cihazlarda (768px-1200px arası): Görüntü viewport genişliğinin %50'sini kaplar
- Masaüstü cihazlarda (1200px üzeri): Görüntü viewport genişliğinin %33'ünü kaplar

## Önbelleğe Alma Stratejisi

`next.config.ts` dosyasında görüntü önbelleğe alma ayarlarını optimize edin:

```javascript
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60, // saniye cinsinden
    domains: ['örnek-cdn.com'], // Güvenilen harici kaynaklar
  },
};
```

## WebP ve AVIF Format Desteği

Next.js otomatik olarak WebP ve AVIF formatlarını destekler. Yapılandırma ayarlarını şu şekilde yapabilirsiniz:

```javascript
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};
```

## Görüntü Yükleme Optimizasyonu

### Lazy Loading

Tüm `next/image` bileşenleri varsayılan olarak lazy loading yapar. Eğer görüntünün hemen yüklenmesi gerekiyorsa (örneğin ilk ekranda görünen bir hero görüntüsü):

```tsx
<Image 
  src="/images/hero.jpg" 
  alt="Hero görüntüsü"
  width={1200}
  height={600}
  priority // Lazy yüklemeyi devre dışı bırakır, LCP görüntüleri için
/>
```

### Yer Tutucu (Placeholder)

Görüntü yüklenirken bir bulanık yer tutucu göstermek için:

```tsx
<Image 
  src="/images/product.jpg" 
  alt="Ürün görüntüsü"
  width={400}
  height={300}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAKBweIx4ZKCMhIy0rKDA8ZEE8Nzc8e1hdSWSRgJmWj4CMiqC05sOgqtqtiozI/8va7vX///+bwf////r/5v3/+P/bAEMBKy0tPDU8dkFBdviljKX4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+P/AABEIAAgAEAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAFBv/EAB0QAAICAgMBAAAAAAAAAAAAAAEDAAIEBRIhIjH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAQEBAQEAAAAAAAAAAAAAAAEAEgIh/9oADAMBAAIRAxEAPwCbx/UNRXc5jWtg0lLSvEk2UA7JPkQQe++QSIicc6//2Q=="
  // blurDataURL için düşük çözünürlüklü, base64 kodlanmış görüntü verisi veya 
  // 'data:image/svg+xml;base64,...' şeklinde bir SVG
/>
```

## Performansı İzleme

Görüntü optimizasyonunuzun etkisini izlemek için:

1. Lighthouse raporlarını takip edin
2. Core Web Vitals metriklerine dikkat edin:
   - Largest Contentful Paint (LCP)
   - Cumulative Layout Shift (CLS)

## SEO için En İyi Uygulamalar

1. Her zaman anlamlı `alt` açıklamaları ekleyin
2. Önemli görüntüler için doğru boyutlandırma kullanın
3. İlk görünüm alanında görünen kritik görüntüler için `priority` kullanın
4. İçerik türüne uygun görüntü formatları seçin (fotoğraflar için JPEG/WebP, illüstrasyonlar için PNG/SVG)

---

Bu kılavuzu takip ederek sitenizin hem SEO performansını hem de kullanıcı deneyimini önemli ölçüde iyileştirebilirsiniz.
