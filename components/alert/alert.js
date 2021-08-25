import style from "./alert.module.css"
import cn from "classnames"

const Alert = ({ type, children }) => {
    return (
        <div className={
            cn({
                [style.success]: type === "success",
                [style.error]: type === "error",
            })
        }>
            {children}
        </div>
    )
}

export default Alert
