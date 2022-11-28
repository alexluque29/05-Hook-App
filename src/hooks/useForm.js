
import { useState } from "react";

const useForm = (initialForm = {}) => {

    const [formstate, setFormState] = useState(initialForm);   
    
    const onInputChange = ({target}) => {
    const { name, value } = target;
    
    setFormState ({
        ...formstate,
        [name] : value
    });
    }

    const onResetForm = () => {
        setFormState (initialForm);
    }

  return {
    formstate,
    onInputChange,
    onResetForm,    
  }
}

export default useForm