import * as React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

import * as yup from "yup";
import { Formik, Field } from "formik";
import CustomInput from "../components/custumInputs/Basic";
import * as ImagePicker from "expo-image-picker";
interface SignProps {}

const signUpValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/(\w.+\s).+/, "Enter at least 2 names")
    .required("Full name is required"),
  phoneNumber: yup
    .string()
    .matches(/(01)(\d){8}\b/, "Enter a valid phone number")
    .required("Phone number is required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
  photo: yup.object().required("Photo is required"),
});
const SignUp = (props: SignProps) => {
  return (
    <View style={styles.loginContainer}>
      <Text>Signup Screen</Text>

      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          fullName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
          photo: { fileName: "", path: "", type: "" },
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleSubmit,
          isValid,
          setFieldValue,
          setFieldTouched,
          values,
          errors,
          touched,
        }) => (
          <>
            <Field
              component={CustomInput}
              name="fullName"
              placeholder="Full Name"
            />
            <Field
              component={CustomInput}
              name="email"
              placeholder="Email Address"
              keyboardType="email-address"
            />
            <Field
              component={CustomInput}
              name="phoneNumber"
              placeholder="Phone Number"
              keyboardType="numeric"
            />
            <Field
              component={CustomInput}
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Field
              component={CustomInput}
              name="confirmPassword"
              placeholder="Confirm Password"
              secureTextEntry
            />
            <Field
              component={CustomInput}
              name="post"
              placeholder="Write post..."
              multiline
              numberOfLines={3}
            />
            <TouchableOpacity
              onPress={
                /* async() => {
                await ImagePicker.launchImageLibrary({ mediaType: 'mixed' }, (response: any) => {
                  console.log(response)
                  if (response.uri) {
                    setFieldValue('photo', response)
                  }
                  setFieldTouched('photo', true)
                })
              }} */
                async () => {
                  let response = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                    quality: 1,
                  });
                  if (!response.canceled) {
                    setFieldValue("photo", response);
                  }
                  setFieldTouched("photo", true);
                }
              }
            >
              <Text>Add Image</Text>
            </TouchableOpacity>

            {values.photo && (
              <Text>{`...${values.photo.fileName.substr(
                values.photo.fileName.length - 10
              )}`}</Text>
            )}

            {errors.photo && touched.photo && (
              <Text style={{ width: 20, height: 20 }}>
                {values.photo.fileName}
              </Text>
            )}
            <Button
              onPress={handleSubmit}
              title="SIGN UP"
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  loginContainer: {
    width: "80%",
    alignItems: "center",

    padding: 10,
    elevation: 10,
    backgroundColor: "#e6e6e6",
  },
  textInput: {
    height: 40,
    width: "100%",
    margin: 10,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 10,
    color: "red",
  },
});
