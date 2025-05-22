import { Metadata } from "next";
import { BlogClient } from "@/components/blog/blog-client-fixed";
import RelatedArticlesJsonLd from "@/components/blog/related-articles-jsonld";
import BlogJsonLd from "@/components/blog/blog-jsonld";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Script from "next/script";

type Props = {
  params: { slug: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostData(params.slug);
  
  // ISO tarih formatına dönüştürme
  const dateStr = post.date;
  const dateParts = dateStr.split(' ');
  const months: Record<string, string> = {
    'Ocak': '01', 'Şubat': '02', 'Mart': '03', 'Nisan': '04', 'Mayıs': '05', 'Haziran': '06',
    'Temmuz': '07', 'Ağustos': '08', 'Eylül': '09', 'Ekim': '10', 'Kasım': '11', 'Aralık': '12'
  };
  const isoDate = `${dateParts[2]}-${months[dateParts[1] || 'Ocak']}-${dateParts[0].padStart(2, '0')}`;
  
  return {
    title: `${post.title} - YazılımDev Blog`,
    description: post.excerpt || "YazılımDev Blog yazısı",
    alternates: {
      canonical: `https://yazilimdev.com/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || "YazılımDev Blog yazısı",
      type: "article",
      url: `https://yazilimdev.com/blog/${params.slug}`,
      publishedTime: isoDate,
      modifiedTime: new Date().toISOString().split('T')[0],
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: `https://yazilimdev.com/api/og?title=${encodeURIComponent(post.title)}`,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || "YazılımDev Blog yazısı",
      images: [`https://yazilimdev.com/api/og?title=${encodeURIComponent(post.title)}`]
    }
  };
}

function getPostData(slug: string) {
  // Bu kısım normalde gerçek veritabanından veya CMS'den alınır
  // Şimdilik statik örnek içerik oluşturuyoruz
  return {
    slug: slug,
    title: "Flutter'da State Management",
    date: "15 Mayıs 2025",
    author: "Yazılım Geliştiricisi",
    excerpt: "Flutter uygulamalarında durum yönetimi için farklı yaklaşımların karşılaştırılması.",
    tags: ["Flutter", "State Management", "Provider"],
    content: `
      <p>Flutter'da durum yönetimi (state management), uygulamanızın verilerini etkili bir şekilde yönetmenize ve kullanıcı arayüzünüzün bu verilere tepki vermesini sağlamanıza olanak tanır. Bu yazıda, Flutter'da kullanabileceğiniz farklı durum yönetimi yaklaşımlarını inceleyeceğiz.</p>

      <h2>setState() ile Temel Durum Yönetimi</h2>
      <p>Flutter'da en temel durum yönetimi mekanizması <code>setState()</code> metodunu kullanmaktır. Bu, yerel widget durumunu güncellemek için kullanılan basit bir yaklaşımdır:</p>

      <pre><code>
// Örnek kod olarak gösteriliyor
class CounterWidget extends StatefulWidget {
  // Örnek kod, burada gerçekten çalıştırılmıyor
  createState() => CounterWidgetState();
}

class CounterWidgetState {
  int counter = 0;

  void incrementCounter() {
    // setState örneği
    counter++;
  }

  Widget build() {
    // Örnek yapı
    return "Column Widget";
  }
}
      </code></pre>

      <p>Bu yaklaşım küçük uygulamalar için uygun olsa da, uygulama büyüdükçe karmaşıklaşır ve yönetilmesi zorlaşır.</p>

      <h2>Provider Paketi</h2>
      <p>Provider, Flutter ekibi tarafından tavsiye edilen, InheritedWidget'ı temel alan bir durum yönetimi çözümüdür. Kullanımı basit ve etkilidir:</p>

      <pre><code>
// Model sınıfı örneği
class CounterModelExample {
  int counter = 0;

  void increment() {
    counter++;
    // notifyListeners();
  }
}

// Ana uygulama örneği
// Burada gerçekten çalıştırılabilir kod değil,
// sadece örnek olarak gösteriliyor
void mainExample() {
  // Provider örneği
}
      </code></pre>

      <h2>Bloc Pattern</h2>
      <p>BLoC (Business Logic Component), iş mantığını kullanıcı arayüzünden ayıran reaktif bir yaklaşımdır. Event'leri girdi olarak alır ve State'leri çıktı olarak verir.</p>

      <h2>GetX</h2>
      <p>GetX, hafif ve güçlü bir durum yönetimi çözümüdür. Çok az kod gerektirmesi ve performans odaklı olmasıyla bilinir.</p>

      <h2>Riverpod</h2>
      <p>Provider'ın geliştiricisi tarafından oluşturulan Riverpod, Provider'ın sınırlamalarını aşmak için tasarlanmıştır. Daha güvenli tip sistemi ve daha fazla esneklik sunar.</p>

      <h2>Hangisini Seçmelisiniz?</h2>
      <p>Durum yönetimi yaklaşımını seçerken, uygulamanızın karmaşıklığını, ekip deneyimini ve bakım gereksinimlerini göz önünde bulundurmalısınız:</p>

      <ul>
        <li>Küçük uygulamalar için <code>setState()</code> yeterli olabilir.</li>
        <li>Orta ölçekli uygulamalar için Provider iyi bir seçenektir.</li>
        <li>Büyük ve karmaşık uygulamalar için Bloc, GetX veya Riverpod düşünülebilir.</li>
      </ul>

      <p>Sonuç olarak, Flutter'da durum yönetimi için tek bir "doğru" yaklaşım yoktur. Uygulamanızın ihtiyaçlarına en uygun çözümü seçmek önemlidir.</p>
    `,
  };
}

export default function BlogPost({ params }: Props) {
  const post = getPostData(params.slug);
  
  // İlgili yazıları simüle ediyoruz (normalde bir API'den veya veritabanından gelirdi)
  const relatedPosts = [
    {
      id: "flutter-animasyonlar",
      title: "Flutter'da Animasyonlar",
      excerpt: "Flutter'da kullanıcı deneyimini geliştiren animasyon teknikleri."
    },
    {
      id: "nextjs-blog-sitesi",
      title: "Next.js ile Blog Sitesi Oluşturma",
      excerpt: "Modern bir blog sitesi oluşturmak için Next.js kullanım adımları."
    },
    {
      id: "git-versiyon-kontrolu",
      title: "Git ile Etkili Versiyon Kontrolü",
      excerpt: "Projelerinizde Git'i daha etkili kullanmak için ipuçları ve stratejiler."
    },
  ];
  return (
    <>
      <BlogClient post={post} />
      
      {/* İlişkili içerikler için yapılandırılmış veri */}
      <RelatedArticlesJsonLd posts={relatedPosts} currentPostSlug={params.slug} />
      
      {/* Blog yazısı için JSON-LD yapılandırılmış verisi */}
      <BlogJsonLd post={post} slug={params.slug} />
      
      {/* Ana blog sitesi için Schema.org yapılandırılmış verisi */}
      <Script
        id="blog-website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "YazılımDev Blog",
            "url": "https://yazilimdev.com",
            "description": "Yazılım geliştirme deneyimleri ve projeleri içeren kişisel web sitesi",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://yazilimdev.com/blog?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  );
}
