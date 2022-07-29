import Button from ".";

//Define o componente e o titulo do componente no aplicativo storybook
export default {
  component: Button, // O próprio componente
  title: 'Qisso/Button', //Fazendo referência ao componente na barra lateral do aplicativo Storybook
};


const Template = args => <Button {...args} />;


// Historias do componente ( variações )


// historia default
export const Default = Template.bind({})
Default.args = {
  children: 'Button Default'
}

// historia outroBotao
export const outroBotao = Template.bind({})
outroBotao.args = {
  children: 'Outro Btn'
}

