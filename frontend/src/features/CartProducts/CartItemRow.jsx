import { Edit2, Minus, Plus, X } from "lucide-react";
import { useCart } from "../../context/CartContext";
import * as C from "./CartItemRowStyles";

function CartItemRow({ item }) {
  const { updateQty, removeFromCart } = useCart();
  const itemTotal = item.price * item.qty;

  return (
    <>
      <C.RowContainer>
        <C.ProductInfo>
          <C.ItemImage src={item.images[0]} alt={item.name} />
          <C.TextDetails>
            <h4>{item.name}</h4>
            <p className="meta">
              {item.size || "STD"} <Edit2 size={12} />
            </p>
            <p className="meta">{item.season}</p>
          </C.TextDetails>
        </C.ProductInfo>

        <C.PriceCol>£{item.price.toLocaleString()}</C.PriceCol>

        <C.QtyCol>
          <C.QtyBox>
            <button onClick={() => updateQty(item.id, -1)}>
              <Minus size={14} />
            </button>
            <span>{item.qty}</span>
            <button onClick={() => updateQty(item.id, 1)}>
              <Plus size={14} />
            </button>
          </C.QtyBox>
        </C.QtyCol>

        <C.TotalCol>£{itemTotal.toLocaleString()}</C.TotalCol>

        <C.RemoveBtn onClick={() => removeFromCart(item.id)}>
          <X size={20} />
        </C.RemoveBtn>
      </C.RowContainer>
    </>
  );
}

export default CartItemRow;
