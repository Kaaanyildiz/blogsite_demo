'use client';

import Link from "next/link";
import { FaCalendar, FaTag, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Bu kısım normalde gerçek veritabanından veya CMS'den alınır
  // Şimdilik statik örnek içerik oluşturuyoruz
    const post = {
    slug: params.slug,
    title: "Flutter'da State Management",
    date: "15 Mayıs 2025",
    author: "Yazılım Geliştiricisi",
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

  // Burada normalde markdown veya HTML içeriği ayrıştırılır
  const renderedContent = (
    <div dangerouslySetInnerHTML={{ __html: post.content }} />
  );  return (
    <>
      <section className="bg-gradient-to-b from-primary/10 to-transparent py-32 relative overflow-hidden">
        {/* Dekoratif arka plan elementleri */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-10 -left-24 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-card border border-border/40 px-4 py-2 font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              <FaArrowLeft className="h-4 w-4" /> Tüm Yazılar
            </Link>
          </motion.div>
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            {post.title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-4 mb-6 text-foreground/60"
          >
            <div className="flex items-center gap-2">
              <FaCalendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  <FaTag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
            
      <article className="container mx-auto -mt-10 mb-24 max-w-3xl bg-card rounded-2xl shadow-xl p-8 md:p-12 relative z-10 border border-border/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-p:text-foreground/80 prose-pre:bg-muted prose-pre:text-foreground max-w-none"
        >
          {renderedContent}
        </motion.div>

        <div className="mt-12 rounded-lg border border-border p-6">
          <h3 className="mb-4 text-xl font-bold">Bu yazı hakkında ne düşünüyorsunuz?</h3>
          <p className="mb-4 text-foreground/80">
            Sorularınız veya yorumlarınız varsa, aşağıdaki iletişim kanalları üzerinden benimle paylaşabilirsiniz.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:iletisim@email.com"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
            >
              E-posta Gönder
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-[#1DA1F2] px-4 py-2 text-sm font-medium text-white hover:bg-[#1DA1F2]/90"
            >
              Twitter&apos;da Paylaş
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 text-2xl font-bold">İlgili Yazılar</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="card p-5">
              <h4 className="mb-2 font-bold">Flutter&apos;da Animasyonlar</h4>
              <p className="mb-3 text-sm text-foreground/70">
                Flutter&apos;da kullanıcı deneyimini geliştiren animasyon teknikleri.
              </p>
              <Link
                href="/blog/flutter-animasyonlar"
                className="text-sm font-medium text-primary hover:underline"
              >
                Yazıyı Oku
              </Link>
            </div>
            <div className="card p-5">
              <h4 className="mb-2 font-bold">Next.js ile Blog Sitesi Oluşturma</h4>
              <p className="mb-3 text-sm text-foreground/70">
                Modern bir blog sitesi oluşturmak için Next.js kullanım adımları.
              </p>
              <Link
                href="/blog/nextjs-blog-sitesi"
                className="text-sm font-medium text-primary hover:underline"
              >
                Yazıyı Oku
              </Link>
            </div>
            <div className="card p-5">
              <h4 className="mb-2 font-bold">Git ile Etkili Versiyon Kontrolü</h4>
              <p className="mb-3 text-sm text-foreground/70">
                Projelerinizde Git&apos;i daha etkili kullanmak için ipuçları ve stratejiler.
              </p>
              <Link
                href="/blog/git-versiyon-kontrolu"
                className="text-sm font-medium text-primary hover:underline"
              >
                Yazıyı Oku
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
