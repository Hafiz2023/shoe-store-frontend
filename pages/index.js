import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrendingProducts from "@/components/TrendingProducts";
import Testimonials from "@/components/Testimonials";
import SpotlightCollections from "@/components/SpotlightCollections";
import Newsletter from "@/components/Newsletter";
import FeatureSection from "@/components/FeatureSection";

const Home = ({ products }) => {
    // Only verify "customer reviews" client-side to avoid hydration issues if randomization was needed, 
    // but here we use static data for simplicity.

    return (
        <main>
            {/* 1. Hero Banner: The main slider showing featured promotions */}
            <HeroBanner />

            {/* 2. Why Choose Us: Trust indicators like free shipping, returns, etc. */}
            <WhyChooseUs />

            <Wrapper>
                {/* 3. Feature Section: Highlights specific product technology (Cushioning) */}
                <FeatureSection />

                {/* 4. Trending Products: A carousel of popular items */}
                <TrendingProducts products={products} />

                {/* 5. New Arrivals: The main grid of all latest products */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold font-oswald uppercase">New Arrivals</h2>
                    <div className="w-16 h-1 bg-black mx-auto mt-2"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 px-5 md:px-0">
                    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                </div>
            </Wrapper>

            {/* 6. Testimonials: Customer reviews slider */}
            <Testimonials />

            {/* 7. Spotlight Collections: Featured categories (Jordan, Running, Sneakers) */}
            <SpotlightCollections />

            {/* 8. Newsletter: Subscription form */}
            <Newsletter />
        </main>
    );
};

export default Home;

export async function getStaticProps() {
    const products = await fetchDataFromApi("/api/products?populate=*");

    return {
        props: { products },
    };
}
