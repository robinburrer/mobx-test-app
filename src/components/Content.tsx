import store from '../store';

const Content: React.FC = () => {
  const changeHeadline = () => {
    store.headerString = 'from func. based';
  };

  const increaseTheValue = () => {
    store.objectValue.value01++;
  };

  return (
    <div>
      <h2>content</h2>
      <p>Here goes the content</p>
      <button onClick={changeHeadline}>Click Me</button>
      <button onClick={increaseTheValue}>Increase</button>
    </div>
  );
};

export default Content;
