import React from "react";

const Dimensions = () => {
  const [sizes, setSizes] = React.useState({ width: null, height: null });

  const setDimensions = (width, height) => {
    setSizes({ width, height });
    document.title = `${width} x ${height}`;
  }

  const onResize = () => {
    const { innerHeight, innerWidth } = window;
    setDimensions(innerWidth, innerHeight);
  }

  React.useEffect(() => {
    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, []);

  const { width, height } = sizes;

  return (
    <div className="dimensions">{`${width}px - ${height}px`}</div>
  );
}

export default Dimensions;
