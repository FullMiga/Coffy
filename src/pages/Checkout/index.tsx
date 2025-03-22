import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';

import { FormProvider, useForm } from "react-hook-form"; 
import { BagList, BagResume, CheckoutContainer, CouponWrapper } from "./styles";

import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";

import { FormAddress } from "./Components/FormAddress";
import { FormPayment } from "./Components/FormPayment";
import { OrderContext } from "../../contexts/OrderContext";
import { BagItem } from "./Components/BagItem";

const checkoutFormValidationSchema = zod.object({
  zipCode: zod.string().min(8),
  addressLine: zod.string().min(5),
  addressNumber: zod.string().min(1),
  addressComplement: zod.string().optional(),
  addressNeighborhood: zod.string().min(3),
  addressCity: zod.string().min(4),
  addressUF: zod.string().min(2),
  payment: zod.string().min(2, "Please select a payment method!"),
  couponCode: zod.string().optional()
})

export type checkoutFormData  = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const { bagItems, createNewOrder, amountBagItems } = useContext(OrderContext)
  
  const [couponDiscont, setCouponDiscont] = useState(0)

  const navigate = useNavigate();
  const newOrderForm = useForm<checkoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      zipCode: '',
      addressLine: '',
      addressNumber: '',
      addressComplement: '',
      addressNeighborhood: '',
      addressCity: '',
      addressUF: '',
      payment: '',
      couponCode: '',
    }
  });
  const { register, handleSubmit, watch  } = newOrderForm
  
  function handleCheckoutForm(data: checkoutFormData) {
    const newOrder = {
      addressPostcode: data.zipCode,
      addressLine: data.addressLine,
      addressNumber: data.addressNumber,
      addressComplement: data.addressComplement,
      addressNeighborhood: data.addressNeighborhood,
      addressCity: data.addressCity,
      addressUF: data.addressUF,
      paymentMethod: data.payment,
      bagAmountItems: bagItems.length,
    }
    
    createNewOrder(newOrder)
    navigate("/success");
  }

  useEffect(() => { 
    const isBagEmpty = amountBagItems <= 0;

    if (isBagEmpty) {
      navigate("/")
    } 
  }, [amountBagItems, navigate])

  const couponCode = watch('couponCode')

  const bagItemsTotal = +bagItems.reduce((total, item) => total + (item.price * item.amount), 0);
  const devileryPercentage = 40;
  const bagDeliveryValue = (bagItemsTotal * devileryPercentage) / 100;
  const bagTotal = +(bagItemsTotal + bagDeliveryValue).toFixed(2);
  const bagTotalToPay = (bagTotal - couponDiscont).toFixed(2);
  
  function handleApplyCoupon(coupon: string | undefined) {
    if (coupon) {
      if(coupon === 'coffree') {
        return setCouponDiscont((bagTotal * 20) / 100)
      }
    }
    return alert("Invalid Coupon");
  }

  const couponIsApplied = couponDiscont > 0;
  useEffect(() => {
    if (bagTotal > 0 && !couponIsApplied) {
      return
    }
    return setCouponDiscont((bagTotal * 20) / 100)
  }, [bagTotal, couponIsApplied])
  
  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCheckoutForm)} >
        <div>
          <FormProvider {...newOrderForm}>
            <FormAddress /> 
            <FormPayment />
          </FormProvider>
        </div>
        <BagList>
          <div>
            {bagItems.map((coffee) => {
              return <BagItem key={coffee.id} coffeData={coffee}/>
            })}
          </div>
          <CouponWrapper>
            <button type="button" onClick={() => handleApplyCoupon(couponCode)}>APPLY COUPON</button>
            <input {...register('couponCode')} type="text" placeholder="COFFREE" />
          </CouponWrapper>
          <BagResume>
            <div>
              <div>
                <p>Total items</p>
                <p>R$ {bagItemsTotal.toFixed(2)}</p>
              </div>
              <div>
                <p>Delivery</p>
                <p>R$ {bagDeliveryValue.toFixed(2)}</p>
              </div>
              {couponDiscont !== 0 && (
                <div>
                  <p>Coupon</p>
                  <p>- R$ {couponDiscont.toFixed(2)}</p>
                </div>
              )}
            </div>
            <div>
                <p>Total</p>
                <p>R$ {bagTotalToPay}</p>
            </div>
            <button type="submit">CONFIRM ORDER</button>
          </BagResume>
        </BagList>
      </form>
    </CheckoutContainer>
  )
}