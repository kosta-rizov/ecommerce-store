import getBillboard from "@/actions/get-billboard";
import getProduct from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

const HomePage = async () => {
  const productFeatured = await getProduct({ isFeatured: true });
  const billboard = await getBillboard("clt3lco1900016up50pr12ban");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={productFeatured} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
