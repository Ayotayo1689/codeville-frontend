import React from 'react'
import {IoIosArrowForward} from "react-icons/io";
import {CardButton} from "./cardButton.style"

function CardsButton({buttontext}) {
    return (
        <>
            < CardButton>
                <button>
                    {buttontext}
                    <IoIosArrowForward className='button_icon'/>
                </button>
            </CardButton>
        </>
    )
}

export default CardsButton
