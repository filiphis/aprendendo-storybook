import './style.css'

import PropTypes from 'prop-types';

export default function Button({children}){
  return (
      <button className='Button'>{children}</button>
  );
}


// Documentação que aparece no storybook. 
// É necessario ter as props no component para que funcione.
Button.propTypes = {
  /** Coposição do botão */
  button: PropTypes.shape({
    /** Texto do botão */
    children: PropTypes.string.isRequired,
  }),


  /** Evento de click do botão */
  onClick: PropTypes.func,
};