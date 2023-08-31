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
});

const menu = StyleSheet.create({
  title: {
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
    backgroundColor: "#99D9FF",
    justifyContent: "center",
    borderRadius: 40,
    margin: 5,
  },
});

const inventory = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#EBFFEC",
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
    backgroundColor: "#99FF9F",
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
    backgroundColor: "#99FF9E",
    justifyContent: "center",
    borderRadius: 40,
    margin: 5,
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
    color: "#C89800",
    marginVertical: "7%",
  },
  prevButton: {
    position: "absolute",
    top: "3%",
    start: "5%",
    backgroundColor: "#FFE299",
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
    backgroundColor: "#FFE399",
    justifyContent: "center",
    borderRadius: 40,
    margin: 5,
  },
  sections: {
    backgroundColor: "#FFC429",
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  section: {
    width: 100,
    height: 50,
    justifyContent: "center",
  },
});

export { shop, home, menu, inventory };
