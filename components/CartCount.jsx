'use client'
import { useSelector } from "react-redux";

export default function CartCount(){
    const cartItems = useSelector((store)=>store.cart)
    return (
      <span>{cartItems.length}</span>
    );
}