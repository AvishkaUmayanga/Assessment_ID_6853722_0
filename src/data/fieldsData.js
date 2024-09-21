import { IoMdCheckmark } from "react-icons/io";
import { RxPencil1 } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";
import { GoChevronDown } from "react-icons/go";
import { AiOutlinePhone } from "react-icons/ai";
import { TiInputChecked } from "react-icons/ti";
import { PiWarningCircleLight } from "react-icons/pi";
import { MdOutlineFindInPage } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";

const fieldsData = [
    {
        fieldName: 'Multiple Choice',
        fieldIcon: IoMdCheckmark
    },
    {
        fieldName: 'Short Text',
        fieldIcon: RxPencil1
    },
    {
        fieldName: 'Email',
        fieldIcon: AiOutlineMail
    },
    {
        fieldName: 'Dropdown',
        fieldIcon: GoChevronDown
    },
    {
        fieldName: 'Phone Number',
        fieldIcon: AiOutlinePhone
    },
    {
        fieldName: 'Section',
        fieldIcon: TiInputChecked
    },
    {
        fieldName: 'Contact Information',
        fieldIcon: PiWarningCircleLight
    },
    {
        fieldName: 'Legal',
        fieldIcon: MdOutlineFindInPage
    },
    {
        fieldName: 'Country',
        fieldIcon: IoIosGlobe
    },
]

export default fieldsData;