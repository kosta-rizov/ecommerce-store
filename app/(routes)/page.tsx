import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import getProduct from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

const HomePage = async (params: {storeId: string}) => {
  const productFeatured = await getProduct({ isFeatured: true });
  const billboard = await getBillboard("clt3lco1900016up50pr12ban");


  const allProducts = await getProducts({storeId: "clswfu7g60000a6usy5gt4t6u"})

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={productFeatured} />
        </div>

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="All Products" items={allProducts} />
        </div>
        
      </div>
    </Container>
  );
};

export default HomePage;
