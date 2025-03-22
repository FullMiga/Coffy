import { useContext } from "react";
import { InforImage, InfoWrapper, SuccessCotainer, SuccessInfo, SuccessTitle, SuccessWrapper } from "./style";
import { OrderContext } from "../../contexts/OrderContext";

export function Success() {
  const { activeOrder } = useContext(OrderContext);

  return (
    <SuccessCotainer>
      <SuccessWrapper>
        <SuccessTitle>
          <h2>Woohoo! Order confirmed</h2>
          <p>Now just wait and the coffee will soon arrive to you.</p>
        </SuccessTitle>
        <SuccessInfo>
          <InfoWrapper>
            <div>
              <img src="./success/success_locationIcon.svg" alt="" />
              <p>
                Delivery to <strong>{activeOrder?.addressLine}, {activeOrder?.addressNumber} {activeOrder?.addressComplement}</strong> <br />
                {activeOrder?.addressNeighborhood} - {activeOrder?.addressCity}, {activeOrder?.addressUF}
              </p>
            </div>
            <div>
              <img src="./success/success_timeIcon.svg" alt="" />
              <p>
                Estimated delivery <br />
                <strong>20 min - 30 min</strong>
              </p>
            </div>
            <div>
              <img src="./success/success_paymentIcon.svg" alt="" />
              <p>
                Cash on delivery <br />
                <strong>{activeOrder?.paymentMethod}</strong>
              </p>
            </div>
          </InfoWrapper>
          <InforImage src="./success/success_successImage.svg"/>
        </SuccessInfo>
      </SuccessWrapper>
    </SuccessCotainer>
  )
}