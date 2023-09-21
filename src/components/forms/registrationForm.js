import React, { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack';
import FormInput from '../formInput'
import SelectInput from '../selectInput'
import Buttons from '../button'
import { formDataObject } from '../utils/formDataObject'
import { useFetchApi } from '../../api/axios'
import { CircularProgress } from "@mui/material"
import { groupSizeData } from '../utils/groupSizeData'

export default function RegistrationForm() {
    const { GET_CATEGORY_LIST, CREATE_REGISTRATION_APPLICATION } = useFetchApi();
    const { enqueueSnackbar } = useSnackbar();
    const initialValues = {team_name:'', email:'', phone_number:'', group_size:'', project_topic:'', category:'', privacy_poclicy_accepted:false}
    const [registrationData, setRegistrationData] = useState(initialValues)
    const [validateFields, setValidateFields] = useState(false)
    const [loading, setLoading] = useState(false)
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        const fetchCategoryList = async () => {
            const response = await GET_CATEGORY_LIST();
            setCategoryList(response.data)
        }
        fetchCategoryList()
    }, [])

    const handleSubmit = async () => {
        console.log({registrationData})
        setLoading(true);
        if (!registrationData.team_name || !registrationData.email || !registrationData.phone_number || !registrationData.project_topic || !registrationData.category
        ) {
            setValidateFields(true);
            setLoading(false);
            return;
        }
        const formData = formDataObject(registrationData);
        try {
            const res = await CREATE_REGISTRATION_APPLICATION(formData);
            if (res?.status === 201) {
                setLoading(false);
                enqueueSnackbar('Form submitted successfully!', {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
                setRegistrationData(initialValues)
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
            
            if (error.response && error.response.data) {
                if (error.response.data.email && error.response.data.email[0] === "applicant with this email already exists.") {
                    enqueueSnackbar('Email already exists!', {
                        variant: 'error',
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'right',
                        },
                    });    
                } else if (error.response.data.phone_number && error.response.data.phone_number[0] === "Ensure this field has no more than 13 characters.") {
                    enqueueSnackbar('Please enter no more than 13 characters in this field', {
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
            } else {
                enqueueSnackbar('An unknown error occurred!', {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
            }
        }
    }        
    
    return (
        <form className='mt-[33px] flex flex-col w-full'>
            <div className='flex gap-8 w-full'>
                <FormInput 
                    placeholder={'Enter the name of your group'} 
                    label={'Team’s Name'} 
                    type={'name'}
                    name={'team_name'}
                    value={registrationData.team_name}
                    onChange={(e) => {
                        setRegistrationData(val => {
                            return {...val, [e.target.name]:e.target.value}
                        })
                    }}
                    errorMessage= {validateFields && !registrationData.team_name}
                />
                <FormInput 
                    placeholder={'Enter your phone number'} 
                    label={'Phone'} 
                    type={'tel'}
                    name={'phone_number'}
                    value={registrationData.phone_number}
                    onChange={(e) => {
                        setRegistrationData(val => {
                            return {...val, [e.target.name]:e.target.value}
                        })
                    }}
                    errorMessage= {validateFields && !registrationData.phone_number}
                />
            </div>
            <div className='flex gap-8 mt-[29px] w-full'>
                <FormInput 
                    placeholder={'Enter your email address'} 
                    label={'Email'} 
                    type={'email'}
                    name={'email'}
                    value={registrationData.email}
                    onChange={(e) => {
                        setRegistrationData(val => {
                            return {...val, [e.target.name]:e.target.value}
                        })
                    }}
                    errorMessage= {validateFields && !registrationData.email}
                />
                <FormInput 
                    placeholder={'What is your group project topic'} 
                    label={'Project Topic'} 
                    name={'project_topic'}
                    value={registrationData.project_topic}
                    onChange={(e) => {
                        setRegistrationData(val => {
                            return {...val, [e.target.name]:e.target.value}
                        })
                    }}
                    errorMessage= {validateFields && !registrationData.project_topic}
                />
            </div>
            <div className='flex gap-8 mt-[29px] w-full'>
                <SelectInput 
                    label={'Category'} 
                    placeholder={'Select your category'} 
                    name={'category'} 
                    options={categoryList} 
                    value={registrationData.category}
                    onChange={(e) => {
                        setRegistrationData(val => {
                            return {...val, [e.target.name]:e.target.value}
                        })
                    }} 
                    errorMessage= {validateFields && !registrationData.category}
                />
                <SelectInput 
                    label={'Group Size'} 
                    placeholder={'Select'} 
                    name={'group_size'} 
                    options={groupSizeData} 
                    value={registrationData.group_size}
                    onChange={(e) => {
                        setRegistrationData(val => {
                            return {...val, [e.target.name]:e.target.value}
                        })
                    }} 
                    errorMessage= {validateFields && !registrationData.category}
                />
            </div>
            <p className='mt-[23px] text-[12px] italic text-tertiary mb-4'>Please review your registration details before submitting</p>
            <div className='flex gap-[10px] items-center mb-[22px]'>
                <input 
                    type='checkbox' 
                    className='w-[14px] h-[14px]' 
                    name='privacy_poclicy_accepted'
                    value={registrationData.privacy_poclicy_accepted} 
                    onChange={(e) => {
                        setRegistrationData(val => {
                            return {...val, [e.target.name]:e.target.checked}
                        })
                    }}
                />
                <p className='text-[12px]'>I agreed with the event terms and conditions  and privacy policy</p>
            </div>
            <Buttons icon={loading && <CircularProgress size={'27px'} style={{ color: "white" }} />} functions={handleSubmit} text={loading ? '' : 'Register Now'} width={'100%'} bgColor={'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)'} />
        </form>
    )
}
