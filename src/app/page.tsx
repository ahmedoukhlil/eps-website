import { Hero } from '@/components/sections/Hero';
import { FeaturedServicesSection } from '@/components/sections/FeaturedServicesSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ImageContentSection } from '@/components/sections/ImageContentSection';
import { CommunicationServices } from '@/components/sections/CommunicationServices';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { EquipmentSection } from '@/components/sections/EquipmentSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ClientLogosSection } from '@/components/sections/ClientLogosSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { fetchTestimonials, fetchPosts, fetchCategories } from '@/lib/wordpress';
import { convertAllTestimonials, convertAllPosts } from '@/lib/wordpress-adapters';
import { getGalleryImages } from '@/lib/gallery-utils';

export default async function Home() {
  // Récupérer les témoignages depuis WordPress
  // Note: WordPress désactivé par défaut. Activez-le en définissant NEXT_PUBLIC_WORDPRESS_URL dans .env.local
  let testimonials;
  let newsArticles;
  let galleryImages;

  /*
   * Pour activer WordPress:
   * 1. Créez un fichier .env.local
   * 2. Ajoutez: NEXT_PUBLIC_WORDPRESS_URL=https://votre-wordpress-reel.com/wp-json/wp/v2
   * 3. Décommentez le code ci-dessous
   */

  try {
    // Récupérer les témoignages
    const wpTestimonials = await fetchTestimonials();
    if (wpTestimonials && wpTestimonials.length > 0) {
    testimonials = convertAllTestimonials(wpTestimonials);
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des témoignages:', error);
    // Le composant utilisera les données de fallback
  }

  try {
    // Récupérer les articles d'actualités (posts WordPress)
    const wpPosts = await fetchPosts(3); // Récupérer les 3 plus récents
    if (wpPosts && wpPosts.length > 0) {
      // Récupérer les catégories pour mapper les IDs aux noms
      const wpCategories = await fetchCategories();
      const categoriesMap = new Map<number, string>();
      if (wpCategories) {
        wpCategories.forEach(cat => {
          categoriesMap.set(cat.id, cat.name);
        });
      }
      
      newsArticles = await convertAllPosts(wpPosts, categoriesMap);
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des actualités:', error);
    // Le composant utilisera les données de fallback
  }

  try {
    // Récupérer les images de galerie depuis WordPress
    galleryImages = await getGalleryImages(12); // Récupérer 12 images maximum
  } catch (error) {
    console.error('Erreur lors de la récupération des images de galerie:', error);
    // Le composant utilisera les données de fallback
  }

  return (
    <main>
      <Hero />
      <FeaturedServicesSection />
      <ServicesSection />
      <ImageContentSection />
      <CommunicationServices />
      <WhyChooseUs />
      <EquipmentSection />
      <ProcessSection />
      <ClientLogosSection />
      <NewsSection articles={newsArticles} />
      <Testimonials testimonials={testimonials} />
    </main>
  );
}