import {useState, useEffect} from 'react';


const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const ClearForm = () => {
        setValues({
            name: '',
            email: '',
            message: ''
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
        ClearForm();
        }
        
    },[errors]);

    return{handleChange, values, handleSubmit, errors}
}

export default useForm;