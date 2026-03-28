import type { ButtonProps } from "./Button.types"

export const Button = ({ text, link, type, right = false, left = false, icon }: ButtonProps) => {
    return (
        <>
            {type === 'primary' && <a className="btn btn-primary" href={link} target="_blank">{left && icon} {text} {right && icon}</a>}
            {type === 'primary-scroll' && <a className="btn btn-primary" href={link}>{left && icon} {text} {right && icon}</a>}
            {type === 'secondary' && <a className="btn btn-secondary" href={link} target="_blank">{left && icon} {text} {right && icon}</a>}
            {type === 'ghost' && <a className="btn btn-ghost" href={link} target="_blank">{left && icon} {text} {right && icon}</a>}
        </>
    )
}
