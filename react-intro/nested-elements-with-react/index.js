const rootElement = document.querySelector('#root');
const { createElement } = React;

function App() {
  const titleElem = createElement(
    'h1',
    { className: 'greeting__title' },
    'Hello, world!'
  );
  
  const textElem = createElement(
    'p',
    { className: 'greeting__text' },
    "I'm learning React"
  );

  return (
    createElement(
      'div',
      { className: 'greeting' },
      [titleElem, textElem]
    )
  )
}

ReactDOM.render(App(), document.querySelector('#root'));
