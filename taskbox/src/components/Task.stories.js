import Task from "./Task";

// Exportação padrão para o storybook
export default {
  component: Task, // O próprio componente
  title: 'Task', //Fazendo referência ao componente na barra lateral do aplicativo Storybook
};


//Técnica para permitir que cada história exportada defina suas próprias propriedades, mesmo usando a mesma implementação.
const Template = args => <Task {...args} />;

// Criando a story Default
export const Default = Template.bind({}); // Técnica utilizada para fazer uma cópia de uma função, no caso, a Template.

Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
}


// Criando a story Pinned
export const Pinned = Template.bind({});

Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};


// Criando a story  Archived 
export const Archived = Template.bind({});

Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};


