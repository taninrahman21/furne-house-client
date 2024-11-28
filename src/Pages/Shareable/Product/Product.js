import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      This is Product Page For Furne House
    </div>
  );
};

export default Product;