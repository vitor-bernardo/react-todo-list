import { SendButton } from '../SendButton'
import { TextInput } from '../TextInput'
import './todo-form.style.css'

export function TodoForm(props) {
    return (
        <form action={props.onSubmit} className='todo-form'>
            <TextInput
                placeholder="Digite o item que voce deseja adicionar"
                required
            />
            <SendButton>Salvar item</SendButton>
        </form>
    )
}