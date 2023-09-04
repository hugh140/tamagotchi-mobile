import storage from "../resources/storage";

function initialStorage(name: string) {
  const intervals = [];
  for (let i = 1; i < 11; i++) intervals.push(Date.now() + 1000 * i * 60 * 90);

  storage.clearMap();
  storage.save({
    key: "name",
    data: {
      name: name,
    },
  });
  storage.save({
    key: "money",
    data: {
      money: 10,
    },
  });
  storage.save({
    key: "moneyIntervals",
    data: {
      intervals: intervals,
    },
  });
}
export default initialStorage;
