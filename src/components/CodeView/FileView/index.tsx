const CodeView = ({path}: {path: string}) => {
  return (
    <pre>
      <code>{path}</code>
    </pre>
  );
};

export default CodeView;
