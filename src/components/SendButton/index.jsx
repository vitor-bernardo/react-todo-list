import './send-button.style.css'

export function SendButton({ children, ...rest }) {
    return (
        <button className='send-button' {...rest}>
            {children}
        </button>
    )
}
