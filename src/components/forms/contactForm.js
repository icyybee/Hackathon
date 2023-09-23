import React, { useState } from 'react'
import { useSnackbar } from 'notistack';
import Buttons from '../button'
import { formDataObject } from '../utils/formDataObject'
import { useFetchApi } from '../../api/axios'
import { CircularProgress } from "@mui/material"

export default function ContactForm() {
    const { CREATE_CONTACT_APPLICATION } = useFetchApi();
    const { enqueueSnackbar } = useSnackbar();
    const initialValues = {first_name:'', email:'', phone_number:'', message:''}
    const [contactData, setContactData] = useState(initialValues)
    const [validateFields, setValidateFields] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setLoading(true);
        if (!contactData.first_name || !contactData.email || !contactData.message) {
            setValidateFields(true);
            setLoading(false);
            return;
        }
        const formData = formDataObject(contactData);
        try {
            const res = await CREATE_CONTACT_APPLICATION(formData);
            if (res?.status === 201) {
                setLoading(false);
                enqueueSnackbar('Form submitted successfully!', {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
                setContactData(initialValues)
            } else {
                setLoading(false);
                enqueueSnackbar('Error submitting Form!', {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
            }
        } catch (error) {
            setLoading(false);
            console.error("Error submitting contact details", error);
            if (error.response.data.email[0] === "Enter a valid email address.") {
                enqueueSnackbar('Enter a valid email address!', {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });    
            } else {
                enqueueSnackbar('Error submitting Form!', {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
            }
        }
    };
    
    return (
        <form className='desktop:mt-[34px] mt-[30px]'>
            <div className='desktop:mb-[42px] mb-[25px]'>
                <input 
                    className='w-full text-[16px]'
                    placeholder='First Name'
                    type='text'
                    name="first_name"
                    value={contactData.first_name}
                    onChange={(e) => {
                        setContactData(val => {
                            return {...val, [e.target.name]:e.target.value}
                        })
                    }}
                />
                {validateFields && !contactData.first_name && <p className="text-red-500 mt-2">This field is required</p>}
            </div>
            <div className='mb-[39px]'>
                <input 
                    className='w-full text-[16px]'
                    placeholder='Mail'
                    type='email'
                    name="email"
                    value={contactData.email}
                    onChange={(e) => {
                        setContactData(val => {
                            return {...val, [e.target.name]:e.target.value}
                        })
                    }}
                />
                {validateFields && !contactData.email && <p className="text-red-500 mt-2">This field is required</p>}
            </div>
            <div className='mb-[39px]'>
                <input 
                    className='w-full text-[16px]'
                    placeholder='Phone'
                    type='tel'
                    name="phone_number"
                    value={contactData.phone_number}
                    onChange={(e) => {
                        setContactData(val => {
                            return {...val, [e.target.name]:e.target.value}
                        })
                    }}
                />
            </div>
            <div className='mb-[31px]'>
                <textarea 
                    className='w-full text-[16px] desktop:py-[6px] py-[27px] px-6 desktop:px-[15px]'
                    placeholder='Message'
                    name="message"
                    value={contactData.message}
                    onChange={(e) => {
                        setContactData(val => {
                            return {...val, [e.target.name]:e.target.value}
                        })
                    }}
                />
                {validateFields && !contactData.message && <p className="text-red-500 mt-2">This field is required</p>}
            </div>

            <div className='flex justify-center'>
                <Buttons icon={loading && <CircularProgress size={'27px'} style={{ color: "white" }} />} functions={handleSubmit} text={loading ? '' : 'Submit'} width={'172px'} bgColor={'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)'} />
            </div>
        </form>
    )
}
