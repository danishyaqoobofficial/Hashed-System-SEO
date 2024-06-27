import { Link } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react';





function EnterOtpPage() {


  const [inputs, setInputs] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  useEffect(() => {
    const handleKeyDown = (e, index) => {
      if (!/^[0-9]{1}$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab' && !e.metaKey) {
        e.preventDefault();
      }

      if (e.key === 'Delete' || e.key === 'Backspace') {
        console.log(index,'outer');
        if (index > 0) {
            console.log(index,'inner');
          inputRefs.current[index].focus();
        }
      }
    };

    const handlePaste = (e) => {
      e.preventDefault();
      const text = e.clipboardData.getData('text');
      if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
        return;
      }
      const digits = text.split('');
      setInputs(digits);
      inputRefs.current[inputs.length - 1].focus();
    };

    inputRefs.current.forEach((input, index) => {
      input.addEventListener('keydown', (e) => handleKeyDown(e, index));
      input.addEventListener('paste', handlePaste);
    });

    return () => {
      inputRefs.current.forEach((input, index) => {
        input.removeEventListener('keydown', (e) => handleKeyDown(e, index));
        input.removeEventListener('paste', handlePaste);
      });
    };
  }, [inputs.length]);

  const handleInput = (e, index) => {
    const { value } = e.target;
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    if (value && index < inputs.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('OTP Submitted:', inputs.join(''));
  };

  const handleFocus = (e) => {
    e.target.select();
  };
    
    return (
      <>
        <main className=" w-full bg-[#fff] relative ">
            <section className="h-[100vh] max-w-[1220px] w-full mx-auto px-[15px] md:px-[20px] flex items-center justify-center ">
                <div className="max-w-[400px] w-full border-[#C0D6E7] border rounded-[12px] p-[16px] sm:p-[22px] ">
                    <div className='flex items-center justify-center mt-[12px] sm:mt-[0px] '>
                        <img className='h-[60px] ' src='/assets/Images/Frame.png' alt="" />
                    </div>
                    <div className='px-[30px] mx-auto '>
                        <h2 className='text-[22px] text-[#000000] font-[500] text-center mt-[16px] '>Verify your email</h2>
                        <p className='text-[12px] text-[#000000] mt-[6px] text-center font-[300] '>Please enter the 4 digit code sent to yourmail@example.com</p>
                        <div className="flex items-center justify-center gap-[9px] mt-[22px]">
                            {inputs.map((input, index) => (
                                <input
                                key={index}
                                type="text"
                                className=' outline-none text-[30px] text-[#000000] border border-[#DBDADF] rounded-[6px] w-[50px] h-[50px] p-[15px] flex items-center justify-center '
                                maxLength="1"
                                value={input}
                                onChange={(e) => handleInput(e, index)}
                                onFocus={handleFocus}
                                ref={(el) => (inputRefs.current[index] = el)}
                                />
                            ))}
                        </div>
                        {/* <div className='flex items-center justify-center gap-[9px] mt-[22px] '>
                            <input className=' outline-none text-[30px] text-[#000000] border border-[#DBDADF] rounded-[6px] w-[50px] h-[50px] p-[15px] flex items-center justify-center ' type="number" />
                            <input className=' outline-none text-[30px] text-[#000000] border border-[#DBDADF] rounded-[6px] w-[50px] h-[50px] p-[15px] flex items-center justify-center ' type="number" />
                            <input className=' outline-none text-[30px] text-[#000000] border border-[#DBDADF] rounded-[6px] w-[50px] h-[50px] p-[15px] flex items-center justify-center ' type="number" />
                            <input className=' outline-none text-[30px] text-[#000000] border border-[#DBDADF] rounded-[6px] w-[50px] h-[50px] p-[15px] flex items-center justify-center ' type="number" />
                        </div> */}
                    </div>
                    <Link to={handleSubmit} className='w-full bg-[#0D99FF] rounded-[6px] flex items-center justify-center text-[#fff] text-[13px] select-none font-[600] px-[22px] py-[10px] cursor-pointer mt-[22px] '>
                        Confirm
                    </Link>
                    <div className='mt-[22px] flex items-center justify-center gap-[6px] '>
                        <p className='text-[#000000] text-[12px] font-[300] '>Don’t Receive Code?</p>
                        <p className='text-[#0D99FF] text-[12px] font-[500] cursor-pointer '>Resend Code</p>
                    </div>
                </div>
            </section>
        </main>
      </>
    )
  }
  
  export default EnterOtpPage