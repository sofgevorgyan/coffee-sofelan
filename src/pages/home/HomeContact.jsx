import { FaSearchLocation } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function HomeContact() {
    const contactInfo = [
        {
            icon: <FaSearchLocation className="text-red-600" />,
            title: "Адрес",
            value: "ул. Кофейная, 42, Москва"
        },
        {
            icon: <FaPhone className="text-red-600" />,
            title: "Телефон",
            value: "+7 (999) 123-45-67"
        },
        {
            icon: <MdEmail className="text-red-600" />,
            title: "Email",
            value: "info@sofelan.ru"
        },
        {
            icon: <FaClock className="text-red-600" />,
            title: "Часы работы",
            values: ["Пн-Пт: 7:00 - 22:00", "Сб-Вс: 9:00 - 23:00"]
        }
    ];

    const formFields = [
        {
            name: 'user_name',
            label: 'Имя',
            type: 'text',
            validation: {
                required: 'Это поле обязательно',
                minLength: { value: 2, message: 'Минимум 2 символа' }
            }
        },
        {
            name: 'user_email',
            label: 'Email',
            type: 'email',
            validation: {
                required: 'Это поле обязательно',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Неверный формат email'
                }
            }
        },
        {
            name: 'Topic',
            label: 'Тема',
            type: 'text',
            validation: {
                required: 'Это поле обязательно',
                minLength: { value: 3, message: 'Минимум 3 символа' }
            }
        },
        {
            name: 'message',
            label: 'Сообщение',
            type: 'textarea',
            validation: {
                required: 'Это поле обязательно',
                minLength: { value: 10, message: 'Минимум 10 символов' }
            }
        }
    ];

    const form = useRef();
    const [status, setStatus] = useState('');
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            user_name: '',
            user_email: '',
            Topic: '',
            message: ''
        }
    });

    const onSubmit = async (data) => {
        setStatus('sending');
        try {
            await emailjs.sendForm(
                'service_213kowx',
                'template_s2iab2j',
                form.current,
                'Wx1vUNRZMT8YOLA8P'
            );
            setStatus('success');
            reset();
            setTimeout(() => setStatus(''), 3000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus(''), 3000);
        }
    };

    return (
    <div className="flex flex-col lg:flex-row justify-between items-start bg-[#f9f5f0] gap-10 px-6 py-10 md:px-16 md:py-16 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-4">
            <h1 className="text-[#3a2a18] font-bold text-[30px]">Свяжитесь с нами</h1>

            {contactInfo.map((contact, index) => (
                <div key={index} className="flex flex-row gap-3.5">
                    {contact.icon}
                    <div className="flex gap-1 flex-col">
                        <h2 className="font-bold text-[20px] text-[#3a2a18]">{contact.title}</h2>
                        {contact.values ? (
                            contact.values.map((value, idx) => (
                                <p key={idx} className="text-[15px] text-[#3a2a18]/70">{value}</p>
                            ))
                        ) : (
                            <p className="text-[15px] text-[#3a2a18]/70">{contact.value}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>

        <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-5 flex-col w-full max-w-[560px]">
            {formFields.map((field, index) => (
                <div key={index} className="flex gap-1 flex-col">
                    <p className="text-[#3a2a18] font-sans text-[17px]">{field.label}</p>
                    {field.type === 'textarea' ? (
                        <textarea
                            className={`bg-white border w-full rounded h-[120px] ${
                                errors[field.name] ? 'border-red-500' : 'border-gray-300'
                            }`}
                            {...register(field.name, field.validation)}
                        ></textarea>
                    ) : (
                        <input
                            type={field.type}
                            className={`bg-white border w-full h-[50px] rounded ${
                                errors[field.name] ? 'border-red-500' : 'border-gray-300'
                            }`}
                            {...register(field.name, field.validation)}
                        />
                    )}
                    {errors[field.name] && (
                        <span className="text-red-500 text-sm">{errors[field.name].message}</span>
                    )}
                </div>
            ))}

            <button
                type="submit"
                className="bg-[#B85C38] rounded-3xl w-[200px] h-[50px] text-white font-normal disabled:opacity-50"
                disabled={isSubmitting || status === 'sending'}
            >
                {status === 'sending' ? 'Отправка...' : 'Отправить сообщение'}
            </button>

            {status === 'success' && (
                <p className="text-green-600">Сообщение успешно отправлено!</p>
            )}
            {status === 'error' && (
                <p className="text-red-600">Ошибка при отправке сообщения.</p>
            )}
        </form>
    </div>
)

}