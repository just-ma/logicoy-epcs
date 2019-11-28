import { StyleSheet } from "react-native";

const mergeStyles = (root, custom) => {
  let result = { ...custom, ...root };
  let rootArr = Object.entries(root);
  for (let [k, v] of rootArr) {
    if (k in custom) {
      result[k] = { ...v, ...custom[k] };
    }
  }
  return result;
};

export const getStyle = (root, web, mobile, isWeb) => {
  return StyleSheet.create(mergeStyles(root, isWeb ? web : mobile));
};
