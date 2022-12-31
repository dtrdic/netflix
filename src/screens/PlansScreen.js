import React, { useState, useEffect } from "react";
import db from "../firebase";
import "../css/PlansScreen.css";
import {
  collection,
  setDoc,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

async function PlansScreen() {
  const [products, setProducts] = useState([]);

  const firebaseProducts = collection(db, "products");
  console.log("mozda radi: ", firebaseProducts);
  // try {
  //   const firebaseProducts = collection(db, "products");
  //   console.log(firebaseProducts);
  //   const querySnapshot = await getDocs(firebaseProducts);
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.data());
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  useEffect(() => {
    const products = {};
    const firebaseProducts = collection(db, "products");
    firebaseProducts.forEach(async (productDoc) => {
      products[productDoc.id] = productDoc.data();
      // collection(db, "products").then((querySnapshot) => {
      //   const products = {};
      //   querySnapshot.forEach(async (productDoc) => {
      //     products[productDoc.id] = productDoc.data();
      //     //   const priceSnap = await productDoc.ref.collection("prices").get();
      //     //   priceSnap.docs.forEach((price) => {
      //     //     products[productDoc.id].prices = {
      //     //       priceId: price.id,
      //     //       priceData: price.data(),
      //     //     };
      //     //   });
      //   });
      setProducts(products);
    });
  }, []);
  console.log("Proizvodi", products);

  return (
    <div className="plansScreen">
      {/* {Object.entries(products).map(([productId, productData]) => {
        return (
          <div className="plansScreen__plan">
            <div className="plansScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}

export default PlansScreen;
