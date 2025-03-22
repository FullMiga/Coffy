import { useFormContext } from "react-hook-form";
import { FormPaymentContainer, FormDescription } from "./styles";
import { Banknote, CreditCard, Landmark } from "lucide-react";

export function FormPayment() {
  const { register } = useFormContext();

  return (
    <FormPaymentContainer>
      <FormDescription>
        <img src="./form/form_PaymentIcon.svg" alt="" />
        <div>
          <h3>Payment</h3>
          <p>Payment is made upon delivery. Choose the payment method you wish to pay.</p>
        </div>
      </FormDescription>
      <div>
        <label htmlFor="creditCard">
          <div>
            <CreditCard size={16}/>
            CREDIT CARD
          </div>
          <input {...register("payment")} value="creditCard" type="radio" id="creditCard"  />
        </label>
        <label htmlFor="debiteCard">
          <div>
            <Landmark size={16}/>
            DEBITE CARD
          </div>
          <input {...register("payment")} value="debiteCard" type="radio" id="debiteCard"  />
        </label>
        <label htmlFor="pix">
          <div>
            <img src="./form/form_pixIcon.svg" alt="" />
            PIX
          </div>
          <input {...register("payment")} value="pix" type="radio" id="pix"  />
        </label>
      
        <label htmlFor="money">
          <div>
            <Banknote size={16}/> 
            MONEY
          </div>
          <input {...register("payment")} value="money" type="radio" id="money"  />
        </label>
      </div>
  </FormPaymentContainer>
  )
}