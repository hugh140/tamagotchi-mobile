import { StyleSheet } from "react-native";

const home = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EBF8FF",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#007EC8",
  },
  pet: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  stateContainer: {
    padding: 20,
    marginTop: 10,
  },
  petState: {
    textAlign: "center",
    fontSize: 15,
    color: "#007EC8",
  },
  titleMenu: {
    fontSize: 20,
    padding: 10,
    textAlign: "center",
    color: "#007EC8",
    fontWeight: "bold",
  },
  options: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#C7EAFF",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    zIndex: -1,
  },
  option: {
    width: 150,
    height: 120,
    justifyContent: "center",
    borderRadius: 40,
    margin: 5,
  },
  money: {
    position: "absolute",
    padding: 5,
    zIndex: 1,
    backgroundColor: 'rgb(213, 255, 136)',
    borderRadius: 20
  },
});

const begin = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EBF8FF",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#2C95E2",
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    borderColor: "#B0B0B0",
    marginVertical: 10,
  },
  alert: {
    marginTop: 40,
    backgroundColor: "#FF9090",
    padding: 20,
    width: "70%",
    borderRadius: 10,
    position: "absolute",
    bottom: "20%",
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    fontSize: 25,
    color: "#6B7DF0",
    fontWeight: "bold",
  },
});

const inventory = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#EBFFEC",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#00C800",
    marginVertical: "7%",
  },
  prevButton: {
    position: "absolute",
    top: "3%",
    start: "5%",
    backgroundColor: "#00C800",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
  },
  items: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: 10,
    marginBottom: 120,
  },
  item: {
    width: 100,
    height: 100,
    justifyContent: "center",
    borderRadius: 40,
    margin: 5,
    position: "relative",
  },
  counter: {
    position: "absolute",
    bottom: 3,
    right: 3,
    fontSize: 17,
    color: "#00A800",
  },
  alert: {
    position: "absolute",
    top: "40%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#00A800",
    borderWidth: 1,
    borderRadius: 50,
  },
});

const shop = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#FFF9EB",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#FFC429",
    marginVertical: "8%",
  },
  prevButton: {
    position: "absolute",
    top: "3%",
    start: "5%",
    backgroundColor: "#FFC429",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
  },
  coins: {
    position: "absolute",
    top: "4%",
    end: 0,
    paddingHorizontal: "10%",
    fontSize: 20,
    textAlign: "center",
    color: "#FFC429",
  },
  items: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: 10,
    marginBottom: 200,
  },
  item: {
    width: 100,
    height: 100,
    justifyContent: "center",
    borderRadius: 40,
    margin: 5,
    position: "relative",
  },
  sections: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    width: 120,
    height: 70,
    justifyContent: "center",
  },
  sectionText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  price: {
    position: "absolute",
    bottom: 3,
    right: 3,
    color: "#FFB800",
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 25,
  },
});

export { shop, home, inventory, begin };
