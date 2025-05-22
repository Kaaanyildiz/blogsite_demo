import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export async function GET(request: Request) {  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title')?.slice(0, 100) || 'YazılımDev';
    
    // Font dosyası için alternatif çözüm
    // Not: assets içinde Geist-SemiBold.otf dosyası olmalıdır
    // Eğer font dosyası bulunamazsa, varsayılan fontları kullan
    let fontData;
    try {
      fontData = await fetch(
        new URL('../../../assets/Geist-SemiBold.otf', import.meta.url)
      ).then((res) => res.arrayBuffer());
    } catch (e) {
      console.warn('Font dosyası bulunamadı, varsayılan font kullanılıyor');
      // Font yükleme hatası olduğunda sessizce devam et
    }    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Arka plan efektleri */}
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              filter: 'blur(60px)',
              zIndex: '1',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-100px',
              left: '-100px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              filter: 'blur(60px)',
              zIndex: '1',
            }}
          />
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: '10',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <div 
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: 'rgba(255,255,255,0.9)',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              YazılımDev
            </div>
            <div
              style={{
                fontSize: title.length > 50 ? '48px' : '64px',
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'white',
                lineHeight: 1.2,
                marginBottom: '20px',
                padding: '0 20px',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: '24px',
                color: 'rgba(255,255,255,0.8)',
                marginTop: '10px',
              }}
            >
              yazilimdev.com
            </div>
          </div>
          
          {/* Alt bilgi */}
          <div
            style={{
              position: 'absolute',
              bottom: '30px',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {/* Yazarı burada gösterebilirsiniz */}
          </div>
        </div>
      ),      {
        width: 1200,
        height: 630,
        fonts: fontData ? [
          {
            name: 'Geist',
            data: fontData,
            style: 'normal',
          },
        ] : undefined, // Eğer font yoksa, varsayılan fontları kullan
      }
    );  } catch (e: any) {
    console.log(`${e?.message || 'Unknown error'}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
