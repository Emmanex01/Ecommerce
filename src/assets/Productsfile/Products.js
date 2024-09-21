import A1 from './../ProductsImages/Acc1.jpg';
import A2 from './../ProductsImages/Acc2.jpg';
import A3 from './../ProductsImages/Acc3.jpg';
import A4 from './../ProductsImages/Acc4.jpg';
import A5 from './../ProductsImages/Acc5.jpg';
import A6 from './../ProductsImages/Acc6.jpg';
import A7 from './../ProductsImages/Acc7.jpg';
import A8 from './../ProductsImages/Acc8.jpg';
import A9 from './../ProductsImages/Acc9.jpg';
import A10 from './../ProductsImages/Acc10.jpg';
import A11 from './../ProductsImages/Acc11.jpg';
import C1 from './../ProductsImages/cell1.jpg';
import C2 from './../ProductsImages/cell2.jpg';
import C3 from './../ProductsImages/cell3.jpg';
import C4 from './../ProductsImages/cell4.jpg';
import C5 from './../ProductsImages/cell5.jpg';
import C6 from './../ProductsImages/cell6.jpg';
import C7 from './../ProductsImages/cell7.jpg';
import C8 from './../ProductsImages/cell8.jpg';
import CH1 from './../ProductsImages/chair1.jpg';
import CH2 from './../ProductsImages/chair2.jpg';
import CH3 from './../ProductsImages/chair3.jpg';
import CH4 from './../ProductsImages/chair4.jpg';
import CH5 from './../ProductsImages/chair5.jpg';
import G1 from './../ProductsImages/gen1.jpg';
import G2 from './../ProductsImages/gen2.jpg';
import G3 from './../ProductsImages/gen3.jpg';
import G4 from './../ProductsImages/gen4.jpg';
import G5 from './../ProductsImages/gen5.jpg';
import L1 from './../ProductsImages/Laptop1.jpg';
import L2 from './../ProductsImages/Laptop2.jpg';
import L3 from './../ProductsImages/Laptop3.jpg';
import L4 from './../ProductsImages/Laptop4.jpg';
import L5 from './../ProductsImages/Laptop5.jpg';
import L6 from './../ProductsImages/Laptop6.jpg';
import L7 from './../ProductsImages/Laptop7.jpg';
import L8 from './../ProductsImages/Laptop8.jpg';
import P1 from './../ProductsImages/phone1.jpg';
import P2 from './../ProductsImages/phone2.jpg';
import P3 from './../ProductsImages/phone3.jpg';
import P4 from './../ProductsImages/phone4.jpg';
import P5 from './../ProductsImages/phone5.jpg';
import P6 from './../ProductsImages/phone6.jpg';
import P7 from './../ProductsImages/phone7.jpg';

const products = [
    {
        id: 1,
        name: "2000mAh Powerbank",
        price: 6000,
        categories: "Accessories",
        image: A1
    },
    {
        id: 2,
        name: "Android fast charger",
        price: 3000,
        categories: "Accessories",
        image: A2
    },
    {
        id: 3,
        name: "4-port-quick-charger",
        price: 4000,
        categories: "Accessories",
        image: A3
    },
    {
        id: 4,
        name: "Lenovo Ip40 airpod",
        price: 8000,
        categories: "Accessories",
        image: A4
    },
    {
        id: 5,
        name: "pq wireless bluetooth",
        price: 5000,
        categories: "Accessories",
        image: A5
    },
    {
        id: 6,
        name: "p28 smart watch",
        price: 12000,
        categories: "Accessories",
        image: A6
    },
    {
        id: 7,
        name: "phone vlog video kit",
        price: 7000,
        categories: "Accessories",
        image: A7
    },
    {
        id: 8,
        name: "bluetooth speaker",
        price: 10000,
        categories: "Accessories",
        image: A8
    },
    {
        id: 9,
        name: "tripod stand selfie stick",
        price: 4500,
        categories: "Accessories",
        image: A9
    },
    {
        id: 10,
        name: "heart rate smart watch",
        price: 15000,
        categories: "Accessories",
        image: A10
    },
    {
        id: 11,
        name: "wireless bluetooth speaker",
        price: 9000,
        categories: "Accessories",
        image: A11
    },
    {
        id: 12,
        name: "agm m9",
        price: 12000,
        categories: "Cellphone",
        image: C1
    },
    {
        id: 13,
        name: "agm pg001",
        price: 15000,
        categories: "Cellphone",
        image: C2
    },
    {
        id: 14,
        name: "bontel m7",
        price: 10000,
        categories: "Cellphone",
        image: C3
    },
    {
        id: 15,
        name: "bontel q1000",
        price: 14000,
        categories: "Cellphone",
        image: C4
    },
    {
        id: 16,
        name: "itel 2163",
        price: 8000,
        categories: "Cellphone",
        image: C5
    },
    {
        id: 17,
        name: "nokia 3310",
        price: 13000,
        categories: "Cellphone",
        image: C6
    },
    {
        id: 18,
        name: "nokia 6310",
        price: 20000,
        categories: "Cellphone",
        image: C7
    },
    {
        id: 19,
        name: "tecno t467",
        price: 9000,
        categories: "Cellphone",
        image: C8
    },
    {
        id: 20,
        name: "elastic cloth chair",
        price: 25000,
        categories: "Furniture",
        image: CH1
    },
    {
        id: 21,
        name: "plastic metal chair",
        price: 15000,
        categories: "Furniture",
        image: CH2
    },
    {
        id: 22,
        name: "lauren accent chair",
        price: 30000,
        categories: "Furniture",
        image: CH3
    },
    {
        id: 23,
        name: "television stand",
        price: 20000,
        categories: "Furniture",
        image: CH4
    },
    {
        id: 24,
        name: "fabrGenerator",
        price: 50000,
        categories: "Furniture",
        image: CH5
    },
    {
        id: 25,
        name: "portable power station 256wh",
        price: 70000,
        categories: "Accessories",
        image: G1
    },
    {
        id: 26,
        name: "5.5ka remote control gen",
        price: 120000,
        categories: "Generator",
        image: G2
    },
    {
        id: 27,
        name: "1.8kva mLaptop gen",
        price: 95000,
        categories: "Generator",
        image: G3
    },
    {
        id: 28,
        name: "4.5kva key starter gen",
        price: 110000,
        categories: "Generator",
        image: G4
    },
    {
        id: 29,
        name: "low noise generator",
        price: 130000,
        categories: "Generator",
        image: G5
    },
    {
        id: 30,
        name: "apple macbook air",
        price: 450000,
        categories: "Laptop",
        image: L1
    },
    {
        id: 31,
        name: "apple macbook pro",
        price: 550000,
        categories: "Laptop",
        image: L2
    },
    {
        id: 32,
        name: "dell inspiron",
        price: 250000,
        categories: "Laptop",
        image: L3
    },
    {
        id: 33,
        name: "dell latitude",
        price: 300000,
        categories: "Laptop",
        image: L4
    },
    {
        id: 34,
        name: "dell optiplex",
        price: 350000,
        categories: "Laptop",
        image: L5
    },
    {
        id: 35,
        name: "hp elitebook",
        price: 400000,
        categories: "Laptop",
        image: L6
    },
    {
        id: 36,
        name: "hp stream 11",
        price: 150000,
        categories: "Laptop",
        image: L7
    },
    {
        id: 37,
        name: "hp victus",
        price: 500000,
        categories: "Laptop",
        image: L8
    },
    {
        id: 38,
        name: "galaxy a15",
        price: 80000,
        categories: "Phones",
        image: P1
    },
    {
        id: 39,
        name: "itel a04",
        price: 50000,
        categories: "Phones",
        image: P2
    },
    {
      id: 40,
      name: "itel p55 plus",
      price: 999.99,
      categories: "Phones",
      image: P3
    },
    {
      id: 41,
      name: "redmi note",
      price: 60000,
      categories: "Phones",
      image: P4
    },
    {
      id: 42,
      name: "galaxy a25",
      price: 100000,
      categories: "Phones",
      image: P5
    },
    {
      id: 43,
      name: "tecno camon 30",
      price: 120000,
      categories: "Phones",
      image: P6
    },
    {
      id: 44,
      name: "tecno pop 8",
      price: 40000,
      categories: "Phones",
      image: P7
    }
  ];

  
  export default products