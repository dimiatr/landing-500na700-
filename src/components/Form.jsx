import Input from "./Input"
import { InputMask } from "@react-input/mask"
import Button from "./header/Button"

export default function Form({ view, closeForm, formInpts, size, inptsChange}) {


    return <div className={`flex md:items-center justify-center min-h-screen w-full fixed z-40 bg-white md:bg-black/50 `}>
        <article className={`${view.viewForm ? 'opacity-100' : 'opacity-0'} bg-white pt-20 pb-10 px-5 md:p-10 max-w-[520px] w-full rounded-[20px] flex flex-col gap-10 transition-all duration-300 ease-linear z-50`} >
            <div className="flex items-center justify-between gap-5">
                {size >= 768 ? <h2 className=" font-semibold uppercase ">Связаться с нами</h2> : <h3 className=" font-semibold uppercase ">Связаться с нами</h3>}
                <Button onClick={closeForm}>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.7 28.9999L6 8.29999L8.3 6L29 26.6999L26.7 28.9999Z" fill="#0F0F17" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.7 6.00012L6 26.7L8.3 29L29 8.30011L26.7 6.00012Z" fill="#0F0F17" />
                    </svg>
                </Button>
            </div>
            <form>
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2.5">
                            <Input type={'text'} placeholder={'Имя'} id={'name'} name={'name'} value={formInpts.name} onChange={inptsChange} />
                            <InputMask
                                type={'tel'}
                                mask="+7 (___) ___-__-__"
                                id={'phone'}
                                value={formInpts.phone}
                                onChange={inptsChange}
                                name="phone"
                                replacement={{ _: /\d/ }}
                                component={Input}
                                placeholder="Телефон"
                            />
                            <Input type={'email'} placeholder={'E-mail'} id={'email'} name={'email'} value={formInpts.email} onChange={inptsChange} />
                        </div>
                        <div className="flex items-center gap-2.5 relative">
                            <input type="checkbox" name="check" id="check" className=" absolute left-0 top-0 size-[18px] opacity-0 cursor-pointer" />
                            <div className=" size-[18px] bg-gradient-to-t from-firmViolet to-firmOrange p-0.5  flex items-center justify-center">
                                <div className=" size-4 bg-white">
                                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.1627 13.5002L2.8877 9.22519L3.95645 8.15645L7.1627 11.3627L14.0439 4.48145L15.1127 5.5502L7.1627 13.5002Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <label htmlFor="check" className=" text-xs font-semibold uppercase text-firmBlack/50 cursor-pointer">Я согласен (-а) на обработку персональных данных</label>
                        </div>
                    </div>
                    <Button type="submit" text={'отправить'} colorBg={'white'} colorText={'black'} />
                </div>
            </form>
        </article>
    </div>
}