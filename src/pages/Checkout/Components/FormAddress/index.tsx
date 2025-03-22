import { FormAddressContainer, FormDescription, InputPostcodeWrapper, InputWrapper } from "./styles";
import { useFormContext } from "react-hook-form";

export function FormAddress() {
  const { register, setValue, watch } = useFormContext();

  const zipCode = watch('zipCode');

  async function handleCheckZipCode(zicode: string) {
    const response = await fetch(`https://viacep.com.br/ws/${zicode}/json/`);
    const data = await response.json();
    
    setValue("addressLine", data.logradouro);
    setValue("addressNeighborhood", data.bairro);
    setValue("addressCity", data.localidade);
    setValue("addressUF", data.uf);
  }

  return (
    <FormAddressContainer>
      <div>
        <h1>Complete your order</h1>
        <FormDescription>
          <img src="./form/form_locationIcon.svg" alt="" />
          <div>
            <h3>Delivery Address</h3>
            <p>Please provide the address where you would like to receive your order.</p>
          </div>
        </FormDescription>
      </div>
      <div>
        <InputPostcodeWrapper>
          <input type="number" placeholder="ZIP Code" {...register('zipCode')}/>
          <button type="button" onClick={() => handleCheckZipCode(zipCode)}>VERIFY</button>
        </InputPostcodeWrapper>

        <input type="text" placeholder="Adress Line" {...register('addressLine')}/>

        <InputWrapper>
          <input type="text" placeholder="Number" {...register('addressNumber')}/>
          <input type="text" placeholder="Complement" {...register('addressComplement')}/>
        </InputWrapper>

        <InputWrapper>
          <input type="text" placeholder="Neighborhood" {...register('addressNeighborhood')}/>
          <input type="text" placeholder="City" {...register('addressCity')}/>
          <input type="text" placeholder="UF" {...register('addressUF')}/>
        </InputWrapper>
      </div>
    </FormAddressContainer>
  )
}