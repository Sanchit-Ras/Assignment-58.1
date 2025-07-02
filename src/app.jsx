import React,{useState} from 'react'
import ProductList from './ProductList.jsx'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {Routes,Route} from "react-router"
import ProductDetail from "./ProductDetail.jsx"
export default function App(){
  const [sort,setSort] = useState("default");
  const [query,setQuery] = useState('');
  function handelSearch(event){
    setQuery(event.target.value);
  }
  function handelSort(event){
    setSort(event.target.value);
  }
  let allData=[
                { image:"https://th.bing.com/th/id/OIP.dK8MRpTDeo9cUaY7uoXMwgHaLG?rs=1&pid=ImgDetMain",
                  title:"Mug",
                  description:"Coffee Mug",
                  price:"5.22",
                  sale:"No",
                  saleprice:"0"
                },
                {
                  image:"https://cdn.pixabay.com/photo/2024/02/06/18/10/ai-generated-8557635_1280.jpg",
                  title:"T-Shirt",
                  description:"White T-Shirt",
                  price:"7.99",
                  sale:"Sale",
                  saleprice:"$10.00", 
                },
                {
                  image:"https://th.bing.com/th/id/OIP.dK8MRpTDeo9cUaY7uoXMwgHaLG?rs=1&pid=ImgDetMain",
                  title:"Mug",
                  description:"Coffee Mug",
                  price:"5.22",
                  sale:"No",
                  saleprice:"0"
                },
                {
                  image:"https://img.freepik.com/premium-photo/tshirt-mockup_925962-903.jpg",
                  title:"T-Shirt",
                  description:"Printed T-Shirt",
                  price:"10.00",
                  sale:"No",
                  saleprice:"0"
                },
                {
                  image:"https://th.bing.com/th/id/OIP.dK8MRpTDeo9cUaY7uoXMwgHaLG?rs=1&pid=ImgDetMain",
                  title:"Mug",
                  description:"Coffee Mug",
                  price:"5.22",
                  sale:"No",
                  saleprice:"0"
                },
                {
                  image:"https://cdn.shopify.com/s/files/1/0549/3535/5606/files/HP163S911_450x.jpg?v=1693556287",
                  title:"Toy",
                  description:"RC Car",
                  price:"16.00",
                  sale:"Sale",
                  saleprice:"$20.99"
                },
                {
                  image:"https://th.bing.com/th/id/OIP.dK8MRpTDeo9cUaY7uoXMwgHaLG?rs=1&pid=ImgDetMain",
                  title:"Mug",
                  description:"Coffee Mug",
                  price:"5.22",
                  sale:"Sale",
                  saleprice:"$7.00"
                },
                {
                  image:"https://th.bing.com/th/id/OIP.dK8MRpTDeo9cUaY7uoXMwgHaLG?rs=1&pid=ImgDetMain",
                  title:"Mug",
                  description:"Coffee Mug",
                  price:"5.22",
                  sale:"Sale",
                  saleprice:"$7.00"
                },
                {
                  image:"https://th.bing.com/th/id/OIP.dK8MRpTDeo9cUaY7uoXMwgHaLG?rs=1&pid=ImgDetMain",
                  title:"Mug",
                  description:"Coffee Mug",
                  price:"5.22",
                  sale:"No",
                  saleprice:"0"
                }
              ];
  let filterData=allData.filter(item=>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
  let data=[...filterData];
  if(sort==="lowTohigh"){
    data.sort((a,b)=>{
      const price1=+a.price;
      const price2=+b.price;
      return price1-price2;
    })
  }
  if(sort==="highTolow"){
    data.sort((a,b)=>{
      const price1=+a.price;
      const price2=+b.price;
      return price2-price1;
    })
  }
  if(sort==="title"){
    data.sort((a,b)=>{
      const title1=a.title;
      const title2=b.title;
      return title1<title2?-1:1;
    })
  }
  
  
  return (
    <div className="flex flex-col items-center w-full md:justify-between min-h-screen">
      <Header />
      <Routes>
        <Route path="/product/1" element={<ProductDetail></ProductDetail>}></Route>
        <Route index element={<ProductList products={data}
                   sortVal={sort}
                   onSortChange={handelSort}
                   onSearch={handelSearch}
                                />}></Route>
      </Routes> 
      <Footer />
    </div>
  )
}