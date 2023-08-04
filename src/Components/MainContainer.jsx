import ProductItem from "./ProductItem";

const MainContainer = () => {
  const products = [
    {
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple', 
      imageUrl: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      isSale: true
    },
    {
      title: 'iPhone x',
      description: 'IM-Free, Model A19211 6.5-inch Super Retina HD display with OLED', 
      imageUrl: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      isSale: true
    },
    {
      title: 'Samsung Universe 9',
      description: 'Samsung\'s new variant that go beyond galaxy to the Universe', 
      imageUrl: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
      isSale: false
    },
    {
      title: 'OPPOF19',
      description: 'OPPO F19 is officially announced on April 2021.', 
      imageUrl: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
      isSale: true
    },
    {
      title: 'Huawei P30',
      description: 'Huawei\'s rebadged P30 Pro New Edition was officially unvieled yesterday in Germany and now the device has made its way to the UK.', 
      imageUrl: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
      isSale: false
    }
  ]

  const ProductItemList = products.map(
    product => <ProductItem title={product.title} description={product.description} imageUrl={product.imageUrl} isSale={product.isSale}/>
    )

  return (
    <>
    <div className="d-flex">
      {ProductItemList}
    </div>
    
    </>
   
  )
};

export default MainContainer;