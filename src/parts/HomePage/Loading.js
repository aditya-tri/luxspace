export const LoadingBrowseRoom = ({ ratio = {} }) => {
  const dummy = [
    {
      id: 1,
      ratio: {
        default: "1/9",
        md: "1/4",
      },
    },
    {
      id: 2,
      ratio: {
        default: "1/9",
        md: "2/2",
      },
    },
    {
      id: 3,
      ratio: {
        default: "1/9",
        md: "2/3",
      },
    },
    {
      id: 4,
      ratio: {
        default: "1/9",
        md: "1/4",
      },
    },
  ];
  return dummy.map((item, index) => {
    return (
      <div
        key={item.id}
        className={`relative card ${
          ratio?.wrapper.default?.[item.ratio.default]
        } ${ratio?.wrapper.md?.[item.ratio.md]}`}
        style={{ height: index === 0 ? 180 : "auto" }}
      >
        <div className="bg-gray-300 rounded-lg w-full h-full">
          <div className={`overlay ${ratio?.meta?.[item.ratio.md]}`}>
            <div className="w-24 h-3 bg-gray-400 mt-3 rounded-full"></div>
            <div className="w-32 h-3 bg-gray-400 mt-2 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  });
};

export const LoadingJustArrived = () => {
  return Array(6)
    .fill()
    .map((_, index) => {
      return (
        <div className="px-4 relative card group" key={index}>
          <div
            className="rounded-xl bg-gray-300 overflow-hidden card-shadow relative"
            style={{ width: 287, height: 386 }}
          ></div>
          <div className="w-24 h-3 bg-gray-300 mt-3 rounded-full"></div>
          <div className="w-36 h-3 bg-gray-300 mt-2 rounded-full"></div>
        </div>
      );
    });
};
